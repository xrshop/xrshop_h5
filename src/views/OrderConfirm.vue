<template>
  <div class="order-confirm">
    <TitleBar title="确认订单" canBack />
    <div class="site chunk" @click="addressShow = true">
      <template v-if="addressInfo && site">
        <div class="left">
          <img src="@/assets/OrderConfirm/dz.png" alt />
        </div>
        <div class="right">
          <div class="top">
            <div class="text">{{ addressInfo.realName }}</div>
            <div class="tel">{{ addressInfo.phone }}</div>
          </div>
          <div class="bottom">地址:{{ site }}</div>
        </div>
      </template>
    </div>
    <div class="product-list">
      <div
        class="item chunk"
        v-for="(item, index) in info.cartInfo"
        :key="index"
      >
        <template v-if="item.productInfo">
          <div class="top">
            <img src="@/assets/OrderList/shop.png" alt />
            <div class="text">星然云电商商城</div>
          </div>
          <div class="content">
            <div
              class="cover"
              :style="{
                'background-image': `url(${item.productInfo.attrInfo.image})`
              }"
            ></div>
            <div class="text">
              <div class="title">{{ item.productInfo.storeInfo }}</div>
              <div class="subjoin">
                <div class="number">数量：{{ item.cartNum }}</div>
                <div class="type">
                  类别：{{ item.productInfo.attrInfo.suk }}
                </div>
              </div>
              <div class="money">
                <Price :value="item.productInfo.attrInfo.price" />
              </div>
            </div>
            <div class="control">
              <div class="sub" @click="numUpdate(item, index, false)">
                -
              </div>
              <input type="number" disabled v-model="item.cartNum" />
              <div class="add" @click="numUpdate(item, index, true)">+</div>
            </div>
          </div>
        </template>
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
          <Price :value="practical" />
        </div>
      </div>
    </div>
    <div class="pay-mode chunk">
      <div class="title">支付方式</div>
      <div class="list">
        <div class="item" @click="payType = 'weixin'">
          <div class="left">
            <img src="@/assets/OrderConfirm/wx.png" alt />
            <div class="text">微信支付</div>
          </div>
          <div class="right">
            <div class="radio-box">
              <div class="radio" :class="{ active: payType == 'weixin' }"></div>
            </div>
          </div>
        </div>
        <div class="item" @click="payType = 'yue'">
          <div class="left">
            <img src="@/assets/OrderConfirm/ye.png" alt />
            <div class="text">余额支付</div>
          </div>
          <div class="right">
            <div class="radio-box">
              <div class="radio" :class="{ active: payType == 'yue' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="text">合计:</div>
        <div class="point">
          <Price :value="practical" />
        </div>
      </div>
      <div class="right" @click="setOrder">立即支付</div>
    </div>
    <transition name="fade">
      <div class="address-list" v-if="addressShow">
        <div class="head">
          <div class="text">请选择地址</div>
          <div class="but" @click="addressShow = false">x</div>
        </div>
        <div class="row-list">
          <div class="row" @click="upAddressInfo(item)" v-for="item in addressList" :key="item.id">
            <div class="top">
              <div class="name">{{item.realName}}</div>
              <div class="phone">{{item.phone | strHide}}</div>
            </div>
            <div class="bottom">
              {{item.province}}{{item.city}}{{item.district}}{{item.detail}}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';
import key from '@/utils/key';

export default {
  data() {
    return {
      addressList: [],
      addressInfo: [],
      addressShow: false,
      info: [],
      payType: navigator.userAgent.toLowerCase().includes('micromessenger') ? 'weixin' : 'yue',
    };
  },
  computed: {
    token() {
      return userManage.data.token;
    },
    site() {
      const { addressInfo } = this;
      return addressInfo.province + addressInfo.city + addressInfo.district + addressInfo.detail;
    },
    total() {
      let money = 0;
      if (this.info.cartInfo) {
        this.info.cartInfo.forEach((item) => {
          money += item.productInfo.attrInfo.price * item.cartNum;
        });
      }
      return Number(money.toFixed(2));
    },
    postage() {
      let money = 0;
      if (this.info.cartInfo) {
        this.info.cartInfo.forEach((item) => {
          money += item.productInfo.postage;
        });
      }
      return Number(money.toFixed(2));
    },
    coupon() {
      let money = 0;
      if (this.info.cartInfo) {
        this.info.cartInfo.forEach((item) => {
          money += 0;
        });
      }
      return Number(money.toFixed(2));
    },
    practical() {
      return Number((this.total + this.postage - this.coupon).toFixed(2));
    },
  },
  filters: {
    strHide(value) {
      return value.replace(/(\w{3})(\d+)(\d{2})/g, '$1******$3');
    },
  },
  methods: {
    setOrder() {
      const { info } = this;
      if (!this.addressInfo) {
        this.$hint('请先添加地址');
        return;
      }
      axios
        .post(
          `/api/order/create/${info.orderKey}`,
          {
            addressId: info.addressInfo.id,
            payType: this.payType,
            from: '',
            phone: info.addressInfo.phone,
            realName: info.addressInfo.realName,
            shippingType: 1,
            mark: '',
            useIntegral: 0,
          },
          { headers: { Authorization: this.token } },
        )
        .then((response) => {
          const { data } = response.data;
          if (data.status === 'SUCCESS') {
            this.$router.replace({ path: '/order-details', query: { key: data.result.key } });
          } else if (data.status === 'WECHAT_PAY') {
            // eslint-disable-next-line no-undef
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest',
              {
                ...data.result.jsConfig,
              },
              (res) => {
                this.$router.replace({ path: '/order-details', query: { key: data.result.key } });
              },
            );
          }
        })
        .catch((error) => {
          this.$confirm(error.response.data.msg).finally(() => {
            this.$router.replace({ path: '/order-list', query: { type: 0 } });
          });
        });
    },
    numUpdate(item, index, boole) {
      let { cartNum } = item;
      if (cartNum <= 1 && !boole) return;
      // eslint-disable-next-line no-unused-expressions
      boole ? (cartNum += 1) : (cartNum -= 1);
      axios
        .post(
          '/api/cart/num',
          { id: item.id, number: cartNum },
          { headers: { Authorization: this.token } },
        )
        .then(() => {
          this.info.cartInfo[index].cartNum = cartNum;
        })
        .catch((error) => {
          this.$hint(error.response.data.msg);
        });
    },
    upAddressInfo(v) {
      axios.get(`api/address/detail/${v.id}`, { headers: { Authorization: this.token } })
        .then((response) => {
          this.addressInfo = response.data.data;
          this.addressShow = false;
        });
    },
  },
  async created() {
    const cartId = this.$route.query.id;
    await axios
      .post('/api/order/confirm', { cartId }, { headers: { Authorization: this.token } })
      .then((response) => {
        this.info = response.data.data;
        this.addressInfo = response.data.data.addressInfo;
      })
      .catch((error) => {
        this.$hint(error.response.data.msg);
      });
    await axios.get('api/address/list', { headers: { Authorization: this.token } })
      .then((response) => {
        this.addressList = response.data.data;
      });
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
  display: flex;
  align-items: center;
  padding: 7.33vw 5.2vw;
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
    max-width: 70%;
    .top {
      display: flex;
      align-items: center;
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
      margin-top: 1.2vw;
      font-size: 3.2vw;
      line-height: 1.5;
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
          border: solid thin #ddd;
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
  z-index: 4;
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
.address-list {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  z-index: 5;
  overflow-y: scroll;
  .head {
    height: 12vw;
    width: 100vw;
    display: flex;
    box-shadow: 0 0 3px 3px rgba($color: #000000, $alpha: 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .text {
      font-size: 4vw;
    }
    .but {
      width: 10vw;
      height: 100%;
      position: absolute;
      right: 2vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .row-list {
    margin-top: 2vw;
    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 4vw;
      padding: 4vw 2vw;
      border-bottom: solid thin #eee;
      .top {
        display: flex;
        .name {
          font-size: 4vw;
          margin-right: 4vw;
        }
        .phone {
          font-size: 3.47vw;
          color: #bbb;
        }
      }
      .bottom {
        font-size: 3.2vw;
        margin-top: 2vw;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: transform .36s;
  transform: translateY(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}

</style>
