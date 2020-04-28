<template>
  <div class="integral-goods" @scroll="onScroll" :class="{ 'is-top': isTop }">
    <TitleBar @rightTextClick="share" canBack ref="titleBar" :title="isTop ? '' : '商品详情'">
      <template v-slot:right>
        <Icon name="share" class="share-button" @click.native="share()" />
      </template>
    </TitleBar>
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in goods.img.banner" :key="index">
          <div class="cover" :style="{ 'background-image': `url(${banner})` }"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="info" ref="gude">
      <div class="point">
        <span class="number">{{ goods.point }}</span>
        <span class="text">积分</span>
      </div>
      <div class="title">{{ goods.title }}</div>
    </div>
    <div class="img-box">
      <div class="title">
        <div class="text">商品详情</div>
      </div>
      <div class="img-list">
        <img class="item" :src="goods.img.publicity[0]" v-for="(item, index) in 2" :key="index" />
      </div>
    </div>
    <div class="guide">
      <div class="title">
        <div class="text">购物指南</div>
      </div>
      <div class="item-list">
        <div class="item">
          <div class="top">1.消费者下单</div>
          <div class="bottom">每天商品下单时间：00:00-23:00</div>
        </div>
        <div class="item">
          <div class="top">2.物流配送</div>
          <div class="bottom">每天17:00之前，物流配送将消费者昨日下单的商品，配送到 相应下单的地址。</div>
        </div>
        <div class="item">
          <div class="top">3.100%售后</div>
          <div class="bottom">消费者遇到任何问题，可以直接拨打客户电话进行沟通，享受 100%售后服务。</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <router-link to="/integral-order" class="but">立即兑换</router-link>
    </div>
  </div>
</template>

<script>
import Swiper from '@/library/Swiper';

export default {
  data() {
    return {
      isTop: true,
      goods: {
        img: {
          banner: [
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539655970,3080509067&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2149592538,3504996479&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3456629767,3715108095&fm=26&gp=0.jpg',
          ],
          publicity: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586606300832&di=1943ebca864f1a6a19348e9d7209e5b3&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fdish%2Fd%2F4%2F3%2F600_d4e9a1c2bd0fa0cc8378680cd26cccf3.jpg',
          ],
        },
        point: 1255,
        title: '甄选款 夹江腐乳霉豆腐四川特产湖南特辣麻辣臭豆 腐乳豆腐乳',
      },
      swiperInstance: null,
    };
  },
  methods: {
    onScroll(e) {
      this.isTop = e.target.scrollTop < 10;
    },
    share() {
      const { gude } = this.$refs;
      return console.log(gude.innerHTML);
    },
  },
  mounted() {
    this.swiperInstance = new Swiper('.banner', {
      speed: 800,
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
.integral-goods {
  background: #f5f5f5;
}
.is-top {
  .title-bar::v-deep {
    background-color: rgba(255, 255, 255, 0);
    .main {
      .right,
      .left {
        background: #000;
        .icon-wrapper > svg > path {
          fill: #fff;
        }
      }
    }
  }
}
.title-bar::v-deep {
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  transition-property: background-color;
  transition-duration: 0.36s;
  width: 100vw;
  backdrop-filter: none;
  .main {
    .right,
    .left {
      width: 6.67vw;
      height: 6.67vw;
      background: none;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.5;
      .icon-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > svg path {
          fill: #000;
        }
      }
    }
    .right {
      right: 5.47vw;
      svg {
        width: 60%;
        height: 60%;
      }
    }
    .left {
      left: 5.07vw;
      svg {
        width: 80%;
        height: 80%;
      }
    }
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
.info {
  padding: 0 5.2vw 7.2vw;
  background-color: #fff;
  .point {
    padding: 4.93vw 0 4.53vw;
    color: #f84e4e;
    font-weight: bold;
    .number {
      font-size: 6vw;
    }
    .text {
      font-size: 2.6vw;
    }
  }
  .title {
    font-size: 4vw;
    font-weight: bold;
    line-height: 5.6vw;
  }
}
.img-box {
  padding: 0 0.9vw;
  .title {
    height: 12.4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after,
    &::before {
      content: "";
      display: inline-block;
      width: 11.6vw;
      height: var(--px);
      background-color: #bbb;
    }
    .text {
      font-size: 3.2vw;
      color: #bbb;
      margin: 0 2.8vw;
    }
  }
  .img-list {
    padding-bottom: 2.27vw;
    .item {
      width: 100%;
      display: block;
      margin-bottom: 0.4vw;
    }
  }
}
.guide {
  width: 97.33vw;
  background: #fff;
  margin: 0 auto;
  padding-bottom: 4vw;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5.33vw 2.8vw;
    box-sizing: border-box;
    &::after {
      content: "";
      position: absolute;
      width: calc(100% - 2.8vw * 2);
      height: var(--px);
      background: #ddd;
      z-index: 0;
    }
    .text {
      display: inline-block;
      padding: 0 2.8vw;
      background-color: #fff;
      color: #bbb;
      font-size: 3.2vw;
      z-index: 1;
    }
  }
  .item-list {
    padding: 0 2.8vw 0 8vw;
    .item {
      margin-bottom: 4vw;
      .top {
        font-size: 3.2vw;
      }
      .bottom {
        font-size: 3.2vw;
        color: #bbb;
        line-height: 1.5;
        margin-top: 1.77vw;
      }
    }
  }
}
.footer {
  height: 17.07vw;
  width: 100vw;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFang SC;
  box-shadow: 0 0 6px 0px rgba(200, 200, 200, 0.3);
  background-color: #fff;
  z-index: 100;
  .but {
    width: 89.33vw;
    text-align: center;
    line-height: 11.73vw;
    background: rgba(248, 78, 78, 1);
    border-radius: 5.87vw;
    font-size: 4vw;
    color: #fff;
  }
}
</style>
