<template>
  <div class="order-list">
    <TitleBar title="我的订单" canBack>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" @direction-change="sorts" />
      </template>
    </TitleBar>
    <div class="tab-content">
      <div class="item">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt="">
          <h3>耒小阳商城</h3>
          <div class="state">已发货</div>
        </div>
        <router-link to="/order-details" class="main">
          <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg"
          alt=""
          />
          <div class="middle">
            <div class="intro">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
            <div class="label">白糯米糍粑</div>
          </div>
          <div class="right">
            <div class="money">￥<span>56</span>.80</div>
            <div class="quantity">x5</div>
          </div>
        </router-link>
        <div class="stat">
          <div class="count">共5件商品  合计：</div>
          <div class="money">￥<span>250</span>.80</div>
        </div>
        <div class="button">
          <div class="style-one cell">查看物流</div>
          <div class="style-tow cell">确认收货</div>
        </div>
      </div>
      <div class="item">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt="">
          <h3>耒小阳商城</h3>
          <div class="state">付款</div>
        </div>
         <router-link to="/order-details" class="main">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg" alt="">
          <div class="middle">
            <div class="intro">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
            <div class="label">白糯米糍粑</div>
          </div>
          <div class="right">
            <div class="money">￥<span>56</span>.80</div>
            <div class="quantity">x5</div>
          </div>
        </router-link>
        <div class="stat">
          <div class="count">共5件商品  合计：</div>
          <div class="money">￥<span>250</span>.80</div>
        </div>
        <div class="button">
          <router-link to="/order-details" class="cell style-tow">去付款</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: [
        { id: 0, text: '全部' },
        { id: 1, text: '待付款' },
        { id: 2, text: '待发货' },
        { id: 3, text: '待收货' },
        { id: 4, text: '待评价' },
      ],
      sortActivated: 0,
    };
  },
  watch: {
    sortActivated(v) {
      // eslint-disable-next-line no-console
      console.log(v);
    },
  },
  methods: {
    sorts(item, index) {
      // eslint-disable-next-line no-console
      console.log(item, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #F7F4F8;
}
.title-bar::v-deep {
  background-color: #FF4F59;
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
.tab-content .item{
  display: block;
  width: 100vw;
  height: 58.67vw;
  margin-top: 2.67vw;
  background: rgba(255,255,255,1);
  border-radius: 2vw;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5.2vw;
  position: relative;
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
      font-size:3.73vw;
      font-weight:bold;
      color:rgba(51,51,51,1);
      margin-left: 1vw;
    }
    .state {
      position: absolute;
      right: 0;
      font-size: 3.2vw;
      font-weight: 500;
      color: rgba(248,78,78,1);
    }
  }
  .main {
    margin-top: 4.67vw;
    display: flex;
    justify-content: space-between;
    img {
      width: 20vw;
      height: 20vw;
      border-radius: 0.8vw;
      margin-right: 2.67vw;
      flex-shrink: 0;
    }
    .middle {
      .intro {
        font-size:3.2vw;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:5.2vw;
        margin-top: 1vw;
      }
      .label {
        display: inline-block;
        font-size: 2.67vw;
        color: #BBBBBB;
        margin-top: 0.8vw;
      }
    }
    .right {
      background-color: #fff;
      margin-top: 2vw;
      font-weight:bold;
      color:rgba(51,51,51,1);
      text-align: right;
      margin-left: 2vw;
      .money {
        font-size:2.4vw;
        span {
          width: 15vw;
          font-size: 3.73vw;
        }
      }
      .quantity {
        margin-top: 0.8vw;
        text-align: right;
        font-size: 2.67vw;
        color: #BBBBBB;
      }
    }
  }
  .stat {
    position: absolute;
    display: flex;
    bottom: 17.47vw;
    right: 5.2vw;
    .count {
      font-size:3.2vw;
      font-weight:500;
      color:rgba(51,51,51,1);
      transform: translateY(0.4vw);
    }
    .money {
      font-size:2.4vw;
      font-weight:bold;
      color:rgba(51,51,51,1);
      span {
        font-size: 3.73vw;
      }
    }
  }
  .button {
    position: absolute;
    right: 5.2vw;
    bottom: 5.47vw;
    display: flex;
    .cell {
      margin-left: 3.2vw;
      width:24vw;
      line-height:8vw;
      text-align: center;
      border-radius:4vw;
      font-size:3.2vw;
    }
    .style-one {
      border: var(--px) solid #BBBBBB;
      font-size: 3.2vw;
    }
    .style-tow {
      border: var(--px) solid #F84E4E;
      color: #F84E4E;
    }
  }
}
</style>
