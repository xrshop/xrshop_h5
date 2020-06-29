<template>
  <div class="cart">
    <TitleBar
      title="购物车"
      :rightText="isDel ? '取消编辑' : '编辑'"
      @rightTextClick="isDel = !isDel"
    />
    <div class="list">
      <div class="cart-empty" v-if="cartData.length <= 0">
        您的购物车空空如也
      </div>
      <div class="item" v-for="(item, index) of cartData" :key="item.id">
        <div
          class="checkbox"
          @click="clickCheck(item)"
          :class="{ active: checked.includes(item) }"
        ></div>
        <div
          class="cover"
          :style="{ 'background-image': `url(${item.productInfo.image})` }"
        ></div>
        <div class="right">
          <div class="title">{{ item.productInfo.storeName }}</div>
          <div class="subitem-title">{{ item.productInfo.attrInfo.suk }}</div>
          <div class="row">
            <Price :value="item.productInfo.attrInfo.price" />
            <div class="count-wrapper">
              <div
                class="sub"
                :class="{ban: item.cartNum === 1}"
                @click="cartNumUpdate(item, index, false)"
              >
                -
              </div>
              <div class="count">{{ item.cartNum }}</div>
              <div class="add" @click="cartNumUpdate(item, index, true)">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tool">
      <div class="all-select" @click="isAll = !isAll">
        <div class="checkbox" :class="{ active: isAll }"></div>
        <span v-if="!isAll">全选</span>
        <span v-else>全不选</span>
      </div>
      <div class="total-price">
        合计：
        <Price :value="Price" />
      </div>
      <div class="to-settlement" @click="action">
        <span v-if="!isDel">去结算</span>
        <span v-else>删除</span>
        （{{ checked.length }}）
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
      cartData: '',
      checked: [],
      isDel: false,
    };
  },
  computed: {
    token() {
      return userManage.data.token;
    },
    isAll: {
      get() {
        return this.checked.length === this.cartData.length && this.cartData.length !== 0;
      },
      set(newValue) {
        if (newValue) {
          this.checked = [...this.cartData];
        } else {
          this.checked = [];
        }
      },
    },
    Price() {
      let price = 0;
      this.checked.forEach((item) => {
        price += (item.truePrice * item.cartNum);
      });
      return price;
    },
  },
  methods: {
    clickCheck(value) {
      const vIndex = this.checked.indexOf(value);
      if (vIndex !== -1) {
        this.checked.splice(vIndex, 1);
      } else {
        this.checked.push(value);
      }
    },
    cartNumUpdate(item, index, boole) {
      let { cartNum } = item;
      if (cartNum === 1 && !boole) {
        return;
      }
      // eslint-disable-next-line no-unused-expressions
      boole ? cartNum += 1 : cartNum -= 1;
      axios.post('/api/cart/num', { id: item.id, number: cartNum }, { headers: { Authorization: this.token } })
        .then(() => {
          this.cartData[index].cartNum = cartNum;
        }).catch((error) => {
          alert(error.response.data.msg);
        });
    },
    action() {
      const idArr = this.checked.map((item) => item.id);
      if (this.isDel) {
        axios.post('/api/cart/del', { ids: idArr }, { headers: { Authorization: this.token } })
          .then((response) => {
            alert(response.data.msg);
            this.cartData = this.cartData.filter((item) => !idArr.includes(item.id));
            this.checked = [];
          });
      } else if (idArr.length > 0) this.$router.push({ path: '/order-confirm', query: { id: idArr.join(',') } });
    },
  },
  created() {
    axios.get('/api/cart/list', { headers: { Authorization: this.token } })
      .then((response) => {
        this.cartData = response.data.data.valid;
      });
  },
};

</script>
<style lang="scss" scoped>
.cart {
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
}
.checkbox {
  width: 7.2vw;
  height: 7.2vw;
  box-sizing: border-box;
  margin-left: 5.33vw;
  flex-shrink: 0;
  background-image: url("~@/assets/Index/Cart/1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &.active {
    background-image: url("~@/assets/Index/Cart/2.png");
  }
}
.list .cart-empty {
  height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbbbbb;
}
.item {
  height: 42.8vw;
  background-color: #fff;
  display: flex;
  margin-top: 4.13vw;
  align-items: center;
  &:last-of-type {
    margin-bottom: 4.13vw;
  }
  .cover {
    width: 26.67vw;
    height: 26.67vw;
    margin-left: 4vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1vw;
    flex-shrink: 0;
  }
  .right {
    margin-left: 2.67vw;
    margin-right: 4vw;
    flex-grow: 1;
    .title {
      font-size: 4vw;
      line-height: 5.4vw;
    }
    .subitem-title {
      width: max-content;
      height: 5.33vw;
      border-radius: 2.83vw;
      display: flex;
      align-items: center;
      padding: 0 1.6vw;
      margin-top: 2.07vw;
      background-color: #f5f5f5;
      font-size: 3.2vw;
      &::after {
        content: "";
        display: block;
        width: 1.6vw;
        height: 0.93vw;
        margin-left: 1.2vw;
        background-image: url("~@/assets/Index/Cart/down.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .price {
      margin-top: 3.87vw;
    }
    .count-wrapper {
      display: flex;
      height: 5.33vw;
      margin-top: 3.07vw;
      margin-left: auto;
      .sub,
      .add {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 2.53vw * 2 + 2vw;
        font-weight: bold;
        &.disabled {
          background-color: #f1f1f1;
        }
      }
      .ban {
        color: #eeeeee;
      }
      .count {
        height: 100%;
        background-color: #f7f5f6;
        width: 10.67vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.tool {
  flex-shrink: 0;
  margin-top: auto;
  height: 13.47vw;
  // background-color: #fff;
  background-color: rgba($color: #fff, $alpha: 0.8);
  backdrop-filter: blur(10px) brightness(110%);
  box-shadow: 0 0 1vw 0 rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  position: sticky;
  bottom: var(--tab-bar-height);
  .all-select {
    display: flex;
    align-items: center;
    font-size: 3.2vw;
    .checkbox {
      margin-right: 2.67vw;
    }
  }
  .total-price {
    display: flex;
    align-items: center;
    font-size: 3.2vw;
    margin: 0 auto;
    .price {
      color: inherit;
      ::v-deep {
        .monetary-unit,
        .float {
          font-weight: normal;
        }
      }
    }
  }
  .to-settlement {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2vw;
    padding: 0 3.33vw;
    height: 8vw;
    border-radius: 4vw;
    background-image: linear-gradient(82deg, #fc3d50, #fb643c);
    color: #fff;
    margin-right: 5.33vw;
  }
}
</style>
