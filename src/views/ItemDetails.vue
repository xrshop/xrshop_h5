<template>
  <div
    class="item-details"
    @scroll="onScroll"
    :class="{ 'is-top': isTop }"
    ref="itemDetails"
    v-show="item"
  >
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
        <div
          class="swiper-slide"
          v-for="(banner, index) in item.sliderImageArr"
          :key="index"
        >
          <div
            class="cover"
            :style="{ 'background-image': `url(${banner})` }"
          ></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="info">
      <div class="price-line">
        <div class="left">
          <Price class="special" :value="item.price" />
          <Price
            v-if="item.price / item.otPrice != item.price"
            class="original"
            :value="item.price / item.otPrice"
          />
        </div>
        <div class="right">销量{{ item.sales }}</div>
      </div>
      <div class="title">{{ item.storeName }}</div>
      <div class="desc">{{ item.storeInfo }}</div>
    </div>
    <div class="card">
      <div class="row">
        <div class="left">发货</div>
        <div class="right">
          <img src="@/assets/ItemDetails/dz.png" alt="" class="icon">
          <div class="text">湖南长沙</div>
          <div class="cell-wrapper">
            <div class="cell">包邮</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="left">服务</div>
        <div class="right">
          <div class="text">无理由退货退款</div>
        </div>
      </div>
      <div class="row">
        <div class="left">选择</div>
        <div class="right">
          <div class="text block">
            选择商品属性 规格
            <img src="@/assets/ItemDetails/gd.png" alt="">
          </div>
          <div class="item-wrapper">
            <div class="item">香辣口味</div>
            <div class="item">麻辣口味</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-guide scroll-target">
      <div class="title-line">商品详情</div>
      <span class="detail-image" v-html="item.description"></span>
    </div>
    <div class="buy-recode scroll-target">
      <div class="notice">
        目前共{{ item.sales }}人参与购买，商品共销售{{ item.sales }}份
      </div>
      <div class="list">
        <div class="cell" v-for="(cell, index) of buyRecode" :key="index">
          <img class="avatar" :src="cell.avatar" alt />
          <div class="nickname">{{ cell.nickname }}</div>
          <div class="time">{{ cell.time | dateTimeFormat }}</div>
          <div class="count">
            <span class="red">{{ cell.count }}</span>份
          </div>
        </div>
      </div>
    </div>
    <Footer @eventCart="clickCart" @eventCollect="collect" />
    <div class="mask" @click="isShow = false" v-if="isShow"></div>
    <transition name="slide-top">
      <BuyInfo
        :info="buyInfo"
        :options="buyOptions"
        :clickType="clickType"
        v-if="isShow"
        @callBack="addLater"
      />
    </transition>
  </div>
</template>

<script>
import Swiper from '@/library/Swiper';
import DateExtend from '@/library/DateExtend';
import axios from 'axios';
import userManage from '@/modules/user-manage';
import BuyInfo from './ItemDetails/BuyInfo.vue';
import Footer from './ItemDetails/Footer.vue';

export default {
  data() {
    return {
      isTop: true,
      tabNavOptions: [
        { id: 0, text: '商品' },
        { id: 1, text: '详情' },
        { id: 2, text: '购买记录' },
      ],
      isShow: false,
      tabNavActivated: 0,
      scrollTargets: null,
      swiperInstance: null,
      item: '',
      buyOptions: { count: 1 },
      clickType: '',
      buyInfo: '',
      buyRecode: [
        {
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1180010744,3132227439&fm=26&gp=0.jpg',
          nickname: 'Dick Jason',
          time: 0,
          count: 16,
        },
        {
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1180010744,3132227439&fm=26&gp=0.jpg',
          nickname: 'Dick Jason',
          time: 0,
          count: 3,
        },
        {
          avatar:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1180010744,3132227439&fm=26&gp=0.jpg',
          nickname: 'Dick Jason',
          time: 0,
          count: 1002,
        },
      ],
    };
  },
  components: {
    Footer,
    BuyInfo,
  },
  computed: {
    token() {
      return userManage.data.token;
    },
  },
  filters: {
    dateTimeFormat(value) {
      return new DateExtend(value).Format('yyyy-MM-dd hh:mm:ss');
    },
  },
  watch: {
    item() {
      if (this.swiperInstance) {
        this.$nextTick(() => {
          this.endSwiper();
          this.startSwiper();
        });
      }
    },
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
    back() {
      this.$router.back();
    },
    share() {
      //
    },
    collect() {
      console.log(1);
    },
    clickCart() {
      this.clickType = 0;
      this.isShow = true;
    },
    startSwiper() {
      this.swiperInstance = new Swiper('.banner', {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    endSwiper() {
      this.swiperInstance.destroy();
    },
    addLater(v) {
      if (v === 'success') {
        this.isShow = false;
      }
    },
  },
  async created() {
    await axios.get(`/api/product/detail/${this.$route.query.id}`, { headers: { Authorization: this.token } })
      .then((response) => {
        this.item = response.data.data.storeInfo;
        this.buyInfo = response.data.data;
        console.log(response);
      });
  },
  mounted() {
    this.startSwiper();
    this.scrollTargets = document.querySelectorAll('.scroll-target');
  },
  destroyed() {
    this.endSwiper();
  },
};
</script>

<style lang="scss" scoped>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 0.36s;
  transform: translateY(0%);
}
.slide-top-enter, .slide-top-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
.mask {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba($color: #000, $alpha: 0);
}
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
  padding: 0 5.2vw 4vw;
  .price-line {
    margin-top: 4.93vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      color: #bbbbbb;
      font-size: 3.2vw;
    }
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
}
.detail-image {
  width: 100vw;
  display: block;
}
.shopping-guide {
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
.card {
  background-color: #fff;
  border-radius: 0 0 1vw 1vw;
  margin-top: 2.67vw;
  .row {
    display: flex;
    padding: 3.8vw 5.33vw 3.8vw 5.2vw;
  }
  .left {
    margin-right: 3.6vw;
    font-size: 3.2vw;
    color: #bbb;
    flex-shrink: 0;
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    .icon {
      width: 3.33vw;
      flex-shrink: 0;
      margin-right: 1.33vw;
    }
    .text {
      font-size: 3.2vw;
      position: relative;
      img {
        position: absolute;
        width: 1.2vw;
        height: 2vw;
        right: 0;
      }
    }
    .block {
      width: 100%;
    }
    .cell-wrapper {
      display: flex;
      margin-left: 1.47vw;
      padding-left: 2.67vw;
      border-left: solid #E5F4F9 var(--px);
      .cell {
        font-size: 3.2vw;
        margin-right: 2.67vw;
      }
    }
    .item-wrapper {
      margin-top: 2.67vw;
      display: flex;
      flex-wrap: wrap;
      .item {
        margin-right: 2.67vw;
        padding: 1.4vw 1.33vw;
        background-color: #F9F9F9;
        color: #bbbbbb;
        font-size: 2.67vw;
      }
    }
  }
}
.buy-recode {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.8vw;
  margin-bottom: 5.33vw;
  .notice {
    margin: 7.6vw 5.2vw 1.33vw;
    font-size: 3.2vw;
    color: #f84e4e;
    height: 8vw;
    display: flex;
    align-items: center;
    background-color: #fff0f0;
    padding: 0 4.13vw;
    box-sizing: border-box;
    border-radius: 4vw;
  }
  .cell {
    height: 16vw;
    position: relative;
    .avatar {
      position: absolute;
      left: 5.2vw;
      top: 4vw;
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
    }
    .nickname {
      position: absolute;
      left: 15.87vw;
      top: 4.53vw;
      font-size: 3.2vw;
    }
    .time {
      position: absolute;
      left: 15.87vw;
      top: 9.47vw;
      font-size: 3.2vw;
      color: #bbb;
    }
    .count {
      position: absolute;
      right: 5.33vw;
      top: 6.53vw;
      font-size: 3.2vw;
      .red {
        color: #f84e4e;
      }
    }
  }
}
</style>
