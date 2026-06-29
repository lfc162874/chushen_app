<template>
  <view class="home-page">
    <view class="header">
      <view>
        <text class="brand">厨神</text>
        <text class="greeting">晚上好，今天想做点什么？</text>
      </view>
      <view class="header-actions">
        <button class="icon-button">签</button>
        <button class="icon-button">信</button>
      </view>
    </view>

    <view class="hero-card">
      <view class="hero-copy">
        <text class="hero-title">今天吃什么</text>
        <text class="hero-subtitle">打开冰箱找灵感</text>
        <button class="primary-button">一键找灵感</button>
      </view>
      <view class="hero-note">
        <text class="note-title">冰箱有啥？</text>
        <text class="note-line">牛肉</text>
        <text class="note-line">番茄</text>
        <text class="note-line">鸡蛋</text>
      </view>
    </view>

    <view class="search-bar">
      <text class="search-placeholder">搜索菜谱、食材、菜系</text>
      <text class="scan-text">拍照</text>
    </view>

    <view class="quick-grid">
      <view v-for="item in quickEntries" :key="item.title" class="quick-card">
        <text class="quick-icon">{{ item.icon }}</text>
        <view>
          <text class="quick-title">{{ item.title }}</text>
          <text class="quick-desc">{{ item.desc }}</text>
        </view>
      </view>
    </view>

    <view class="section-header">
      <text class="section-title">今日推荐</text>
      <text class="section-action">换一换</text>
    </view>

    <scroll-view scroll-x class="recipe-scroll">
      <view class="recipe-list">
        <view v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
          <view class="recipe-image">
            <text class="recipe-tag">{{ recipe.tag }}</text>
          </view>
          <text class="recipe-name">{{ recipe.name }}</text>
          <text class="recipe-desc">{{ recipe.desc }}</text>
          <text class="recipe-score">{{ recipe.score }}</text>
        </view>
      </view>
    </scroll-view>

    <view class="challenge-card">
      <view>
        <text class="challenge-label">今日挑战</text>
        <text class="challenge-title">做一道家常菜</text>
        <text class="challenge-desc">完成即可获得 80 经验值</text>
      </view>
      <button class="challenge-button">去完成</button>
    </view>
  </view>
</template>

<script setup lang="ts">
const quickEntries = [
  { title: "怎么做", desc: "学做菜", icon: "厨" },
  { title: "做什么", desc: "找灵感", icon: "灯" },
  { title: "社交", desc: "分享美味", icon: "享" },
  { title: "厨神之路", desc: "升级挑战", icon: "奖" },
];

const recipes = [
  { name: "红烧肉", desc: "肥而不腻，入口即化", tag: "家常必备", score: "4.9" },
  { name: "蒜蓉虾仁西兰花", desc: "清爽低脂，营养美味", tag: "10分钟快手", score: "4.8" },
  { name: "番茄牛腩汤", desc: "汤鲜味美，暖心暖胃", tag: "暖胃汤羹", score: "4.8" },
];
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  padding: 36rpx 32rpx 56rpx;
  background: #fff7ea;
  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28rpx;
}

.brand,
.greeting,
.hero-title,
.hero-subtitle,
.note-title,
.note-line,
.search-placeholder,
.scan-text,
.quick-title,
.quick-desc,
.section-title,
.section-action,
.recipe-tag,
.recipe-name,
.recipe-desc,
.recipe-score,
.challenge-label,
.challenge-title,
.challenge-desc {
  display: block;
}

.brand {
  color: #ff6b1a;
  font-size: 60rpx;
  font-weight: 800;
  line-height: 1;
}

.greeting {
  margin-top: 18rpx;
  color: #332217;
  font-size: 28rpx;
}

.header-actions {
  display: flex;
  gap: 20rpx;
}

.icon-button {
  width: 88rpx;
  height: 88rpx;
  padding: 0;
  border-radius: 28rpx;
  background: #fffdf9;
  color: #4b2f1c;
  font-size: 28rpx;
  line-height: 88rpx;
  box-shadow: 0 10rpx 28rpx rgba(94, 54, 18, 0.08);
}

.icon-button::after,
.primary-button::after,
.challenge-button::after {
  border: 0;
}

.hero-card {
  display: flex;
  justify-content: space-between;
  min-height: 330rpx;
  padding: 42rpx;
  border-radius: 36rpx;
  background: linear-gradient(135deg, #fff4dc 0%, #fffaf0 48%, #eaf6d7 100%);
  box-shadow: 0 18rpx 36rpx rgba(111, 65, 23, 0.1);
  box-sizing: border-box;
}

.hero-title {
  color: #3b2415;
  font-size: 56rpx;
  font-weight: 800;
  line-height: 1.1;
}

.hero-subtitle {
  margin-top: 14rpx;
  color: #5c3d28;
  font-size: 36rpx;
  font-weight: 700;
}

.primary-button {
  width: 244rpx;
  height: 78rpx;
  margin: 42rpx 0 0;
  border-radius: 999rpx;
  background: #ff6b1a;
  color: #fff;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 78rpx;
  box-shadow: 0 14rpx 24rpx rgba(255, 107, 26, 0.28);
}

.hero-note {
  align-self: flex-end;
  width: 190rpx;
  padding: 24rpx;
  border-radius: 18rpx;
  background: rgba(255, 234, 178, 0.88);
  box-sizing: border-box;
}

.note-title {
  margin-bottom: 12rpx;
  color: #5c3d28;
  font-size: 24rpx;
  font-weight: 700;
}

.note-line {
  color: #7a4d25;
  font-size: 22rpx;
  line-height: 1.65;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96rpx;
  margin-top: 28rpx;
  padding: 0 32rpx;
  border: 1rpx solid #f0dfca;
  border-radius: 28rpx;
  background: #fffdf9;
  box-shadow: 0 12rpx 24rpx rgba(111, 65, 23, 0.06);
  box-sizing: border-box;
}

.search-placeholder {
  color: #a99c91;
  font-size: 28rpx;
}

.scan-text {
  color: #ff6b1a;
  font-size: 26rpx;
  font-weight: 700;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22rpx;
  margin-top: 26rpx;
}

.quick-card {
  display: flex;
  align-items: center;
  gap: 20rpx;
  min-height: 116rpx;
  padding: 22rpx;
  border-radius: 28rpx;
  background: #fffdf9;
  box-shadow: 0 12rpx 28rpx rgba(111, 65, 23, 0.08);
  box-sizing: border-box;
}

.quick-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 58rpx;
  width: 58rpx;
  height: 58rpx;
  border-radius: 18rpx;
  background: #ff7a21;
  color: #fff;
  font-size: 24rpx;
  font-weight: 700;
}

.quick-title {
  color: #332217;
  font-size: 28rpx;
  font-weight: 700;
}

.quick-desc {
  margin-top: 8rpx;
  color: #9a8879;
  font-size: 22rpx;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 38rpx 0 18rpx;
}

.section-title {
  color: #332217;
  font-size: 38rpx;
  font-weight: 800;
}

.section-action {
  color: #9a8879;
  font-size: 24rpx;
}

.recipe-scroll {
  width: 100%;
  white-space: nowrap;
}

.recipe-list {
  display: flex;
  gap: 20rpx;
}

.recipe-card {
  display: inline-flex;
  flex-direction: column;
  width: 280rpx;
  padding: 12rpx;
  border-radius: 22rpx;
  background: #fffdf9;
  box-shadow: 0 12rpx 28rpx rgba(111, 65, 23, 0.08);
  box-sizing: border-box;
}

.recipe-image {
  position: relative;
  height: 150rpx;
  border-radius: 18rpx;
  background: linear-gradient(135deg, #b74822, #ffc15c);
}

.recipe-tag {
  position: absolute;
  top: 10rpx;
  left: 10rpx;
  padding: 6rpx 12rpx;
  border-radius: 999rpx;
  background: #ff6b1a;
  color: #fff;
  font-size: 20rpx;
}

.recipe-name {
  margin-top: 18rpx;
  color: #332217;
  font-size: 28rpx;
  font-weight: 700;
}

.recipe-desc {
  margin-top: 8rpx;
  color: #9a8879;
  font-size: 22rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recipe-score {
  margin-top: 12rpx;
  align-self: flex-end;
  color: #5c3d28;
  font-size: 24rpx;
  font-weight: 700;
}

.challenge-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30rpx;
  padding: 34rpx;
  border-radius: 30rpx;
  background: #fff1d6;
  box-shadow: 0 12rpx 28rpx rgba(111, 65, 23, 0.08);
}

.challenge-label {
  color: #8e5b22;
  font-size: 24rpx;
  font-weight: 700;
}

.challenge-title {
  margin-top: 10rpx;
  color: #332217;
  font-size: 36rpx;
  font-weight: 800;
}

.challenge-desc {
  margin-top: 12rpx;
  color: #7a6a5e;
  font-size: 24rpx;
}

.challenge-button {
  width: 160rpx;
  height: 70rpx;
  margin: 0;
  border-radius: 999rpx;
  background: #ff6b1a;
  color: #fff;
  font-size: 26rpx;
  font-weight: 700;
  line-height: 70rpx;
}
</style>
