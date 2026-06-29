# 厨神 App 前端

基于 uni-app Vue3 + Vite + TypeScript 的前端工程。

## 当前定位

前端目录用于承载厨神 App 的多端页面，当前已搭好首页与底部 Tab 的基础骨架，后续可继续扩展菜谱、发布、发现、个人中心、签到、挑战、AI 推荐等模块。

## 环境

- Node.js 22
- npm 10+

```bash
nvm use
npm install
```

## 常用命令

```bash
npm run dev:h5
npm run build:h5
npm run dev:mp-weixin
npm run build:mp-weixin
npm run type-check
```

## 已配置页面

- `pages/index/index`：首页
- `pages/recipes/index`：菜谱
- `pages/publish/index`：发布
- `pages/discover/index`：发现
- `pages/profile/index`：我的

## 目录

```text
src/
├── App.vue
├── main.ts
├── manifest.json
├── pages.json
├── pages/
│   ├── index/
│   ├── recipes/
│   ├── publish/
│   ├── discover/
│   └── profile/
└── uni.scss
```
