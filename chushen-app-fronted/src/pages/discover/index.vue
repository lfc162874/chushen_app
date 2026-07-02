<template>
  <view class="discover-page">
    <view class="page-shell">
      <view class="topbar">
        <view class="brand-block">
          <view class="brand-row">
            <view class="brand-logo">
              <text class="brand-flower">✿</text>
              <text class="brand-text">厨神</text>
              <view class="brand-leaf leaf-one"></view>
              <view class="brand-leaf leaf-two"></view>
            </view>
            <text class="brand-dot">·</text>
            <text class="brand-section">发现</text>
          </view>
          <view class="slogan-row">
            <text class="slogan">做什么，今天更好吃？</text>
            <text class="smile">⌣</text>
          </view>
          <text class="sub-slogan">让灵感来敲门，今晚不再纠结！</text>
        </view>

        <view class="header-actions">
          <button class="header-action" hover-class="button-press">
            <view class="calendar-icon">
              <view class="calendar-ring ring-left"></view>
              <view class="calendar-ring ring-right"></view>
              <view class="calendar-check"></view>
            </view>
            <text>签到</text>
          </button>
          <button class="header-action message-action" hover-class="button-press">
            <view class="message-dot"></view>
            <view class="bubble-icon">
              <view class="bubble-dot dot-one"></view>
              <view class="bubble-dot dot-two"></view>
              <view class="bubble-dot dot-three"></view>
            </view>
            <text>消息</text>
          </button>
        </view>
      </view>

      <view class="recognize-card">
        <view class="chef-talk">
          <text>交给灵感吧！</text>
        </view>
        <view class="chef-illustration">
          <view class="chef-hat"></view>
          <view class="chef-face"></view>
          <view class="chef-body"></view>
          <view class="spoon-stick"></view>
        </view>
        <view class="float-dot dot-red"></view>
        <view class="float-dot dot-green"></view>
        <view class="float-dot dot-yellow"></view>

        <view class="fridge-box">
          <view class="fridge-door-line"></view>
          <view class="shelf shelf-one">
            <view class="food-dot egg-one"></view>
            <view class="food-dot mushroom-one"></view>
            <view class="food-leaf leaf-food-one"></view>
          </view>
          <view class="shelf shelf-two">
            <view class="tomato-shape"></view>
            <view class="lemon-shape"></view>
            <view class="carrot-shape"></view>
          </view>
          <view class="shelf shelf-three">
            <view class="broccoli-shape"></view>
            <view class="pepper-shape"></view>
            <view class="food-leaf leaf-food-two"></view>
          </view>
          <view class="paper-tip">
            <text>冰箱里有什么？</text>
            <text>智能识别推荐</text>
          </view>
          <button class="camera-button" hover-class="button-press">
            <view class="camera-icon"></view>
            <text>拍一拍</text>
          </button>
        </view>

        <view class="recognize-main">
          <text class="recognize-title">根据你常备的食材，智能推荐美味菜谱</text>
          <view class="ingredient-grid">
            <view v-for="item in ingredients" :key="item.name" class="ingredient-card" :class="item.className">
              <view class="ingredient-visual"><text>{{ item.symbol }}</text></view>
              <text class="ingredient-name">{{ item.name }}</text>
            </view>
            <view class="ingredient-card more-card">
              <view class="ingredient-visual"><text>＋</text></view>
              <text class="ingredient-name">更多</text>
            </view>
          </view>

          <text class="taste-title">想吃什么风味？</text>
          <view class="taste-row">
            <view v-for="taste in tastes" :key="taste" class="taste-pill" :class="{ active: taste === '下饭' }">
              <text>{{ taste }}</text>
            </view>
            <view class="taste-pill"><text>更多⌄</text></view>
          </view>
        </view>
      </view>

      <view class="ai-card section-card">
        <view class="section-header">
          <view>
            <view class="section-title-row">
              <text class="section-title">AI 智能推荐</text>
              <text class="spark">✧</text>
            </view>
            <text class="section-subtitle">为你量身定制的美味灵感</text>
          </view>
          <view class="refresh-wrap">
            <text>换一批</text>
            <view class="refresh-icon"></view>
          </view>
        </view>
        <scroll-view scroll-x class="ai-scroll" :show-scrollbar="false">
          <view class="ai-list">
            <view v-for="item in aiTags" :key="item.title" class="ai-item" :class="item.className">
              <view class="ai-visual"><text>{{ item.symbol }}</text></view>
              <view class="ai-copy">
                <text class="ai-title">{{ item.title }}</text>
                <text class="ai-desc">{{ item.desc }}</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="roulette-card section-card">
        <view class="roulette-copy">
          <text class="roulette-title">灵感转盘</text>
          <text class="roulette-desc">转一转，发现惊喜美味</text>
          <button class="spin-button" hover-class="button-press">
            <text>转动转盘</text>
            <text class="button-arrow">›</text>
          </button>
          <text class="remain-text">今日剩余 3 次</text>
        </view>

        <view class="wheel-wrap">
          <text class="dish-label label-top">番茄炖牛腩</text>
          <text class="dish-label label-right">酸辣土豆丝</text>
          <text class="dish-label label-left-bottom">香煎鸡胸肉</text>
          <text class="dish-label label-right-bottom">清炒时蔬</text>
          <view class="location-pin"></view>
          <view class="center-dish">
            <view class="dish-plate">
              <view class="shrimp-shape shrimp-one"></view>
              <view class="shrimp-shape shrimp-two"></view>
              <view class="broccoli-mini mini-one"></view>
              <view class="broccoli-mini mini-two"></view>
            </view>
            <text>蒜蓉虾仁西兰花</text>
          </view>
        </view>

        <view class="note-card">
          <view class="tape"></view>
          <text>换个组合</text>
          <text>也很美味哦~</text>
          <text class="note-smile">⌣</text>
        </view>
      </view>

      <view class="picked-block">
        <view class="picked-head">
          <view class="title-wrap">
            <text class="title-decoration">⌁</text>
            <text class="picked-title">为你精选 3 道灵感菜</text>
            <text class="title-decoration">♡</text>
          </view>
          <text class="more-link">更多推荐 ›</text>
        </view>

        <view class="recipe-row">
          <view v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
            <view class="recipe-image" :class="recipe.className">
              <text class="recipe-badge">{{ recipe.badge }}</text>
              <view class="dish-highlight"></view>
            </view>
            <view class="recipe-body">
              <text class="recipe-name">{{ recipe.name }}</text>
              <text class="recipe-desc">{{ recipe.desc }}</text>
              <view class="recipe-meta">
                <view class="duration">
                  <view class="small-clock"></view>
                  <text>{{ recipe.time }}</text>
                </view>
                <text class="recipe-type">{{ recipe.type }}</text>
                <view class="rating">
                  <text class="star">★</text>
                  <text>{{ recipe.score }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="random-card section-card">
        <view class="random-copy">
          <text class="random-title">没灵感？交给厨神决定！</text>
          <text class="random-desc">一键随机推荐，惊喜菜谱马上来</text>
        </view>
        <view class="random-chef">
          <view class="chef-hat small"></view>
          <view class="chef-face small-face"></view>
          <view class="tray"></view>
        </view>
        <view class="random-action">
          <button hover-class="button-press">
            <text>随机推荐</text>
            <text class="button-arrow">›</text>
          </button>
          <text>今日剩余 3 次</text>
        </view>
      </view>
    </view>

    <AppTabBar active="discover" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";

const ingredients = [
  { name: "鸡蛋", symbol: "蛋", className: "egg-card" },
  { name: "番茄", symbol: "茄", className: "tomato-card" },
  { name: "青菜", symbol: "菜", className: "green-card" },
  { name: "鸡胸肉", symbol: "肉", className: "chicken-card" },
  { name: "豆腐", symbol: "腐", className: "tofu-card" },
];

const tastes = ["下饭", "快手", "低脂", "一人食", "宴客"];

const aiTags = [
  { title: "最近常做", desc: "换点新口味", symbol: "锅", className: "ai-pan" },
  { title: "天气变热", desc: "清爽开胃菜", symbol: "晴", className: "ai-sun" },
  { title: "想吃肉", desc: "满足口腹之欲", symbol: "肉", className: "ai-meat" },
  { title: "孩子爱吃", desc: "营养又好吃", symbol: "宝", className: "ai-baby" },
  { title: "减脂计划", desc: "低卡美味", symbol: "轻", className: "ai-light" },
];

const recipes = [
  { name: "黄焖鸡米饭", desc: "酱香浓郁，米饭杀手", time: "25分钟", type: "下饭", score: "4.9", badge: "下饭首选", className: "rice-chicken" },
  { name: "青瓜虾仁沙拉", desc: "低脂高蛋白，清爽开胃", time: "15分钟", type: "低脂", score: "4.8", badge: "清爽快手", className: "shrimp-salad" },
  { name: "菌菇豆腐汤", desc: "鲜美暖胃，简单营养", time: "20分钟", type: "快手", score: "4.8", badge: "暖心汤羹", className: "tofu-soup" },
];
</script>

<style scoped>
.discover-page {
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
  min-height: 170rpx;
}

.brand-row,
.slogan-row,
.header-actions,
.section-header,
.picked-head,
.title-wrap,
.recipe-meta,
.duration,
.rating,
.random-action button,
.spin-button,
.camera-button,
.refresh-wrap {
  display: flex;
  align-items: center;
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

.brand-dot {
  margin: 0 10rpx 0 4rpx;
  color: #d8a46c;
  font-size: 42rpx;
  line-height: 72rpx;
}

.brand-section {
  color: #7b4f2f;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 34rpx;
  font-weight: 800;
  line-height: 72rpx;
}

.slogan-row {
  padding-left: 34rpx;
  margin-top: 6rpx;
}

.slogan {
  color: #22170f;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 38rpx;
  font-weight: 800;
  line-height: 44rpx;
}

.smile {
  margin-left: 10rpx;
  color: #22170f;
  font-size: 28rpx;
  font-weight: 700;
}

.sub-slogan {
  display: block;
  padding-left: 34rpx;
  margin-top: 10rpx;
  color: #7a5840;
  font-size: 24rpx;
  letter-spacing: 1rpx;
}

.header-actions {
  padding-top: 6rpx;
}

.header-action {
  position: relative;
  width: 70rpx;
  height: 80rpx;
  padding: 8rpx 0 0;
  margin-left: 24rpx;
  border-radius: 25rpx;
  background: rgba(255, 253, 247, 0.78);
  color: #3a2115;
  font-size: 22rpx;
  font-weight: 700;
  line-height: 26rpx;
  box-shadow: 0 8rpx 24rpx rgba(112, 68, 25, 0.08);
  box-sizing: border-box;
}

.header-action::after,
.camera-button::after,
.spin-button::after,
.random-action button::after {
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

.ring-left { left: 5rpx; }
.ring-right { right: 5rpx; }

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
  background: #fffdf8;
  transform: rotate(45deg);
}

.bubble-dot {
  position: absolute;
  top: 10rpx;
  width: 4rpx;
  height: 4rpx;
  border-radius: 50%;
  background: #422417;
}

.dot-one { left: 7rpx; }
.dot-two { left: 14rpx; }
.dot-three { left: 21rpx; }

.message-dot {
  position: absolute;
  top: 8rpx;
  right: 14rpx;
  width: 14rpx;
  height: 14rpx;
  border-radius: 50%;
  background: #ff6b19;
}

.recognize-card,
.section-card,
.recipe-card,
.random-card {
  position: relative;
  border-radius: 30rpx;
  background: rgba(255, 253, 247, 0.92);
  box-shadow: 0 12rpx 28rpx rgba(109, 64, 22, 0.11);
  box-sizing: border-box;
}

.recognize-card {
  display: grid;
  grid-template-columns: 248rpx 1fr;
  gap: 22rpx;
  min-height: 334rpx;
  padding: 18rpx;
  overflow: hidden;
  background: linear-gradient(135deg, #fff3df 0%, #fffdf7 60%, #fff1d8 100%);
}

.fridge-box {
  position: relative;
  height: 300rpx;
  padding: 18rpx 12rpx;
  overflow: hidden;
  border-radius: 28rpx;
  background: linear-gradient(90deg, #d6dcde, #f7f1e5 45%, #d9dee0);
  box-shadow: inset 0 0 0 7rpx rgba(255,255,255,.7), inset -26rpx 0 0 rgba(190, 199, 201, .65);
  box-sizing: border-box;
}

.fridge-door-line {
  position: absolute;
  left: 62%;
  top: 16rpx;
  bottom: 16rpx;
  width: 3rpx;
  background: rgba(111, 122, 123, 0.22);
}

.shelf {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10rpx;
  height: 70rpx;
  margin-bottom: 12rpx;
  padding: 8rpx 12rpx;
  border-radius: 20rpx;
  background: rgba(255, 255, 255, 0.42);
  box-sizing: border-box;
}

.food-dot,
.float-dot {
  border-radius: 50%;
}

.egg-one {
  width: 31rpx;
  height: 38rpx;
  border-radius: 50% 50% 45% 45%;
  background: #fff3cf;
  box-shadow: 17rpx 2rpx 0 #f3d19c;
}

.mushroom-one {
  width: 40rpx;
  height: 26rpx;
  border-radius: 50% 50% 35% 35%;
  background: #d9ad7b;
}

.food-leaf {
  width: 42rpx;
  height: 26rpx;
  border-radius: 50% 0 50% 0;
  background: #91b95d;
  transform: rotate(-18deg);
}

.tomato-shape,
.lemon-shape,
.carrot-shape,
.broccoli-shape,
.pepper-shape {
  position: relative;
  width: 36rpx;
  height: 36rpx;
  border-radius: 50%;
}

.tomato-shape { background: #ef5c2f; }
.lemon-shape { background: #f4c45c; }
.carrot-shape { border-radius: 8rpx 50% 50% 8rpx; background: #f08a2d; transform: rotate(-20deg); }
.broccoli-shape { background: #6ba94f; box-shadow: 15rpx -5rpx 0 #82bd61, 28rpx 1rpx 0 #72aa54; }
.pepper-shape { border-radius: 45% 45% 50% 50%; background: #75a63d; }

.paper-tip {
  position: absolute;
  right: 14rpx;
  top: 108rpx;
  width: 148rpx;
  padding: 14rpx 10rpx;
  border-radius: 8rpx;
  background: #fff7e6;
  box-shadow: 0 10rpx 24rpx rgba(151, 95, 43, 0.2);
  transform: rotate(-3deg);
}

.paper-tip text {
  display: block;
  color: #6b4b35;
  font-size: 20rpx;
  line-height: 32rpx;
}

.camera-button {
  position: absolute;
  right: 16rpx;
  bottom: 20rpx;
  display: flex;
  align-items: center;
  height: 58rpx;
  padding: 0 22rpx;
  border-radius: 22rpx;
  background: #ff6b19;
  color: #fff;
  font-size: 23rpx;
  font-weight: 800;
  line-height: 58rpx;
  box-shadow: 0 12rpx 22rpx rgba(255, 105, 0, 0.25);
}

.camera-icon {
  position: relative;
  width: 25rpx;
  height: 20rpx;
  margin-right: 8rpx;
  border: 3rpx solid #fff;
  border-radius: 6rpx;
}

.camera-icon::after {
  content: "";
  position: absolute;
  left: 7rpx;
  top: 4rpx;
  width: 7rpx;
  height: 7rpx;
  border: 3rpx solid #fff;
  border-radius: 50%;
}

.recognize-main {
  padding: 16rpx 6rpx 2rpx;
}

.recognize-title,
.taste-title,
.section-subtitle,
.ai-title,
.ai-desc,
.roulette-title,
.roulette-desc,
.remain-text,
.picked-title,
.more-link,
.recipe-name,
.recipe-desc,
.random-title,
.random-desc {
  display: block;
}

.recognize-title,
.taste-title {
  color: #6f5039;
  font-size: 24rpx;
  font-weight: 800;
}

.ingredient-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rpx;
  margin-top: 16rpx;
}

.ingredient-card {
  height: 86rpx;
  border-radius: 22rpx;
  background: #fffaf2;
  box-shadow: inset 0 0 0 2rpx #f0ddc7, 0 8rpx 16rpx rgba(151, 90, 28, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ingredient-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38rpx;
  height: 38rpx;
  border-radius: 14rpx;
  color: #fff;
  font-size: 20rpx;
  font-weight: 900;
}

.egg-card .ingredient-visual { background: #e7b56f; }
.tomato-card .ingredient-visual { background: #ee6939; }
.green-card .ingredient-visual { background: #76a954; }
.chicken-card .ingredient-visual { background: #d9865f; }
.tofu-card .ingredient-visual { background: #d7b486; }
.more-card .ingredient-visual { background: #c78c54; }

.ingredient-name {
  margin-top: 4rpx;
  color: #62442f;
  font-size: 20rpx;
  font-weight: 800;
}

.taste-title {
  margin-top: 17rpx;
}

.taste-row {
  display: flex;
  gap: 10rpx;
  flex-wrap: wrap;
  margin-top: 12rpx;
}

.taste-pill {
  height: 54rpx;
  min-width: 82rpx;
  padding: 0 20rpx;
  border-radius: 30rpx;
  background: #fffaf2;
  color: #775c47;
  text-align: center;
  line-height: 54rpx;
  box-shadow: inset 0 0 0 2rpx #eedbc7;
  font-size: 23rpx;
  font-weight: 800;
  box-sizing: border-box;
}

.taste-pill.active {
  background: #ff6b19;
  color: #fff;
  box-shadow: 0 12rpx 24rpx rgba(255, 107, 0, 0.22);
}

.chef-talk {
  position: absolute;
  right: 135rpx;
  top: -8rpx;
  z-index: 3;
  padding: 12rpx 18rpx;
  border-radius: 26rpx 26rpx 26rpx 6rpx;
  background: #fff;
  color: #8b674d;
  font-size: 21rpx;
  box-shadow: 0 12rpx 26rpx rgba(201, 142, 80, 0.2);
}

.chef-illustration {
  position: absolute;
  right: 34rpx;
  top: 20rpx;
  z-index: 2;
  width: 94rpx;
  height: 104rpx;
}

.chef-hat,
.chef-face,
.chef-body,
.spoon-stick,
.tray {
  position: absolute;
}

.chef-hat {
  left: 11rpx;
  top: 0;
  width: 58rpx;
  height: 35rpx;
  border-radius: 24rpx 24rpx 12rpx 12rpx;
  background: #fff;
  box-shadow: -12rpx 8rpx 0 #fff, 14rpx 7rpx 0 #fff;
}

.chef-face {
  left: 16rpx;
  top: 30rpx;
  width: 55rpx;
  height: 50rpx;
  border-radius: 50%;
  background: #ffd7ae;
}

.chef-face::before,
.chef-face::after {
  content: "";
  position: absolute;
  top: 20rpx;
  width: 5rpx;
  height: 5rpx;
  border-radius: 50%;
  background: #3b2415;
}

.chef-face::before { left: 16rpx; }
.chef-face::after { right: 16rpx; }

.chef-body {
  left: 18rpx;
  top: 76rpx;
  width: 52rpx;
  height: 32rpx;
  border-radius: 18rpx 18rpx 8rpx 8rpx;
  background: #ffffff;
  box-shadow: inset 0 -8rpx 0 #f3bd6d;
}

.spoon-stick {
  right: 5rpx;
  top: 50rpx;
  width: 5rpx;
  height: 48rpx;
  border-radius: 6rpx;
  background: #a86c32;
  transform: rotate(-30deg);
}

.float-dot {
  position: absolute;
  z-index: 1;
}

.dot-red { right: 192rpx; top: 76rpx; width: 28rpx; height: 28rpx; background: #ef5c2f; }
.dot-green { right: 34rpx; top: 150rpx; width: 20rpx; height: 20rpx; background: #86b55e; }
.dot-yellow { right: 246rpx; top: 35rpx; width: 16rpx; height: 16rpx; background: #f5b84c; }

.section-card {
  margin-top: 24rpx;
  padding: 24rpx;
}

.section-header {
  justify-content: space-between;
}

.section-title-row {
  display: flex;
  align-items: center;
}

.section-title {
  color: #332217;
  font-size: 36rpx;
  font-weight: 900;
}

.spark {
  margin-left: 8rpx;
  color: #f6a341;
  font-size: 28rpx;
}

.section-subtitle {
  margin-top: 6rpx;
  color: #b18c6f;
  font-size: 22rpx;
}

.refresh-wrap {
  color: #9a785c;
  font-size: 24rpx;
}

.refresh-icon {
  position: relative;
  width: 24rpx;
  height: 24rpx;
  margin-left: 8rpx;
  border: 3rpx solid currentColor;
  border-left-color: transparent;
  border-radius: 50%;
}

.refresh-icon::after {
  content: "";
  position: absolute;
  right: -2rpx;
  top: -5rpx;
  width: 8rpx;
  height: 8rpx;
  border-top: 3rpx solid currentColor;
  border-right: 3rpx solid currentColor;
  transform: rotate(20deg);
}

.ai-scroll {
  width: 100%;
  margin-top: 22rpx;
  white-space: nowrap;
}

.ai-list {
  display: flex;
  gap: 12rpx;
}

.ai-item {
  display: inline-flex;
  align-items: center;
  width: 128rpx;
  min-height: 112rpx;
  padding: 12rpx 8rpx;
  border-radius: 22rpx;
  background: #fffaf2;
  box-shadow: inset 0 0 0 2rpx #efdcc8;
  box-sizing: border-box;
}

.ai-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 39rpx;
  width: 39rpx;
  height: 39rpx;
  margin-right: 7rpx;
  border-radius: 14rpx;
  color: #fff;
  font-size: 19rpx;
  font-weight: 900;
}

.ai-pan .ai-visual { background: #e4a14e; }
.ai-sun .ai-visual { background: #f7b84e; }
.ai-meat .ai-visual { background: #d96945; }
.ai-baby .ai-visual { background: #9ac46c; }
.ai-light .ai-visual { background: #7fb25d; }

.ai-title {
  color: #5e402a;
  font-size: 21rpx;
  font-weight: 900;
  white-space: nowrap;
}

.ai-desc {
  margin-top: 6rpx;
  color: #a17d61;
  font-size: 18rpx;
  white-space: nowrap;
}

.roulette-card {
  display: grid;
  grid-template-columns: 206rpx 1fr 110rpx;
  gap: 16rpx;
  min-height: 318rpx;
  align-items: center;
  background: linear-gradient(135deg, #fff4d9, #fffdf4 45%, #fff1d5);
}

.roulette-title {
  color: #342114;
  font-family: "Kaiti SC", "STKaiti", "KaiTi", serif;
  font-size: 48rpx;
  font-weight: 900;
}

.roulette-desc {
  margin-top: 12rpx;
  color: #805d42;
  font-size: 24rpx;
}

.spin-button {
  justify-content: center;
  width: 168rpx;
  height: 68rpx;
  padding: 0;
  margin: 22rpx 0 0;
  border-radius: 34rpx;
  background: #ff6b19;
  color: #fff;
  font-size: 25rpx;
  font-weight: 900;
  line-height: 68rpx;
  box-shadow: 0 16rpx 30rpx rgba(255, 111, 0, 0.24);
}

.button-arrow {
  margin-left: 8rpx;
  font-size: 34rpx;
  line-height: 1;
}

.remain-text {
  margin-top: 18rpx;
  color: #9f795e;
  font-size: 22rpx;
}

.wheel-wrap {
  position: relative;
  height: 260rpx;
  border-radius: 999rpx;
  background: conic-gradient(from -35deg, #ffe3bd, #fff 28%, #ffe7c8 50%, #fff 72%, #ffe2b8);
  box-shadow: inset 0 0 0 13rpx rgba(255,255,255,.7), 0 16rpx 34rpx rgba(160,102,42,.17);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dish-label {
  position: absolute;
  padding: 5rpx 12rpx;
  border-radius: 28rpx;
  background: rgba(255,255,255,.65);
  color: #9a6f4b;
  font-size: 19rpx;
}

.label-top { top: 8rpx; }
.label-right { right: -10rpx; top: 66rpx; }
.label-left-bottom { left: -22rpx; bottom: 38rpx; }
.label-right-bottom { right: 0; bottom: 28rpx; }

.location-pin {
  position: absolute;
  top: -28rpx;
  width: 42rpx;
  height: 42rpx;
  border-radius: 50% 50% 50% 0;
  background: #ff6b19;
  transform: rotate(-45deg);
  box-shadow: 0 8rpx 14rpx rgba(255, 107, 25, 0.25);
}

.location-pin::after {
  content: "";
  position: absolute;
  left: 12rpx;
  top: 12rpx;
  width: 18rpx;
  height: 18rpx;
  border-radius: 50%;
  background: #fff5dd;
}

.center-dish {
  width: 178rpx;
  height: 178rpx;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 12rpx 32rpx rgba(139,89,39,.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.dish-plate {
  position: relative;
  width: 112rpx;
  height: 74rpx;
  border-radius: 50%;
  background: #f7f1dc;
}

.shrimp-shape,
.broccoli-mini {
  position: absolute;
}

.shrimp-shape {
  width: 34rpx;
  height: 22rpx;
  border-radius: 50% 50% 50% 8rpx;
  background: #f09b54;
}

.shrimp-one { left: 20rpx; top: 20rpx; transform: rotate(20deg); }
.shrimp-two { right: 18rpx; top: 25rpx; transform: rotate(-18deg); }

.broccoli-mini {
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
  background: #72ad57;
}

.mini-one { left: 50rpx; top: 15rpx; }
.mini-two { left: 42rpx; bottom: 10rpx; }

.center-dish text {
  width: 140rpx;
  margin-top: 6rpx;
  color: #704b33;
  font-size: 20rpx;
  font-weight: 900;
  line-height: 25rpx;
}

.note-card {
  position: relative;
  align-self: stretch;
  padding: 38rpx 10rpx;
  border-radius: 18rpx;
  background: #fff9e9;
  text-align: center;
  line-height: 1.8;
  box-shadow: inset 0 0 0 2rpx #efd8bd;
  transform: rotate(-1deg);
}

.tape {
  position: absolute;
  left: 28rpx;
  top: -12rpx;
  width: 42rpx;
  height: 22rpx;
  background: rgba(217, 160, 88, 0.24);
  transform: rotate(-9deg);
}

.note-card text {
  display: block;
  color: #805d42;
  font-size: 22rpx;
}

.note-smile {
  font-size: 24rpx;
}

.picked-head {
  justify-content: space-between;
  margin: 34rpx 8rpx 18rpx;
}

.picked-title {
  color: #332217;
  font-size: 34rpx;
  font-weight: 900;
}

.title-decoration {
  margin: 0 8rpx;
  color: #e9a14f;
  font-size: 28rpx;
}

.more-link {
  color: #a17b60;
  font-size: 24rpx;
}

.recipe-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16rpx;
}

.recipe-card {
  overflow: hidden;
}

.recipe-image {
  position: relative;
  height: 158rpx;
  overflow: hidden;
  background: linear-gradient(135deg, #bd6b32, #fff1cf);
}

.recipe-badge {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 8rpx 14rpx;
  border-radius: 0 0 18rpx 0;
  background: #ff6b19;
  color: #fff;
  font-size: 20rpx;
  font-weight: 900;
}

.dish-highlight {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120rpx;
  height: 88rpx;
  border-radius: 50%;
  background: rgba(255,255,255,.68);
  transform: translate(-50%, -50%);
  box-shadow: inset 0 -18rpx 0 rgba(247, 183, 80, .32);
}

.rice-chicken { background: linear-gradient(135deg, #a94720, #e8893e); }
.shrimp-salad { background: linear-gradient(135deg, #79aa4f, #f5ce79); }
.tofu-soup { background: linear-gradient(135deg, #e5bf80, #fff4ce); }

.recipe-body {
  padding: 16rpx;
}

.recipe-name {
  color: #332217;
  font-size: 27rpx;
  font-weight: 900;
}

.recipe-desc {
  height: 58rpx;
  margin-top: 9rpx;
  color: #8b6b52;
  font-size: 22rpx;
  line-height: 1.35;
}

.recipe-meta {
  gap: 8rpx;
  margin-top: 8rpx;
  color: #80614b;
  font-size: 18rpx;
}

.small-clock {
  position: relative;
  width: 20rpx;
  height: 20rpx;
  margin-right: 5rpx;
  border: 3rpx solid currentColor;
  border-radius: 50%;
  box-sizing: border-box;
}

.small-clock::before {
  content: "";
  position: absolute;
  left: 7rpx;
  top: 3rpx;
  width: 3rpx;
  height: 7rpx;
  background: currentColor;
}

.recipe-type {
  color: #78a047;
}

.rating {
  margin-left: auto;
  color: #e89a16;
  font-weight: 900;
}

.star {
  margin-right: 3rpx;
}

.random-card {
  display: grid;
  grid-template-columns: 1fr 96rpx 214rpx;
  gap: 12rpx;
  align-items: center;
  margin-top: 26rpx;
  padding: 26rpx;
  background: linear-gradient(135deg, #fff6df, #ffedbf);
}

.random-title {
  color: #332217;
  font-size: 34rpx;
  font-weight: 900;
}

.random-desc {
  margin-top: 10rpx;
  color: #8b674e;
  font-size: 22rpx;
}

.random-chef {
  position: relative;
  width: 86rpx;
  height: 86rpx;
}

.chef-hat.small {
  left: 14rpx;
  top: 0;
  transform: scale(.8);
}

.small-face {
  left: 18rpx;
  top: 28rpx;
  transform: scale(.84);
}

.tray {
  right: -8rpx;
  bottom: 8rpx;
  width: 52rpx;
  height: 18rpx;
  border-radius: 50%;
  background: #9b8b7c;
}

.random-action button {
  justify-content: center;
  width: 184rpx;
  height: 72rpx;
  padding: 0;
  border-radius: 38rpx;
  background: #ff6b19;
  color: #fff;
  font-size: 25rpx;
  font-weight: 900;
  line-height: 72rpx;
  box-shadow: 0 14rpx 28rpx rgba(255,111,0,.22);
}

.random-action > text {
  display: block;
  margin-top: 8rpx;
  color: #8b674e;
  text-align: center;
  font-size: 20rpx;
}
</style>
