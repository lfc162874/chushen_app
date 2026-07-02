<template>
  <view class="recipes-page">
    <view class="page-shell">
      <view class="topbar">
        <view class="brand-block">
          <view class="brand-row">
            <view class="brand-logo">
              <text class="brand-flower">✿</text>
              <text class="brand-text">厨神</text>
            </view>
            <text class="brand-dot">·</text>
            <text class="brand-section">菜谱</text>
          </view>
          <view class="slogan-row">
            <text class="slogan">让每一餐都充满爱与温度</text>
            <text class="heart">❤</text>
          </view>
        </view>

        <view class="header-actions">
          <button class="header-action" hover-class="button-press">
            <view class="search-top-icon"></view>
            <text>搜索</text>
          </button>
          <button class="header-action" hover-class="button-press">
            <view class="filter-top-icon">
              <view class="filter-line one"></view>
              <view class="filter-line two"></view>
            </view>
            <text>筛选</text>
          </button>
        </view>
      </view>

      <view class="search-box">
        <view class="search-icon"></view>
        <text class="search-placeholder">搜索菜名、食材、口味</text>
        <view class="scan-icon">
          <view class="corner corner-tl"></view>
          <view class="corner corner-tr"></view>
          <view class="corner corner-bl"></view>
          <view class="corner corner-br"></view>
        </view>
      </view>

      <scroll-view scroll-x class="category-scroll" :show-scrollbar="false">
        <view class="category-row">
          <view v-for="category in categories" :key="category.name" class="category-card" :class="{ active: category.active }">
            <view class="category-visual" :class="category.className">
              <text>{{ category.icon }}</text>
            </view>
            <text class="category-name">{{ category.name }}</text>
          </view>
        </view>
      </scroll-view>

      <view class="weekly-banner">
        <view class="tape tape-left"></view>
        <view class="tape tape-right"></view>
        <view class="banner-copy">
          <text class="banner-title">本周热门菜谱</text>
          <text class="banner-spark">✧</text>
          <text class="banner-subtitle">跟着做，轻松上桌不踩雷！</text>
          <button class="banner-button" hover-class="button-press">
            <text>去看看</text>
            <text class="banner-arrow">›</text>
          </button>
        </view>
        <view class="banner-photo">
          <view class="photo-inner"></view>
        </view>
        <view class="lemon-slice"></view>
        <view class="banner-leaf leaf-left"></view>
        <view class="banner-leaf leaf-right"></view>
        <view class="banner-dots">
          <view class="banner-dot active"></view>
          <view class="banner-dot"></view>
          <view class="banner-dot"></view>
          <view class="banner-dot"></view>
        </view>
      </view>

      <view class="feature-row">
        <view class="feature-card recommend-card">
          <view class="feature-copy">
            <view class="feature-title-row">
              <text class="feature-title">厨神推荐</text>
              <text class="flag">⚑</text>
            </view>
            <text class="feature-desc">营养美味，家人都爱吃</text>
            <text class="feature-name">番茄炖牛腩</text>
            <text class="feature-pill">本周Top1</text>
            <text class="feature-sub">软烂入味，汤汁浓郁</text>
            <view class="feature-score">
              <text class="star">★</text>
              <text>4.9</text>
            </view>
          </view>
          <view class="feature-image tomato-beef"></view>
        </view>

        <view class="feature-card learn-card">
          <view class="feature-copy">
            <view class="feature-title-row">
              <text class="feature-title">今日学做</text>
              <text class="calendar-mark">▣</text>
            </view>
            <text class="feature-desc">每天一道新菜，养成好习惯</text>
            <text class="feature-name">香煎三文鱼</text>
            <text class="feature-sub">补充优质蛋白</text>
            <view class="time-row">
              <view class="clock"></view>
              <text>20分钟</text>
            </view>
          </view>
          <view class="feature-image salmon"></view>
        </view>
      </view>

      <view class="filter-row">
        <view class="tabs">
          <view v-for="tab in filterTabs" :key="tab" class="filter-tab" :class="{ active: tab === '全部' }">
            <text>{{ tab }}</text>
          </view>
        </view>
        <view class="sort-button">
          <text>综合排序</text>
          <text class="down">⌄</text>
        </view>
      </view>

      <view class="recipe-grid">
        <view v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
          <view class="recipe-image" :class="recipe.className">
            <view class="crown" v-if="recipe.crown">♛</view>
            <view class="bookmark"></view>
          </view>
          <view class="recipe-body">
            <text class="recipe-name">{{ recipe.name }}</text>
            <text class="recipe-desc">{{ recipe.desc }}</text>
            <view class="recipe-meta">
              <view class="duration">
                <view class="small-clock"></view>
                <text>{{ recipe.time }}</text>
              </view>
              <view class="rating">
                <text class="star">★</text>
                <text>{{ recipe.score }}分</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <AppTabBar active="recipes" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";

const categories = [
  { name: "家常菜", icon: "锅", className: "cat-pot", active: true },
  { name: "快手菜", icon: "钟", className: "cat-clock" },
  { name: "下饭菜", icon: "碗", className: "cat-rice" },
  { name: "汤羹", icon: "汤", className: "cat-soup" },
  { name: "低脂", icon: "菜", className: "cat-leaf" },
  { name: "一人食", icon: "食", className: "cat-bowl" },
  { name: "宴客", icon: "盖", className: "cat-cover" },
  { name: "宝宝辅食", icon: "宝", className: "cat-baby" },
];

const filterTabs = ["全部", "最新", "热门", "高分", "收藏多"];

const recipes = [
  {
    name: "红烧肉",
    desc: "肥而不腻，入口即化",
    time: "60分钟",
    score: "4.9",
    className: "red-pork",
    crown: true,
  },
  {
    name: "蒜蓉虾仁西兰花",
    desc: "清爽低脂，蒜香鲜美",
    time: "15分钟",
    score: "4.8",
    className: "shrimp-broccoli",
  },
  {
    name: "番茄牛腩汤",
    desc: "汤鲜味美，暖心暖胃",
    time: "90分钟",
    score: "4.8",
    className: "tomato-soup",
  },
  {
    name: "糖醋排骨",
    desc: "酸甜开胃，孩子最爱",
    time: "45分钟",
    score: "4.7",
    className: "sweet-ribs",
  },
  {
    name: "菌菇豆腐汤",
    desc: "鲜美清淡，营养健康",
    time: "25分钟",
    score: "4.7",
    className: "mushroom-tofu",
  },
  {
    name: "小炒黄牛肉",
    desc: "香辣下饭，越吃越香",
    time: "20分钟",
    score: "4.6",
    className: "beef-stir",
  },
];

</script>

<style scoped>
.recipes-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 86% 3%, rgba(255, 236, 201, 0.86) 0, rgba(255, 236, 201, 0) 280rpx),
    linear-gradient(180deg, #fff8ee 0%, #fff8ee 58%, #fffaf4 100%);
  color: #342114;
  box-sizing: border-box;
}

.page-shell {
  position: relative;
  width: 750rpx;
  min-height: 100vh;
  padding: 24rpx 32rpx 150rpx;
  margin: 0 auto;
  box-sizing: border-box;
}

.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 118rpx;
}

.brand-row {
  display: flex;
  align-items: center;
}

.brand-logo {
  position: relative;
  width: 165rpx;
  height: 75rpx;
}

.brand-flower {
  position: absolute;
  top: -4rpx;
  left: 0;
  color: #ff6b19;
  font-size: 34rpx;
  font-weight: 700;
  line-height: 1;
}

.brand-text {
  position: absolute;
  left: 19rpx;
  top: 2rpx;
  color: #f56716;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 66rpx;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0;
}

.brand-dot {
  display: block;
  margin: -2rpx 13rpx 0 -4rpx;
  color: #ff6b19;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 47rpx;
  font-weight: 900;
  line-height: 58rpx;
}

.brand-section {
  display: block;
  margin-top: 7rpx;
  color: #332115;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 47rpx;
  font-weight: 900;
  line-height: 58rpx;
}

.slogan-row {
  display: flex;
  align-items: center;
  margin-top: 3rpx;
  padding-left: 39rpx;
}

.slogan {
  display: block;
  color: #332115;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 24rpx;
  font-weight: 700;
  line-height: 32rpx;
}

.heart {
  display: block;
  margin-left: 8rpx;
  color: #ff6b19;
  font-size: 26rpx;
  line-height: 28rpx;
}

.header-actions {
  display: flex;
  padding-top: 4rpx;
}

.header-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70rpx;
  height: 92rpx;
  padding: 7rpx 0 0;
  margin: 0 0 0 24rpx;
  border-radius: 25rpx;
  background: rgba(255, 253, 247, 0.78);
  color: #3a2115;
  font-size: 20rpx;
  font-weight: 700;
  line-height: 26rpx;
  box-shadow: 0 8rpx 24rpx rgba(112, 68, 25, 0.08);
  box-sizing: border-box;
}

.header-action::after,
.banner-button::after {
  border: 0;
}

.button-press {
  transform: scale(0.97);
  opacity: 0.92;
}

.search-top-icon,
.search-icon {
  position: relative;
  border: 4rpx solid #3f2418;
  border-radius: 50%;
  box-sizing: border-box;
}

.search-top-icon {
  width: 32rpx;
  height: 32rpx;
  margin-bottom: 9rpx;
}

.search-top-icon::after,
.search-icon::after {
  content: "";
  position: absolute;
  right: -12rpx;
  bottom: -8rpx;
  width: 16rpx;
  height: 4rpx;
  border-radius: 4rpx;
  background: currentColor;
  transform: rotate(45deg);
}

.filter-top-icon {
  position: relative;
  width: 34rpx;
  height: 34rpx;
  margin-bottom: 8rpx;
}

.filter-top-icon::before {
  content: "";
  position: absolute;
  left: 1rpx;
  top: 2rpx;
  width: 31rpx;
  height: 22rpx;
  border: 4rpx solid #3f2418;
  border-bottom: 0;
  clip-path: polygon(0 0, 100% 0, 62% 100%, 38% 100%);
  box-sizing: border-box;
}

.filter-top-icon::after {
  content: "";
  position: absolute;
  left: 17rpx;
  top: 22rpx;
  width: 4rpx;
  height: 12rpx;
  border-radius: 4rpx;
  background: #3f2418;
}

.filter-line {
  position: absolute;
  right: -4rpx;
  height: 4rpx;
  border-radius: 4rpx;
  background: #3f2418;
}

.filter-line.one {
  top: 21rpx;
  width: 11rpx;
}

.filter-line.two {
  top: 30rpx;
  width: 17rpx;
}

.search-box {
  display: flex;
  align-items: center;
  height: 67rpx;
  margin-top: 18rpx;
  padding: 0 22rpx 0 27rpx;
  border: 1rpx solid #ebdfd0;
  border-radius: 23rpx;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 9rpx 24rpx rgba(97, 61, 29, 0.08);
  box-sizing: border-box;
}

.search-icon {
  flex: 0 0 36rpx;
  width: 36rpx;
  height: 36rpx;
  margin-right: 22rpx;
  color: #928d86;
  border-color: #928d86;
}

.search-placeholder {
  flex: 1;
  color: #a29b92;
  font-size: 25rpx;
  font-weight: 500;
}

.scan-icon {
  position: relative;
  flex: 0 0 36rpx;
  width: 36rpx;
  height: 36rpx;
}

.corner {
  position: absolute;
  width: 13rpx;
  height: 13rpx;
  border-color: #ff6b19;
  border-style: solid;
}

.corner-tl {
  left: 0;
  top: 0;
  border-width: 4rpx 0 0 4rpx;
  border-radius: 5rpx 0 0 0;
}

.corner-tr {
  right: 0;
  top: 0;
  border-width: 4rpx 4rpx 0 0;
  border-radius: 0 5rpx 0 0;
}

.corner-bl {
  left: 0;
  bottom: 0;
  border-width: 0 0 4rpx 4rpx;
  border-radius: 0 0 0 5rpx;
}

.corner-br {
  right: 0;
  bottom: 0;
  border-width: 0 4rpx 4rpx 0;
  border-radius: 0 0 5rpx 0;
}

.category-scroll {
  width: 100%;
  margin-top: 19rpx;
  white-space: nowrap;
}

.category-row {
  display: flex;
  justify-content: space-between;
  min-width: 686rpx;
}

.category-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76rpx;
  height: 104rpx;
  padding-top: 15rpx;
  border: 3rpx solid rgba(255, 255, 255, 0.92);
  border-radius: 21rpx;
  background: rgba(255, 253, 248, 0.82);
  box-shadow: 0 7rpx 18rpx rgba(99, 60, 24, 0.07);
  box-sizing: border-box;
}

.category-card.active {
  border-color: #fff;
  box-shadow: 0 8rpx 22rpx rgba(255, 107, 25, 0.12);
}

.category-card.active::after {
  content: "";
  position: absolute;
  bottom: -3rpx;
  left: 23rpx;
  width: 31rpx;
  height: 6rpx;
  border-radius: 999rpx;
  background: #ff6b19;
}

.category-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48rpx;
  height: 43rpx;
  margin-bottom: 15rpx;
  border-radius: 16rpx;
  font-size: 19rpx;
  font-weight: 900;
  line-height: 1;
}

.cat-pot,
.cat-soup {
  color: #fff;
  background: linear-gradient(180deg, #ff8c22, #ff6718);
}

.cat-clock,
.cat-leaf,
.cat-bowl,
.cat-baby {
  color: #fff;
  background: linear-gradient(180deg, #91ca55, #4f982f);
}

.cat-rice,
.cat-cover {
  color: #6f3b18;
  background: linear-gradient(180deg, #ffe1a3, #d99845);
}

.category-name {
  display: block;
  color: #332115;
  font-size: 20rpx;
  font-weight: 800;
  line-height: 26rpx;
  white-space: nowrap;
}

.weekly-banner {
  position: relative;
  height: 171rpx;
  margin-top: 24rpx;
  overflow: hidden;
  border-radius: 20rpx;
  background:
    radial-gradient(circle at 0 0, rgba(252, 177, 61, 0.19) 0 65rpx, transparent 66rpx),
    linear-gradient(135deg, #fff2d5 0%, #fff5df 100%);
  border: 1rpx solid #ffe2ab;
  box-shadow: 0 9rpx 22rpx rgba(96, 57, 22, 0.08);
  box-sizing: border-box;
}

.weekly-banner::before {
  content: "";
  position: absolute;
  inset: 11rpx;
  border: 1rpx dashed rgba(196, 139, 61, 0.24);
  border-radius: 14rpx;
}

.tape {
  position: absolute;
  z-index: 3;
  width: 55rpx;
  height: 27rpx;
  background: rgba(255, 216, 147, 0.58);
  transform: rotate(-35deg);
}

.tape-left {
  left: -9rpx;
  top: 22rpx;
}

.tape-right {
  right: 3rpx;
  top: 10rpx;
  transform: rotate(42deg);
}

.banner-copy {
  position: relative;
  z-index: 2;
  padding: 31rpx 0 0 58rpx;
}

.banner-title {
  display: inline-block;
  color: #4a2918;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 41rpx;
  font-weight: 900;
  line-height: 50rpx;
}

.banner-spark {
  display: inline-block;
  margin-left: 12rpx;
  color: #ffb41c;
  font-size: 36rpx;
  font-weight: 900;
  line-height: 38rpx;
}

.banner-subtitle {
  display: block;
  margin-top: 7rpx;
  color: #593922;
  font-size: 22rpx;
  font-weight: 700;
  line-height: 29rpx;
}

.banner-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115rpx;
  height: 45rpx;
  padding: 0;
  margin: 16rpx 0 0;
  border-radius: 999rpx;
  background: linear-gradient(180deg, #ff8124, #ff6414);
  color: #fff;
  font-size: 23rpx;
  font-weight: 800;
  line-height: 45rpx;
  box-shadow: 0 10rpx 18rpx rgba(255, 107, 25, 0.22);
}

.banner-arrow {
  margin-left: 8rpx;
  font-size: 36rpx;
  font-weight: 400;
  line-height: 38rpx;
}

.banner-photo {
  position: absolute;
  right: 35rpx;
  top: 21rpx;
  z-index: 2;
  width: 223rpx;
  height: 126rpx;
  padding: 9rpx;
  background: #fffaf0;
  box-shadow: 0 9rpx 17rpx rgba(89, 50, 17, 0.19);
  transform: rotate(5deg);
  box-sizing: border-box;
}

.photo-inner {
  width: 100%;
  height: 100%;
  background-image:
    url("/static/recipes/banner-hot-pork.png"),
    url("/static/home/recipe-red-braised-pork.png"),
    radial-gradient(circle at 52% 48%, #b73718 0 28%, transparent 29%),
    linear-gradient(135deg, #f6e5be, #d95b28);
  background-size: cover, cover, auto, auto;
  background-position: center;
}

.lemon-slice {
  position: absolute;
  right: 273rpx;
  bottom: 31rpx;
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  border: 4rpx solid #fff2ad;
  background:
    linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.8) 49% 51%, transparent 52%),
    linear-gradient(-45deg, transparent 48%, rgba(255, 255, 255, 0.8) 49% 51%, transparent 52%),
    radial-gradient(circle at center, #fff8c5 0 16rpx, #ffd85a 17rpx 100%);
  box-sizing: border-box;
}

.banner-leaf {
  position: absolute;
  width: 52rpx;
  height: 76rpx;
  border-left: 5rpx solid #78a14a;
  border-radius: 50%;
}

.leaf-left {
  right: 286rpx;
  top: 42rpx;
  transform: rotate(22deg);
}

.leaf-right {
  right: 9rpx;
  bottom: 4rpx;
  transform: rotate(-18deg);
}

.banner-dots {
  position: absolute;
  left: 344rpx;
  bottom: 17rpx;
  z-index: 4;
  display: flex;
}

.banner-dot {
  width: 12rpx;
  height: 12rpx;
  margin-right: 16rpx;
  border-radius: 50%;
  background: #dfd8c9;
}

.banner-dot.active {
  background: #ff6b19;
}

.feature-row {
  display: flex;
  justify-content: space-between;
  margin-top: 18rpx;
}

.feature-card {
  position: relative;
  width: 332rpx;
  height: 164rpx;
  overflow: hidden;
  border-radius: 17rpx;
  background: rgba(255, 253, 248, 0.92);
  border: 1rpx solid #efe2cf;
  box-shadow: 0 8rpx 21rpx rgba(95, 57, 22, 0.08);
  box-sizing: border-box;
}

.feature-copy {
  position: relative;
  z-index: 2;
  padding: 19rpx 0 0 20rpx;
}

.feature-title-row {
  display: flex;
  align-items: center;
}

.feature-title {
  display: block;
  color: #4a2918;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 29rpx;
  font-weight: 900;
  line-height: 34rpx;
}

.flag,
.calendar-mark {
  display: block;
  margin-left: 8rpx;
  color: #ff6b19;
  font-size: 22rpx;
  line-height: 22rpx;
}

.feature-desc,
.feature-sub {
  display: block;
  color: #807264;
  font-size: 18rpx;
  line-height: 24rpx;
}

.feature-desc {
  margin-top: 8rpx;
}

.feature-name {
  display: inline-block;
  margin-top: 12rpx;
  color: #4a2918;
  font-size: 25rpx;
  font-weight: 900;
  line-height: 32rpx;
}

.feature-pill {
  display: inline-block;
  height: 26rpx;
  padding: 0 8rpx;
  margin-left: 8rpx;
  border-radius: 7rpx;
  background: #ffe2b2;
  color: #ff6b19;
  font-size: 15rpx;
  font-weight: 800;
  line-height: 26rpx;
  vertical-align: 4rpx;
}

.feature-sub {
  margin-top: 5rpx;
}

.feature-score {
  display: flex;
  align-items: center;
  margin-top: 10rpx;
  color: #674832;
  font-size: 20rpx;
  font-weight: 700;
}

.star {
  margin-right: 6rpx;
  color: #ffb321;
  font-size: 23rpx;
  line-height: 1;
}

.feature-image {
  position: absolute;
  right: 15rpx;
  top: 25rpx;
  width: 104rpx;
  height: 94rpx;
  border-radius: 13rpx;
  box-shadow: 0 5rpx 13rpx rgba(81, 43, 12, 0.12);
  background-size: cover, cover;
  background-position: center;
}

.tomato-beef {
  background-image:
    url("/static/home/recipe-tomato-beef-soup.png"),
    radial-gradient(circle at center, #df4c1f 0 36%, transparent 37%),
    linear-gradient(135deg, #ffda92, #de4d1d);
}

.salmon {
  background-image:
    url("/static/recipes/feature-salmon.png"),
    radial-gradient(circle at center, #f28f55 0 33%, transparent 34%),
    linear-gradient(135deg, #fff3c9, #7fbf58);
}

.time-row {
  display: flex;
  align-items: center;
  margin-top: 12rpx;
  color: #7d7167;
  font-size: 17rpx;
  line-height: 22rpx;
}

.clock,
.small-clock {
  position: relative;
  border: 2rpx solid #91877d;
  border-radius: 50%;
  box-sizing: border-box;
}

.clock {
  width: 17rpx;
  height: 17rpx;
  margin-right: 6rpx;
}

.clock::before,
.small-clock::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 3rpx;
  width: 2rpx;
  height: 5rpx;
  background: #91877d;
  transform: translateX(-50%);
}

.clock::after,
.small-clock::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5rpx;
  height: 2rpx;
  background: #91877d;
}

.filter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42rpx;
  margin-top: 20rpx;
}

.tabs {
  display: flex;
  align-items: center;
}

.filter-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 73rpx;
  height: 36rpx;
  padding: 0 19rpx;
  margin-right: 12rpx;
  border-radius: 999rpx;
  background: rgba(255, 255, 255, 0.62);
  color: #766758;
  font-size: 18rpx;
  font-weight: 700;
  box-sizing: border-box;
}

.filter-tab.active {
  background: #ff6b19;
  color: #fff;
}

.sort-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36rpx;
  min-width: 109rpx;
  padding: 0 15rpx;
  border: 1rpx solid #eee0cf;
  border-radius: 999rpx;
  background: rgba(255, 253, 248, 0.78);
  color: #5f4b39;
  font-size: 18rpx;
  font-weight: 700;
  box-sizing: border-box;
}

.down {
  margin-left: 8rpx;
  color: #5f4b39;
  font-size: 22rpx;
  transform: translateY(-2rpx);
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18rpx 15rpx;
  margin-top: 16rpx;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  min-height: 252rpx;
  overflow: hidden;
  border-radius: 15rpx;
  background: #fffdf9;
  box-shadow: 0 9rpx 21rpx rgba(96, 57, 22, 0.1);
}

.recipe-image {
  position: relative;
  flex: 0 0 132rpx;
  height: 132rpx;
  background-size: cover, cover;
  background-position: center;
}

.red-pork {
  background-image:
    url("/static/home/recipe-red-braised-pork.png"),
    radial-gradient(circle at 45% 45%, #b73718 0 32%, transparent 33%),
    linear-gradient(135deg, #823513 0%, #e48132 62%, #ffe4a4 100%);
}

.shrimp-broccoli {
  background-image:
    url("/static/home/recipe-shrimp-broccoli.png"),
    radial-gradient(circle at 53% 42%, #f2872a 0 18%, transparent 19%),
    radial-gradient(circle at 34% 67%, #315e2c 0 18%, transparent 19%),
    linear-gradient(135deg, #fff1c7 0%, #70a34e 50%, #e47b24 100%);
}

.tomato-soup {
  background-image:
    url("/static/home/recipe-tomato-beef-soup.png"),
    radial-gradient(circle at 51% 55%, #dd4b1e 0 42%, transparent 43%),
    linear-gradient(135deg, #f77b26 0%, #e4451d 62%, #fff0ba 100%);
}

.sweet-ribs {
  background-image:
    url("/static/recipes/recipe-sweet-sour-ribs.png"),
    radial-gradient(circle at 48% 45%, #d94c1c 0 34%, transparent 35%),
    linear-gradient(135deg, #fff0b8, #d94b1c);
}

.mushroom-tofu {
  background-image:
    url("/static/recipes/recipe-mushroom-tofu-soup.png"),
    radial-gradient(circle at 52% 53%, #e8d8b5 0 37%, transparent 38%),
    linear-gradient(135deg, #fff8d9, #80a96f);
}

.beef-stir {
  background-image:
    url("/static/recipes/recipe-beef-stir-fry.png"),
    radial-gradient(circle at 48% 52%, #9e2c17 0 34%, transparent 35%),
    linear-gradient(135deg, #ffdc8d, #963018);
}

.crown {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 43rpx;
  height: 35rpx;
  border-radius: 0 0 12rpx 0;
  background: rgba(255, 245, 222, 0.92);
  color: #ffab19;
  font-size: 25rpx;
  line-height: 35rpx;
  text-align: center;
}

.bookmark {
  position: absolute;
  top: 9rpx;
  right: 10rpx;
  width: 31rpx;
  height: 38rpx;
  border-radius: 11rpx 11rpx 8rpx 8rpx;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 3rpx 10rpx rgba(54, 34, 18, 0.12);
}

.bookmark::after {
  content: "";
  position: absolute;
  left: 8rpx;
  top: 8rpx;
  width: 12rpx;
  height: 18rpx;
  border: 4rpx solid #9a9188;
  border-bottom: 0;
  border-radius: 5rpx 5rpx 0 0;
}

.recipe-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12rpx 10rpx 13rpx;
}

.recipe-name {
  display: block;
  color: #332115;
  font-size: 23rpx;
  font-weight: 800;
  line-height: 30rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recipe-desc {
  display: block;
  margin-top: 4rpx;
  color: #8a8177;
  font-size: 17rpx;
  line-height: 24rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recipe-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 10rpx;
}

.duration,
.rating {
  display: flex;
  align-items: center;
  color: #786e65;
  font-size: 17rpx;
  line-height: 22rpx;
}

.small-clock {
  width: 17rpx;
  height: 17rpx;
  margin-right: 5rpx;
  border-color: #92877c;
}

.rating .star {
  margin-right: 4rpx;
  font-size: 20rpx;
}

.custom-tabbar {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 686rpx;
  height: 92rpx;
  padding-bottom: env(safe-area-inset-bottom);
  border-radius: 45rpx 45rpx 0 0;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 -7rpx 23rpx rgba(84, 55, 33, 0.09);
  transform: translateX(-50%);
}

.tab-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 106rpx;
  height: 82rpx;
  color: #706862;
  font-size: 19rpx;
  line-height: 23rpx;
  font-weight: 700;
}

.tab-item.active {
  color: #ff6b19;
}

.tab-item.publish {
  justify-content: flex-end;
}

.tab-icon {
  position: relative;
  width: 29rpx;
  height: 29rpx;
  margin-bottom: 8rpx;
  box-sizing: border-box;
}

.home-tab {
  border-radius: 8rpx 8rpx 6rpx 6rpx;
  background: currentColor;
}

.home-tab::before {
  content: "";
  position: absolute;
  left: 3rpx;
  top: -12rpx;
  width: 22rpx;
  height: 22rpx;
  border-radius: 5rpx;
  background: currentColor;
  transform: rotate(45deg);
}

.recipe-tab {
  border-radius: 5rpx;
  background: currentColor;
}

.recipe-tab::before,
.recipe-tab::after {
  content: "";
  position: absolute;
  left: 7rpx;
  right: 7rpx;
  height: 3rpx;
  border-radius: 3rpx;
  background: #fff;
}

.recipe-tab::before {
  top: 8rpx;
}

.recipe-tab::after {
  top: 17rpx;
}

.discover-tab {
  border: 4rpx solid currentColor;
  border-radius: 50%;
  transform: rotate(-20deg);
}

.discover-tab::after {
  content: "";
  position: absolute;
  left: 9rpx;
  top: 4rpx;
  width: 8rpx;
  height: 15rpx;
  border-radius: 50%;
  background: currentColor;
  transform: skew(-18deg);
}

.profile-tab {
  border: 4rpx solid currentColor;
  border-top: 0;
  border-radius: 15rpx 15rpx 6rpx 6rpx;
}

.profile-tab::before {
  content: "";
  position: absolute;
  left: 6rpx;
  top: -20rpx;
  width: 16rpx;
  height: 16rpx;
  border: 4rpx solid currentColor;
  border-radius: 50%;
  box-sizing: border-box;
}

.publish-button {
  position: absolute;
  top: -33rpx;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66rpx;
  height: 66rpx;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff8a25, #ff6917);
  color: #fff;
  box-shadow: 0 9rpx 18rpx rgba(255, 107, 25, 0.31);
  transform: translateX(-50%);
}

.publish-button text {
  display: block;
  margin-top: -5rpx;
  font-size: 55rpx;
  font-weight: 300;
  line-height: 62rpx;
}

.tab-text {
  display: block;
  margin-top: 0;
  white-space: nowrap;
}

/* #ifdef H5 */
.recipes-page {
  max-width: 750px;
  margin: 0 auto;
}

@media (max-aspect-ratio: 1/2.3) {
  .weekly-banner {
    height: 205rpx;
  }

  .banner-copy {
    padding-top: 38rpx;
  }

  .banner-photo {
    top: 33rpx;
    width: 230rpx;
    height: 135rpx;
  }

  .banner-dots {
    bottom: 20rpx;
  }

  .feature-card {
    height: 178rpx;
  }

  .feature-copy {
    padding-top: 23rpx;
  }

  .feature-image {
    top: 34rpx;
    width: 102rpx;
    height: 94rpx;
  }

  .filter-row {
    height: 50rpx;
    margin-top: 24rpx;
  }

  .recipe-grid {
    gap: 22rpx 15rpx;
    margin-top: 19rpx;
  }

  .recipe-card {
    display: flex;
    flex-direction: column;
    min-height: 485rpx;
  }

  .recipe-image {
    height: 282rpx;
  }

  .recipe-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 18rpx 12rpx 18rpx;
  }

  .recipe-name {
    font-size: 27rpx;
    line-height: 35rpx;
  }

  .recipe-desc {
    margin-top: 8rpx;
    font-size: 20rpx;
    line-height: 28rpx;
  }

  .recipe-meta {
    margin-top: auto;
    padding-top: 22rpx;
  }

  .duration,
  .rating {
    font-size: 19rpx;
    line-height: 26rpx;
  }
}
/* #endif */
</style>
