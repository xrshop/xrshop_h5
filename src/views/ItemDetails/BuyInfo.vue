<template>
  <div class="block">
    <div class="info" v-if="lastData">
      <div class="cover" :style="{ 'background-image': `url(${lastData.image})` }"></div>
      <div class="right">
        <price :value="lastData.price" />
        <div class="stock">库存件{{ lastData.stock }}</div>
        <div class="text">款式：{{ attrText || "请选择" }}</div>
      </div>
    </div>
    <div class="type">
      <div class="item" v-for="(item, rowIndex) in info.productAttr" :key="item.id">
        <div class="title">{{ item.attrName }}</div>
        <div class="list">
          <div
            class="cell"
            v-for="(text, colIndex) in item.attrValueArr"
            :key="colIndex"
            :class="{ active: activeArr[rowIndex] === text }"
            @click="$set(activeArr, rowIndex, text)"
          >
            {{ text }}
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">购买数量</div>
      <div class="right">
        <div class="subtract" @click="subtract">-</div>
        <input type="number" v-model="options.count" readonly />
        <div class="plus" @click="plus">+</div>
      </div>
    </div>
    <div class="button" @click="confirm()">确定</div>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/camelcase */

import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  name: 'BuyInfo',
  data() {
    return {
      activeArr: [],
    };
  },
  props: { info: {}, options: {}, clickType: {} },
  watch: {
    info: {
      handler() {
        this.activeArr = this.info.productAttr.map((item) => item.attrValueArr[0]);
      },
      immediate: true,
    },
  },
  methods: {
    subtract() {
      const { count } = this.options;
      if (count > 1) {
        this.options.count -= 1;
      }
    },
    plus() {
      const { count } = this.options;
      if (count < this.lastData.stock) {
        this.options.count += 1;
      }
    },
    confirm() {
      axios
        .post(
          '/api/cart/add',
          {
            productId: this.lastData.productId,
            cartNum: this.options.count,
            isNew: this.clickType,
            uniqueId: this.lastData.unique,
          },
          {
            headers: { Authorization: userManage.data.token },
          },
        )
        .then((response) => {
          console.log(response);
          alert(response.data.msg);
        });
    },
  },
  computed: {
    lastData() {
      return this.info.productValue[this.attrText];
    },
    attrText() {
      return this.info.productAttr.map((item, index) => this.activeArr[index]).join(',');
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  background-color: #fff;
  border-radius: 4vw 4vw 0 0;
  padding: 4.13vw 4vw 1.33vw;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  .info {
    display: flex;
    .cover {
      width: 20vw;
      height: 20vw;
      margin-right: 2.67vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .right {
      margin-top: 1.2vw;
      .stock {
        margin-top: 2.67vw;
        color: #bbb;
        font-size: 2.67vw;
      }
      .text {
        margin-top: 2.67vw;
        font-size: 3.2vw;
      }
    }
  }
  .type {
    margin-top: 4vw;
    padding: 4vw 0;
    border-bottom: solid var(--px) #f9f9f9;
    border-top: solid var(--px) #f9f9f9;
    .item {
      margin-top: 4vw;
      &:first-of-type {
        margin-top: 0;
      }
    }
    .title {
      font-size: 3.2vw;
    }
    .list {
      margin-top: 2.67vw;
      display: flex;
      flex-wrap: wrap;
      .cell {
        padding: 1.2vw 1.33vw;
        background-color: #f9f9f9;
        color: #bbb;
        font-size: 2.67vw;
        border-radius: 0.4vw;
        margin-right: 2vw;
      }
      .active {
        color: #ffffff;
        background-color: #f84e4e;
      }
    }
  }
  .bottom {
    margin-top: 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 3.2vw;
    }
    .right {
      display: flex;
      align-items: center;
      .subtract {
        color: #eeeeee;
        padding: 2vw;
        font-size: 3.2vw;
      }
      .plus {
        padding: 2vw;
        font-size: 3.2vw;
      }
      input {
        width: 10.67vw;
        height: 5.33vw;
        outline: none;
        border: solid var(--px) #eeeeee;
        text-align: center;
        font-size: 3.2vw;
        margin: 0 1.33vw;
      }
    }
  }
  .button {
    width: 92vw;
    height: 11.73vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20vw auto 0;
    background-color: #f84e4e;
    border-radius: 5.87vw;
    color: #fff;
    font-size: 4vw;
  }
}
</style>
