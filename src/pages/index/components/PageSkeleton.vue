<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view is="pages/index/components/CustomNavbar">
        <view
          class="navbar CustomNavbar--navbar data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
          style="padding-top: 44px"
        >
          <view
            class="flex CustomNavbar--flex items-center CustomNavbar--items-center h-64 CustomNavbar--h-64 pl-30 CustomNavbar--pl-30 pt-20 CustomNavbar--pt-20 data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
          >
            <image
              class="w-200 CustomNavbar--w-200 h-50 CustomNavbar--h-50 data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-image"
            ></image>
            <text
              class="logo-text CustomNavbar--logo-text data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-transparent sk-text-3-5714-190 sk-text"
              >新鲜 · 亲民 · 快捷</text
            >
          </view>
          <view class="search CustomNavbar--search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2">
            <text
              class="icon-search CustomNavbar--icon-search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-transparent sk-text-14-2857-88 sk-text sk-pseudo sk-pseudo-circle"
              >搜索商品</text
            >
            <text
              class="icon-scan CustomNavbar--icon-scan data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-pseudo sk-pseudo-circle"
            ></text>
          </view>
        </view>
      </view>
      <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view">
        <view is="components/Swiper/Swiper" current="0" autoplay="false">
          <view class="carousel Swiper--carousel">
            <swiper circular="true" interval="3000" current="0" autoplay="false"></swiper>
            <view class="indicator Swiper--indicator">
              <text class="dot Swiper--dot active Swiper--active"></text>
              <text class="dot Swiper--dot"></text>
              <text class="dot Swiper--dot"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CategoryPanel">
          <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-396 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-597 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-266 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-176 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-13 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-94 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-727 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-154 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-419 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-957 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPannel">
          <view class="panel HotPannel--panel hot HotPannel--hot">
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-121 sk-text"
                  >特惠推荐</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-889 sk-text"
                  >精选全攻略</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-2 sk-text"
                  >爆款推荐</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-127 sk-text"
                  >最受欢迎</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-977 sk-text"
                  >一站买全</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-761 sk-text"
                  >精心优选</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPannel--item">
              <view class="title HotPannel--title">
                <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-840 sk-text"
                  >新鲜好物</text
                >
                <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-143 sk-text"
                  >生活加分项</text
                >
              </view>
              <navigator class="cards HotPannel--cards" hover-class="none">
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
        <view is="components/Guess/Guess">
          <view class="caption Guess--caption">
            <text
              class="text Guess--text sk-transparent sk-text-0-0000-710 sk-text sk-pseudo sk-pseudo-circle"
              >猜你喜欢</text
            >
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script lang="ts" setup>
// const props = defineProps()
</script>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-190 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-88 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-396 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-597 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-266 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-176 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-13 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-94 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-727 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-154 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-419 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-957 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-121 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-889 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-2 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-127 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-977 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-761 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-840 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-143 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-710 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
