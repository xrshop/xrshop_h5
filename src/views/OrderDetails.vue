<template>
  <div class="order-details" @scroll="onScroll" :class="{ 'is-top': isTop }">
    <TitleBar :title="isTop ? '' : '商品详情'" canBack />
    <div class="banner" ref="banner">
      <div class="top-box">
        <div class="status">
          <img src="@/assets/OrderDetails/1.png" alt />
          <div class="text">等待付款</div>
        </div>
        <div class="msg">15分钟后订单自动关闭</div>
      </div>
      <router-link to="/order-confirm" class="button">立即支付</router-link>
    </div>
    <div class="express">
      <div class="logistic block">
        <img src="@/assets/OrderDetails/wl.png" alt />
        <div>
          <div class="msg">您的订单正在处理</div>
          <div class="bottom">2020-03-09 12:51:00</div>
          <Icon name="back" class="arrow" />
        </div>
      </div>
      <div class="site block">
        <img src="@/assets/OrderDetails/dz.png" alt />
        <div>
          <div class="msg">
            小明
            <span>13445697854</span>
          </div>
          <div class="bottom">地址：广东省深圳市福田区 梅乐新村164栋</div>
          <Icon name="back" class="arrow" />
        </div>
      </div>
    </div>
    <div class="info-goods">
      <div class="head">
        <img src="@/assets/OrderDetails/shop.png" alt />
        <div class="title">耒小阳商城</div>
      </div>
      <div class="primary">
        <div class="item" v-for="item of goods" :key="item.id">
          <div class="content">
            <div class="cover" :style="{ 'background-image': `url(${item.img})` }"></div>
            <div class="middle">
              <div class="title">{{ item.title }}</div>
              <div class="scale">
                <span>数量: {{ item.number }}</span>
                类别: {{ item.type }}
              </div>
              <div class="money">
                <Price :value="item.money" />
              </div>
            </div>
          </div>
          <div class="button-block">
            <div class="button">加入购物车</div>
            <router-link to="/post-sale-need" class="button">申请售后</router-link>
          </div>
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
    <div class="order-info">
      <div class="cell">
        <div class="title">订单编号:</div>
        <div class="result">
          <div class="text"><input value="102546978631" readonly ref="copyText"></div>
          <div class="copy" @click="copyOrder">复制</div>
        </div>
      </div>
      <div class="cell">
        <div class="title">下单时间:</div>
        <div class="result">2020-03-09 12:30:12</div>
      </div>
      <div class="cell">
        <div class="title">支付方式:</div>
        <div class="result">
          <img src="@/assets/OrderDetails/wx.png" alt />微信支付
        </div>
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
      <img src="@/assets/OrderDetails/kf.png" alt /> 联系客服
    </div>
    <div class="footer">
      <router-link to="/logistics" class="button but-style-a">查看物流</router-link>
      <div class="button but-style-b">确认收货</div>
    </div>
  </div>
</template>

<script>
import select from 'select';
/* eslint-disable global-require */
export default {
  data() {
    return {
      goods: [
        {
          id: 0,
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          type: '白糯米糍粑250g * 5个',
          money: 56.8,
          number: 5,
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
        },
        {
          id: 1,
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          type: '白糯米糍粑50g * 5袋',
          money: 88.4,
          number: 1,
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
        },
      ],
      isTop: true,
      statusIcon: [
        require('@/assets/OrderDetails/1.png'),
        require('@/assets/OrderDetails/2.png'),
        require('@/assets/OrderDetails/3.png'),
        require('@/assets/OrderDetails/4.png'),
      ],
    };
  },
  methods: {
    onScroll(e) {
      const vwTopx = document.documentElement.clientWidth / 100;
      const titleH = getComputedStyle(document.documentElement)
        .getPropertyValue('--title-bar-height')
        .replace(/[^\d.]/g, '') * vwTopx;
      this.isTop = e.target.scrollTop < this.$refs.banner.clientHeight - titleH;
    },
    copyOrder() {
      select(this.$refs.copyText);
      if (document.execCommand('Copy')) {
        window.getSelection().empty();
        // eslint-disable-next-line no-alert
        alert('复制成功');
      }
    },
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
  .title-bar::v-deep {
    position: fixed;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px) brightness(110%);
    transition-duration: 0.36s;
    transition-property: background-color;
    .main .left .back-button > svg path {
      fill: rgb(0, 0, 0);
    }
  }
  &.is-top .title-bar::v-deep {
    backdrop-filter: none;
    background-color: rgba(255, 255, 255, 0);
    .main .left .back-button > svg path {
      fill: rgb(255, 255, 255);
    }
  }
}

.banner {
  padding: 13.07vw 0 6.67vw;
  background-image: url("~@/assets/OrderDetails/bj.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-box {
    .status {
      display: flex;
      align-items: center;
      img {
        width: 6.67vw;
        margin-right: 2.67vw;
      }
      .text {
        color: #fff;
        font-size: 4.8vw;
      }
    }
    .msg {
      margin-top: 2vw;
      color: #fff;
      font-size: 3.2vw;
    }
  }
  .button {
    padding: 2.8vw 6vw 2.67vw;
    color: #f84e4e;
    font-size: 3.2vw;
    background-color: #fff;
    border-radius: 4.27vw;
    margin-top: 4.93vw;
  }
}
.express {
  transform: translateY(-2vw);
  margin-bottom: -2vw;
  .block {
    width: 100vw;
    height: 24vw;
    background: rgba(255, 255, 255, 1);
    border-radius: 2vw 2vw 2vw 2vw;
    margin-bottom: 2.67vw;
    display: flex;
    align-items: center;
    position: relative;
    * {
      margin: 0;
    }
    img {
      width: 8vw;
      height: 8vw;
      margin-left: 5.2vw;
    }
    & > div {
      width: 62vw;
      margin-left: 4.93vw;
      .arrow {
        width: 3vw;
        height: 3vw;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 14.67vw;
        transform: rotate(180deg);
      }
    }
  }
  .logistic > div {
    .msg {
      color: #32b6fd;
      font-size: 3.73vw;
    }
    & > .bottom {
      color: #bbb;
      font-size: 2.67vw;
      margin-top: 2.67vw;
    }
  }
  .site > div {
    .msg {
      font-size: 4vw;
      span {
        font-size: 3.2vw;
        color: #bbb;
        margin-left: 2.8vw;
      }
    }
    & > .bottom {
      font-size: 3.2vw;
      margin-top: 2.53vw;
    }
  }
}
.info-goods {
  background: rgba(255, 255, 255, 1);
  border-radius: 2vw;
  padding: 0 5.2vw 0.1vw;
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
      height: 34.67vw;
      position: relative;
      margin-bottom: 6vw;
      .content {
        font-size: 3.2vw;
        color: rgba(51, 51, 51, 1);
        display: flex;
        .cover {
          width: 26.67vw;
          height: 26.67vw;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          border-radius: 0.8vw;
          flex-shrink: 0;
          margin-right: 2.4vw;
        }
        .middle {
          margin-top: 1vw;
          .title {
            font-size: 3.2vw;
            line-height: 5.2vw;
          }
          .scale {
            display: block;
            font-size: 2.67vw;
            line-height: 4.8vw;
            color: #bbb;
            margin-top: 1.8vw;
            span {
              margin-right: 4vw;
            }
          }
          .money {
            margin-top: 2vw;
            .price::v-deep {
              .int {
                font-size: 3.2vw;
              }
              color: #333;
            }
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
          width: 24vw;
          height: 8vw;
          background: rgba(255, 255, 255, 1);
          border: var(--px) solid rgba(221, 221, 221, 1);
          border-radius: 4vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.2vw;
          color: rgba(187, 187, 187, 1);
        }
      }
    }
  }
}
.money-info {
  border-radius: 2vw;
  background-color: #fff;
  margin-top: 2.67vw;
  padding: 6.53vw 5.07vw;
  .table {
    margin-bottom: 5.2vw;
    .cell {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5.33vw;
      font-size: 3.2vw;
      color: rgba(51, 51, 51, 1);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .payment {
    text-align: right;
    .text {
      font-size: 3.2vw;
      color: rgba(51, 51, 51, 1);
    }
    .monetary-unit,
    .int,
    .float {
      color: #f84e4e;
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
    font-size: 3.2vw;
    color: rgba(51, 51, 51, 1);
    .title {
      margin-right: 3.87vw;
    }
    .result {
      font-weight: bold;
      display: flex;
      align-items: center;
      font-size: 3.2vw;
      .text input {
        background-color: rgba(187, 187, 187, 0);
        outline: none;
        border: none;
        font-weight: bold;
        font-size: 3.2vw;
        width: 25vw;
      }
      .copy {
        width: 10.53vw;
        line-height: 5.33vw;
        text-align: center;
        background-color: #f5f5f5;
        color: #bbbbbb;
        border-radius: 2.67vw;
        font-weight: 500;
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
  height: 13.33vw;
  background-color: #fff;
  border-radius: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.67vw;
  margin-bottom: 5.73vw;
  font-size: 3.2vw;
  font-weight: bold;
  img {
    width: 4.8vw;
    height: 4.8vw;
    margin-right: 2.53vw;
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
    background: rgba(255, 255, 255, 1);
    border-radius: 4vw;
    margin-left: 3.2vw;
    font-size: 3.2vw;
    &.but-style-a {
      border: var(--px) solid #dddddd;
      color: #bbbbbb;
    }
    &.but-style-b {
      border: var(--px) solid #f84e4e;
      color: #f84e4e;
    }
  }
}
</style>
