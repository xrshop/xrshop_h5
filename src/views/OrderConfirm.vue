<template>
  <div class="order-confirm">
    <TitleBar title="确认订单" canBack />
    <div class="site chunk">
      <div class="left">
        <img src="@/assets/OrderConfirm/dz.png" alt />
      </div>
      <div class="right">
        <div class="top">
          <div class="text">{{ info.name }}</div>
          <div class="tel">{{ info.tel }}</div>
        </div>
        <div class="bottom">地址:{{ info.place }}</div>
      </div>
    </div>
    <div class="product-list">
      <div class="item chunk" v-for="(item, index) in info.product" :key="index">
        <div class="top">
          <img src="@/assets/OrderList/shop.png" alt />
          <div class="text">{{ item.store }}</div>
        </div>
        <div class="content">
          <div class="cover" :style="{ 'background-image': `url(${item.img})` }"></div>
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <div class="subjoin">
              <div class="number">数量：{{ item.number }}</div>
              <div class="type">类别：{{ item.type }}</div>
            </div>
            <div class="money">
              <Price :value="item.money" />
            </div>
          </div>
          <div class="control">
            <div class="sub" @click="item.number <= 1 ? false : item.number--">-</div>
            <input type="number" disabled v-model="item.number" />
            <div class="add" @click="item.number++">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="money-info chunk">
      <div class="item">
        <div class="left">商品总价</div>
        <div class="right"><Price :value="total" /></div>
      </div>
      <div class="item">
        <div class="left">邮费</div>
        <div class="right">+ <Price :value="postage" /></div>
      </div>
      <div class="item">
        <div class="left">优惠券</div>
        <div class="right">- <Price :value="coupon" /></div>
      </div>
      <div class="item">
        <div class="left"></div>
        <div class="right">
          应付款：
          <Price :value="Number(practical)" />
        </div>
      </div>
    </div>
    <div class="pay-mode chunk">
      <div class="title">支付方式</div>
      <div class="list">
        <div class="item" @click="payType = 0">
          <div class="left">
            <img src="@/assets/OrderConfirm/wx.png" alt />
            <div class="text">微信支付</div>
          </div>
          <div class="right">
            <div class="radio-box">
              <div class="radio" :class="{ active: payType == 0 }"></div>
            </div>
          </div>
        </div>
        <div class="item" @click="payType = 1">
          <div class="left">
            <img src="@/assets/OrderConfirm/zfb.png" alt />
            <div class="text">支付宝支付</div>
          </div>
          <div class="right">
            <div class="radio-box">
              <div class="radio" :class="{ active: payType == 1 }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="text">合计:</div>
        <div class="point">
          <Price :value="Number(practical)" />
        </div>
      </div>
      <div class="right">立即支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: '小明',
        tel: 13445697855,
        place: '广东省深圳市福田区 梅乐新村164栋',
        product: [
          {
            id: 0,
            store: '耒小阳商场',
            title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
            number: 1,
            type: '白糯米糍粑250g *5袋',
            money: 50.43,
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3254650019,192008292&fm=26&gp=0.jpg',
            postage: 20,
            coupon: 10,
          },
          {
            id: 1,
            store: '小小阳',
            title: '优质糯米糍粑,手工年糕湖南地道特产',
            number: 1,
            type: '白糯米糍粑550g *5袋',
            money: 100.5,
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3254650019,192008292&fm=26&gp=0.jpg',
            postage: 10,
            coupon: 15.92,
          },
          {
            id: 2,
            store: '小小阳',
            title: '优质糯米糍粑,手工年糕湖南地道特产',
            number: 2,
            type: '白糯米糍粑550g *5袋',
            money: 60,
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3254650019,192008292&fm=26&gp=0.jpg',
            postage: 10,
            coupon: 15.9,
          },
        ],
      },
      payType: 0,
    };
  },
  computed: {
    total() {
      const { product } = this.info;
      let money = 0;
      product.forEach((item) => {
        money += (item.money * 100) * item.number;
      });
      return money / 100;
    },
    postage() {
      const { product } = this.info;
      let money = 0;
      product.forEach((item) => {
        money += item.postage * 100;
      });
      return money / 100;
    },
    coupon() {
      const { product } = this.info;
      let money = 0;
      product.forEach((item) => {
        money += item.coupon * 100;
      });
      return money / 100;
    },
    practical() {
      return (this.total + this.postage - this.coupon).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}
.order-confirm {
  background-color: #f5f5f5;
}
.chunk {
  border-radius: 2vw;
  background-color: #fff;
}
.site {
  margin-top: 2.8vw;
  height: 24vw;
  display: flex;
  align-items: center;
  padding: 0 5.2vw;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 1.03vw;
    height: 1.63vw;
    background-image: url("~@/assets/IntegralOrder/arrow.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    right: 14.67vw;
  }
  .left > img {
    width: 8vw;
  }
  .right {
    margin-left: 4.9vw;
    .top {
      display: flex;
      .text {
        font-size: 4vw;
        margin-right: 2.8vw;
      }
      .tel {
        color: #bbb;
        font-size: 3.2vw;
      }
    }
    .bottom {
      margin-top: 2.8vw;
      font-size: 3.2vw;
    }
  }
}
.product-list {
  .item {
    margin-top: 2.4vw;
    padding: 6.67vw 5.2vw 6.8vw;
    .top {
      display: flex;
      align-items: center;
      img {
        width: 4.8vw;
        margin-right: 1.33vw;
      }
      .text {
        font-size: 3.2vw;
      }
    }
    .content {
      margin-top: 4.67vw;
      display: flex;
      position: relative;
      .cover {
        flex-shrink: 0;
        width: 26.67vw;
        height: 26.67vw;
        border-radius: 0.8vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      .text {
        margin-left: 2.4vw;
        .title {
          font-size: 3.2vw;
          line-height: 1.5;
        }
        .subjoin {
          display: flex;
          margin-top: 1.7vw;
          color: #bbb;
          font-size: 2.67vw;
          .number {
            margin-right: 4.4vw;
          }
        }
        .money {
          margin-top: 2.93vw;
          .price::v-deep {
            color: #333;
            .monetary-unit,
            .float {
              font-size: 2.4vw;
            }
            .int {
              font-size: 3.2vw;
            }
          }
        }
      }
      .control {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        input {
          width: 10.67vw;
          height: 5.33vw;
          text-align: center;
          border-radius: 0.8vw;
          font-size: 3.2vw;
        }
        .sub {
          padding: 0 2vw;
          color: #eee;
        }
        .add {
          padding: 0 2vw;
        }
      }
    }
  }
}
.money-info {
  padding: 6.67vw 5.2vw 1.17vw 5vw;
  margin-top: 2.67vw;
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5.53vw;
    font-size: 3.2vw;
  }
  .right {
    .price::v-deep {
      .monetary-unit,
      .int,
      .float {
        font-size: 3.2vw;
        color: #333;
        font-weight: 500;
      }
    }
  }
}
.pay-mode {
  margin: 2.53vw 0 7vw;
  padding: 6.67vw 4.13vw var(--px) 5.47vw;
  .title {
    font-size: 3.2vw;
    margin-bottom: 5.2vw;
  }
  .item {
    margin-bottom: 6.67vw;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 5.53vw;
        margin-right: 1.2vw;
      }
      .text {
        font-size: 3.2vw;
        font-weight: bold;
      }
    }
    .right {
      .radio-box {
        position: relative;
        .radio {
          width: 4.8vw;
          height: 4.8vw;
          border-radius: 50%;
          background-color: #f5f5f5;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 3vw;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          border: solid var(--px) #ddd;
          &.active {
            transition-duration: 0.16s;
            transition-property: background-color;
            background-image: url("~@/assets/OrderConfirm/g.png");
            background-color: #ef2424;
          }
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 4vw;
          box-shadow: 0 0 4px 1px rgba(102, 102, 102, 0.3);
          bottom: 2px;
          left: calc((4.8vw - 4vw) / 2);
          z-index: 0;
        }
      }
    }
  }
}
.footer {
  position: sticky;
  bottom: 0;
  height: 13.07vw;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 -1px 8px 2px rgba(235, 235, 235, 0.36);
  z-index: 100;
  .left {
    margin-left: 5.07vw;
    display: flex;
    align-items: center;
    .text {
      font-size: 3.2vw;
      margin-right: 2vw;
    }
    .point {
      .price::v-deep {
        .int {
          font-size: 6vw;
        }
      }
    }
  }
  .right {
    width: 37.33vw;
    background: #f84e4e;
    font-size: 4vw;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
