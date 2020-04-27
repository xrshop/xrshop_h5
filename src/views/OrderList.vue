<template>
  <div class="order-list">
    <TitleBar title="我的订单" canBack>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" />
      </template>
    </TitleBar>
    <div class="tab-content">
      <div class="item">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt="">
          <h3>耒小阳商城</h3>
          <div class="state">待发货</div>
        </div>
        <router-link to="/order-details" class="main">
          <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg"
          alt=""
          />
          <div class="middle">
            <div class="intro">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
            <div class="name">白糯米糍粑</div>
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
          <div class="style-one">查看物流</div>
          <div class="style-tow">确认收货</div>
        </div>
      </div>
      <div class="item">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt="">
          <h3>耒小阳商城</h3>
          <div class="state">待发货</div>
        </div>
         <router-link to="/order-details" class="main">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg" alt="">
          <div class="middle">
            <div class="intro">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
            <div class="name">白糯米糍粑</div>
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
          <div class="style-tow">确认收货</div>
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
        { id: 1, text: '待发货' },
        { id: 2, text: '待收货' },
        { id: 3, text: '待评价' },
      ],
      sortActivated: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #F7F4F8;
}
.title-bar {
  border-radius: 0 0 2vw 2vw;
}
.tab-content .item{
  display: block;
  width: 100vw;
  height: 66.8vw;
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
      width: 26.67vw;
      height: 26.67vw;
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
      .name {
        display: inline-block;
        padding: 1.2vw 1.6vw;
        background-color: #F5F5F5;
        font-size:3.2vw;
        font-weight:500;
        color:rgba(51,51,51,1);
        border-radius: 2.67vw;
        margin-top: 2.5vw;
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
        font-size: 3.2vw;
      }
    }
  }
  .stat {
    position: absolute;
    display: flex;
    bottom: 20.4vw;
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
    & > div {
      margin-left: 3.2vw;
      width:24vw;
      line-height:8vw;
      text-align: center;
      border-radius:4vw;
      font-size:3.2vw;
    }
    .style-one {
      border: 0.13vw solid #BBBBBB;
      color: #BBBBBB;
    }
    .style-tow {
      border: 0.13vw solid #F84E4E;
      color: #F84E4E;
    }
  }
}
</style>
