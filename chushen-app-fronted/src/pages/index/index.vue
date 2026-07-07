<template>
  <view class="home-page">
    <view class="page-shell">
      <view class="topbar">
        <view class="brand-block">
          <view class="brand-logo">
            <text class="brand-flower">✿</text>
            <text class="brand-text">厨神</text>
            <view class="brand-leaf leaf-one"></view>
            <view class="brand-leaf leaf-two"></view>
          </view>
          <view class="greeting-row">
            <text class="greeting">晚上好，今天想做点什么？</text>
            <text class="smile">⌣</text>
          </view>
        </view>

        <view class="top-actions">
          <button class="top-action" hover-class="button-press">
            <view class="calendar-icon">
              <view class="calendar-ring ring-left"></view>
              <view class="calendar-ring ring-right"></view>
              <view class="calendar-check"></view>
            </view>
            <text class="top-action-text">签到</text>
          </button>
          <button class="top-action message-action" hover-class="button-press">
            <view class="message-dot"></view>
            <view class="bubble-icon">
              <view class="bubble-dot dot-one"></view>
              <view class="bubble-dot dot-two"></view>
              <view class="bubble-dot dot-three"></view>
            </view>
            <text class="top-action-text">消息</text>
          </button>
        </view>
      </view>

      <view class="hero-card">
        <view class="sprig sprig-top"></view>
        <view class="notebook">
          <view class="binder-line line-one"></view>
          <view class="binder-line line-two"></view>
          <view class="binder-line line-three"></view>
          <view class="binder-line line-four"></view>
          <view class="binder-line line-five"></view>
          <view class="paper-lines">
            <view class="paper-line"></view>
            <view class="paper-line"></view>
            <view class="paper-line"></view>
            <view class="paper-line"></view>
            <view class="paper-line"></view>
          </view>
          <text class="hero-title">今天吃什么</text>
          <text class="hero-subtitle">打开冰箱找灵感</text>
          <view class="green-underline"></view>
          <text class="hero-heart">♡</text>
          <text class="hero-spark">✧</text>
          <button class="hero-button" hover-class="button-press">
            <text>一键找灵感</text>
            <text class="hero-arrow">›</text>
          </button>
        </view>

        <view class="hero-photo"></view>

        <view class="polaroid">
          <view class="pin"></view>
          <view class="polaroid-photo"></view>
          <view class="polaroid-caption">
            <text>5分钟快手菜</text>
            <text class="caption-heart">♡</text>
          </view>
        </view>

        <view class="fridge-note">
          <text class="fridge-note-title">冰箱有啥？</text>
          <text class="fridge-item">牛肉</text>
          <text class="fridge-item">番茄</text>
          <text class="fridge-item">鸡蛋</text>
          <text class="fridge-item">西兰花</text>
          <text class="note-smile">⌣</text>
        </view>

        <view class="hero-foreground">
          <view class="broccoli"></view>
          <view class="tomato tomato-one"></view>
          <view class="tomato tomato-two"></view>
          <view class="lemon"></view>
          <view class="egg egg-one"></view>
          <view class="egg egg-two"></view>
          <view class="jar"></view>
        </view>

        <view class="hero-dots">
          <view class="hero-dot active"></view>
          <view class="hero-dot"></view>
          <view class="hero-dot"></view>
        </view>
      </view>

      <view class="search-box">
        <view class="search-icon"></view>
        <text class="search-placeholder">搜索菜谱、食材、菜系</text>
        <view class="scan-icon">
          <view class="corner corner-tl"></view>
          <view class="corner corner-tr"></view>
          <view class="corner corner-bl"></view>
          <view class="corner corner-br"></view>
        </view>
      </view>

      <view class="quick-row">
        <view v-for="entry in quickEntries" :key="entry.title" class="quick-card">
          <view class="quick-visual" :class="entry.iconClass">
            <text class="quick-symbol">{{ entry.symbol }}</text>
          </view>
          <view class="quick-copy">
            <text class="quick-title">{{ entry.title }}</text>
            <view class="quick-sub-row">
              <text class="quick-desc">{{ entry.desc }}</text>
              <text class="quick-chevron">›</text>
            </view>
          </view>
        </view>
      </view>

      <view class="mini-section">
        <view class="fortune-card">
          <view class="fortune-diamond diamond-one"></view>
          <view class="fortune-diamond diamond-two"></view>
          <text class="fortune-title">今日厨神签</text>
          <view class="fortune-copy">
            <text>烟火人间，最抚人心。</text>
            <text>用一道菜，治愈今天的你。</text>
          </view>
          <button class="fortune-button" hover-class="button-press">
            <text>抽一签</text>
            <text class="fortune-stamp">签</text>
          </button>
          <view class="lucky-tag">
            <view class="tag-ring"></view>
            <text>大</text>
            <text>吉</text>
          </view>
          <view class="tassel"></view>
        </view>

        <view class="mood-card">
          <view class="mood-bowl"></view>
          <view class="steam steam-one"></view>
          <view class="steam steam-two"></view>
          <view class="steam steam-three"></view>
          <text class="mood-title">晚餐情绪推荐</text>
          <text class="mood-subtitle">有点累？来份治愈系晚餐吧</text>
          <view class="mood-list">
            <view v-for="mood in moods" :key="mood.name" class="mood-item" :class="{ active: mood.active }">
              <view class="mood-icon">{{ mood.icon }}</view>
              <text>{{ mood.name }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="recommend-header">
        <view class="title-wrap">
          <text class="title-decoration left-decoration">⌁</text>
          <text class="section-title">今日推荐</text>
          <text class="title-decoration right-decoration">✦</text>
        </view>
        <view class="refresh-wrap">
          <text>换一换</text>
          <view class="refresh-icon"></view>
        </view>
      </view>

      <view class="recipe-row">
        <view v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
          <view class="recipe-image" :class="recipe.imageClass">
            <text class="recipe-badge">{{ recipe.tag }}</text>
          </view>
          <view class="recipe-body">
            <text class="recipe-name">{{ recipe.name }}</text>
            <view class="recipe-meta">
              <text class="recipe-desc">{{ recipe.desc }}</text>
              <view class="score">
                <text class="star">★</text>
                <text>{{ recipe.score }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="bottom-cards">
        <view class="challenge-panel">
          <view class="challenge-text">
            <text class="challenge-kicker">今日挑战</text>
            <text class="challenge-title">做一道家常菜</text>
            <text class="challenge-desc">完成即可获得 <text class="coin">●</text> 80 经验值</text>
            <button class="challenge-button" hover-class="button-press">去完成</button>
          </view>
          <view class="chef-illustration"></view>
          <view class="pan-shape"></view>
          <text class="challenge-spark spark-one">✧</text>
          <text class="challenge-spark spark-two">✦</text>
        </view>

        <view class="growth-panel">
          <view class="growth-top">
            <view>
              <text class="growth-role">厨神学徒</text>
              <text class="growth-level">Lv.12</text>
            </view>
            <text class="growth-tip">距离升级还差 120 经验</text>
          </view>
          <view class="progress-row">
            <view class="progress-track">
              <view class="progress-fill"></view>
            </view>
            <text class="progress-text">880 / 1000</text>
          </view>
          <view class="milestone-row">
            <view v-for="item in milestones" :key="item.value" class="milestone">
              <view class="milestone-line" v-if="item.value !== 300"></view>
              <view class="milestone-dot" :class="{ done: item.done, current: item.current, locked: item.locked }">
                <text>{{ item.icon }}</text>
              </view>
              <text class="milestone-value">{{ item.value }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <AppTabBar active="home" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";

const quickEntries = [
  { title: "怎么做", desc: "学做菜", symbol: "厨", iconClass: "cook-icon" },
  { title: "做什么", desc: "找灵感", symbol: "灯", iconClass: "idea-icon" },
  { title: "社交", desc: "分享美味", symbol: "♡", iconClass: "social-icon" },
  { title: "厨神之路", desc: "升级挑战", symbol: "★", iconClass: "road-icon" },
];

const moods = [
  { name: "治愈", icon: "⌣", active: true },
  { name: "满足", icon: "♧", active: false },
  { name: "暖心", icon: "♡", active: false },
  { name: "元气", icon: "☼", active: false },
  { name: "放松", icon: "♨", active: false },
];

const recipes = [
  {
    name: "红烧肉",
    desc: "肥而不腻，入口即化",
    tag: "家常必备",
    score: "4.9",
    imageClass: "recipe-pork",
  },
  {
    name: "蒜蓉虾仁西兰花",
    desc: "清爽低脂，营养美味",
    tag: "10分钟快手",
    score: "4.8",
    imageClass: "recipe-shrimp",
  },
  {
    name: "番茄牛腩汤",
    desc: "汤鲜味美，暖心暖胃",
    tag: "暖胃汤羹",
    score: "4.8",
    imageClass: "recipe-soup",
  },
];

const milestones = [
  { value: 300, icon: "✓", done: true },
  { value: 600, icon: "✓", done: true },
  { value: 1000, icon: "锅", current: true },
  { value: 1500, icon: "锁", locked: true },
];

</script>

<style scoped>
.home-page {
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
  padding: 24rpx 32rpx 138rpx;
  margin: 0 auto;
  box-sizing: border-box;
}

.topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 128rpx;
}

.brand-block {
  padding-top: 2rpx;
}

.brand-logo {
  position: relative;
  width: 168rpx;
  height: 82rpx;
}

.brand-flower {
  position: absolute;
  top: -3rpx;
  left: 2rpx;
  color: #ff6b19;
  font-size: 34rpx;
  font-weight: 700;
  line-height: 1;
}

.brand-text {
  position: absolute;
  left: 20rpx;
  top: 4rpx;
  color: #f56716;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 66rpx;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0;
}

.brand-leaf {
  position: absolute;
  width: 22rpx;
  height: 10rpx;
  border-radius: 50% 0 50% 0;
  background: #a8c771;
  transform: rotate(-38deg);
}

.leaf-one {
  right: -8rpx;
  top: 10rpx;
}

.leaf-two {
  right: -25rpx;
  top: -2rpx;
  transform: rotate(-46deg);
}

.greeting-row {
  display: flex;
  align-items: center;
  padding-left: 34rpx;
  margin-top: 4rpx;
}

.greeting {
  color: #22170f;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 26rpx;
  font-weight: 700;
  line-height: 34rpx;
}

.smile {
  margin-left: 10rpx;
  color: #22170f;
  font-size: 28rpx;
  font-weight: 700;
  transform: translateY(-2rpx);
}

.top-actions {
  display: flex;
  padding-top: 6rpx;
}

.top-action {
  position: relative;
  width: 70rpx;
  height: 80rpx;
  padding: 8rpx 0 0;
  margin: 0 0 0 24rpx;
  border-radius: 25rpx;
  background: rgba(255, 253, 247, 0.78);
  color: #3a2115;
  line-height: 1;
  box-shadow: 0 8rpx 24rpx rgba(112, 68, 25, 0.08);
  box-sizing: border-box;
}

.top-action::after,
.hero-button::after,
.fortune-button::after,
.challenge-button::after {
  border: 0;
}

.button-press {
  transform: scale(0.97);
  opacity: 0.92;
}

.calendar-icon {
  position: relative;
  width: 31rpx;
  height: 30rpx;
  margin: 0 auto 7rpx;
  border: 4rpx solid #422417;
  border-radius: 6rpx;
  box-sizing: border-box;
}

.calendar-icon::before {
  content: "";
  position: absolute;
  left: -4rpx;
  right: -4rpx;
  top: 7rpx;
  height: 4rpx;
  background: #422417;
}

.calendar-ring {
  position: absolute;
  top: -10rpx;
  width: 4rpx;
  height: 11rpx;
  border-radius: 4rpx;
  background: #422417;
}

.ring-left {
  left: 5rpx;
}

.ring-right {
  right: 5rpx;
}

.calendar-check {
  position: absolute;
  left: 9rpx;
  top: 14rpx;
  width: 10rpx;
  height: 6rpx;
  border-left: 3rpx solid #422417;
  border-bottom: 3rpx solid #422417;
  transform: rotate(-45deg);
}

.bubble-icon {
  position: relative;
  width: 34rpx;
  height: 29rpx;
  margin: 0 auto 8rpx;
  border: 4rpx solid #422417;
  border-radius: 10rpx;
  box-sizing: border-box;
}

.bubble-icon::after {
  content: "";
  position: absolute;
  right: 3rpx;
  bottom: -8rpx;
  width: 9rpx;
  height: 9rpx;
  border-right: 4rpx solid #422417;
  border-bottom: 4rpx solid #422417;
  transform: rotate(45deg);
  background: #fffdf8;
}

.bubble-dot {
  position: absolute;
  top: 10rpx;
  width: 4rpx;
  height: 4rpx;
  border-radius: 50%;
  background: #422417;
}

.dot-one {
  left: 7rpx;
}

.dot-two {
  left: 14rpx;
}

.dot-three {
  left: 21rpx;
}

.message-dot {
  position: absolute;
  top: 8rpx;
  right: 14rpx;
  width: 14rpx;
  height: 14rpx;
  border-radius: 50%;
  background: #ff6b19;
}

.top-action-text {
  display: block;
  color: #3a2115;
  font-size: 22rpx;
  font-weight: 700;
  line-height: 26rpx;
}

.hero-card {
  position: relative;
  height: 286rpx;
  overflow: hidden;
  border-radius: 30rpx;
  background: #fff4dd;
  box-shadow: 0 12rpx 28rpx rgba(109, 64, 22, 0.13);
}

.sprig {
  position: absolute;
  z-index: 2;
}

.sprig-top {
  top: -60rpx;
  left: 396rpx;
  width: 124rpx;
  height: 124rpx;
  border-left: 5rpx solid rgba(145, 162, 106, 0.48);
  border-radius: 50%;
  transform: rotate(-43deg);
}

.sprig-top::before,
.sprig-top::after {
  content: "";
  position: absolute;
  width: 25rpx;
  height: 10rpx;
  border-radius: 50%;
  background: rgba(145, 162, 106, 0.48);
}

.sprig-top::before {
  left: 18rpx;
  top: 39rpx;
  transform: rotate(28deg);
}

.sprig-top::after {
  left: 40rpx;
  top: 58rpx;
  transform: rotate(-26deg);
}

.notebook {
  position: absolute;
  left: 0;
  top: 15rpx;
  z-index: 3;
  width: 354rpx;
  height: 266rpx;
  border-radius: 13rpx 13rpx 0 0;
  background:
    linear-gradient(101deg, rgba(255, 250, 238, 0) 0 91%, rgba(222, 188, 122, 0.24) 91% 100%),
    repeating-linear-gradient(0deg, rgba(122, 80, 43, 0.16) 0 1rpx, transparent 1rpx 39rpx),
    #fff7e8;
  box-shadow: 10rpx 0 20rpx rgba(113, 65, 20, 0.16);
  transform: rotate(-4deg);
  transform-origin: left bottom;
}

.notebook::before {
  content: "";
  position: absolute;
  left: -9rpx;
  top: 13rpx;
  bottom: 0;
  width: 18rpx;
  background: rgba(224, 183, 103, 0.8);
  border-radius: 12rpx;
}

.notebook::after {
  content: "";
  position: absolute;
  inset: 14rpx;
  border: 1rpx solid rgba(188, 145, 78, 0.25);
  border-radius: 5rpx;
  pointer-events: none;
}

.binder-line {
  position: absolute;
  left: -15rpx;
  width: 25rpx;
  height: 6rpx;
  border-radius: 6rpx;
  background: #d6aa65;
  box-shadow: inset -4rpx 0 0 rgba(116, 72, 22, 0.1);
}

.line-one {
  top: 43rpx;
}

.line-two {
  top: 85rpx;
}

.line-three {
  top: 127rpx;
}

.line-four {
  top: 169rpx;
}

.line-five {
  top: 211rpx;
}

.paper-lines {
  position: absolute;
  left: 58rpx;
  top: 46rpx;
  width: 238rpx;
}

.paper-line {
  width: 100%;
  height: 1rpx;
  margin-bottom: 34rpx;
  background: rgba(159, 117, 68, 0.12);
}

.hero-title,
.hero-subtitle,
.hero-heart,
.hero-spark {
  position: absolute;
  z-index: 2;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
}

.hero-title {
  left: 55rpx;
  top: 57rpx;
  color: #422414;
  font-size: 48rpx;
  font-weight: 800;
  line-height: 58rpx;
  letter-spacing: 0;
}

.hero-subtitle {
  left: 58rpx;
  top: 121rpx;
  color: #422414;
  font-size: 38rpx;
  font-weight: 800;
  line-height: 46rpx;
}

.green-underline {
  position: absolute;
  left: 72rpx;
  top: 172rpx;
  z-index: 2;
  width: 204rpx;
  height: 6rpx;
  border-radius: 50%;
  background: #81ad50;
  transform: rotate(-2deg);
}

.hero-heart {
  right: 36rpx;
  top: 29rpx;
  color: #f8a218;
  font-size: 39rpx;
  font-weight: 700;
  transform: rotate(-16deg);
}

.hero-spark {
  right: 23rpx;
  top: 153rpx;
  color: #f89f17;
  font-size: 35rpx;
  font-weight: 800;
}

.hero-button {
  position: absolute;
  left: 76rpx;
  bottom: 34rpx;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178rpx;
  height: 58rpx;
  padding: 0;
  border-radius: 999rpx;
  background: linear-gradient(180deg, #ff7c24 0%, #ff6414 100%);
  color: #fff;
  font-size: 24rpx;
  font-weight: 800;
  line-height: 58rpx;
  box-shadow: 0 13rpx 22rpx rgba(255, 107, 25, 0.28);
}

.hero-arrow {
  margin-left: 18rpx;
  font-size: 43rpx;
  font-weight: 500;
  line-height: 50rpx;
}

.hero-photo {
  position: absolute;
  right: 0;
  top: 0;
  width: 362rpx;
  height: 286rpx;
  border-radius: 30rpx;
  background-image:
    linear-gradient(90deg, rgba(255, 248, 233, 0.62) 0%, rgba(255, 248, 233, 0.14) 23%, rgba(255, 248, 233, 0) 45%),
    url("/static/home/hero-fridge.png"),
    linear-gradient(135deg, #f8e3b9 0%, #e7f1cf 54%, #fff0bd 100%);
  background-size: cover, cover, cover;
  background-position: center;
}

.hero-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 58%, rgba(255, 242, 209, 0.55) 100%);
}

.polaroid {
  position: absolute;
  z-index: 5;
  left: 386rpx;
  top: 48rpx;
  width: 142rpx;
  height: 172rpx;
  padding: 10rpx 9rpx 0;
  background: #fffaf1;
  box-shadow: 0 10rpx 18rpx rgba(85, 45, 13, 0.2);
  transform: rotate(-7deg);
  box-sizing: border-box;
}

.pin {
  position: absolute;
  top: -9rpx;
  left: 49rpx;
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #ff771d;
  box-shadow: inset -4rpx -4rpx 0 rgba(204, 88, 13, 0.22);
}

.polaroid-photo {
  height: 107rpx;
  background-image:
    url("/static/home/hero-polaroid-shrimp.png"),
    radial-gradient(circle at 54% 44%, #ffbd65 0 20%, #f2872a 21% 33%, #325b2b 34% 50%, #ece4ce 51% 100%);
  background-size: cover, cover;
  background-position: center;
}

.polaroid-caption {
  display: flex;
  justify-content: space-between;
  padding: 10rpx 6rpx 0;
  color: #4a2a18;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 20rpx;
  font-weight: 700;
  line-height: 26rpx;
}

.caption-heart {
  color: #f3a221;
  font-size: 24rpx;
}

.fridge-note {
  position: absolute;
  right: 98rpx;
  top: 123rpx;
  z-index: 4;
  width: 109rpx;
  height: 115rpx;
  padding: 13rpx 14rpx;
  background: #ffe9af;
  box-shadow: 0 7rpx 12rpx rgba(87, 43, 9, 0.12);
  transform: rotate(4deg);
  box-sizing: border-box;
}

.fridge-note-title,
.fridge-item {
  display: block;
  color: #613719;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 17rpx;
  font-weight: 700;
  line-height: 22rpx;
}

.fridge-item::before {
  content: "➜";
  margin-right: 4rpx;
  color: #dc8e12;
  font-size: 14rpx;
}

.note-smile {
  position: absolute;
  right: 14rpx;
  bottom: 2rpx;
  color: #e99a18;
  font-size: 29rpx;
  font-weight: 700;
}

.hero-foreground {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 6;
  height: 75rpx;
  pointer-events: none;
}

.broccoli {
  position: absolute;
  left: 323rpx;
  bottom: -16rpx;
  width: 98rpx;
  height: 72rpx;
  border-radius: 48% 52% 32% 38%;
  background:
    radial-gradient(circle at 32% 35%, #447b26 0 13rpx, transparent 14rpx),
    radial-gradient(circle at 48% 22%, #5d9636 0 19rpx, transparent 20rpx),
    radial-gradient(circle at 64% 40%, #3f762b 0 20rpx, transparent 21rpx),
    radial-gradient(circle at 34% 58%, #5a982f 0 21rpx, transparent 22rpx),
    #4f8d31;
}

.tomato {
  position: absolute;
  bottom: -4rpx;
  border-radius: 50%;
  background: radial-gradient(circle at 31% 28%, #ff9c42 0 8rpx, #dc2d1b 9rpx 100%);
  box-shadow: inset -5rpx -6rpx 0 rgba(122, 25, 8, 0.14);
}

.tomato::before {
  content: "";
  position: absolute;
  left: 38%;
  top: -4rpx;
  width: 14rpx;
  height: 9rpx;
  border-radius: 50%;
  background: #3b8b32;
}

.tomato-one {
  left: 502rpx;
  width: 47rpx;
  height: 43rpx;
}

.tomato-two {
  left: 562rpx;
  width: 41rpx;
  height: 38rpx;
}

.lemon {
  position: absolute;
  left: 466rpx;
  bottom: -3rpx;
  width: 55rpx;
  height: 55rpx;
  border-radius: 50%;
  background:
    linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.76) 49% 51%, transparent 52%),
    linear-gradient(-45deg, transparent 48%, rgba(255, 255, 255, 0.76) 49% 51%, transparent 52%),
    radial-gradient(circle at center, #fff8c5 0 18rpx, #ffd655 19rpx 100%);
  border: 4rpx solid #fff1aa;
  box-sizing: border-box;
}

.egg {
  position: absolute;
  bottom: -5rpx;
  width: 39rpx;
  height: 48rpx;
  border-radius: 50% 50% 45% 45%;
  background: #ead1a3;
  transform: rotate(-10deg);
}

.egg-one {
  right: 114rpx;
}

.egg-two {
  right: 80rpx;
  transform: rotate(9deg);
}

.jar {
  position: absolute;
  right: 16rpx;
  bottom: -1rpx;
  width: 48rpx;
  height: 76rpx;
  border: 4rpx solid rgba(174, 158, 92, 0.6);
  border-radius: 9rpx 9rpx 17rpx 17rpx;
  background:
    linear-gradient(90deg, transparent 44%, rgba(255, 255, 255, 0.78) 45% 51%, transparent 52%),
    rgba(255, 244, 161, 0.34);
  box-sizing: border-box;
}

.jar::before {
  content: "";
  position: absolute;
  left: 10rpx;
  top: -17rpx;
  width: 26rpx;
  height: 17rpx;
  border: 4rpx solid rgba(174, 158, 92, 0.6);
  border-bottom: 0;
  border-radius: 8rpx 8rpx 0 0;
  box-sizing: border-box;
}

.hero-dots {
  position: absolute;
  left: 335rpx;
  bottom: 17rpx;
  z-index: 8;
  display: flex;
  align-items: center;
}

.hero-dot {
  width: 14rpx;
  height: 14rpx;
  margin-right: 13rpx;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2rpx 5rpx rgba(105, 61, 14, 0.12);
}

.hero-dot.active {
  width: 26rpx;
  height: 26rpx;
  border: 8rpx solid #ff6b19;
  background: #fff;
  box-sizing: border-box;
}

.search-box {
  display: flex;
  align-items: center;
  height: 67rpx;
  margin-top: 20rpx;
  padding: 0 22rpx 0 27rpx;
  border: 1rpx solid #ebdfd0;
  border-radius: 23rpx;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 9rpx 24rpx rgba(97, 61, 29, 0.08);
  box-sizing: border-box;
}

.search-icon {
  position: relative;
  flex: 0 0 36rpx;
  width: 36rpx;
  height: 36rpx;
  margin-right: 22rpx;
  border: 4rpx solid #928d86;
  border-radius: 50%;
  box-sizing: border-box;
}

.search-icon::after {
  content: "";
  position: absolute;
  right: -13rpx;
  bottom: -9rpx;
  width: 16rpx;
  height: 4rpx;
  border-radius: 4rpx;
  background: #928d86;
  transform: rotate(45deg);
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

.quick-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20rpx;
}

.quick-card {
  display: flex;
  align-items: center;
  width: 158rpx;
  height: 95rpx;
  padding: 13rpx 11rpx;
  border: 5rpx solid rgba(255, 255, 255, 0.9);
  border-radius: 27rpx;
  background: rgba(255, 253, 248, 0.9);
  box-shadow: 0 10rpx 21rpx rgba(96, 58, 23, 0.08);
  box-sizing: border-box;
}

.quick-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 52rpx;
  width: 52rpx;
  height: 52rpx;
  margin-right: 9rpx;
  border-radius: 18rpx;
  box-sizing: border-box;
}

.quick-symbol {
  color: #fff;
  font-size: 23rpx;
  font-weight: 900;
  line-height: 1;
}

.cook-icon {
  border-radius: 50% 50% 18rpx 18rpx;
  background:
    radial-gradient(circle at 32% 22%, #ff9b21 0 16rpx, transparent 17rpx),
    radial-gradient(circle at 62% 22%, #ff9b21 0 17rpx, transparent 18rpx),
    linear-gradient(180deg, #ff8b1f, #ff6618);
  box-shadow: inset -6rpx -8rpx 0 rgba(190, 68, 0, 0.13);
}

.idea-icon {
  border-radius: 50% 50% 43% 43%;
  background: radial-gradient(circle at 39% 28%, #95cf5a 0 9rpx, transparent 10rpx), linear-gradient(180deg, #7fbf42, #4e982f);
  box-shadow: 0 0 0 5rpx rgba(126, 181, 73, 0.14);
}

.social-icon {
  border-radius: 18rpx 18rpx 18rpx 8rpx;
  background: linear-gradient(180deg, #ffb32f, #ff7418);
  box-shadow: inset -6rpx -8rpx 0 rgba(187, 69, 5, 0.13);
}

.road-icon {
  border-radius: 18rpx;
  background: linear-gradient(180deg, #82bd54, #4a912c);
  box-shadow: inset -6rpx -8rpx 0 rgba(23, 86, 10, 0.14);
}

.quick-copy {
  min-width: 0;
}

.quick-title,
.quick-desc,
.quick-chevron {
  display: block;
}

.quick-title {
  color: #362215;
  font-size: 22rpx;
  font-weight: 800;
  line-height: 27rpx;
  white-space: nowrap;
}

.quick-sub-row {
  display: flex;
  align-items: center;
  margin-top: 4rpx;
}

.quick-desc {
  color: #8b8177;
  font-size: 17rpx;
  line-height: 21rpx;
  white-space: nowrap;
}

.quick-chevron {
  margin-left: 4rpx;
  color: #ff6b19;
  font-size: 23rpx;
  line-height: 20rpx;
}

.mini-section {
  display: flex;
  justify-content: space-between;
  margin-top: 21rpx;
}

.fortune-card,
.mood-card {
  position: relative;
  height: 220rpx;
  overflow: hidden;
  border-radius: 20rpx;
  box-shadow: 0 9rpx 22rpx rgba(93, 57, 24, 0.09);
  box-sizing: border-box;
}

.fortune-card {
  width: 314rpx;
  padding: 20rpx 0 0 24rpx;
  background:
    radial-gradient(circle at 0 100%, rgba(151, 174, 118, 0.28) 0 58rpx, transparent 59rpx),
    linear-gradient(135deg, #fff2d8 0%, #ffe6b9 100%);
}

.fortune-card::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 112rpx;
  height: 112rpx;
  border-radius: 50%;
  background: rgba(255, 244, 222, 0.6);
}

.fortune-diamond {
  position: absolute;
  width: 15rpx;
  height: 15rpx;
  border: 3rpx solid #ff8b22;
  transform: rotate(45deg);
}

.diamond-one {
  top: 24rpx;
  left: 176rpx;
}

.diamond-two {
  top: 32rpx;
  left: 196rpx;
  width: 8rpx;
  height: 8rpx;
}

.fortune-title,
.mood-title,
.section-title,
.challenge-kicker {
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
}

.fortune-title {
  display: block;
  color: #5a3218;
  font-size: 28rpx;
  font-weight: 800;
  line-height: 33rpx;
}

.fortune-copy {
  width: 214rpx;
  margin-top: 11rpx;
  padding: 8rpx 11rpx;
  border-radius: 8rpx;
  background: rgba(255, 255, 255, 0.74);
  color: #674832;
  font-size: 17rpx;
  line-height: 23rpx;
  box-sizing: border-box;
}

.fortune-copy text {
  display: block;
}

.fortune-button {
  display: flex;
  align-items: center;
  width: 106rpx;
  height: 35rpx;
  padding: 0 0 0 17rpx;
  margin: 8rpx 0 0;
  border-radius: 999rpx;
  background: #fffdf8;
  color: #6a3a1d;
  font-size: 18rpx;
  font-weight: 800;
  line-height: 35rpx;
  box-sizing: border-box;
}

.fortune-stamp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rpx;
  height: 18rpx;
  margin-left: 7rpx;
  border-radius: 50%;
  border: 2rpx solid #f48321;
  color: #f48321;
  font-size: 11rpx;
  line-height: 1;
}

.lucky-tag {
  position: absolute;
  right: 35rpx;
  top: -1rpx;
  z-index: 2;
  width: 54rpx;
  height: 112rpx;
  padding-top: 28rpx;
  background: linear-gradient(180deg, #fff3df 0%, #ffe3bb 100%);
  border: 2rpx solid rgba(246, 129, 27, 0.35);
  border-radius: 6rpx 6rpx 29rpx 29rpx;
  box-shadow: 0 7rpx 14rpx rgba(110, 61, 17, 0.12);
  box-sizing: border-box;
  transform: rotate(-3deg);
}

.lucky-tag text {
  display: block;
  color: #71421e;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 29rpx;
  font-weight: 800;
  line-height: 34rpx;
  text-align: center;
}

.tag-ring {
  position: absolute;
  top: 11rpx;
  left: 20rpx;
  width: 13rpx;
  height: 13rpx;
  border: 3rpx solid #df5d13;
  border-radius: 50%;
  background: #fff9ef;
}

.tassel {
  position: absolute;
  right: 30rpx;
  bottom: -3rpx;
  width: 15rpx;
  height: 52rpx;
  border-radius: 999rpx;
  background: #e45515;
  transform: rotate(37deg);
}

.tassel::after {
  content: "";
  position: absolute;
  right: -7rpx;
  bottom: -6rpx;
  width: 10rpx;
  height: 32rpx;
  border-radius: 999rpx;
  background: #dfb12b;
}

.mood-card {
  width: 355rpx;
  padding: 22rpx 0 0 27rpx;
  background:
    radial-gradient(circle at 93% 22%, rgba(159, 202, 112, 0.23) 0 84rpx, transparent 85rpx),
    linear-gradient(135deg, #f9ffe9 0%, #fff8e7 100%);
}

.mood-title {
  display: block;
  color: #47791d;
  font-size: 27rpx;
  font-weight: 800;
  line-height: 32rpx;
}

.mood-subtitle {
  display: block;
  margin-top: 8rpx;
  color: #3f2c1d;
  font-size: 19rpx;
  font-weight: 700;
  line-height: 25rpx;
  white-space: nowrap;
}

.mood-bowl {
  position: absolute;
  right: 13rpx;
  top: 22rpx;
  width: 72rpx;
  height: 46rpx;
  border: 4rpx solid #4f8a2f;
  border-top: 0;
  border-radius: 0 0 45rpx 45rpx;
  background-image:
    url("/static/home/mood-bowl.png"),
    radial-gradient(circle at 42% 31%, #f7a23d 0 8rpx, transparent 9rpx),
    radial-gradient(circle at 63% 38%, #74b44d 0 7rpx, transparent 8rpx),
    linear-gradient(180deg, #fff7d3, #ffffff);
  background-size: cover, auto, auto, auto;
  background-position: center;
  transform: rotate(7deg);
}

.mood-bowl::before {
  content: "";
  position: absolute;
  left: -3rpx;
  top: -12rpx;
  width: 74rpx;
  height: 19rpx;
  border: 4rpx solid #4f8a2f;
  border-radius: 50%;
  background: #fff7d6;
  box-sizing: border-box;
}

.steam {
  position: absolute;
  width: 14rpx;
  height: 19rpx;
  border-left: 4rpx solid #4f8a2f;
  border-radius: 50%;
  transform: rotate(16deg);
}

.steam-one {
  right: 56rpx;
  top: 7rpx;
}

.steam-two {
  right: 40rpx;
  top: 6rpx;
}

.steam-three {
  right: 24rpx;
  top: 9rpx;
}

.mood-list {
  display: flex;
  justify-content: space-between;
  width: 276rpx;
  margin-top: 15rpx;
}

.mood-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7e7267;
  font-size: 16rpx;
  line-height: 21rpx;
}

.mood-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31rpx;
  height: 31rpx;
  margin-bottom: 4rpx;
  border: 1rpx solid rgba(134, 116, 93, 0.18);
  border-radius: 50%;
  color: #9b8d7f;
  background: rgba(255, 255, 255, 0.5);
  font-size: 18rpx;
  line-height: 1;
}

.mood-item.active {
  color: #579239;
  font-weight: 800;
}

.mood-item.active .mood-icon {
  color: #fff;
  background: #83c34e;
  border-color: #83c34e;
}

.recommend-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52rpx;
  margin-top: 13rpx;
}

.title-wrap {
  position: relative;
  display: flex;
  align-items: flex-end;
}

.section-title {
  display: block;
  color: #332115;
  font-size: 34rpx;
  font-weight: 900;
  line-height: 47rpx;
}

.title-decoration {
  color: #f9bd3b;
  font-size: 23rpx;
  font-weight: 900;
}

.left-decoration {
  margin-right: 4rpx;
  transform: rotate(-15deg);
}

.right-decoration {
  margin-left: 8rpx;
  margin-bottom: 17rpx;
}

.refresh-wrap {
  display: flex;
  align-items: center;
  padding-top: 12rpx;
  color: #8c8177;
  font-size: 20rpx;
  line-height: 26rpx;
}

.refresh-icon {
  position: relative;
  width: 19rpx;
  height: 19rpx;
  margin-left: 8rpx;
  border: 3rpx solid #aaa39b;
  border-left-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
}

.refresh-icon::after {
  content: "";
  position: absolute;
  right: -3rpx;
  top: 1rpx;
  width: 7rpx;
  height: 7rpx;
  border-top: 3rpx solid #aaa39b;
  border-right: 3rpx solid #aaa39b;
  transform: rotate(19deg);
}

.recipe-row {
  display: flex;
  justify-content: space-between;
}

.recipe-card {
  width: 218rpx;
  height: 208rpx;
  overflow: hidden;
  border-radius: 14rpx;
  background: #fffdf9;
  box-shadow: 0 8rpx 19rpx rgba(98, 60, 25, 0.1);
}

.recipe-image {
  position: relative;
  height: 118rpx;
  background-size: cover, cover;
  background-position: center;
}

.recipe-pork {
  background-image:
    url("/static/home/recipe-red-braised-pork.png"),
    radial-gradient(circle at 39% 42%, #b73718 0 20%, transparent 21%),
    linear-gradient(135deg, #823513 0%, #e48132 62%, #ffe4a4 100%);
}

.recipe-shrimp {
  background-image:
    url("/static/home/recipe-shrimp-broccoli.png"),
    radial-gradient(circle at 53% 42%, #f2872a 0 18%, transparent 19%),
    radial-gradient(circle at 34% 67%, #315e2c 0 18%, transparent 19%),
    linear-gradient(135deg, #fff1c7 0%, #70a34e 50%, #e47b24 100%);
}

.recipe-soup {
  background-image:
    url("/static/home/recipe-tomato-beef-soup.png"),
    radial-gradient(circle at 51% 55%, #dd4b1e 0 42%, transparent 43%),
    linear-gradient(135deg, #f77b26 0%, #e4451d 62%, #fff0ba 100%);
}

.recipe-badge {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 73rpx;
  height: 30rpx;
  padding: 0 10rpx;
  border-radius: 0 0 9rpx 0;
  background: #ff6b19;
  color: #fff;
  font-size: 18rpx;
  font-weight: 800;
  line-height: 30rpx;
  box-sizing: border-box;
}

.recipe-body {
  padding: 10rpx 12rpx 0;
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

.recipe-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rpx;
}

.recipe-desc {
  display: block;
  max-width: 140rpx;
  color: #8a8177;
  font-size: 18rpx;
  line-height: 24rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.score {
  display: flex;
  align-items: center;
  color: #3f332a;
  font-size: 19rpx;
  font-weight: 600;
  line-height: 24rpx;
}

.star {
  margin-right: 6rpx;
  color: #ffb321;
  font-size: 24rpx;
  line-height: 1;
}

.bottom-cards {
  display: flex;
  justify-content: space-between;
  height: 172rpx;
  margin-top: 18rpx;
  overflow: hidden;
  border: 1rpx solid #ffe0a9;
  border-radius: 24rpx;
  background: #fff7e7;
  box-shadow: 0 10rpx 26rpx rgba(98, 60, 25, 0.08);
}

.challenge-panel {
  position: relative;
  width: 322rpx;
  height: 172rpx;
  padding: 23rpx 0 0 26rpx;
  background:
    radial-gradient(circle at 100% 20%, rgba(255, 232, 174, 0.78) 0 130rpx, transparent 131rpx),
    #fff4dc;
  box-sizing: border-box;
}

.challenge-panel::after {
  content: "";
  position: absolute;
  right: -1rpx;
  top: 0;
  width: 1rpx;
  height: 172rpx;
  background: rgba(246, 199, 119, 0.5);
}

.challenge-kicker {
  display: block;
  color: #5a3218;
  font-size: 28rpx;
  font-weight: 900;
  line-height: 33rpx;
}

.challenge-title {
  display: block;
  margin-top: 4rpx;
  color: #3c2313;
  font-size: 29rpx;
  font-weight: 800;
  line-height: 36rpx;
}

.challenge-desc {
  display: block;
  margin-top: 8rpx;
  color: #6d4a2e;
  font-size: 19rpx;
  line-height: 25rpx;
}

.coin {
  color: #f6a723;
  font-size: 16rpx;
}

.challenge-button {
  width: 144rpx;
  height: 49rpx;
  padding: 0;
  margin: 11rpx 0 0;
  border-radius: 999rpx;
  background: #ff6b19;
  color: #fff;
  font-size: 25rpx;
  font-weight: 800;
  line-height: 49rpx;
}

.chef-illustration {
  position: absolute;
  right: 19rpx;
  bottom: 13rpx;
  width: 96rpx;
  height: 112rpx;
  overflow: hidden;
  border-radius: 36rpx 36rpx 10rpx 10rpx;
  background-image:
    url("/static/home/challenge-chef.png"),
    radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.88) 0 38rpx, transparent 39rpx),
    radial-gradient(circle at 52% 58%, #ffd2a3 0 22rpx, transparent 23rpx),
    linear-gradient(180deg, transparent 0 58%, #69b752 59% 100%);
  background-size: contain, auto, auto, auto;
  background-position: center bottom, center, center, center;
  background-repeat: no-repeat;
}

.chef-illustration::before {
  content: "";
  position: absolute;
  left: 2rpx;
  right: 2rpx;
  bottom: 0;
  height: 14rpx;
  border-radius: 999rpx 999rpx 0 0;
  background: #67b24e;
}

.chef-illustration::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 -18rpx 24rpx rgba(255, 244, 220, 0.2);
  pointer-events: none;
}

.pan-shape {
  position: absolute;
  right: 105rpx;
  bottom: 62rpx;
  width: 24rpx;
  height: 32rpx;
  border: 5rpx solid #75442b;
  border-top-width: 8rpx;
  border-radius: 7rpx;
  transform: rotate(-7deg);
  box-sizing: border-box;
}

.pan-shape::after {
  content: "";
  position: absolute;
  right: -8rpx;
  bottom: -22rpx;
  width: 6rpx;
  height: 26rpx;
  border-radius: 7rpx;
  background: #75442b;
  transform: rotate(-17deg);
}

.challenge-spark {
  position: absolute;
  color: #f3a31c;
  font-size: 22rpx;
}

.spark-one {
  right: 77rpx;
  top: 34rpx;
}

.spark-two {
  right: 30rpx;
  top: 71rpx;
}

.growth-panel {
  width: 364rpx;
  height: 172rpx;
  padding: 27rpx 23rpx 0;
  background: rgba(255, 249, 236, 0.82);
  box-sizing: border-box;
}

.growth-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.growth-top > view {
  display: flex;
  align-items: baseline;
}

.growth-role {
  display: block;
  color: #332115;
  font-size: 23rpx;
  font-weight: 800;
  line-height: 30rpx;
}

.growth-level {
  display: block;
  margin-left: 17rpx;
  color: #ff6b19;
  font-size: 20rpx;
  font-weight: 800;
  line-height: 27rpx;
}

.growth-tip {
  display: block;
  padding-top: 3rpx;
  color: #6e4f34;
  font-size: 17rpx;
  line-height: 24rpx;
}

.progress-row {
  display: flex;
  align-items: center;
  margin-top: 21rpx;
}

.progress-track {
  flex: 1;
  height: 14rpx;
  overflow: hidden;
  border-radius: 999rpx;
  background: #f2dfbe;
}

.progress-fill {
  width: 88%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ff7920, #ff5d13);
}

.progress-text {
  display: block;
  width: 73rpx;
  margin-left: 18rpx;
  color: #8f6647;
  font-size: 17rpx;
  line-height: 22rpx;
  text-align: right;
}

.milestone-row {
  display: flex;
  align-items: flex-start;
  margin-top: 18rpx;
}

.milestone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 79rpx;
}

.milestone-line {
  position: absolute;
  left: -29rpx;
  top: 20rpx;
  width: 49rpx;
  height: 4rpx;
  border-radius: 4rpx;
  background: #f3cd86;
}

.milestone-dot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42rpx;
  height: 42rpx;
  border-radius: 50%;
  border: 2rpx solid #efd9a8;
  background: #fbf1d8;
  color: #b8ab9d;
  font-size: 20rpx;
  font-weight: 800;
  box-sizing: border-box;
}

.milestone-dot.done {
  color: #4ea43b;
  background: #fff6df;
  border-color: #ffd982;
}

.milestone-dot.current {
  color: #ca6710;
  background: #fff2cf;
  border-color: #ffa72c;
}

.milestone-dot.locked {
  color: #b8b0a7;
  background: #eee9df;
  border-color: #ded8ce;
}

.milestone-value {
  display: block;
  margin-top: 7rpx;
  color: #6c5b4d;
  font-size: 17rpx;
  line-height: 22rpx;
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
  border: 4rpx solid currentColor;
  border-radius: 4rpx;
}

.recipe-tab::before,
.recipe-tab::after {
  content: "";
  position: absolute;
  left: 7rpx;
  right: 7rpx;
  height: 3rpx;
  background: currentColor;
}

.recipe-tab::before {
  top: 8rpx;
}

.recipe-tab::after {
  top: 16rpx;
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
.home-page {
  max-width: 750px;
  margin: 0 auto;
}

@media (max-aspect-ratio: 1/2.3) {
  .recommend-header {
    height: 66rpx;
    margin-top: 20rpx;
  }

  .recipe-card {
    height: 300rpx;
  }

  .recipe-image {
    height: 172rpx;
  }

  .recipe-body {
    padding-top: 16rpx;
  }

  .recipe-name {
    font-size: 27rpx;
    line-height: 35rpx;
  }

  .recipe-desc {
    font-size: 20rpx;
    line-height: 28rpx;
  }

  .score {
    font-size: 21rpx;
  }

  .bottom-cards {
    height: 430rpx;
    margin-top: 24rpx;
  }

  .challenge-panel {
    height: 430rpx;
    padding-top: 43rpx;
  }

  .challenge-panel::after {
    height: 430rpx;
  }

  .challenge-kicker {
    font-size: 31rpx;
    line-height: 38rpx;
  }

  .challenge-title {
    margin-top: 8rpx;
    font-size: 33rpx;
    line-height: 42rpx;
  }

  .challenge-desc {
    margin-top: 15rpx;
    font-size: 21rpx;
    line-height: 30rpx;
  }

  .challenge-button {
    width: 164rpx;
    height: 58rpx;
    margin-top: 32rpx;
    font-size: 27rpx;
    line-height: 58rpx;
  }

  .chef-illustration {
    right: 30rpx;
    bottom: 38rpx;
    width: 106rpx;
    height: 124rpx;
  }

  .pan-shape {
    right: 130rpx;
    bottom: 129rpx;
    width: 27rpx;
    height: 36rpx;
  }

  .growth-panel {
    height: 430rpx;
    padding-top: 48rpx;
  }

  .growth-role {
    font-size: 27rpx;
    line-height: 36rpx;
  }

  .growth-level {
    font-size: 23rpx;
    line-height: 31rpx;
  }

  .growth-tip {
    max-width: 146rpx;
    font-size: 20rpx;
    line-height: 29rpx;
    text-align: right;
  }

  .progress-row {
    margin-top: 40rpx;
  }

  .progress-track {
    height: 18rpx;
  }

  .progress-text {
    width: 86rpx;
    font-size: 20rpx;
    line-height: 27rpx;
  }

  .milestone-row {
    margin-top: 48rpx;
  }

  .milestone {
    width: 80rpx;
  }

  .milestone-dot {
    width: 54rpx;
    height: 54rpx;
    font-size: 23rpx;
  }

  .milestone-line {
    top: 26rpx;
  }

  .milestone-value {
    margin-top: 12rpx;
    font-size: 20rpx;
    line-height: 27rpx;
  }
}
/* #endif */
</style>
