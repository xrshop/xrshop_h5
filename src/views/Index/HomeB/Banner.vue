<template>
  <div class="banner">
    <!-- <router-link to="/index/category" class="sort">
      <div class="banner-tab">
        <div
          class="cell"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ active: item.id == tabActive }"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="right">分类</div>
    </router-link> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) of banner"
          :key="index"
        >
          <div
            class="cover"
            :style="{ 'background-image': `url(${banner.pic})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/library/Swiper';

export default {
  name: 'Banner',
  props: ['banner'],
  data() {
    return {
      swiperInstance: null,
      tabList: [
        { id: 0, title: '首页' },
        { id: 1, title: '米面杂粮' },
        { id: 2, title: '生鲜时蔬' },
        { id: 3, title: '茗茶' },
        { id: 4, title: '零食' },
        { id: 5, title: '特产美食' },
        { id: 6, title: '优选精选' },
      ],
      tabActive: 0,
    };
  },
  watch: {
    banner() {
      if (this.swiperInstance) {
        this.$nextTick(() => {
          this.b();
          this.a();
        });
      }
    },
  },
  methods: {
    a() {
      this.swiperInstance = new Swiper('.banner .swiper-container', {
        speed: 500,
        autoplay: true,
        loop: true,
      });
    },
    b() {
      this.swiperInstance.destroy();
    },
  },
  mounted() {
    this.a();
  },
  destroyed() {
    this.b();
  },
};
</script>

<style lang="scss" src="@/assets/swiper.scss"></style>
<style lang="scss" scoped>
.banner {
  position: relative;
  z-index: 1;
  .swiper-container {
    width: 100vw;
    height: 40vw;
    .cover {
      height: 40vw;
      margin: 0 4vw;
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
  .sort {
    padding: 1.6vw 4vw 2.53vw 5.47vw;
    display: flex;
    .banner-tab {
      display: flex;
      overflow: scroll;
      align-items: center;
      .cell {
        margin-right: 3.87vw;
        flex-shrink: 0;
        font-size: 3.2vw;
        &:last-of-type {
          margin-right: 0;
        }
        &.active {
          font-size: 4vw;
          font-weight: bold;
        }
      }
    }
    .right {
      position: relative;
      display: flex;
      align-items: center;
      width: 7vw;
      height: 100%;
      flex-shrink: 0;
      font-size: 3.2vw;
      background-image: url("~@/assets/Index/HomeB/Banner/fl.png");
      background-repeat: no-repeat;
      background-size: 4vw 4vw;
      background-position: 1.33vw center;
      padding-left: 6.66vw;
      &::after {
        content: "";
        position: absolute;
        left: -2vw;
        display: block;
        width: 2vw;
        height: 4.13vw;
        background-image: url("~@/assets/Index/HomeB/Banner/yc.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>
