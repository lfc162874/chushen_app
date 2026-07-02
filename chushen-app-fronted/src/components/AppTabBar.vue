<template>
  <view class="custom-tabbar">
    <view
      v-for="tab in tabs"
      :key="tab.key"
      class="tab-item"
      :class="{ active: props.active === tab.key, publish: tab.publish }"
      hover-class="tab-item-pressed"
      @tap="switchTab(tab)"
    >
      <view class="publish-button" v-if="tab.publish">
        <text>＋</text>
      </view>
      <view class="tab-icon" v-else :class="tab.iconClass"></view>
      <text class="tab-text">{{ tab.text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
type TabKey = "home" | "recipes" | "publish" | "discover" | "profile";

interface TabItem {
  key: TabKey;
  text: string;
  path: string;
  iconClass?: string;
  publish?: boolean;
}

const props = defineProps<{
  active: TabKey;
}>();

const tabs: TabItem[] = [
  { key: "home", text: "首页", path: "/pages/index/index", iconClass: "home-tab" },
  { key: "recipes", text: "菜谱", path: "/pages/recipes/index", iconClass: "recipe-tab" },
  { key: "publish", text: "发布", path: "/pages/publish/index", publish: true },
  { key: "discover", text: "发现", path: "/pages/discover/index", iconClass: "discover-tab" },
  { key: "profile", text: "我的", path: "/pages/profile/index", iconClass: "profile-tab" },
];

const switchTab = (tab: TabItem) => {
  if (tab.key === props.active) {
    return;
  }

  uni.redirectTo({
    url: tab.path,
  });
};
</script>

<style scoped>
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
  justify-content: flex-start;
  width: 106rpx;
  height: 82rpx;
  padding-top: 9rpx;
  color: #706862;
  font-size: 19rpx;
  line-height: 23rpx;
  font-weight: 700;
  box-sizing: border-box;
  transition:
    color 150ms ease,
    transform 150ms ease;
}

.tab-item-pressed {
  transform: scale(0.96);
}

.tab-item.active {
  color: #ff6b19;
}

.tab-item.publish {
  padding-top: 49rpx;
}

.tab-icon {
  position: relative;
  flex: 0 0 36rpx;
  width: 36rpx;
  height: 36rpx;
  margin-bottom: 5rpx;
  box-sizing: border-box;
}

.home-tab::before {
  content: "";
  position: absolute;
  left: 6rpx;
  top: 14rpx;
  z-index: 2;
  width: 24rpx;
  height: 19rpx;
  border-radius: 6rpx 6rpx 5rpx 5rpx;
  background: currentColor;
}

.home-tab::after {
  content: "";
  position: absolute;
  left: 8rpx;
  top: 5rpx;
  z-index: 1;
  width: 20rpx;
  height: 20rpx;
  border-radius: 5rpx 5rpx 3rpx 5rpx;
  background: currentColor;
  transform: rotate(45deg);
}

.recipe-tab::before,
.recipe-tab::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
}

.recipe-tab::before {
  left: 6rpx;
  top: 4rpx;
  width: 24rpx;
  height: 28rpx;
  border: 3rpx solid currentColor;
  border-radius: 5rpx;
}

.recipe-tab::after {
  position: absolute;
  left: 12rpx;
  top: 13rpx;
  width: 12rpx;
  height: 3rpx;
  border-radius: 3rpx;
  background: currentColor;
  box-shadow: 0 8rpx 0 currentColor;
}

.tab-item.active .recipe-tab {
  color: #ff6b19;
}

.tab-item.active .recipe-tab::before {
  border: 0;
  background: currentColor;
}

.tab-item.active .recipe-tab::after {
  background: #fff;
  box-shadow: 0 8rpx 0 #fff;
}

.discover-tab::before,
.discover-tab::after {
  content: "";
  position: absolute;
}

.discover-tab::before {
  left: 5rpx;
  top: 5rpx;
  width: 26rpx;
  height: 26rpx;
  border: 3rpx solid currentColor;
  border-radius: 50%;
  box-sizing: border-box;
}

.discover-tab::after {
  left: 14rpx;
  top: 9rpx;
  width: 8rpx;
  height: 17rpx;
  border-radius: 50%;
  background: currentColor;
  transform: rotate(32deg) skew(-14deg);
}

.profile-tab::before {
  content: "";
  position: absolute;
  left: 11rpx;
  top: 3rpx;
  width: 14rpx;
  height: 14rpx;
  border: 3rpx solid currentColor;
  border-radius: 50%;
  box-sizing: border-box;
}

.profile-tab::after {
  content: "";
  position: absolute;
  left: 6rpx;
  top: 22rpx;
  width: 24rpx;
  height: 12rpx;
  border: 3rpx solid currentColor;
  border-top: 0;
  border-radius: 0 0 12rpx 12rpx;
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
</style>
