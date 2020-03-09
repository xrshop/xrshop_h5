<template>
  <div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) of banners" :key="index">
        <div class="cover" :style="{ 'background-image': `url(${banner.image})` }"></div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from '@/library/Swiper';
import banners from '@/config/meta/home-banners';

export default {
  name: 'Banner',
  data() {
    return {
      swiperInstance: null,
      banners,
    };
  },
  mounted() {
    this.swiperInstance = new Swiper('.banner', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
  destroyed() {
    this.swiperInstance.destroy();
  },
};
</script>

<style lang="scss" src="@/assets/swiper.scss"></style>
<style lang="scss" scoped>
.banner {
  height: 43.33vw;
  // margin-top: 1.88vw;
  .cover {
    height: 43.33vw;
    margin: 0 5.33vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  ::v-deep {
    .swiper-pagination {
      display: flex;
      bottom: 2.8vw;
      justify-content: center;
    }
    .swiper-pagination-bullet {
      width: 2vw;
      height: 2vw;
      margin: 0 1.33vw;
      display: block;
      background-color: rgba($color: #fff, $alpha: 0.5);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: rgba($color: #fff, $alpha: 1);
      opacity: 1;
    }
  }
}
</style>
