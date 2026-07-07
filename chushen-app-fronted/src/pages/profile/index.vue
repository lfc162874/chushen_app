<template>
  <view class="profile-page">
    <view class="page-shell">
      <view class="topbar">
        <view class="brand-block">
          <view class="brand-logo">
            <text class="brand-flower">✿</text>
            <text class="brand-text">厨神</text>
            <view class="brand-leaf leaf-one"></view>
            <view class="brand-leaf leaf-two"></view>
          </view>
        </view>
        <view class="header-actions">
          <button class="header-action" hover-class="button-press">
            <view class="rank-icon"><view class="rank-cup"></view></view>
            <text>排行榜</text>
          </button>
          <button class="header-action" hover-class="button-press">
            <view class="share-icon"><view class="share-dot one"></view><view class="share-dot two"></view><view class="share-dot three"></view></view>
            <text>分享</text>
          </button>
        </view>
      </view>

      <view class="title-hero">
        <text class="spark left">✦</text>
        <text class="hero-title">厨神之路</text>
        <text class="spark right">✧</text>
        <text class="hero-subtitle">每一道菜，都是成长的印记 ♡</text>
      </view>

      <view class="level-card card-panel">
        <view class="avatar-wrap">
          <image class="avatar-img" src="/static/profile/chef-avatar.svg" mode="aspectFit" />
        </view>
        <view class="level-main">
          <view class="level-row">
            <text class="level-text">Lv.12</text>
            <text class="role-name">厨神学徒</text>
            <view class="title-badge"><text>称号 ›</text></view>
          </view>
          <text class="exp-tip">距离升级还差 120 经验</text>
          <view class="progress-line"><view class="progress-fill"></view></view>
          <view class="progress-meta"><text>下一级别：Lv.13 料理新星 ♛</text><text>880 / 1000</text></view>
        </view>
        <view class="quote-card">
          <view class="clip"></view>
          <text>热爱可抵</text>
          <text>岁月漫长，</text>
          <text>美食可抵</text>
          <text>人间风霜。</text>
          <text class="quote-smile">⌣</text>
        </view>
      </view>

      <view class="stats-card card-panel">
        <view v-for="item in stats" :key="item.label" class="stat-item">
          <image v-if="item.asset" class="stat-asset" :src="item.asset" mode="aspectFit" />
          <view v-else class="stat-icon" :class="item.iconClass"><text>{{ item.icon }}</text></view>
          <text class="stat-label">{{ item.label }}</text>
          <view class="stat-value-row"><text class="stat-value">{{ item.value }}</text><text class="stat-unit">{{ item.unit }}</text></view>
        </view>
      </view>

      <view class="growth-card card-panel">
        <view class="section-title-row">
          <text class="section-title">成长地图</text>
          <view class="stage-badge"><text>当前阶段</text></view>
        </view>
        <scroll-view scroll-x class="growth-scroll" :show-scrollbar="false">
          <view class="growth-road">
            <view class="road-dash"></view>
            <view v-for="item in growthSteps" :key="item.name" class="growth-step" :class="{ current: item.current, locked: item.locked }">
              <view class="step-platform">
                <image v-if="item.asset" class="step-asset" :src="item.asset" mode="aspectFit" />
                <text v-else>{{ item.icon }}</text>
                <view v-if="item.locked" class="lock-mark">锁</view>
              </view>
              <text class="step-name">{{ item.name }}</text>
              <text class="step-level">{{ item.level }}</text>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="middle-grid">
        <view class="task-card card-panel">
          <view class="card-head"><text class="block-title">本周任务</text><text class="time-tip">刷新倒计时：3天 12:45:30</text></view>
          <view v-for="task in tasks" :key="task.title" class="task-item">
            <view class="task-icon"><text>{{ task.icon }}</text></view>
            <view class="task-copy">
              <text class="task-title">{{ task.title }}</text>
              <text class="task-desc">{{ task.desc }}</text>
            </view>
            <view class="task-right"><text>{{ task.done }}</text><text class="task-exp">★ {{ task.exp }}</text></view>
          </view>
          <view class="task-footer"><text>完成全部任务可额外获得</text><text class="gift-text">🎁 +120 经验</text></view>
        </view>

        <view class="side-column">
          <view class="achievement-card card-panel">
            <view class="card-head"><text class="block-title">我的成就</text><text class="more-text">查看全部 ›</text></view>
            <view class="badge-row">
              <view v-for="badge in badges" :key="badge.name" class="badge-item" :class="{ locked: badge.locked }">
                <image class="badge-img" src="/static/profile/badge-gold.svg" mode="aspectFit" />
                <text class="badge-name">{{ badge.name }}</text>
                <text class="badge-date">{{ badge.date }}</text>
              </view>
            </view>
          </view>

          <view class="title-card card-panel">
            <view class="card-head"><text class="block-title">我的称号</text><text class="more-text">全部称号 ›</text></view>
            <view class="title-ticket">
              <text class="title-name">家常暖心人</text>
              <view class="using-badge"><text>使用中</text></view>
              <text class="title-desc">累计获得 1000 个爱心</text>
            </view>
          </view>
        </view>
      </view>

      <view class="streak-card card-panel">
        <view class="streak-head">
          <text class="streak-title">连续烹饪打卡</text>
          <view class="streak-pill"><text>连续15天，获得神秘奖励！</text></view>
        </view>
        <scroll-view scroll-x class="streak-scroll" :show-scrollbar="false">
          <view class="streak-row">
            <view v-for="day in streakDays" :key="day.label" class="day-item" :class="{ today: day.today, reward: day.reward }">
              <view class="day-circle"><text>{{ day.icon }}</text></view>
              <text>{{ day.label }}</text>
            </view>
            <view class="big-reward">
              <image class="gift-img" src="/static/profile/gift.svg" mode="aspectFit" />
              <text>第20天大奖</text>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="bottom-banner">
        <image class="mini-chef" src="/static/profile/chef-avatar.svg" mode="aspectFit" />
        <text>每一次下厨，都是向厨神更进一步！</text>
        <button hover-class="button-press">发布菜谱</button>
      </view>
    </view>

    <AppTabBar active="profile" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";

const stats = [
  { label: "总经验", value: "8,880", unit: "✦", asset: "/static/profile/badge-gold.svg" },
  { label: "连续烹饪", value: "15", unit: "天 🔥", icon: "日", iconClass: "calendar-stat" },
  { label: "获得勋章", value: "24", unit: "枚", asset: "/static/profile/badge-gold.svg" },
  { label: "解锁菜谱", value: "68", unit: "道", icon: "谱", iconClass: "book-stat" },
];

const growthSteps = [
  { name: "厨房新秀", level: "Lv.1", icon: "蛋" },
  { name: "家常能手", level: "Lv.5", icon: "锅" },
  { name: "美食达人", level: "Lv.10", icon: "菜" },
  { name: "料理高手", level: "Lv.15", icon: "厨", current: true },
  { name: "厨神大师", level: "Lv.20", asset: "/static/profile/trophy.svg", locked: true },
];

const tasks = [
  { title: "发布3道菜谱", desc: "分享美食，帮助更多厨友", done: "2/3", exp: "+80 经验", icon: "单" },
  { title: "获得20次点赞", desc: "用美味赢得认可", done: "12/20", exp: "+60 经验", icon: "赞" },
  { title: "尝试3种新菜式", desc: "挑战新口味，解锁新灵感", done: "1/3", exp: "+80 经验", icon: "新" },
];

const badges = [
  { name: "初露锋芒", date: "2024.05.01" },
  { name: "人气之星", date: "2024.05.10" },
  { name: "坚持不懈", date: "2024.05.18" },
  { name: "敬请期待", date: "", locked: true },
];

const streakDays = [
  { label: "第11天", icon: "✓" },
  { label: "第12天", icon: "✓" },
  { label: "第13天", icon: "✓" },
  { label: "第14天", icon: "✓" },
  { label: "今天", icon: "厨", today: true },
  { label: "第16天", icon: "礼", reward: true },
  { label: "第17天", icon: "礼", reward: true },
];
</script>

<style scoped>
.profile-page{min-height:100vh;background:radial-gradient(circle at 90% 5%,rgba(255,235,190,.9) 0,rgba(255,235,190,0) 300rpx),linear-gradient(180deg,#fff5df 0%,#fffaf2 58%,#fff7ed 100%);color:#342114;box-sizing:border-box;overflow-x:hidden}.page-shell{position:relative;width:750rpx;min-height:100vh;padding:24rpx 32rpx 150rpx;margin:0 auto;box-sizing:border-box;overflow:hidden}.topbar,.brand-row,.header-actions,.section-title-row,.level-row,.progress-meta,.stats-card,.stat-item,.card-head,.task-item,.task-footer,.streak-head,.streak-row,.bottom-banner,.random-row{display:flex;align-items:center}.topbar{justify-content:space-between;min-height:102rpx}.brand-logo{position:relative;width:168rpx;height:82rpx}.brand-flower{position:absolute;top:-3rpx;left:2rpx;color:#ff6b19;font-size:34rpx;font-weight:700}.brand-text{position:absolute;left:20rpx;top:4rpx;color:#f56716;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:66rpx;font-weight:800;line-height:1}.brand-leaf{position:absolute;width:22rpx;height:10rpx;border-radius:50% 0 50% 0;background:#a8c771;transform:rotate(-38deg)}.leaf-one{right:-8rpx;top:10rpx}.leaf-two{right:-25rpx;top:-2rpx;transform:rotate(-46deg)}.header-actions{padding-top:4rpx}.header-action{position:relative;width:70rpx;height:80rpx;padding:8rpx 0 0;margin-left:24rpx;border-radius:25rpx;background:rgba(255,253,247,.8);color:#3a2115;font-size:20rpx;font-weight:700;line-height:24rpx;box-shadow:0 8rpx 24rpx rgba(112,68,25,.08);box-sizing:border-box}.header-action::after,.bottom-banner button::after{border:0}.button-press{transform:scale(.97);opacity:.92}.rank-icon,.share-icon{position:relative;width:36rpx;height:34rpx;margin:0 auto 7rpx}.rank-cup{position:absolute;left:8rpx;top:3rpx;width:20rpx;height:22rpx;border:4rpx solid #3f2418;border-radius:4rpx 4rpx 10rpx 10rpx}.rank-cup::before,.rank-cup::after{content:"";position:absolute;top:2rpx;width:10rpx;height:11rpx;border:3rpx solid #3f2418;border-radius:50%;box-sizing:border-box}.rank-cup::before{left:-12rpx}.rank-cup::after{right:-12rpx}.rank-icon::after{content:"";position:absolute;left:10rpx;bottom:0;width:16rpx;height:4rpx;border-radius:4rpx;background:#3f2418}.share-dot{position:absolute;width:8rpx;height:8rpx;border-radius:50%;background:#3f2418}.share-dot.one{left:4rpx;top:13rpx}.share-dot.two{right:4rpx;top:2rpx}.share-dot.three{right:5rpx;bottom:2rpx}.share-icon::before,.share-icon::after{content:"";position:absolute;left:11rpx;width:22rpx;height:4rpx;border-radius:4rpx;background:#3f2418;transform-origin:left center}.share-icon::before{top:14rpx;transform:rotate(-27deg)}.share-icon::after{top:18rpx;transform:rotate(25deg)}.title-hero{position:relative;height:118rpx;text-align:center}.hero-title{display:block;color:#6b2c13;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:72rpx;font-weight:900;line-height:78rpx}.hero-subtitle{display:block;margin-top:8rpx;color:#74472c;font-size:25rpx;font-weight:700}.spark{position:absolute;color:#f5a32a;font-size:28rpx}.spark.left{left:184rpx;top:15rpx}.spark.right{right:168rpx;top:40rpx}.card-panel{position:relative;border-radius:30rpx;background:rgba(255,253,247,.92);box-shadow:0 12rpx 28rpx rgba(109,64,22,.11);box-sizing:border-box}.level-card{display:flex;align-items:center;min-height:186rpx;padding:20rpx;overflow:hidden;background:linear-gradient(135deg,#fff4df 0%,#fffdf7 64%,#fff1d8 100%)}.avatar-wrap{flex:0 0 150rpx;width:150rpx;height:150rpx;border-radius:50%;background:#fff4dc;box-shadow:inset 0 0 0 8rpx #fff,0 8rpx 20rpx rgba(123,74,29,.12);overflow:hidden}.avatar-img{width:150rpx;height:150rpx}.level-main{flex:1;min-width:0;padding:0 24rpx}.level-text{color:#ff6b19;font-size:38rpx;font-weight:900}.role-name{margin-left:24rpx;color:#402414;font-size:34rpx;font-weight:900}.title-badge{height:34rpx;padding:0 16rpx;margin-left:18rpx;border:2rpx solid #f0a45b;border-radius:18rpx;color:#d77725;font-size:20rpx;line-height:31rpx}.exp-tip{display:block;margin-top:18rpx;color:#7b5c45;font-size:22rpx;font-weight:700}.progress-line{height:12rpx;margin-top:14rpx;border-radius:999rpx;background:#f4ddc5;overflow:hidden}.progress-fill{width:88%;height:100%;border-radius:999rpx;background:#ff6b19}.progress-meta{justify-content:space-between;margin-top:18rpx;color:#6b4b35;font-size:22rpx;font-weight:700}.quote-card{position:relative;flex:0 0 150rpx;height:148rpx;padding:20rpx 18rpx;border-radius:10rpx;background:#fff0c9;box-shadow:0 8rpx 18rpx rgba(129,81,28,.14);transform:rotate(3deg);box-sizing:border-box}.quote-card text{display:block;color:#8a5a32;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:22rpx;line-height:28rpx;font-weight:800}.clip{position:absolute;right:14rpx;top:-14rpx;width:18rpx;height:38rpx;border:4rpx solid #d48631;border-radius:10rpx}.quote-smile{text-align:right;color:#ef9a22!important;font-size:28rpx!important}.stats-card{justify-content:space-between;margin-top:20rpx;padding:20rpx 18rpx}.stat-item{flex:1;justify-content:center;min-width:0}.stat-asset{width:58rpx;height:58rpx;margin-right:10rpx}.stat-icon{display:flex;align-items:center;justify-content:center;width:58rpx;height:58rpx;margin-right:10rpx;border-radius:16rpx;background:#ffdf9b;color:#b45d18;font-size:22rpx;font-weight:900}.stat-label{display:block;color:#7f5f45;font-size:21rpx;font-weight:700}.stat-value-row{display:flex;align-items:baseline;margin-top:4rpx}.stat-value{color:#d75b1b;font-size:32rpx;font-weight:900}.stat-unit{margin-left:6rpx;color:#5a3924;font-size:21rpx;font-weight:800}.growth-card{margin-top:20rpx;padding:24rpx;background:linear-gradient(180deg,#fff4db,#fffaf0)}.section-title{color:#4a2918;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:42rpx;font-weight:900}.stage-badge{height:36rpx;padding:0 18rpx;margin-left:auto;border-radius:18rpx;background:#ff6b19;color:#fff;font-size:21rpx;line-height:36rpx;font-weight:800}.growth-scroll{width:100%;margin-top:20rpx;white-space:nowrap}.growth-road{position:relative;display:flex;align-items:flex-end;gap:48rpx;min-width:820rpx;height:196rpx;padding:18rpx 10rpx 0}.road-dash{position:absolute;left:65rpx;right:80rpx;top:78rpx;border-top:5rpx dashed #e79b28}.growth-step{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:120rpx}.step-platform{position:relative;display:flex;align-items:center;justify-content:center;width:92rpx;height:72rpx;border-radius:50%;background:#f3b34f;color:#fff;font-size:26rpx;font-weight:900;box-shadow:0 8rpx 14rpx rgba(144,87,20,.16)}.growth-step.current .step-platform{width:108rpx;height:88rpx;background:#ff6b19}.growth-step.locked .step-platform{background:#c9ad87}.step-asset{width:82rpx;height:82rpx}.lock-mark{position:absolute;right:0;bottom:-12rpx;width:36rpx;height:36rpx;border-radius:50%;background:#b5a28c;color:#fff;font-size:18rpx;line-height:36rpx;text-align:center}.step-name{display:block;margin-top:12rpx;color:#6d4328;font-size:24rpx;font-weight:900}.step-level{display:block;margin-top:4rpx;color:#5b4637;font-size:22rpx}.middle-grid{display:flex;gap:20rpx;margin-top:20rpx}.task-card{flex:1;padding:22rpx}.side-column{flex:1;display:flex;flex-direction:column;gap:18rpx}.card-head{justify-content:space-between;margin-bottom:12rpx}.block-title{color:#3a2115;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:36rpx;font-weight:900}.time-tip,.more-text{color:#9a7558;font-size:20rpx}.task-item{min-height:88rpx;padding:12rpx 0;border-bottom:1rpx solid rgba(218,174,122,.22)}.task-icon{display:flex;align-items:center;justify-content:center;flex:0 0 58rpx;width:58rpx;height:58rpx;border-radius:18rpx;background:#fff0d6;color:#d9771e;font-size:21rpx;font-weight:900}.task-copy{flex:1;min-width:0;margin-left:14rpx}.task-title{display:block;color:#3c2416;font-size:25rpx;font-weight:900}.task-desc{display:block;margin-top:6rpx;color:#8a6d56;font-size:19rpx}.task-right{text-align:right;color:#6b5545;font-size:20rpx}.task-exp{display:block;margin-top:8rpx;color:#ee9b21;font-size:20rpx;font-weight:800}.task-footer{justify-content:space-between;margin-top:18rpx;color:#7b5d44;font-size:22rpx}.gift-text{color:#e86b18;font-weight:900}.achievement-card,.title-card{padding:20rpx}.badge-row{display:flex;justify-content:space-between}.badge-item{width:78rpx;text-align:center}.badge-img{width:58rpx;height:58rpx;filter:drop-shadow(0 6rpx 8rpx rgba(126,80,23,.12))}.badge-item.locked{opacity:.45;filter:grayscale(1)}.badge-name{display:block;margin-top:6rpx;color:#6b4328;font-size:18rpx;font-weight:800;white-space:nowrap}.badge-date{display:block;margin-top:4rpx;color:#9c816b;font-size:15rpx;white-space:nowrap}.title-ticket{position:relative;min-height:98rpx;padding:22rpx 26rpx;border:2rpx solid #f1c374;border-radius:20rpx;background:linear-gradient(135deg,#fff1c8,#fff9e8)}.title-name{color:#b95b18;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:30rpx;font-weight:900}.using-badge{position:absolute;right:24rpx;top:22rpx;height:34rpx;padding:0 14rpx;border-radius:18rpx;background:#fff0c0;color:#b06b20;font-size:19rpx;line-height:34rpx}.title-desc{display:block;margin-top:16rpx;color:#8a6445;font-size:22rpx;font-weight:700}.streak-card{margin-top:20rpx;padding:24rpx}.streak-head{justify-content:space-between}.streak-title{color:#4a2918;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:40rpx;font-weight:900}.streak-pill{height:38rpx;padding:0 18rpx;border:2rpx solid #b5cf82;border-radius:19rpx;color:#6f9c3b;font-size:20rpx;line-height:34rpx}.streak-scroll{width:100%;margin-top:22rpx;white-space:nowrap}.streak-row{gap:26rpx;min-width:760rpx}.day-item{display:flex;flex-direction:column;align-items:center;width:74rpx}.day-circle{display:flex;align-items:center;justify-content:center;width:66rpx;height:66rpx;border-radius:50%;background:#78b94d;color:#fff;font-size:30rpx;font-weight:900}.day-item.today .day-circle{background:#fff4df;color:#ff6b19;border:4rpx solid #ff9a2d}.day-item.reward .day-circle{background:#ffc660;color:#fff}.day-item text{margin-top:8rpx;color:#6c4a34;font-size:20rpx;font-weight:700}.big-reward{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:150rpx;height:132rpx;border:2rpx solid #f2c979;border-radius:24rpx;background:#fff3cd}.gift-img{width:82rpx;height:82rpx}.big-reward text{color:#b65a18;font-size:21rpx;font-weight:900}.bottom-banner{justify-content:space-between;height:82rpx;margin-top:20rpx;padding:0 18rpx;border-radius:24rpx;background:linear-gradient(135deg,#fff2d0,#fff9ed);box-shadow:0 10rpx 24rpx rgba(109,64,22,.1)}.mini-chef{width:70rpx;height:70rpx}.bottom-banner text{flex:1;margin-left:12rpx;color:#4a2918;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:32rpx;font-weight:900}.bottom-banner button{width:154rpx;height:58rpx;border-radius:30rpx;background:#ff6b19;color:#fff;font-size:24rpx;font-weight:900;line-height:58rpx}@media screen and (max-width:390px){.middle-grid{flex-direction:column}.side-column{flex-direction:row}.achievement-card,.title-card{flex:1}.quote-card{display:none}.level-main{padding-right:0}.role-name{font-size:30rpx}.hero-title{font-size:66rpx}.stats-card{flex-wrap:wrap;gap:18rpx}.stat-item{flex:0 0 48%;justify-content:flex-start}.bottom-banner text{font-size:28rpx}}
</style>