# 厨神 App 后端

这里是厨神 App 的后端工程目录，后续后端代码、接口文档、数据库模型、部署脚本都会放在这个目录下。

当前阶段先完成技术架构设计，后续建议按架构文档逐步补齐 TypeScript 后端代码。

## 文档

- [后端技术架构文档](./docs/TECH_ARCHITECTURE.md)

## 推荐技术栈

- TypeScript
- Node.js 22
- Fastify
- Prisma
- PostgreSQL
- Redis
- Zod
- OpenAPI

## 初始目录规划

```text
chushen-app-backend/
├── docs/
│   └── TECH_ARCHITECTURE.md
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   ├── modules/
│   ├── plugins/
│   ├── shared/
│   └── jobs/
├── prisma/
│   └── schema.prisma
├── tests/
├── package.json
├── tsconfig.json
└── .env.example
```

