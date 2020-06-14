<template>
  <div class="cart">
    <TitleBar title="购物车" rightText="编辑" />
    <div class="list">
      <div class="item" v-for="index of 10" :key="index">
        <div class="checkbox"></div>
        <div
          class="cover"
          style="background-image: url('https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=694356326,2448328272&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=c8699771b450bac7767b93c682e02cc1')"
        ></div>
        <div class="right">
          <div class="title">汉马王堆直裾素纱襌衣，绝世国宝，禁止出口文物</div>
          <div class="subitem-title">丝绸50g*1件</div>
          <div class="row">
            <Price :value="5600000000" />
            <div class="count-wrapper">
              <div class="sub">-</div>
              <div class="count">1</div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tool">
      <div class="all-select">
        <div class="checkbox"></div>
        全选
      </div>
      <div class="total-price">
        合计：
        <Price :value="8956" />
      </div>
      <div class="to-settlement">去结算（2）</div>
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
      checkedArr: [],
    };
  },
  computed: {
    token() {
      return userManage.data.token;
    },
  },
  created() {
    axios.get('/api/cart/list', { headers: { Authorization: this.token } })
      .then((response) => {
        console.log(response);
        this.cartData = response.data.data.valid;
      }).catch((error) => {
        console.log(error);
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
  width: 4.8vw;
  height: 4.8vw;
  box-sizing: border-box;
  border-radius: 50%;
  border: var(--px) solid #e3e3e3;
  margin-left: 5.33vw;
  background-color: #f6f6f6;
  flex-shrink: 0;
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    background-color: #fff;
  }
  &.active {
    background-image: url("~@/assets/OrderConfirm/g.png");
    background-color: #ef2424;
  }
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
