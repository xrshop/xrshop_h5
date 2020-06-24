<template>
  <div class="order-details">
    <TitleBar title="订单详情" canBack />
    <div class="region">
      <img src="@/assets/OrderDetails/wl.png" alt />
      <div>
        <div class="msg">已签收, 您的快递已经由自提柜签收。感谢您的使用。</div>
        <div class="bottom">2020-03-09 12:51:00</div>
        <Icon v-if="arrow" name="back" class="arrow" />
      </div>
    </div>
    <div class="region">
      <img src="@/assets/OrderDetails/dz.png" alt />
      <div>
        <div class="msg"><span>小明</span>13445697854</div>
        <div class="bottom">地址：广东省深圳市福田区 梅乐新村164栋</div>
      </div>
    </div>
    <div class="info-goods">
      <div class="head">
        <img src="@/assets/OrderDetails/shop.png" alt />
        <div class="title">星然云电商商城</div>
      </div>
      <div class="primary">
        <div class="item" v-for="item of goods" :key="item.id">
          <div class="content">
            <div class="cover" :style="{'background-image': `url(${item.img})`}"></div>
            <div class="middle">
              <div class="title">{{ item.title }}</div>
              <div class="scale">{{ item.name }} *{{ item.number }}{{ item.unit }}</div>
            </div>
            <div class="right">
              <div class="money">
                ￥<span>{{ item.money | onlyInt }}</span>.{{ item.money | onlyFloat }}
              </div>
              <div class="quantity">x{{ item.number }}</div>
            </div>
          </div>
          <div class="button-block">
            <div class="button">加入购物车</div>
            <router-link to="/post-sale-need" class="button">申请售后</router-link>
          </div>
        </div>
      </div>
      <div class="money-info">
        <div class="table">
          <div class="cell">
            <div class="left">商品总价</div>
            <div class="right">￥250.00</div>
          </div>
          <div class="cell">
            <div class="left">邮费</div>
            <div class="right">+ ￥0.00</div>
          </div>
          <div class="cell">
            <div class="left">优惠券</div>
            <div class="right">- ￥30.00</div>
          </div>
        </div>
        <div class="payment">
          <span class="text">实付款：</span>
          <span class="monetary-unit">￥</span>
          <span class="int">230</span>
          <span class="float">.00</span>
        </div>
      </div>
    </div>
    <div class="order-info">
      <div class="cell">
        <div class="title">订单编号:</div>
        <div class="result">102546978631 <div class="copy">复制</div></div>
      </div>
       <div class="cell">
        <div class="title">下单时间:</div>
        <div class="result">2020-03-09 12:30:12</div>
      </div>
       <div class="cell">
        <div class="title">支付方式:</div>
        <div class="result"><img src="@/assets/OrderDetails/wx.png" alt="" />微信支付</div>
      </div>
       <div class="cell">
        <div class="title">支付时间:</div>
        <div class="result">2020-03-09 12:40:12</div>
      </div>
       <div class="cell">
        <div class="title">发货时间:</div>
        <div class="result">2020-03-10 12:40:12</div>
      </div>
    </div>
    <div class="service">
      <img src="@/assets/OrderDetails/kf.png" alt=""> 联系客服
    </div>
    <div class="footer">
      <router-link to="/logistics" class="button but-style-a">查看物流</router-link>
      <div class="button but-style-b">确认收货</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 0,
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          name: '白糯米糍粑250g',
          money: 56.8,
          number: 5,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
          unit: '个',
        },
        {
          id: 1,
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          name: '白糯米糍粑250g',
          money: 88.4,
          number: 5,
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
          unit: '袋',
        },
      ],
      arrow: 1,
    };
  },
  filters: {
    onlyInt(value) {
      return Math.trunc(value);
    },
    onlyFloat(value) {
      const strArr = String(value).split('.');
      return strArr.length === 2 ? strArr[1].padEnd(2, '0') : '00';
    },
  },
};
</script>

<style lang="scss" scoped>
.order-details {
  background-color: #f7f4f8;
  font-family: PingFang SC;
}
.region {
  width: 100vw;
  height: 26.67vw;
  background: rgba(255, 255, 255, 1);
  border-radius: 0vw 0vw 2vw 2vw;
  margin-bottom: 2.67vw;
  display: flex;
  align-items: center;
  position: relative;
  * {
    margin: 0;
  }
  img {
    width: 4.27vw;
    height: 4.27vw;
    margin-left: 10.27vw;
  }
  & > div {
    width: 62vw;
    margin-left: 3.6vw;
    .msg {
      font-size: 3.73vw;
      color: rgba(51, 51, 51, 1);
      line-height: 4.67vw;
      span {
        font-size: 4vw;
        margin-right: 2.9vw;
      }
    }
    .bottom {
      font-size: 2.67vw;
      color: rgba(187, 187, 187, 1);
      margin-top: 2.2vw;
    }
    .arrow {
      width: 3vw;
      height: 3vw;
      position: absolute;
      top: 9.47vw;
      right: 14.67vw;
      transform: rotate(180deg);
    }
  }
}
.region + .region {
  border-radius: 2vw 2vw 2vw 2vw;
}
.info-goods {
  background: rgba(255, 255, 255, 1);
  border-radius: 2vw;
  padding: 0 5.2vw 6.8vw;
  .head {
    height: 16.13vw;
    display: flex;
    align-items: center;
    img {
      width: 4.8vw;
      margin-right: 1.33vw;
    }
    .title {
      font-size: 3.73vw;
      color: rgba(51, 51, 51, 1);
    }
  }
  .primary {
    margin-bottom: 1.33vw;
    .item {
      height: 43.34vw;
      position: relative;
      margin-bottom: 5.33vw;
      .content {
        font-size:3.2vw;
        color:rgba(51,51,51,1);
        display: flex;
        .cover {
          width: 26.67vw;
          height: 26.67vw;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          border-radius: 2vw;
          flex-shrink: 0;
          margin-right: 2.6vw;
        }
        .middle {
          margin-top: 1vw;
          margin-right: 4vw;
          .title {
            font-size: 3.2vw;
            color: rgba(51,51,51,1);
            line-height: 5.2vw;
          }
          .scale {
            display: inline-block;
            font-size:3.2vw;
            color:rgba(51,51,51,1);
            margin-top: 2.67vw;
            background-color: #F5F5F5;
            padding: 1vw 1.6vw;
            border-radius: 2.67vw;
          }
        }
        .right {
          margin-top: 2vw;
          text-align: right;
          .money {
            font-size: 2.4vw;
            font-weight: bold;
            color: rgba(51,51,51,1);
            span {
              font-size: 3.73vw;
            }
          }
          .quantity {
            margin-top: 1vw;
            font-size: 3.2vw;
            color:rgba(187,187,187,1);
          }
        }
      }
      .button-block {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        .button {
          margin-left: 3.2vw;
          width:24vw;
          height:8vw;
          background:rgba(255,255,255,1);
          border: var(--px) solid rgba(221,221,221,1);
          border-radius:4vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.2vw;
          color:rgba(187,187,187,1);
        }
      }
    }
  }
  .money-info .table {
    margin-bottom: 5.2vw;
      .cell {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5.33vw;
      font-size: 3.2vw;
      color: rgba(51,51,51,1);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .money-info .payment {
    text-align: right;
    .text {
      font-size:3.2vw;
      color:rgba(51,51,51,1);
    }
    .monetary-unit,.int,.float {
      color: #F84E4E;
      font-weight: bold;
    }
    .monetary-unit {
      font-size: 2.4vw;
    }
    .int {
      font-size: 3.73vw;
    }
    .float {
      font-size: 2.4vw;
    }
  }
}
.order-info {
  border-radius: 2vw;
  background-color: #fff;
  margin-top: 2.67vw;
  padding: 5.2vw 4.8vw 4.8vw;
  .cell {
    display: flex;
    align-items: center;
    height: 8.16vw;
    font-size:3.2vw;
    color:rgba(51,51,51,1);
    .title {
      margin-right: 3.87vw;
    }
    .result {
      font-weight: bold;
      display: flex;
      align-items: center;
      .copy {
        width: 10.53vw;
        line-height: 5.33vw;
        text-align: center;
        background:rgba(245,245,245,1);
        border-radius: 2.67vw;
        font-weight:500;
        margin-left: 4vw;
      }
      img {
        width: 5.33vw;
        height: 5.33vw;
        margin-right: 1.33vw;
      }
    }
  }
}
.service {
  height:13.33vw;
  background:rgba(255,255,255,1);
  border-radius:2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.67vw;
  margin-bottom: 9.73vw;
  img {
    width: 4.8vw;
    height: 4.8vw;
    margin-right: 2.13vw;
  }
}
.footer {
  box-shadow: 0 0 2px 2px rgba(235, 235, 235, 0.6);
  position: sticky;
  bottom: 0;
  height: var(--tab-bar-height);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5.47vw;
  .button {
    text-align: center;
    width: 24vw;
    line-height: 8vw;
    background:rgba(255,255,255,1);
    border-radius: 4vw;
    margin-left: 3.2vw;
    font-size: 3.2vw;
    &.but-style-a {
    border: var(--px) solid #DDDDDD;
    color: #BBBBBB;
    }
    &.but-style-b {
      border: var(--px) solid #F84E4E;
      color: #F84E4E;
    }
  }
}
</style>
