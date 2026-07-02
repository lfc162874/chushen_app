<template>
  <view class="page-wrap">
    <view class="discover-page">
      <view class="hero">
        <view class="brand-line">
          <view class="brand-left">
            <text class="brand-icon">♨</text>
            <text class="brand-name">厨神</text>
          </view>
          <view class="top-tools">
            <view class="tool-card"><text class="tool-icon">☑</text><text class="tool-text">签到</text></view>
            <view class="tool-card message-card"><text class="tool-icon">💬</text><text class="tool-text">消息</text></view>
          </view>
        </view>
        <view class="slogan-box">
          <text class="slogan">做什么，今天更好吃？☺</text>
          <text class="sub-slogan">让灵感来敲门，今晚不再纠结！</text>
        </view>
        <view class="chef-scene">
          <text class="talk-bubble">交给灵感吧！</text>
          <text class="chef">👩‍🍳</text>
          <text class="float-item tomato">🍅</text>
          <text class="float-item spoon">🥄</text>
          <text class="float-item leaf">🌿</text>
        </view>
      </view>

      <view class="food-recognize card">
        <view class="fridge-box">
          <view class="shelf"><text>🥚</text><text>🍄</text><text>🥬</text></view>
          <view class="shelf"><text>🍅</text><text>🍋</text><text>🥕</text><text>🥒</text></view>
          <view class="shelf"><text>🥦</text><text>🫑</text><text>🥗</text></view>
          <view class="paper-tip"><text>冰箱里有什么？</text><text>智能识别推荐</text></view>
          <button class="camera-btn">📷 拍一拍</button>
        </view>
        <view class="recognize-main">
          <text class="recognize-title">根据你常备的食材，智能推荐美味菜谱</text>
          <view class="ingredient-grid">
            <view v-for="item in ingredients" :key="item.name" class="ingredient-card"><text class="ingredient-icon">{{ item.icon }}</text><text class="ingredient-name">{{ item.name }}</text></view>
            <view class="ingredient-card more-card"><text class="ingredient-icon plus">＋</text><text class="ingredient-name">更多</text></view>
          </view>
          <text class="taste-title">想吃什么风味？</text>
          <view class="taste-row">
            <view v-for="item in tastes" :key="item" :class="['taste-pill', item === '下饭' ? 'active' : '']">{{ item }}</view>
            <view class="taste-pill">更多⌄</view>
          </view>
        </view>
      </view>

      <view class="ai-card card">
        <view class="section-head">
          <view><text class="section-title">AI 智能推荐 ✨</text><text class="section-sub">为你量身定制的美味灵感</text></view>
          <text class="change-btn">换一批 ↻</text>
        </view>
        <view class="ai-list">
          <view v-for="item in aiTags" :key="item.title" class="ai-item"><text class="ai-icon">{{ item.icon }}</text><view><text class="ai-title">{{ item.title }}</text><text class="ai-desc">{{ item.desc }}</text></view></view>
        </view>
      </view>

      <view class="roulette-card card">
        <view class="roulette-copy">
          <text class="roulette-title">灵感转盘</text>
          <text class="roulette-desc">转一转，发现惊喜美味 ✨</text>
          <button class="spin-btn">转动转盘 ›</button>
          <text class="remain">今日剩余 3 次</text>
        </view>
        <view class="wheel">
          <text class="dish-name top">番茄炖牛腩</text>
          <text class="dish-name right">酸辣土豆丝</text>
          <text class="dish-name left-bottom">香煎鸡胸肉</text>
          <text class="dish-name right-bottom">清炒时蔬</text>
          <text class="pin">📍</text>
          <view class="center-dish"><text class="dish-emoji">🍤🥦</text><text class="center-name">蒜蓉虾仁西兰花</text></view>
        </view>
        <view class="note-card"><text>换个组合</text><text>也很美味哦~ ☺</text></view>
      </view>

      <view class="picked-block">
        <view class="picked-head"><text class="picked-title">为你精选 3 道灵感菜 ♡</text><text class="more-link">更多推荐 ›</text></view>
        <view class="recipe-row">
          <view v-for="item in recipes" :key="item.name" class="recipe-card">
            <view class="recipe-cover"><text class="recipe-badge">{{ item.badge }}</text><text class="recipe-emoji">{{ item.emoji }}</text></view>
            <view class="recipe-info"><text class="recipe-name">{{ item.name }}</text><text class="recipe-desc">{{ item.desc }}</text><view class="recipe-meta"><text>◷ {{ item.time }}</text><text>{{ item.type }}</text><text class="score">★ {{ item.score }}</text></view></view>
          </view>
        </view>
      </view>

      <view class="random-card card">
        <view class="random-copy"><text class="random-title">没灵感？交给厨神决定！</text><text class="random-desc">一键随机推荐，惊喜菜谱马上来</text></view>
        <text class="random-chef">👩‍🍳</text>
        <view class="random-action"><button>🎲 随机推荐 ›</button><text>今日剩余 3 次</text></view>
      </view>
    </view>
    <AppTabBar active="discover" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";

const ingredients = [
  { name: "鸡蛋", icon: "🥚" },
  { name: "番茄", icon: "🍅" },
  { name: "青菜", icon: "🥬" },
  { name: "鸡胸肉", icon: "🍗" },
  { name: "豆腐", icon: "◻️" },
];

const tastes = ["下饭", "快手", "低脂", "一人食", "宴客"];

const aiTags = [
  { title: "最近常做", desc: "换点新口味", icon: "🍳" },
  { title: "天气变热", desc: "清爽开胃菜", icon: "🌤️" },
  { title: "想吃肉", desc: "满足口腹之欲", icon: "🥩" },
  { title: "孩子爱吃", desc: "营养又好吃", icon: "👶" },
  { title: "减脂计划", desc: "低卡美味", icon: "🥕" },
];

const recipes = [
  { name: "黄焖鸡米饭", desc: "酱香浓郁，米饭杀手", time: "25分钟", type: "🔥 下饭", score: "4.9", badge: "下饭首选", emoji: "🍗" },
  { name: "青瓜虾仁沙拉", desc: "低脂高蛋白，清爽开胃", time: "15分钟", type: "🌿 低脂", score: "4.8", badge: "清爽快手", emoji: "🥒" },
  { name: "菌菇豆腐汤", desc: "鲜美暖胃，简单营养", time: "20分钟", type: "⚡ 快手", score: "4.8", badge: "暖心汤羹", emoji: "🍲" },
];
</script>

<style scoped>
.page-wrap{min-height:100vh;background:#fff7ea}.discover-page{position:relative;min-height:100vh;padding:24rpx 24rpx 150rpx;background:radial-gradient(circle at 20% 0,#fffdf4 0,#fff4df 34%,transparent 48%),linear-gradient(180deg,#fff4df 0%,#fff9ef 40%,#fff8f0 100%);overflow:hidden;color:#382519;box-sizing:border-box}.discover-page::before{content:"";position:absolute;inset:0;background-image:radial-gradient(#efc690 1rpx,transparent 1rpx);background-size:28rpx 28rpx;opacity:.16;pointer-events:none}.hero,.card,.picked-block{position:relative;z-index:1}.brand-line{display:flex;align-items:center}.brand-left{display:flex;align-items:center}.brand-icon{width:48rpx;height:48rpx;border:4rpx solid #ff7818;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#ff6a00;font-size:30rpx;font-weight:900}.brand-name{margin-left:10rpx;color:#ec6210;font-size:64rpx;font-weight:1000;letter-spacing:4rpx;line-height:1;text-shadow:0 4rpx 0 #ffd2a6}.top-tools{margin-left:auto;display:flex;gap:20rpx}.tool-card{width:88rpx;height:96rpx;border-radius:30rpx;background:rgba(255,255,255,.72);box-shadow:0 14rpx 34rpx rgba(147,95,36,.12),inset 0 0 0 2rpx rgba(255,255,255,.9);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5rpx}.tool-icon{font-size:36rpx}.tool-text{font-size:22rpx;font-weight:800}.message-card{position:relative}.message-card::after{content:"";position:absolute;right:18rpx;top:18rpx;width:15rpx;height:15rpx;border-radius:50%;background:#ff7918}.slogan-box{margin-top:28rpx}.slogan{display:block;font-size:50rpx;font-weight:1000;line-height:1.18;letter-spacing:2rpx}.sub-slogan{display:block;margin-top:15rpx;color:#7a5740;font-size:28rpx;letter-spacing:2rpx}.chef-scene{position:absolute;right:8rpx;top:132rpx;width:250rpx;height:160rpx}.talk-bubble{position:absolute;left:0;top:0;padding:12rpx 20rpx;border-radius:30rpx 30rpx 30rpx 8rpx;background:#fff;color:#8b674d;font-size:22rpx;box-shadow:0 12rpx 26rpx #e7c7a0}.chef{position:absolute;right:10rpx;bottom:0;width:126rpx;height:126rpx;border-radius:50%;background:#fff2d5;display:flex;align-items:center;justify-content:center;font-size:72rpx}.float-item{position:absolute;font-size:30rpx}.tomato{right:160rpx;bottom:32rpx}.spoon{right:118rpx;top:70rpx}.leaf{right:0;top:8rpx}.card{border-radius:42rpx;background:rgba(255,249,238,.92);box-shadow:0 20rpx 45rpx rgba(148,87,23,.12),inset 0 0 0 2rpx rgba(230,179,115,.35)}.food-recognize{margin-top:28rpx;padding:18rpx;display:grid;grid-template-columns:236rpx 1fr;gap:20rpx}.fridge-box{height:314rpx;border-radius:36rpx;position:relative;padding:16rpx;background:linear-gradient(90deg,#d5dcdf,#f7f1e4 42%,#d9dee0);box-shadow:inset 0 0 0 8rpx rgba(255,255,255,.7),inset -28rpx 0 0 rgba(196,202,204,.62);overflow:hidden}.fridge-box::after{content:"";position:absolute;left:62%;top:16rpx;bottom:16rpx;border-left:4rpx solid rgba(125,133,132,.25)}.shelf{height:76rpx;margin-bottom:13rpx;padding:8rpx 12rpx;border-radius:22rpx;background:rgba(255,255,255,.45);display:flex;align-items:center;gap:8rpx}.shelf text{font-size:38rpx}.paper-tip{position:absolute;right:14rpx;top:114rpx;width:146rpx;padding:14rpx 10rpx;border-radius:8rpx;background:#fff7e6;box-shadow:0 10rpx 24rpx #d4ad83;transform:rotate(-3deg)}.paper-tip text{display:block;font-size:20rpx;line-height:1.5}.camera-btn{position:absolute;right:18rpx;bottom:22rpx;height:58rpx;line-height:58rpx;padding:0 26rpx;border-radius:22rpx;background:#ff7518;color:#fff;font-size:24rpx;font-weight:900;box-shadow:0 12rpx 22rpx rgba(255,105,0,.25)}.camera-btn::after,.spin-btn::after,.random-action button::after{border:0}.recognize-main{padding:16rpx 4rpx 6rpx}.recognize-title,.taste-title{display:block;margin-bottom:18rpx;color:#6f5039;font-size:24rpx;font-weight:900}.ingredient-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12rpx}.ingredient-card{height:98rpx;border-radius:28rpx;background:#fffaf2;box-shadow:inset 0 0 0 2rpx #f0ddc7,0 8rpx 16rpx rgba(151,90,28,.08);display:flex;flex-direction:column;align-items:center;justify-content:center}.ingredient-icon{font-size:40rpx}.ingredient-name{margin-top:4rpx;color:#62442f;font-size:21rpx;font-weight:800}.plus{font-size:48rpx;color:#c18652}.taste-title{margin-top:18rpx}.taste-row{display:flex;gap:10rpx;flex-wrap:wrap}.taste-pill{height:58rpx;line-height:58rpx;min-width:86rpx;padding:0 22rpx;border-radius:30rpx;background:#fffaf2;color:#775c47;text-align:center;box-shadow:inset 0 0 0 2rpx #eedbc7;font-size:24rpx;font-weight:800}.taste-pill.active{background:#ff7418;color:#fff;box-shadow:0 12rpx 24rpx rgba(255,107,0,.22)}.ai-card{margin-top:22rpx;padding:24rpx}.section-head{display:flex;align-items:flex-start;justify-content:space-between}.section-title{display:block;font-size:36rpx;font-weight:1000;letter-spacing:2rpx}.section-sub{display:block;margin-top:8rpx;color:#b18c6f;font-size:22rpx}.change-btn{color:#9a785c;font-size:24rpx}.ai-list{display:grid;grid-template-columns:repeat(5,1fr);gap:12rpx;margin-top:22rpx}.ai-item{min-height:120rpx;border-radius:28rpx;background:#fffaf2;display:flex;align-items:center;justify-content:center;gap:6rpx;padding:10rpx 6rpx;box-shadow:inset 0 0 0 2rpx #efdcc8}.ai-icon{font-size:38rpx}.ai-title{display:block;font-size:21rpx;font-weight:900;white-space:nowrap}.ai-desc{display:block;margin-top:5rpx;color:#a17d61;font-size:18rpx;white-space:nowrap}.roulette-card{margin-top:26rpx;min-height:330rpx;padding:30rpx 22rpx;display:grid;grid-template-columns:210rpx 1fr 112rpx;align-items:center;gap:14rpx;background:linear-gradient(135deg,#fff4d9,#fffdf4 45%,#fff1d5)}.roulette-title{display:block;font-size:48rpx;font-weight:1000}.roulette-desc{display:block;margin:12rpx 0 22rpx;color:#805d42;font-size:24rpx}.spin-btn{height:70rpx;line-height:70rpx;padding:0 28rpx;border-radius:36rpx;background:#ff7418;color:#fff;font-size:26rpx;font-weight:1000;box-shadow:0 16rpx 30rpx rgba(255,111,0,.24)}.remain{display:block;margin-top:22rpx;color:#9f795e;font-size:22rpx}.wheel{position:relative;height:266rpx;border-radius:999rpx;background:conic-gradient(from -35deg,#ffe3bd,#fff 28%,#ffe7c8 50%,#fff 72%,#ffe2b8);box-shadow:inset 0 0 0 13rpx rgba(255,255,255,.7),0 16rpx 34rpx rgba(160,102,42,.17);display:flex;align-items:center;justify-content:center}.dish-name{position:absolute;padding:5rpx 12rpx;border-radius:28rpx;background:rgba(255,255,255,.65);color:#9a6f4b;font-size:19rpx}.top{top:8rpx}.right{right:-10rpx;top:66rpx}.left-bottom{left:-22rpx;bottom:38rpx}.right-bottom{right:0;bottom:28rpx}.pin{position:absolute;top:-28rpx;font-size:56rpx}.center-dish{width:178rpx;height:178rpx;border-radius:50%;background:#fff;box-shadow:0 12rpx 32rpx rgba(139,89,39,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.dish-emoji{font-size:56rpx}.center-name{margin-top:6rpx;color:#704b33;font-size:21rpx;font-weight:900}.note-card{align-self:stretch;border-radius:18rpx;background:#fff9e9;padding:36rpx 10rpx;text-align:center;line-height:1.8;box-shadow:inset 0 0 0 2rpx #efd8bd;transform:rotate(-1deg)}.note-card text{display:block;color:#805d42;font-size:22rpx}.picked-head{display:flex;align-items:center;justify-content:space-between;margin:34rpx 8rpx 18rpx}.picked-title{font-size:36rpx;font-weight:1000}.more-link{color:#a17b60;font-size:24rpx}.recipe-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16rpx}.recipe-card{border-radius:30rpx;background:#fff;overflow:hidden;box-shadow:0 14rpx 30rpx rgba(147,88,32,.12)}.recipe-cover{position:relative;height:160rpx;background:linear-gradient(135deg,#bd6b32,#fff1cf);display:flex;align-items:center;justify-content:center}.recipe-badge{position:absolute;left:0;top:0;padding:8rpx 14rpx;border-radius:0 0 18rpx 0;background:#ff7418;color:#fff;font-size:20rpx;font-weight:900}.recipe-emoji{font-size:76rpx;filter:drop-shadow(0 10rpx 12rpx rgba(81,44,15,.25))}.recipe-info{padding:16rpx}.recipe-name{display:block;font-size:27rpx;font-weight:1000}.recipe-desc{display:block;height:58rpx;margin-top:10rpx;color:#8b6b52;font-size:22rpx;line-height:1.35}.recipe-meta{display:flex;align-items:center;gap:8rpx;margin-top:8rpx;color:#80614b;font-size:18rpx}.score{margin-left:auto;color:#e89a16;font-weight:1000}.random-card{margin-top:26rpx;padding:26rpx;display:grid;grid-template-columns:1fr 92rpx 220rpx;gap:10rpx;align-items:center;background:linear-gradient(135deg,#fff6df,#ffedbf)}.random-title{display:block;font-size:34rpx;font-weight:1000}.random-desc{display:block;margin-top:10rpx;color:#8b674e;font-size:22rpx}.random-chef{font-size:72rpx}.random-action button{height:78rpx;line-height:78rpx;padding:0 22rpx;border-radius:42rpx;background:#ff7418;color:#fff;font-size:26rpx;font-weight:1000;box-shadow:0 14rpx 28rpx rgba(255,111,0,.22)}.random-action text{display:block;margin-top:8rpx;color:#8b674e;text-align:center;font-size:20rpx}@media screen and (max-width:390px){.food-recognize{grid-template-columns:216rpx 1fr}.brand-name{font-size:58rpx}.slogan{font-size:45rpx}.ingredient-grid{gap:8rpx}.ingredient-card{height:88rpx}.ai-list{gap:8rpx}.roulette-card{grid-template-columns:190rpx 1fr 96rpx}.note-card text{font-size:20rpx}.recipe-row{gap:12rpx}.recipe-cover{height:142rpx}.random-card{grid-template-columns:1fr 76rpx 200rpx}}
</style>
