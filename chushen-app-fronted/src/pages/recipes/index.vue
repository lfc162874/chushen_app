<template>
  <view class="recipes-page">
    <view class="cookbook-shell">
      <view class="cookbook-topbar">
        <view class="cookbook-brand">
          <view class="brand-row">
            <view class="brand-logo">
              <text class="brand-flower">✿</text>
              <text class="brand-text">厨神</text>
            </view>
            <text class="brand-dot">·</text>
            <text class="brand-section">菜谱</text>
          </view>
          <view class="brand-slogan">
            <text>让每一餐都充满爱与温度</text>
            <text class="heart">❤</text>
          </view>
        </view>

        <view class="top-actions">
          <button class="top-button" hover-class="button-press">
            <view class="search-top-icon"></view>
            <text>搜索</text>
          </button>
          <button class="top-button" hover-class="button-press">
            <view class="filter-top-icon"><view class="filter-line one"></view><view class="filter-line two"></view></view>
            <text>筛选</text>
          </button>
        </view>
      </view>

      <view class="cookbook-search">
        <view class="search-icon"></view>
        <text>搜索菜名、食材、口味</text>
        <view class="scan-icon"><view class="corner tl"></view><view class="corner tr"></view><view class="corner bl"></view><view class="corner br"></view></view>
      </view>

      <scroll-view scroll-x class="category-scroll" :show-scrollbar="false">
        <view class="cookbook-category-row">
          <view v-for="item in categories" :key="item.name" class="cookbook-category" :class="{ active: item.active }">
            <view class="category-visual" :class="item.className"><text>{{ item.icon }}</text></view>
            <text>{{ item.name }}</text>
          </view>
        </view>
      </scroll-view>

      <view class="hot-banner">
        <view class="banner-copy">
          <text class="banner-title">本周热门菜谱</text>
          <text class="banner-spark">✧</text>
          <text class="banner-subtitle">跟着做，轻松上桌不踩雷！</text>
          <button class="banner-button" hover-class="button-press">
            <text>去看看</text>
            <text class="arrow">›</text>
          </button>
        </view>
        <view class="banner-photo">
          <view class="photo-frame"><image src="/static/home/recipe-red-braised-pork.png" mode="aspectFill" /></view>
          <view class="tape tape-one"></view>
          <view class="tape tape-two"></view>
        </view>
        <view class="lemon-slice"></view>
        <view class="banner-dot-row"><view class="dot active"></view><view class="dot"></view><view class="dot"></view><view class="dot"></view></view>
      </view>

      <view class="feature-row-new">
        <view class="feature-panel recommend-panel">
          <view class="feature-copy">
            <view class="feature-title-line"><text class="feature-title">厨神推荐</text><text class="flag">⚑</text></view>
            <text class="feature-desc">营养美味，家人都爱吃</text>
            <text class="feature-name">番茄炖牛腩</text>
            <view class="feature-rank"><text>本周Top1</text></view>
            <text class="feature-sub">软烂入味，汤汁浓郁</text>
            <view class="mini-rating"><text class="star">★</text><text>4.9</text></view>
          </view>
          <image class="feature-img" src="/static/home/recipe-tomato-beef-soup.png" mode="aspectFill" />
        </view>

        <view class="feature-panel learn-panel">
          <view class="feature-copy">
            <view class="feature-title-line"><text class="feature-title">今日学做</text><text class="flag">▣</text></view>
            <text class="feature-desc">每天一道新菜，养成好习惯</text>
            <text class="feature-name">香煎三文鱼</text>
            <text class="feature-sub">补充优质蛋白</text>
            <view class="time-line"><view class="clock-icon"></view><text>20分钟</text></view>
          </view>
          <view class="feature-img salmon-img"><view class="fish-piece"></view><view class="green-dot"></view><view class="lemon-dot"></view></view>
        </view>
      </view>

      <view class="filter-bar-new">
        <scroll-view scroll-x class="filter-scroll" :show-scrollbar="false">
          <view class="filter-tabs-new">
            <view v-for="tab in filterTabs" :key="tab" class="filter-pill" :class="{ active: tab === '全部' }"><text>{{ tab }}</text></view>
          </view>
        </scroll-view>
        <view class="sort-pill"><text>综合排序</text><text class="down">⌄</text></view>
      </view>

      <view class="dish-grid-new">
        <view v-for="dish in dishes" :key="dish.name" class="dish-card-new">
          <view class="dish-cover" :class="dish.coverClass">
            <image v-if="dish.image" :src="dish.image" mode="aspectFill" />
            <image v-else class="generated-bg" src="/static/recipes/generated-card-bg.svg" mode="aspectFill" />
            <view v-if="dish.crown" class="crown-mark">♛</view>
            <view class="bookmark-icon"></view>
          </view>
          <view class="dish-info">
            <text class="dish-name">{{ dish.name }}</text>
            <text class="dish-desc">{{ dish.desc }}</text>
            <view class="dish-meta">
              <view class="meta-time"><view class="small-clock"></view><text>{{ dish.time }}</text></view>
              <view class="meta-rate"><text class="star">★</text><text>{{ dish.score }}分</text></view>
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
  { name: "下饭菜", icon: "饭", className: "cat-rice" },
  { name: "汤羹", icon: "汤", className: "cat-soup" },
  { name: "低脂", icon: "菜", className: "cat-leaf" },
  { name: "一人食", icon: "碗", className: "cat-bowl" },
  { name: "宴客", icon: "盖", className: "cat-cover" },
  { name: "宝宝辅食", icon: "宝", className: "cat-baby" },
];

const filterTabs = ["全部", "最新", "热门", "高分", "收藏多"];

const dishes = [
  { name: "红烧肉", desc: "肥而不腻，入口即化", time: "60分钟", score: "4.9", crown: true, image: "/static/home/recipe-red-braised-pork.png", coverClass: "red-pork" },
  { name: "蒜蓉虾仁西兰花", desc: "清爽低脂，蒜香鲜美", time: "15分钟", score: "4.8", image: "/static/home/recipe-shrimp-broccoli.png", coverClass: "shrimp-broccoli" },
  { name: "番茄牛腩汤", desc: "汤鲜味美，暖心暖胃", time: "90分钟", score: "4.8", image: "/static/home/recipe-tomato-beef-soup.png", coverClass: "tomato-soup" },
  { name: "糖醋排骨", desc: "酸甜开胃，孩子最爱", time: "45分钟", score: "4.7", coverClass: "sweet-ribs" },
  { name: "菌菇豆腐汤", desc: "鲜美清淡，营养健康", time: "25分钟", score: "4.7", coverClass: "mushroom-tofu" },
  { name: "小炒黄牛肉", desc: "香辣下饭，越吃越香", time: "20分钟", score: "4.6", coverClass: "beef-stir" },
];
</script>

<style scoped>
.recipes-page{min-height:100vh;background:radial-gradient(circle at 85% 3%,rgba(255,236,201,.9) 0,rgba(255,236,201,0) 290rpx),linear-gradient(180deg,#fff8ee 0%,#fff8ee 58%,#fffaf4 100%);color:#342114;box-sizing:border-box;overflow-x:hidden}.cookbook-shell{position:relative;width:750rpx;min-height:100vh;padding:24rpx 32rpx 150rpx;margin:0 auto;box-sizing:border-box;overflow:hidden}.cookbook-topbar,.brand-row,.brand-slogan,.top-actions,.feature-row-new,.feature-title-line,.time-line,.filter-bar-new,.filter-tabs-new,.dish-grid-new,.dish-meta,.meta-time,.meta-rate{display:flex;align-items:center}.cookbook-topbar{justify-content:space-between;min-height:124rpx}.brand-logo{position:relative;width:165rpx;height:75rpx}.brand-flower{position:absolute;top:-4rpx;left:0;color:#ff6b19;font-size:34rpx;font-weight:700;line-height:1}.brand-text{position:absolute;left:19rpx;top:2rpx;color:#f56716;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:66rpx;font-weight:800;line-height:1}.brand-dot{display:block;margin:-2rpx 13rpx 0 -4rpx;color:#ff6b19;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:47rpx;font-weight:900;line-height:58rpx}.brand-section{display:block;margin-top:7rpx;color:#332115;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:47rpx;font-weight:900;line-height:58rpx}.brand-slogan{margin-top:3rpx;padding-left:39rpx;color:#332115;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:24rpx;font-weight:700;line-height:32rpx}.heart{margin-left:8rpx;color:#ff6b19;font-size:26rpx}.top-actions{padding-top:4rpx}.top-button{display:flex;flex-direction:column;align-items:center;justify-content:center;width:70rpx;height:92rpx;padding:7rpx 0 0;margin-left:24rpx;border-radius:25rpx;background:rgba(255,253,247,.78);color:#3a2115;font-size:20rpx;font-weight:700;line-height:26rpx;box-shadow:0 8rpx 24rpx rgba(112,68,25,.08);box-sizing:border-box}.top-button::after,.banner-button::after{border:0}.button-press{transform:scale(.97);opacity:.92}.search-top-icon,.search-icon{position:relative;border:4rpx solid #3f2418;border-radius:50%;box-sizing:border-box}.search-top-icon{width:32rpx;height:32rpx;margin-bottom:9rpx}.search-top-icon::after,.search-icon::after{content:"";position:absolute;right:-12rpx;bottom:-8rpx;width:16rpx;height:4rpx;border-radius:4rpx;background:currentColor;transform:rotate(45deg)}.filter-top-icon{position:relative;width:34rpx;height:34rpx;margin-bottom:8rpx}.filter-top-icon::before{content:"";position:absolute;left:1rpx;top:2rpx;width:31rpx;height:22rpx;border:4rpx solid #3f2418;border-bottom:0;clip-path:polygon(0 0,100% 0,62% 100%,38% 100%);box-sizing:border-box}.filter-top-icon::after{content:"";position:absolute;left:17rpx;top:22rpx;width:4rpx;height:12rpx;border-radius:4rpx;background:#3f2418}.filter-line{position:absolute;right:-4rpx;height:4rpx;border-radius:4rpx;background:#3f2418}.filter-line.one{top:21rpx;width:11rpx}.filter-line.two{top:30rpx;width:17rpx}.cookbook-search{display:flex;align-items:center;height:67rpx;margin-top:18rpx;padding:0 22rpx 0 27rpx;border:1rpx solid #ebdfd0;border-radius:23rpx;background:rgba(255,255,255,.9);box-shadow:0 9rpx 24rpx rgba(97,61,29,.08);box-sizing:border-box}.search-icon{flex:0 0 36rpx;width:36rpx;height:36rpx;margin-right:22rpx;color:#928d86;border-color:#928d86}.cookbook-search text{flex:1;color:#a29b92;font-size:25rpx;font-weight:500}.scan-icon{position:relative;flex:0 0 36rpx;width:36rpx;height:36rpx}.corner{position:absolute;width:13rpx;height:13rpx;border-color:#ff6b19;border-style:solid}.tl{left:0;top:0;border-width:4rpx 0 0 4rpx;border-radius:5rpx 0 0 0}.tr{right:0;top:0;border-width:4rpx 4rpx 0 0;border-radius:0 5rpx 0 0}.bl{left:0;bottom:0;border-width:0 0 4rpx 4rpx;border-radius:0 0 0 5rpx}.br{right:0;bottom:0;border-width:0 4rpx 4rpx 0;border-radius:0 0 5rpx 0}.category-scroll{width:100%;margin-top:19rpx;white-space:nowrap}.cookbook-category-row{display:flex;gap:12rpx;min-width:704rpx}.cookbook-category{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:0 0 76rpx;height:104rpx;border:3rpx solid rgba(255,255,255,.92);border-radius:21rpx;background:rgba(255,253,248,.82);box-shadow:0 7rpx 18rpx rgba(99,60,24,.07);box-sizing:border-box}.cookbook-category.active{box-shadow:0 8rpx 22rpx rgba(255,107,25,.12)}.cookbook-category.active::after{content:"";position:absolute;bottom:-3rpx;left:23rpx;width:31rpx;height:6rpx;border-radius:999rpx;background:#ff6b19}.category-visual{display:flex;align-items:center;justify-content:center;width:48rpx;height:43rpx;margin-bottom:15rpx;border-radius:16rpx;font-size:19rpx;font-weight:900}.cat-pot,.cat-soup{color:#fff;background:linear-gradient(180deg,#ff8c22,#ff6718)}.cat-clock,.cat-leaf,.cat-bowl,.cat-baby{color:#fff;background:linear-gradient(180deg,#91ca55,#4f982f)}.cat-rice,.cat-cover{color:#6f3b18;background:linear-gradient(180deg,#ffe1a3,#d99845)}.cookbook-category>text{display:block;color:#332115;font-size:20rpx;font-weight:800;line-height:26rpx;white-space:nowrap}.hot-banner{position:relative;height:171rpx;margin-top:24rpx;overflow:hidden;border-radius:20rpx;background:radial-gradient(circle at 0 0,rgba(252,177,61,.19) 0 65rpx,transparent 66rpx),linear-gradient(135deg,#fff2d5 0%,#fff5df 100%);border:1rpx solid #ffe2ab;box-shadow:0 9rpx 22rpx rgba(96,57,22,.08);box-sizing:border-box}.hot-banner::before{content:"";position:absolute;inset:11rpx;border:1rpx dashed rgba(196,139,61,.24);border-radius:14rpx}.banner-copy{position:relative;z-index:3;padding:30rpx 0 0 54rpx}.banner-title{display:block;color:#3e2214;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:44rpx;font-weight:900;line-height:50rpx}.banner-spark{position:absolute;left:326rpx;top:28rpx;color:#f4a227;font-size:45rpx}.banner-subtitle{display:block;margin-top:10rpx;color:#4b2c1a;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:26rpx;font-weight:700}.banner-button{display:flex;align-items:center;justify-content:center;width:127rpx;height:50rpx;padding:0;margin-top:14rpx;border-radius:999rpx;background:linear-gradient(180deg,#ff7c24,#ff6414);color:#fff;font-size:24rpx;font-weight:800;line-height:50rpx}.arrow{margin-left:10rpx;font-size:35rpx}.banner-photo{position:absolute;right:28rpx;top:16rpx;z-index:2;width:242rpx;height:138rpx;padding:9rpx;background:#fffdf8;box-shadow:0 10rpx 18rpx rgba(85,45,13,.16);transform:rotate(6deg);box-sizing:border-box}.photo-frame,.photo-frame image{width:100%;height:100%;border-radius:7rpx;overflow:hidden}.tape{position:absolute;width:48rpx;height:24rpx;background:rgba(236,190,116,.45);transform:rotate(38deg)}.tape-one{right:-18rpx;top:-9rpx}.tape-two{left:-20rpx;bottom:-7rpx}.lemon-slice{position:absolute;right:273rpx;bottom:31rpx;width:48rpx;height:48rpx;border-radius:50%;border:4rpx solid #fff2ad;background:linear-gradient(45deg,transparent 48%,rgba(255,255,255,.8) 49% 51%,transparent 52%),linear-gradient(-45deg,transparent 48%,rgba(255,255,255,.8) 49% 51%,transparent 52%),radial-gradient(circle at center,#fff8c5 0 16rpx,#ffd85a 17rpx 100%);box-sizing:border-box}.banner-dot-row{position:absolute;left:344rpx;bottom:17rpx;z-index:4;display:flex}.dot{width:12rpx;height:12rpx;margin-right:16rpx;border-radius:50%;background:#dfd8c9}.dot.active{background:#ff6b19}.feature-row-new{justify-content:space-between;margin-top:18rpx}.feature-panel{position:relative;width:332rpx;height:164rpx;overflow:hidden;border-radius:17rpx;background:rgba(255,253,248,.92);border:1rpx solid #efe2cf;box-shadow:0 8rpx 21rpx rgba(95,57,22,.08);box-sizing:border-box}.feature-copy{position:relative;z-index:2;padding:19rpx 0 0 20rpx}.feature-title{display:block;color:#4a2918;font-family:"Kaiti SC","STKaiti","KaiTi",serif;font-size:29rpx;font-weight:900;line-height:34rpx}.flag{margin-left:8rpx;color:#ff6b19;font-size:22rpx}.feature-desc,.feature-sub{display:block;color:#807264;font-size:18rpx;line-height:24rpx}.feature-desc{margin-top:8rpx}.feature-name{display:inline-block;margin-top:12rpx;color:#4a2918;font-size:25rpx;font-weight:900;line-height:32rpx}.feature-rank{display:inline-flex;height:26rpx;padding:0 8rpx;margin-left:8rpx;border-radius:7rpx;background:#ffe2b2;color:#ff6b19;font-size:15rpx;font-weight:800;line-height:26rpx}.feature-sub{margin-top:5rpx}.mini-rating{display:flex;align-items:center;margin-top:9rpx;color:#674832;font-size:20rpx;font-weight:700}.star{margin-right:6rpx;color:#ffb321}.feature-img{position:absolute;right:15rpx;top:25rpx;width:104rpx;height:94rpx;border-radius:13rpx;box-shadow:0 5rpx 13rpx rgba(81,43,12,.12)}.salmon-img{background:linear-gradient(135deg,#fff3c9,#7fbf58)}.fish-piece{position:absolute;left:19rpx;top:24rpx;width:65rpx;height:42rpx;border-radius:14rpx;background:#ef8c55;transform:rotate(-11deg)}.green-dot{position:absolute;right:18rpx;bottom:18rpx;width:18rpx;height:18rpx;border-radius:50%;background:#6fa64c}.lemon-dot{position:absolute;left:62rpx;top:20rpx;width:25rpx;height:25rpx;border-radius:50%;background:#ffe06e}.time-line{margin-top:12rpx;color:#7d7167;font-size:17rpx;line-height:22rpx}.clock-icon,.small-clock{position:relative;border:2rpx solid #91877d;border-radius:50%;box-sizing:border-box}.clock-icon{width:17rpx;height:17rpx;margin-right:6rpx}.clock-icon::before,.small-clock::before{content:"";position:absolute;left:50%;top:3rpx;width:2rpx;height:5rpx;background:#91877d;transform:translateX(-50%)}.clock-icon::after,.small-clock::after{content:"";position:absolute;left:50%;top:50%;width:5rpx;height:2rpx;background:#91877d}.filter-bar-new{justify-content:space-between;margin-top:20rpx}.filter-scroll{flex:1;min-width:0;white-space:nowrap}.filter-tabs-new{gap:12rpx}.filter-pill{display:flex;align-items:center;justify-content:center;flex:0 0 auto;height:42rpx;padding:0 22rpx;border-radius:999rpx;background:rgba(255,255,255,.62);color:#766758;font-size:22rpx;font-weight:700;box-sizing:border-box}.filter-pill.active{background:#ff6b19;color:#fff}.sort-pill{display:flex;align-items:center;justify-content:center;height:42rpx;min-width:118rpx;padding:0 15rpx;margin-left:12rpx;border:1rpx solid #eee0cf;border-radius:999rpx;background:rgba(255,253,248,.78);color:#5f4b39;font-size:20rpx;font-weight:700;box-sizing:border-box}.down{margin-left:8rpx;font-size:22rpx;transform:translateY(-2rpx)}.dish-grid-new{align-items:stretch;flex-wrap:wrap;gap:18rpx 15rpx;margin-top:16rpx}.dish-card-new{position:relative;display:flex;flex-direction:column;flex:0 0 218rpx;min-height:274rpx;overflow:hidden;border-radius:15rpx;background:#fffdf9;box-shadow:0 9rpx 21rpx rgba(96,57,22,.1)}.dish-cover{position:relative;height:130rpx;overflow:hidden;background:#fff2d5}.dish-cover image{width:100%;height:100%}.generated-bg{opacity:.98}.sweet-ribs{background:linear-gradient(135deg,#fff0b8,#d94b1c)}.mushroom-tofu{background:linear-gradient(135deg,#fff8d9,#80a96f)}.beef-stir{background:linear-gradient(135deg,#ffdc8d,#963018)}.crown-mark{position:absolute;left:0;top:0;z-index:2;width:43rpx;height:35rpx;border-radius:0 0 12rpx 0;background:rgba(255,245,222,.92);color:#ffab19;font-size:25rpx;line-height:35rpx;text-align:center}.bookmark-icon{position:absolute;top:9rpx;right:10rpx;width:31rpx;height:38rpx;border-radius:11rpx 11rpx 8rpx 8rpx;background:rgba(255,255,255,.9);box-shadow:0 3rpx 10rpx rgba(54,34,18,.12)}.bookmark-icon::after{content:"";position:absolute;left:8rpx;top:8rpx;width:12rpx;height:18rpx;border:4rpx solid #9a9188;border-bottom:0;border-radius:5rpx 5rpx 0 0}.dish-info{display:flex;flex:1;flex-direction:column;padding:13rpx 13rpx 12rpx}.dish-name{display:block;color:#332115;font-size:27rpx;font-weight:900;line-height:34rpx}.dish-desc{display:block;min-height:42rpx;margin-top:5rpx;color:#83766a;font-size:20rpx;line-height:28rpx}.dish-meta{justify-content:space-between;margin-top:auto;color:#73695f;font-size:19rpx;font-weight:700}.small-clock{width:22rpx;height:22rpx;margin-right:5rpx}.meta-rate{color:#674832}.meta-rate .star{font-size:22rpx}@media screen and (max-width:390px){.cookbook-shell{width:100%;padding-left:28rpx;padding-right:28rpx}.dish-card-new{flex-basis:calc((100% - 16rpx) / 2)}.dish-grid-new{gap:18rpx 16rpx}.feature-row-new{gap:16rpx}.feature-panel{width:calc((100% - 16rpx) / 2)}.feature-img{width:92rpx;height:82rpx}.banner-photo{width:224rpx}.banner-title{font-size:40rpx}.brand-section{font-size:42rpx}}
</style>