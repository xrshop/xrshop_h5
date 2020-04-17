<template>
  <div class="item-details" @scroll="onScroll" :class="{ 'is-top': isTop }">
    <TitleBar canBack ref="titleBar">
      <template v-slot:left>
        <div class="back" @click="back"></div>
      </template>
      <template v-slot:center>
        <Tabs v-if="!isTop" :options="tabNavOptions" v-model="tabNavActivated" />
      </template>
      <template v-slot:right>
        <div class="share" @click="share"></div>
      </template>
    </TitleBar>
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in item.banners" :key="index">
          <div class="cover" :style="{ 'background-image': `url(${banner})` }"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/library/Swiper';

export default {
  data() {
    return {
      isTop: true,
      tabNavOptions: [
        { id: 0, text: '商品' },
        { id: 1, text: '详情' },
        { id: 2, text: '购买记录' },
      ],
      tabNavActivated: 0,
      swiperInstance: null,
      item: {
        banners: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539655970,3080509067&fm=26&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2149592538,3504996479&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3456629767,3715108095&fm=26&gp=0.jpg',
        ],
      },
    };
  },
  methods: {
    onScroll(e) {
      this.isTop = e.target.scrollTop < 10;
    },
    back() {
      this.$router.back();
    },
    share() {
      //
    },
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

<style lang="scss" scoped>
.item-details {
  background: #f5f5f5;
}
.title-bar::v-deep {
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  transition-property: background-color;
  transition-duration: 0.36s;
  width: 100vw;
  backdrop-filter: none;
  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--title-bar-height);
    height: var(--title-bar-height);
  }
}
.back,
.share {
  width: 100%;
  height: 100%;
  background-size: 6.67vw 6.67vw;
  background-repeat: no-repeat;
  background-position: center;
}
.back {
  background-image: url("~@/assets/ItemDetails/back2.png");
}
.share {
  background-image: url("~@/assets/ItemDetails/share2.png");
}
.is-top {
  .title-bar::v-deep {
    background-color: rgba(255, 255, 255, 0);
  }
  .back {
    background-image: url("~@/assets/ItemDetails/back.png");
  }
  .share {
    background-image: url("~@/assets/ItemDetails/share.png");
  }
}

.tabs::v-deep {
  height: 100%;
  .indicator {
    top: unset;
    bottom: 1.6vw;
    height: 0.8vw;
    border-radius: 0.4vw;
  }
  .cell {
    padding: 0 2.8vw;
  }
  .cell.active .text {
    color: #f84e4e;
  }
}
.banner::v-deep {
  .swiper-wrapper {
    .swiper-slide {
      .cover {
        width: 100vw;
        height: 100vw;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .swiper-pagination {
    background: rgba(0, 0, 0, 0.3);
    width: auto;
    left: 50%;
    bottom: 2.67vw;
    transform: translateX(-50%);
    border-radius: 2.67vw;
    padding: 2vw 2.4vw;
    display: flex;
    .swiper-pagination-bullet {
      background: #fff;
      opacity: 0.5;
      width: 1.33vw;
      height: 1.33vw;
      margin: 0 0.67vw;
      border-radius: 50%;
      flex-shrink: 0;
      flex-grow: 0;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
}
</style>
