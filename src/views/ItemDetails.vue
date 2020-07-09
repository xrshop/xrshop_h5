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
      <div class="pagination-box">
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="info">
      <div class="price-line">
        <div class="left">
          <Price class="special" :value="item.price" />
          <Price
            v-if="item.otPrice != item.price"
            class="original"
            :value="item.otPrice"
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
          <img src="@/assets/ItemDetails/dz.png" alt="" class="icon" />
          <div class="text">湖南长沙</div>
          <div class="cell-wrapper">
            <div class="cell" v-if="item.isPostage === 1">包邮</div>
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
        <div
          class="right"
          @click="
            clickType = 0;
            isShow = true;
          "
        >
          <div class="text block">
            选择商品属性 规格
            <img src="@/assets/ItemDetails/gd.png" alt="" />
          </div>
          <div class="item-wrapper">
            <div
              class="item"
              v-for="(item, index) in buyOptions.activeArr"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-guide scroll-target">
      <div class="title-line">商品详情</div>
      <span class="detail-image" v-html="item.description"></span>
    </div>
    <div class="buy-recode scroll-target">
      <div class="notice">商品已售{{ item.sales }}份</div>
      <div class="list">
        <div class="cell" v-for="(cell, index) of buyRecode" :key="index">
          <img class="avatar" :src="cell.avatar" alt />
          <div class="right">
            <div class="nickname">{{ cell.nickname }}</div>
            <div class="time">{{ cell.addTime | dateTimeFormat }}</div>
          </div>
          <div class="cotent">{{ cell.comment }}</div>
        </div>
      </div>
    </div>
    <Footer
      @eventCart="cart"
      @eventCollect="collect"
      @eventPromptly="promptly"
      :usercollect="item.userCollect"
    />
    <div
      class="mask"
      @click="isShow = shareShow = false"
      v-if="isShow || shareShow"
    ></div>
    <transition name="slide-top">
      <BuyInfo
        :info="buyInfo"
        :options="buyOptions"
        :clickType="clickType"
        v-if="isShow"
        @callBack="addLater"
      />
      <div class="share-body" v-show="shareShow">
        <div class="title">分享到</div>
        <div class="share-box">
          <a class="bds_weixin" href=":javascript"></a>
          <a class="bds_weixin" href=":javascript"></a>
          <a class="bds_sqq"  :href="`http://connect.qq.com/widget/shareqq/index.html?url=${shareConfig.qq.url}&title=${shareConfig.qq.title}&source=${shareConfig.qq.source}&desc=${shareConfig.qq.desc}&pics=${shareConfig.qq.pics}&summary=${shareConfig.qq.summary}`" target="_black"></a>
          <a class="bds_qzone" :href="`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${shareConfig.qzone.url}`" target="_black"></a>
        </div>
        <!-- <vshare class="share-box" :vshareConfig="shareConfig" ref="share"></vshare> -->
        <div class="share-text">
          <div class="cell">微信</div>
          <div class="cell">朋友圈</div>
          <div class="cell">QQ</div>
          <div class="cell">QQ空间</div>
        </div>
      </div>
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
      iscollect: '',
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
      buyOptions: { count: 1, activeArr: [] },
      clickType: '',
      buyInfo: [],
      buyRecode: [],
      shareShow: false,
      shareConfig: {
        qzone: {
          url: window.location,
        },
        qq: {
          url: window.location,
          title: '测试',
          source: '测试1',
          desc: '测试2',
          pics: '',
          summary: 'Cs',
        },
      },
      // shareConfig: {
      //   shareList: ['weixin', 'weixin', 'qzone', 'sqq'],
      // },
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
      return new DateExtend(value * 1000).Format('yyyy-MM-dd hh:mm:ss');
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
      this.shareShow = true;
    },
    upData() {
      axios.get(`/api/product/detail/${this.$route.query.id}`, { headers: { Authorization: this.token } })
        .then((response) => {
          this.item = response.data.data.storeInfo;
          this.buyInfo = response.data.data;
          this.buyOptions.activeArr = this.buyInfo.productAttr.map((item) => item.attrValueArr[0]);
        });
      axios.get(`/api/reply/list/${this.$route.query.id}`, { headers: { Authorization: this.token }, params: { type: 0 } }).then((response) => {
        this.buyRecode = response.data.data;
      });
    },
    async collect() {
      const { id } = this.$route.query;
      const url = this.item.userCollect ? '/api/collect/del' : '/api/collect/add';
      this.item.userCollect = !this.item.userCollect;
      await axios.post(url, { category: 'product', id }, { headers: { Authorization: this.token } });
      this.upData();
    },
    cart() {
      this.clickType = 0;
      this.isShow = true;
    },
    promptly() {
      this.clickType = 1;
      this.isShow = true;
    },
    startSwiper() {
      this.swiperInstance = new Swiper('.banner', {
        autoplay: {
          disableOnInteraction: false,
        },
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
  created() {
    this.upData();
    console.log(this.shareConfig);
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
.share-body {
  position: fixed;
  z-index: 4;
  bottom: 0;
  width: 100vw;
  height: 47.07vw;
  background-color: #fff;
  .title {
    margin-top: 5.53vw;
    font-weight: bold;
    font-size: 5.33vw;
    text-align: center;
  }
  .share-text {
    display: flex;
    margin-top: 4.4vw;
    .cell {
      flex: 1;
      text-align: center;
    }
  }
}
.share-box::v-deep {
  display: flex;
  margin-top: 2.53vw;
  justify-content: space-around;
  &::after {
    content: none;
  }
  & > a {
    display: block;
    width: 16vw;
    height: 16vw;
    float: none;
    padding: 0;
    margin: 0;
    background-image: none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover {
      opacity: 1;
    }
  }
  .bds_weixin:first-of-type {
    background-image: url("~@/assets/Share/1.png");
  }
  .bds_weixin {
    background-image: url("~@/assets/Share/2.png");
  }
  .bds_sqq {
    background-image: url("~@/assets/Share/3.png");
  }
  .bds_qzone {
    background-image: url("~@/assets/Share/4.png");
  }
}
.mask {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: rgba($color: #000, $alpha: 0.1);
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
  .pagination-box {
    position: absolute;
    bottom: 10vw;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .swiper-pagination {
    background: rgba(0, 0, 0, 0.3);
    width: auto;
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
  overflow: hidden;
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
      border-left: solid #e5f4f9 thin;
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
        background-color: #f9f9f9;
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
    display: flex;
    flex-wrap: wrap;
    .avatar {
      margin-left: 5.2vw;
      margin-top: 4vw;
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
    }
    .right {
      margin-left: 15.87vw - 13.2vw;
      margin-top: 4.53vw;
      font-size: 3.2vw;
      .time {
        margin-top: 9.47vw - 7.73vw;
        font-size: 3.2vw;
        color: #bbb;
      }
    }
    .cotent {
      width: 100vw;
      font-size: 3.2vw;
      padding-left: 15.87vw;
      padding-bottom: 2vw;
      margin-top: 4vw;
    }
  }
}
</style>
