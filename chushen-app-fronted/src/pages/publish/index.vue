<template>
  <view class="page-wrap">
    <view class="page">
      <text class="title">发布</text>
      <text class="desc">发布作品页面骨架已就绪。</text>
    </view>
    <AppTabBar active="publish" />
  </view>
</template>

<script setup lang="ts">
import AppTabBar from "@/components/AppTabBar.vue";
</script>

<style scoped>
.page-wrap {
  min-height: 100vh;
  background: #fff7ea;
}

.page {
  min-height: 100vh;
  padding: 48rpx 32rpx 150rpx;
  box-sizing: border-box;
}

.title,
.desc {
  display: block;
}

.title {
  color: #332217;
  font-size: 44rpx;
  font-weight: 800;
}

.desc {
  margin-top: 20rpx;
  color: #7a6a5e;
  font-size: 28rpx;
}
</style>
