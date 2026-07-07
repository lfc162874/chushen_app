# 厨神 App 后端技术架构文档

## 1. 背景与目标

厨神 App 当前前端已完成初版页面骨架，覆盖首页、菜谱、发布、发现、个人中心等核心入口。后端第一阶段需要为这些页面提供稳定的数据能力，并为后续 AI 推荐、社区互动、用户成长体系、图片上传、小程序登录等功能预留扩展空间。

后端整体目标：

- 使用 TypeScript 建设统一后端工程，保证类型安全和可维护性。
- 先采用模块化单体架构，降低初期开发和部署复杂度。
- 对前端提供清晰、稳定、版本化的 REST API。
- 以菜谱、食材、推荐、社区、用户成长为核心业务域建模。
- 预留 AI 推荐、图片识别、消息通知、运营后台等扩展能力。

## 2. 技术选型

### 2.1 运行时与语言

- Node.js 22：与前端推荐 Node 版本保持一致，便于本地环境统一。
- TypeScript：后端全量使用 TypeScript，开启严格类型检查。
- tsx：开发环境直接运行 TypeScript，减少调试成本。
- tsup：生产构建为 JavaScript，输出到 `dist/`。

### 2.2 Web 框架

推荐使用 Fastify。

选择原因：

- 性能好，插件机制成熟。
- TypeScript 支持友好，适合中小型团队快速开发。
- 比 NestJS 更轻，项目初期心智负担低。
- 可以按业务模块组织代码，后续复杂后也能平滑演进。

### 2.3 数据层

- PostgreSQL：主数据库，存储用户、菜谱、互动、任务、成就等结构化数据。
- Prisma：ORM 与数据库迁移工具，模型清晰，开发效率高。
- Redis：缓存、验证码、登录态黑名单、推荐结果缓存、限流计数。

### 2.4 参数校验与接口文档

- Zod：请求参数、响应数据、环境变量校验。
- OpenAPI：由路由 schema 生成接口文档，便于前后端协作。
- Scalar 或 Swagger UI：本地查看接口文档。

### 2.5 文件存储

第一阶段不建议把图片直接存数据库。

推荐方案：

- 开发环境：本地磁盘或 MinIO。
- 生产环境：对象存储，例如阿里云 OSS、腾讯云 COS、七牛云、S3 兼容服务。
- 后端只保存文件元信息和访问地址。

### 2.6 鉴权

- H5：手机号验证码登录、账号密码登录可作为后续补充。
- 微信小程序：使用 `code2Session` 换取 `openid` / `unionid`，再签发自有 JWT。
- App 端：可复用手机号、微信、Apple 登录等能力。

统一登录成功后返回：

- `accessToken`：短期有效，用于接口访问。
- `refreshToken`：长期有效，用于刷新登录态。

## 3. 架构风格

后端采用模块化单体架构。

```text
Client
  |
  | REST API / JSON
  v
Fastify Server
  |
  |-- Auth Guard / Rate Limit / Logger / Error Handler
  |
  |-- Business Modules
  |     |-- auth
  |     |-- users
  |     |-- recipes
  |     |-- ingredients
  |     |-- recommendations
  |     |-- community
  |     |-- media
  |     |-- gamification
  |     |-- notifications
  |
  |-- Prisma
  |     |-- PostgreSQL
  |
  |-- Redis
  |
  |-- Object Storage
```

模块化单体的边界规则：

- 每个业务模块拥有自己的 route、schema、service、repository。
- 模块之间通过 service 调用，不直接访问对方 repository。
- 共享能力放在 `shared/`，例如错误类型、分页工具、时间工具、响应格式。
- 业务代码不直接读环境变量，通过 `config/` 统一读取。
- 控制器只处理 HTTP 输入输出，核心业务逻辑放到 service。

## 4. 推荐目录结构

```text
chushen-app-backend/
├── docs/
│   └── TECH_ARCHITECTURE.md
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── env.ts
│   │   └── index.ts
│   ├── plugins/
│   │   ├── prisma.ts
│   │   ├── redis.ts
│   │   ├── auth.ts
│   │   ├── cors.ts
│   │   ├── rate-limit.ts
│   │   ├── swagger.ts
│   │   └── error-handler.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.schemas.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.repository.ts
│   │   ├── users/
│   │   ├── recipes/
│   │   ├── ingredients/
│   │   ├── recommendations/
│   │   ├── community/
│   │   ├── media/
│   │   ├── gamification/
│   │   └── notifications/
│   ├── shared/
│   │   ├── constants/
│   │   ├── errors/
│   │   ├── schemas/
│   │   ├── utils/
│   │   └── types/
│   └── jobs/
│       ├── index.ts
│       └── recommendation-refresh.job.ts
├── tests/
│   ├── integration/
│   └── unit/
├── .env.example
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## 5. 核心业务模块

### 5.1 Auth 鉴权模块

职责：

- 微信小程序登录。
- 手机号验证码登录。
- 刷新 token。
- 退出登录。
- 登录设备管理。

首期接口：

```text
POST /api/v1/auth/wechat-login
POST /api/v1/auth/sms-code
POST /api/v1/auth/sms-login
POST /api/v1/auth/refresh-token
POST /api/v1/auth/logout
GET  /api/v1/auth/session
```

### 5.2 Users 用户模块

职责：

- 用户资料。
- 厨神等级。
- 用户偏好。
- 收藏、关注、浏览历史。

首期接口：

```text
GET   /api/v1/users/me
PATCH /api/v1/users/me
GET   /api/v1/users/me/preferences
PUT   /api/v1/users/me/preferences
GET   /api/v1/users/:userId/profile
```

### 5.3 Recipes 菜谱模块

职责：

- 菜谱列表、详情、搜索、筛选。
- 用户发布菜谱。
- 收藏、点赞、评分。
- 步骤、食材、营养信息。

首期接口：

```text
GET    /api/v1/recipes
GET    /api/v1/recipes/:recipeId
POST   /api/v1/recipes
PATCH  /api/v1/recipes/:recipeId
DELETE /api/v1/recipes/:recipeId
POST   /api/v1/recipes/:recipeId/favorite
DELETE /api/v1/recipes/:recipeId/favorite
POST   /api/v1/recipes/:recipeId/like
DELETE /api/v1/recipes/:recipeId/like
POST   /api/v1/recipes/:recipeId/rating
```

列表筛选建议支持：

- `keyword`：关键词。
- `category`：菜谱分类，例如家常菜、快手菜、汤羹。
- `ingredients`：食材列表。
- `difficulty`：难度。
- `maxCookMinutes`：最长烹饪时间。
- `sort`：综合、最新、热门、高分、收藏多。
- `page` / `pageSize`：分页。

### 5.4 Ingredients 食材模块

职责：

- 食材字典。
- 用户冰箱食材。
- 食材识别结果入库。
- 根据食材反查菜谱。

首期接口：

```text
GET    /api/v1/ingredients
GET    /api/v1/users/me/fridge-items
POST   /api/v1/users/me/fridge-items
PATCH  /api/v1/users/me/fridge-items/:itemId
DELETE /api/v1/users/me/fridge-items/:itemId
```

### 5.5 Recommendations 推荐模块

职责：

- 首页今日推荐。
- 晚餐情绪推荐。
- 根据冰箱食材推荐。
- 随机推荐。
- 灵感转盘。

首期接口：

```text
GET  /api/v1/recommendations/home
GET  /api/v1/recommendations/by-ingredients
GET  /api/v1/recommendations/by-mood
POST /api/v1/recommendations/random
POST /api/v1/recommendations/roulette
```

推荐策略分三阶段：

- 第一阶段：规则推荐，按分类、热度、时间、用户偏好组合。
- 第二阶段：加入用户行为权重，收藏、点赞、浏览、搜索参与排序。
- 第三阶段：接入 AI，根据食材、口味、健康目标、上下文生成推荐理由。

### 5.6 Community 社区模块

职责：

- 发现页内容流。
- 用户发布作品。
- 点赞、评论、收藏、关注。
- 举报与内容审核状态。

首期接口：

```text
GET    /api/v1/posts
GET    /api/v1/posts/:postId
POST   /api/v1/posts
PATCH  /api/v1/posts/:postId
DELETE /api/v1/posts/:postId
POST   /api/v1/posts/:postId/like
DELETE /api/v1/posts/:postId/like
GET    /api/v1/posts/:postId/comments
POST   /api/v1/posts/:postId/comments
DELETE /api/v1/comments/:commentId
```

### 5.7 Media 媒体模块

职责：

- 图片上传。
- 头像上传。
- 菜谱封面上传。
- 发布作品图片上传。
- 生成对象存储签名 URL。

首期接口：

```text
POST /api/v1/media/upload-token
POST /api/v1/media/complete
GET  /api/v1/media/:mediaId
```

推荐上传流程：

1. 前端请求上传凭证。
2. 后端校验用户权限和文件类型。
3. 后端返回对象存储直传地址。
4. 前端直传图片到对象存储。
5. 前端通知后端上传完成。
6. 后端保存媒体元信息。

### 5.8 Gamification 成长体系模块

职责：

- 厨神等级。
- 经验值。
- 每日签到。
- 连续烹饪打卡。
- 周任务。
- 成就和称号。

首期接口：

```text
GET  /api/v1/gamification/overview
POST /api/v1/gamification/check-in
GET  /api/v1/gamification/tasks
POST /api/v1/gamification/tasks/:taskId/claim
GET  /api/v1/gamification/achievements
GET  /api/v1/gamification/titles
PUT  /api/v1/gamification/titles/current
```

### 5.9 Notifications 消息模块

职责：

- 系统消息。
- 点赞、评论、关注提醒。
- 任务完成提醒。
- 未读数量。

首期接口：

```text
GET   /api/v1/notifications
GET   /api/v1/notifications/unread-count
PATCH /api/v1/notifications/:notificationId/read
PATCH /api/v1/notifications/read-all
```

## 6. 数据模型草案

### 6.1 用户与身份

```text
User
- id
- nickname
- avatarUrl
- bio
- phone
- status
- level
- experience
- currentTitleId
- createdAt
- updatedAt

UserIdentity
- id
- userId
- provider
- providerUserId
- unionId
- createdAt

UserPreference
- id
- userId
- tastes
- dislikedIngredients
- allergies
- healthGoals
- cookingLevel
- createdAt
- updatedAt
```

### 6.2 菜谱

```text
Recipe
- id
- authorId
- title
- description
- coverMediaId
- categoryId
- difficulty
- cookMinutes
- servings
- status
- viewCount
- likeCount
- favoriteCount
- ratingAvg
- ratingCount
- publishedAt
- createdAt
- updatedAt

RecipeIngredient
- id
- recipeId
- ingredientId
- name
- amount
- unit
- note
- sortOrder

RecipeStep
- id
- recipeId
- title
- content
- mediaId
- sortOrder

RecipeCategory
- id
- name
- slug
- sortOrder

RecipeTag
- id
- name
- slug

RecipeTagRelation
- recipeId
- tagId
```

### 6.3 食材与冰箱

```text
Ingredient
- id
- name
- alias
- category
- nutrition
- createdAt
- updatedAt

UserFridgeItem
- id
- userId
- ingredientId
- name
- amount
- unit
- expireDate
- source
- createdAt
- updatedAt
```

### 6.4 社区

```text
Post
- id
- authorId
- recipeId
- title
- content
- status
- likeCount
- commentCount
- favoriteCount
- publishedAt
- createdAt
- updatedAt

PostMedia
- id
- postId
- mediaId
- sortOrder

Comment
- id
- postId
- userId
- parentId
- content
- status
- createdAt
- updatedAt
```

### 6.5 互动

```text
Favorite
- id
- userId
- targetType
- targetId
- createdAt

Like
- id
- userId
- targetType
- targetId
- createdAt

Follow
- id
- followerId
- followingId
- createdAt

Rating
- id
- userId
- recipeId
- score
- createdAt
- updatedAt
```

### 6.6 成长体系

```text
CheckIn
- id
- userId
- date
- experience
- createdAt

Task
- id
- title
- description
- type
- targetValue
- rewardExperience
- period
- enabled
- createdAt
- updatedAt

UserTask
- id
- userId
- taskId
- progress
- status
- periodKey
- claimedAt
- createdAt
- updatedAt

Achievement
- id
- name
- description
- iconMediaId
- condition
- enabled

UserAchievement
- id
- userId
- achievementId
- unlockedAt

UserTitle
- id
- name
- description
- condition
- enabled
```

### 6.7 媒体与消息

```text
Media
- id
- ownerId
- bucket
- objectKey
- url
- mimeType
- size
- width
- height
- status
- createdAt

Notification
- id
- userId
- type
- title
- content
- payload
- readAt
- createdAt
```

## 7. API 规范

### 7.1 路径版本

统一使用 `/api/v1` 前缀。

示例：

```text
GET /api/v1/recipes
GET /api/v1/recommendations/home
```

### 7.2 响应格式

成功响应：

```json
{
  "success": true,
  "data": {},
  "requestId": "req_xxx"
}
```

分页响应：

```json
{
  "success": true,
  "data": {
    "items": [],
    "page": 1,
    "pageSize": 20,
    "total": 100,
    "hasMore": true
  },
  "requestId": "req_xxx"
}
```

失败响应：

```json
{
  "success": false,
  "error": {
    "code": "RECIPE_NOT_FOUND",
    "message": "菜谱不存在",
    "details": {}
  },
  "requestId": "req_xxx"
}
```

### 7.3 常见错误码

```text
BAD_REQUEST
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
VALIDATION_ERROR
INTERNAL_SERVER_ERROR
```

业务错误码建议按模块前缀命名：

```text
AUTH_INVALID_TOKEN
AUTH_WECHAT_LOGIN_FAILED
USER_NOT_FOUND
RECIPE_NOT_FOUND
RECIPE_NOT_PUBLISHED
POST_NOT_FOUND
MEDIA_UPLOAD_FAILED
TASK_ALREADY_CLAIMED
```

### 7.4 分页规范

列表接口默认使用页码分页：

```text
page=1
pageSize=20
```

内容流可使用游标分页：

```text
cursor=xxx
limit=20
```

## 8. 权限设计

### 8.1 用户角色

```text
guest      未登录用户
user       普通登录用户
creator    可发布菜谱和作品的创作者
moderator  内容审核人员
admin      管理员
```

### 8.2 接口权限规则

- 公开接口：菜谱列表、菜谱详情、推荐列表。
- 登录接口：收藏、点赞、评论、发布、个人资料、成长体系。
- 作者权限：编辑和删除自己的菜谱、作品。
- 管理权限：审核、下架、推荐位配置、用户封禁。

### 8.3 内容状态

菜谱与社区内容统一使用状态流转：

```text
draft -> pending_review -> published -> rejected -> archived
```

## 9. 推荐系统设计

### 9.1 第一阶段：规则推荐

推荐输入：

- 用户偏好。
- 浏览历史。
- 收藏和点赞。
- 当前时间段。
- 食材列表。
- 菜谱热度。

推荐公式草案：

```text
score =
  categoryMatchScore * 0.25 +
  ingredientMatchScore * 0.25 +
  popularityScore * 0.20 +
  freshnessScore * 0.15 +
  userPreferenceScore * 0.15
```

### 9.2 第二阶段：行为加权

记录用户行为：

```text
view_recipe
search_recipe
favorite_recipe
like_recipe
rate_recipe
complete_task
publish_recipe
```

行为数据可进入 `UserEvent` 表，后续用于推荐排序和运营分析。

### 9.3 第三阶段：AI 推荐

AI 推荐只负责生成推荐理由、组合建议和个性化解释，核心菜谱召回仍先由数据库规则完成。

原因：

- 结果更可控。
- 成本更稳定。
- 更容易解释和缓存。
- 避免 AI 直接生成不存在的菜谱 ID。

## 10. 缓存策略

推荐 Redis 缓存：

```text
home_recommendations:{userId}
recipe_detail:{recipeId}
recipe_list:{queryHash}
user_profile:{userId}
notification_unread_count:{userId}
```

缓存原则：

- 首页推荐缓存 5 到 15 分钟。
- 菜谱详情缓存 10 到 30 分钟。
- 用户私有数据缓存时间要短，并在更新后主动失效。
- 写操作成功后清理相关缓存。

## 11. 安全设计

### 11.1 请求安全

- 所有写接口需要登录。
- 登录、验证码、上传凭证接口必须限流。
- 文件上传限制 MIME 类型和大小。
- 用户输入统一通过 Zod 校验。
- SQL 访问统一走 Prisma，避免手写拼接 SQL。

### 11.2 Token 安全

- Access Token 短有效期，建议 2 小时。
- Refresh Token 长有效期，建议 30 天。
- Refresh Token 入库保存哈希值。
- 用户退出登录后让 Refresh Token 失效。

### 11.3 内容安全

- 菜谱、评论、作品发布后进入审核或机审队列。
- 图片上传后记录审核状态。
- 举报内容进入运营后台处理。

## 12. 日志与监控

### 12.1 日志

推荐使用 `pino`。

日志字段：

```text
requestId
userId
method
path
statusCode
durationMs
ip
userAgent
errorCode
```

### 12.2 健康检查

```text
GET /healthz
GET /readyz
```

- `/healthz`：服务进程是否存活。
- `/readyz`：数据库、Redis、对象存储是否可用。

### 12.3 指标

首期至少关注：

- 接口 QPS。
- P95 / P99 延迟。
- 错误率。
- 数据库连接数。
- Redis 命中率。
- 上传失败率。

## 13. 环境变量

`.env.example` 建议包含：

```text
NODE_ENV=development
PORT=4000
APP_ORIGIN=http://localhost:5173

DATABASE_URL=postgresql://user:password@localhost:5432/chushen
REDIS_URL=redis://localhost:6379

JWT_ACCESS_SECRET=replace-me
JWT_REFRESH_SECRET=replace-me
JWT_ACCESS_EXPIRES_IN=2h
JWT_REFRESH_EXPIRES_IN=30d

WECHAT_APP_ID=
WECHAT_APP_SECRET=

STORAGE_PROVIDER=local
STORAGE_BUCKET=
STORAGE_REGION=
STORAGE_ACCESS_KEY_ID=
STORAGE_SECRET_ACCESS_KEY=
STORAGE_PUBLIC_BASE_URL=
```

## 14. 本地开发流程

建议命令：

```bash
cd chushen-app-backend
npm install
npm run dev
```

数据库开发：

```bash
npm run db:migrate
npm run db:seed
npm run db:studio
```

质量检查：

```bash
npm run lint
npm run type-check
npm run test
```

## 15. package.json 脚本建议

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsup src/server.ts --format esm --dts --clean",
    "start": "node dist/server.js",
    "type-check": "tsc --noEmit",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:deploy": "prisma migrate deploy",
    "db:seed": "tsx prisma/seed.ts",
    "db:studio": "prisma studio"
  }
}
```

## 16. 前后端联调约定

### 16.1 Base URL

开发环境：

```text
http://localhost:4000/api/v1
```

前端建议配置：

```text
VITE_API_BASE_URL=http://localhost:4000/api/v1
```

### 16.2 跨端注意事项

uni-app 会构建到 H5、微信小程序和 App，不同端请求能力有差异：

- H5 需要配置 CORS。
- 微信小程序需要配置合法请求域名。
- App 端要处理网络权限和证书问题。
- 上传接口最好使用对象存储直传，减少后端带宽压力。

### 16.3 Mock 过渡

前端当前仍以静态数据为主，后端开发阶段建议：

1. 先提供首页、菜谱、发现、个人中心所需的只读接口。
2. 前端从静态数组切换到 API。
3. 再补齐登录、发布、互动等写接口。
4. 最后接入推荐和成长体系的动态数据。

## 17. 测试策略

### 17.1 单元测试

覆盖：

- service 业务逻辑。
- 推荐排序算法。
- 经验值计算。
- 参数转换工具。

### 17.2 集成测试

覆盖：

- 登录流程。
- 菜谱 CRUD。
- 收藏、点赞、评分。
- 图片上传凭证。
- 成长任务领取。

### 17.3 契约测试

接口 schema 变更时，需要确保前端依赖字段不被破坏。

建议规则：

- 删除字段必须进入 breaking change 评审。
- 新增字段保持向后兼容。
- 响应枚举值变更需要同步前端。

## 18. 部署架构

第一阶段推荐单服务部署：

```text
Nginx / Gateway
  |
  v
Node.js Backend
  |
  |-- PostgreSQL
  |-- Redis
  |-- Object Storage
```

生产建议：

- 使用 Docker 镜像部署。
- 数据库迁移随发布执行 `prisma migrate deploy`。
- 日志输出到 stdout，由平台采集。
- 环境变量由部署平台管理，不提交真实密钥。

## 19. 分阶段实施计划

### 阶段 0：工程初始化

- 初始化 `package.json`。
- 配置 TypeScript、ESLint、Vitest、tsup。
- 接入 Fastify 基础服务。
- 接入环境变量校验。
- 提供 `/healthz`。

### 阶段 1：基础数据接口

- 建立 Prisma schema。
- 建立菜谱、分类、食材模型。
- 提供菜谱列表和详情接口。
- 提供首页推荐静态/规则接口。
- 编写 seed 数据，支持前端联调。

### 阶段 2：用户与鉴权

- 实现微信小程序登录。
- 实现用户资料接口。
- 接入 JWT。
- 实现用户偏好。

### 阶段 3：互动与社区

- 实现收藏、点赞、评分。
- 实现发布作品。
- 实现评论。
- 实现媒体上传。

### 阶段 4：成长体系

- 实现签到。
- 实现经验值。
- 实现任务。
- 实现成就和称号。

### 阶段 5：推荐增强与 AI 能力

- 加入用户行为事件。
- 优化推荐排序。
- 接入食材识别。
- 接入 AI 推荐理由生成。

## 20. 首期最小可用接口清单

为了最快让当前前端从静态页面切到真实接口，建议首期优先实现：

```text
GET /healthz
GET /api/v1/recommendations/home
GET /api/v1/recipes
GET /api/v1/recipes/:recipeId
GET /api/v1/recommendations/by-ingredients
GET /api/v1/gamification/overview
```

首期可以暂不强制登录，用 seed 数据返回稳定结构，等前端完成联调后再逐步接入鉴权和真实用户数据。

