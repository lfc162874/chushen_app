# 厨神 App

厨神 App 是一个面向日常做饭场景的菜谱与灵感推荐应用。当前仓库先放置前端工程，首版使用 uni-app Vue3 搭建，目标是覆盖 H5、微信小程序以及后续 App 端。

## 项目结构

```text
.
├── chushen-app-backend/
│   ├── docs/
│   │   └── TECH_ARCHITECTURE.md
│   └── README.md
└── chushen-app-fronted/
    ├── src/
    │   ├── pages/
    │   │   ├── index/
    │   │   ├── recipes/
    │   │   ├── publish/
    │   │   ├── discover/
    │   │   └── profile/
    │   ├── App.vue
    │   ├── main.ts
    │   ├── manifest.json
    │   └── pages.json
    ├── package.json
    └── README.md
```

## 前端技术栈

- uni-app
- Vue 3
- Vite
- TypeScript
- npm
- Node.js 22

## 后端规划

后端工程目录为 `chushen-app-backend/`，计划使用 TypeScript 开发，初始推荐技术栈为 Node.js 22、Fastify、Prisma、PostgreSQL、Redis、Zod 与 OpenAPI。

后端技术架构文档见：

```text
chushen-app-backend/docs/TECH_ARCHITECTURE.md
```

## 本地开发

进入前端目录：

```bash
cd chushen-app-fronted
nvm use
npm install
```

启动 H5：

```bash
npm run dev:h5
```

构建 H5：

```bash
npm run build:h5
```

启动微信小程序构建：

```bash
npm run dev:mp-weixin
```

构建微信小程序：

```bash
npm run build:mp-weixin
```

类型检查：

```bash
npm run type-check
```

## 当前页面

- 首页：首页灵感推荐、搜索、快捷入口、今日推荐、今日挑战初始骨架
- 菜谱：菜谱库页面骨架
- 发布：发布作品页面骨架
- 发现：社区发现页面骨架
- 我的：个人中心页面骨架

## 开发说明

`chushen-app-fronted/.nvmrc` 已固定 Node.js 22。进入前端目录后执行 `nvm use` 即可切换到推荐版本。
