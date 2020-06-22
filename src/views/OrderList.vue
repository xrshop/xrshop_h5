<template>
  <div class="order-list">
    <TitleBar title="我的订单" canBack>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" />
      </template>
    </TitleBar>
    <div class="tab-content">
      <div class="item" v-for="item in orderList" :key="item.cartId">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt="" />
          <h3>星然云电商商城</h3>
          <div class="state">{{ status[item._status._type] }}</div>
        </div>
        <template v-if="item.cartInfo.length === 1">
          <router-link
            :to="{
              path: '/order-details',
              query: { key: item.unique }
            }"
            class="main"
          >
            <img :src="item.cartInfo[0].productInfo.attrInfo.image" alt="" />
            <div class="middle">
              <div class="intro">
                {{ item.cartInfo[0].productInfo.storeName }}
              </div>
              <div class="label">
                {{ item.cartInfo[0].productInfo.attrInfo.suk }}
              </div>
            </div>
            <div class="right">
              <div class="money">
                <Price
                  :value="Number(item.cartInfo[0].productInfo.attrInfo.price)"
                />
              </div>
              <div class="quantity">x{{ item.cartInfo[0].cartNum }}</div>
            </div>
          </router-link>
          <div class="stat">
            <div class="count">
              共{{ item.cartInfo[0].cartNum }}件商品 合计：
            </div>
            <div class="money"><Price :value="Number(item.payPrice)" /></div>
          </div>
        </template>
        <template v-else>
          <router-link
            :to="{
              path: '/order-details',
              query: { key: item.unique }
            }"
            class="main img-box"
          >
            <img
              v-for="img in item.cartInfo.slice(0, 3)"
              :key="img.id"
              :src="img.productInfo.attrInfo.image"
              alt=""
            />
            <div class="stat">
              <div class="money"><Price :value="Number(item.payPrice)" /></div>
              <div class="count">
                共{{ item.cartInfo.map(item => item.cartNum) | sumCount }}件
              </div>
            </div>
          </router-link>
        </template>
        <div class="button">
          <router-link
            v-if="item._status._type === '0'"
            to="/order-details"
            class="cell style-tow"
            >去付款</router-link
          >
          <router-link
            v-if="item._status._type === '1'"
            to="/order-details"
            class="cell style-one"
            >提醒发货</router-link
          >
          <router-link
            v-if="item._status._type === '2'"
            to="/order-details"
            class="cell style-one"
            >查看物流</router-link
          >
          <router-link
            v-if="item._status._type === '2'"
            to="/order-details"
            class="cell style-tow"
            >确认收货</router-link
          >
          <router-link
            v-if="item._status._type === '3'"
            to="/order-details"
            class="cell style-one"
            >申请售后</router-link
          >
          <router-link
            v-if="item._status._type === '3'"
            to="/order-details"
            class="cell style-tow"
            >评价</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      sort: [
        { id: 100, text: '全部' },
        { id: 0, text: '待付款' },
        { id: 1, text: '待发货' },
        { id: 2, text: '待收货' },
        { id: 3, text: '待评价' },
      ],
      sortActivated: Number(this.$route.query.type),
      orderList: [],
      status: {
        0: '待支付',
        1: '待发货',
        2: '待收货',
        3: '待评价',
      },
    };
  },
  computed: {
    token() {
      return userManage.data.token;
    },
  },
  filters: {
    sumCount(v) {
      let count = 0;
      v.forEach((item) => {
        count += item;
      });
      return count;
    },
  },
  watch: {
    sortActivated(v) {
      this.$router.replace({ query: { type: v } });
      this.getData(v);
    },
  },
  methods: {
    getData(type) {
      this.orderList = [];
      axios
        .get(`/api/order/list?type=${type}`, { headers: { Authorization: this.token } })
        .then((response) => {
          this.orderList = response.data.data;
          console.log(this.orderList);
        });
    },
  },
  created() {
    this.getData(this.sortActivated);
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #f7f4f8;
}
.title-bar::v-deep {
  background-color: #ff4f59;
  border-radius: 0 0 2vw 2vw;
  .center {
    color: #fff;
  }
  .left {
    svg path {
      fill: #fff;
    }
  }
  .tabs {
    color: #fff;
    .indicator {
      background-color: #fff;
    }
  }
}
.tab-content {
  margin-bottom: 4vw;
}
.tab-content .item {
  display: block;
  width: 100vw;
  margin-top: 2.67vw;
  background: rgba(255, 255, 255, 1);
  border-radius: 2vw;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5.2vw;
  position: relative;
  .price::v-deep {
    color: #333;
  }
  .top {
    display: flex;
    margin-top: 4.53vw;
    align-items: center;
    position: relative;
    img {
      width: 4.8vw;
      height: 4.8vw;
    }
    h3 {
      margin: 0;
      font-size: 3.73vw;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-left: 1vw;
    }
    .state {
      position: absolute;
      right: 0;
      font-size: 3.2vw;
      font-weight: 500;
      color: rgba(248, 78, 78, 1);
    }
  }
  .main {
    margin-top: 4.67vw;
    display: flex;
    &.img-box {
      position: relative;
      .stat {
        height: 20vw;
        padding-left: 6vw;
        background-color: #fff;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        background-image: url("~@/assets/OrderList/yy.png");
        background-repeat: no-repeat;
        background-position: left center;
        margin: 0;
        .count {
          color: #bbb;
          margin-top: 1.37vw;
        }
      }
    }
    img {
      width: 20vw;
      height: 20vw;
      border-radius: 0.8vw;
      margin-right: 2.67vw;
      flex-shrink: 0;
    }
    .middle {
      width: 100%;
      .intro {
        font-size: 3.2vw;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 5.2vw;
        margin-top: 1vw;
      }
      .label {
        display: inline-block;
        font-size: 2.67vw;
        color: #bbbbbb;
        margin-top: 0.8vw;
      }
    }
    .right {
      background-color: #fff;
      margin-top: 2vw;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      text-align: right;
      margin-left: 2vw;
      .money {
        font-size: 2.4vw;
        span {
          width: 15vw;
          font-size: 3.73vw;
        }
      }
      .quantity {
        margin-top: 0.8vw;
        text-align: right;
        font-size: 2.67vw;
        color: #bbbbbb;
      }
    }
  }
  .stat {
    display: flex;
    margin-top: 4vw;
    justify-content: flex-end;
    .count {
      font-size: 3.2vw;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      transform: translateY(0.4vw);
    }
    .money {
      font-size: 2.4vw;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      span {
        font-size: 3.73vw;
      }
    }
  }
  .button {
    padding-bottom: 5.47vw;
    display: flex;
    justify-content: flex-end;
    margin-top: 4vw;
    .cell {
      margin-left: 3.2vw;
      width: 24vw;
      line-height: 8vw;
      text-align: center;
      border-radius: 4vw;
      font-size: 3.2vw;
    }
    .style-one {
      border: var(--px) solid #bbbbbb;
      font-size: 3.2vw;
    }
    .style-tow {
      border: var(--px) solid #f84e4e;
      color: #f84e4e;
    }
  }
}
</style>
