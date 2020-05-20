<template>
  <div class="item-details" @scroll="onScroll" :class="{ 'is-top': isTop }" ref="itemDetails">
    <TitleBar canBack ref="titleBar">
      <template v-slot:left>
        <div class="back" @click="back"></div>
      </template>
      <template v-slot:center>
        <Tabs
          v-if="!isTop"
          :options="tabNavOptions"
          v-model="tabNavActivated"
          :noChange="true"
          @click="onTabNavActivatedClick"
        />
        <!-- @change="onTabNavActivatedChange" -->
      </template>
      <template v-slot:right>
        <div class="share" @click="share"></div>
      </template>
    </TitleBar>
    <div class="swiper-container banner scroll-target">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in item.banners" :key="index">
          <div class="cover" :style="{ 'background-image': `url(${banner})` }"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="info">
      <div class="price-line">
        <Price class="special" :value="56.8" />
        <Price class="original" :value="88.0" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="row-b row">
        <div class="left">
          <div class="time">预售时间：05月20日</div>
          <div class="time">提货时间：05月20日</div>
        </div>
        <div class="right count">
          已卖出
          <div class="red">{{ item.sales }}</div>份
        </div>
      </div>
    </div>
    <img class="detail-image scroll-target" src="@/assets/ItemDetails/detail-image.png" alt />
    <div class="shopping-guide">
      <div class="title-line">购物指南</div>
      <div class="guide-list">
        <div class="item">
          <div class="title">1.消费者下单</div>
          <div class="content">每天商品下单时间：00:00-23:00</div>
        </div>
        <div class="item">
          <div class="title">2.物流配送</div>
          <div class="content">每天17:00之前，物流配送将消费者昨日下单的商品，配送到 相应下单的地址。</div>
        </div>
        <div class="item">
          <div class="title">3.100%售后</div>
          <div class="content">消费者遇到任何问题，可以直接拨打客户电话进行沟通，享受 100%售后服务。</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="nav-buttons">
        <router-link class="nav-button" to="/">
          <img class="icon" src="@/assets/ItemDetails/home.png" alt />
          <div class="text">首页</div>
        </router-link>
        <router-link class="nav-button" to="/cart">
          <img class="icon" src="@/assets/ItemDetails/cart.png" alt />
          <div class="text">购物车</div>
        </router-link>
        <router-link class="nav-button" to="/favorites">
          <img class="icon" src="@/assets/ItemDetails/like.png" alt />
          <div class="text">收藏</div>
        </router-link>
      </div>
      <div class="add-to-cart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
    <div class="buy-recode scroll-target"></div>
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
      scrollTargets: null,
      swiperInstance: null,
      item: {
        title: ' 甄选款 夹江腐乳霉豆腐四川特产湖南特辣麻辣臭豆 腐乳豆腐乳',
        desc: '不添加任何防腐剂、甜蜜素、色素',
        banners: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539655970,3080509067&fm=26&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2149592538,3504996479&fm=26&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3456629767,3715108095&fm=26&gp=0.jpg',
        ],
        inventory: 1000,
        sales: 1000,
      },
    };
  },
  methods: {
    onScroll(e) {
      this.isTop = e.target.scrollTop < 10;
      for (let index = 0; index < this.scrollTargets.length; index += 1) {
        const element = this.scrollTargets[index];
        if (element.offsetTop > e.target.scrollTop) {
          // 还未滚动到 element
          if (
            index === this.scrollTargets.length - 1
            && e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight
          ) {
            // element 是最后一个 且 滚动到底部
            this.tabNavActivated = index;
          } else {
            this.tabNavActivated = index - 1; // 设置浮标对应元素为 element 前一个
            break;
          }
        }
      }
    },
    back() {
      this.$router.back();
    },
    share() {
      //
    },
    onTabNavActivatedClick(newTabNavActivated) {
      if (!this.scrollTargets || !this.$refs.itemDetails) return;
      this.$refs.itemDetails.scrollTo({
        top: this.scrollTargets[newTabNavActivated].offsetTop,
        behavior: 'smooth',
      });
      // 通过 noChange 属性禁用 Tabs 的 change 事件
      // 侦听 Tabs 的 click 事件直接改变滚动条到 newTabNavActivated 对应的元素的位置
      // 通过滚动事件反馈去被动地修改 this.tabNavActivated
    },
  },
  mounted() {
    this.scrollTargets = document.querySelectorAll('.scroll-target');
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

.info {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 5.2vw;
  .price-line {
    margin-top: 4.93vw;
    .special::v-deep {
      .monetary-unit,
      .float {
        font-size: 2.4vw;
      }
      .int {
        font-size: 6vw;
      }
    }
    .original::v-deep {
      text-decoration: line-through;
      color: #bbb;
      margin-left: 0.93vw;
      .monetary-unit,
      .int,
      .float {
        font-size: 2.67vw;
      }
    }
  }
  .title {
    margin-top: 5.33vw - 0.8vw; // 5.33vw - (5.6vw - 4vw) * 0.5
    font-size: 4vw;
    font-weight: bold;
    line-height: 5.6vw;
  }
  .desc {
    margin-top: 3.6vw - 0.8vw - 0.8vw; // (4.8vw - 3.2vw) * 0.5
    font-size: 3.2vw;
    line-height: 1.5;
  }
  .row-b {
    border-top: var(--px) solid #eee;
    margin-top: 3.6vw - 0.8vw;
    .time {
      margin-top: 3.87vw;
      font-size: 3.2vw;
      color: #ff775a;
    }
    .time:last-of-type {
      margin-bottom: 4vw;
    }
    .count {
      display: flex;
      align-items: center;
      margin-left: auto;
      font-size: 3.2vw;
      .red {
        color: #f84e4e;
      }
    }
  }
}
.detail-image {
  width: 100vw;
  display: block;
}
.shopping-guide {
  margin: 3.07vw 1.33vw 3.73vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .title-line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5.33vw;
    margin-bottom: 2.93vw;
    color: #bbb;
    font-size: 3.2vw;
    &::before,
    &::after {
      content: "";
      height: var(--px);
      flex-grow: 1;
      background-color: #ddd;
      margin: 0 2.8vw;
    }
  }
  .guide-list {
    display: flex;
    flex-direction: column;
    padding: 1.6vw 8.13vw 5.47vw;
    .item {
      margin-top: 2.4vw;
      .title {
        // color: #333;
        font-size: 3.2vw;
      }
      .content {
        margin-top: 2.53vw - 1.6vw;
        color: #bbb;
        font-size: 3.2vw;
        line-height: 2;
      }
    }
  }
}
.footer {
  height: 13.07vw;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  display: flex;
  .nav-buttons {
    display: flex;
    flex-grow: 1;
  }
  .nav-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    .icon {
      // width: 5vw;
      height: 7vw;
      margin-top: 1.2vw;
      display: block;
    }
    .text {
      font-size: 2.67vw;
      margin-top: 0.6vw;
    }
  }
  .add-to-cart,
  .buy {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 28.27vw;
  }
  .add-to-cart {
    background-color: #ffd40c;
  }
  .buy {
    background-color: #f84e4e;
  }
}
</style>
