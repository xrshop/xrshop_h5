<template>
  <div class="post-sale-need">
    <TitleBar title="申请售后" canBack />
    <div class="product-box">
      <div class="product" v-for="item in data.cartInfo" :key="item.id">
        <div
          class="cover"
          :style="{ 'background-image': `url(${item.productInfo.attrInfo.image})` }"
        ></div>
        <div class="info">
          <div class="title">{{ item.productInfo.storeName }}</div>
          <div class="count">
            {{ item.productInfo.attrInfo.suk }} *{{ item.cartNum }}{{ item.productInfo.unitName }}
          </div>
        </div>
      </div>
    </div>
    <div class="item-box">
      <router-link :to="{path: '/post-sale-refund', query: {key: $route.query.key}}" class="item">
        <img src="@/assets/PostSaleNeed/kuan.png" alt="" />
        <div class="text">
          <div class="top">我要退款</div>
          <!-- <div class="bottom">我没收到货，或者与卖家协商不用退货只退款</div> -->
        </div>
      </router-link>
      <!-- <router-link to="/post-sale-refund" class="item">
        <img src="@/assets/PostSaleNeed/tui.png" alt="">
        <div class="text">
          <div class="top">我要退款退货</div>
          <div class="bottom">已收到货，需要退还收到的货物</div>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData() {
      axios.get(`/api/order/detail/${this.$route.query.key}`, {
        headers: { Authorization: userManage.data.token },
      }).then((response) => {
        this.data = response.data.data;
        console.log(this.data);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.post-sale-need {
  background-color: #f7f5f6;
  font-family: PingFang SC;
}
.title-bar::v-deep {
  background-color: rgba(235, 235, 235, 0.8);
}
.product-box {
  border-radius: 0 0 2vw 2vw;
  padding: 2vw 0;
  background-color: #fff;
}
.product {
  padding: 4vw 5.2vw;
  display: flex;
  .cover {
    margin-right: 2.67vw;
    width: 18.67vw;
    height: 18.67vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.8vw;
    flex-shrink: 0;
  }
  .info {
    color: rgba(51, 51, 51, 1);
    .title {
      font-size: 3.73vw;
      line-height: 5.2vw;
    }
    .count {
      display: inline-block;
      padding: 1vw 1.6vw;
      margin-top: 3.26vw;
      font-size: 3.2vw;
      background-color: #f5f5f5;
      border-radius: 2.67vw;
    }
  }
}
.item-box {
  margin-top: 2.67vw;
  border-radius: 2vw;
  background-color: #fff;
  padding: 0 5.2vw;
  .item {
    height: 17.6vw;
    display: flex;
    align-items: center;
    border-bottom: solid #eeeeee var(--px);
    position: relative;
    img {
      width: 6.4vw;
      height: 6.4vw;
      margin: 0 2.93vw 0 2vw;
      flex-shrink: 0;
    }
    .text {
      .top {
        font-size: 3.73vw;
        color: rgba(51, 51, 51, 1);
      }
      .bottom {
        margin-top: 2.67vw;
        font-size: 3.2vw;
        color: rgba(187, 187, 187, 1);
      }
    }
    &:last-of-type {
      border: none;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 2.67vw;
      transform: translateY(-50%);
      width: 1.07vw;
      height: 1.87vw;
      background-image: url("~@/assets/PostSaleNeed/ic.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
