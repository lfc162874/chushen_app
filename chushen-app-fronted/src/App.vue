<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
page {
  min-height: 100%;
  background: #fff7ea;
  color: #332217;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

view,
text,
button,
scroll-view,
image {
  box-sizing: border-box;
}

button {
  padding: 0;
  margin: 0;
  background: transparent;
}

/* App 端布局兜底：避免页面固定宽度、复杂装饰和三列布局在 App WebView 中撑出视口 */
.home-page .page-shell,
.recipes-page .page-shell,
.discover-page .page-shell {
  width: 100% !important;
  max-width: 750rpx !important;
  overflow: hidden !important;
}

.home-page,
.recipes-page,
.discover-page {
  overflow-x: hidden !important;
}

/* 首页：缺失图片资源时使用 CSS 背景兜底，避免 App 中出现空白块 */
.home-page .hero-photo {
  background-image:
    linear-gradient(90deg, rgba(255, 248, 233, 0.62) 0%, rgba(255, 248, 233, 0.14) 26%, rgba(255, 248, 233, 0) 52%),
    radial-gradient(circle at 58% 45%, #f7c86e 0 46rpx, transparent 48rpx),
    radial-gradient(circle at 70% 62%, #7eaa54 0 50rpx, transparent 52rpx),
    radial-gradient(circle at 42% 70%, #e84e2a 0 35rpx, transparent 36rpx),
    linear-gradient(135deg, #f8e3b9 0%, #e7f1cf 54%, #fff0bd 100%) !important;
}

.home-page .polaroid-photo {
  background-image:
    radial-gradient(circle at 54% 44%, #ffbd65 0 20%, #f2872a 21% 33%, #325b2b 34% 50%, #ece4ce 51% 100%) !important;
}

/* 首页：快捷入口和推荐卡片在 App 端保持两列/横向稳定 */
.home-page .quick-row {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-between !important;
  gap: 22rpx 0 !important;
}

.home-page .quick-card {
  flex: 0 0 332rpx !important;
  width: 332rpx !important;
}

.home-page .recipe-row {
  display: flex !important;
  gap: 18rpx !important;
  overflow: visible !important;
}

.home-page .recipe-card {
  min-width: 0 !important;
}

.home-page .bottom-cards {
  gap: 18rpx !important;
}

/* 菜谱页：分类横向滚动不要被 space-between 拉坏 */
.recipes-page .category-row {
  justify-content: flex-start !important;
  gap: 12rpx !important;
  min-width: 692rpx !important;
}

.recipes-page .category-card {
  flex: 0 0 76rpx !important;
}

/* 菜谱页：筛选区在 App 端允许换行，避免“综合排序”挤出屏幕 */
.recipes-page .filter-row {
  height: auto !important;
  align-items: flex-start !important;
  gap: 12rpx !important;
}

.recipes-page .tabs {
  flex: 1 !important;
  flex-wrap: wrap !important;
  gap: 10rpx !important;
  min-width: 0 !important;
}

.recipes-page .filter-tab {
  margin-right: 0 !important;
}

.recipes-page .sort-button {
  flex: 0 0 auto !important;
}

/* 菜谱页：三列在 App 里过挤，改为稳定两列 */
.recipes-page .recipe-grid {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 18rpx !important;
}

.recipes-page .recipe-card {
  flex: 0 0 334rpx !important;
  width: 334rpx !important;
  min-height: 286rpx !important;
}

.recipes-page .recipe-image {
  flex-basis: 158rpx !important;
  height: 158rpx !important;
}

.recipes-page .recipe-body {
  min-height: 128rpx !important;
}

.recipes-page .recipe-desc {
  display: -webkit-box !important;
  overflow: hidden !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
}
</style>
