<template>
  <div class="seckill">
    <div class="row-a row">
      <div class="title">今日促销</div>
    </div>
    <div class="row-b row">
      <router-link
        class="cell"
        v-for="(cell, index) of items"
        :key="index"
        :to="{ path: '/item-details', query: { id: cell.id } }"
      >
        <!-- <img class="cover" :src="cell.cover" alt /> -->
        <div class="cover" :style="{ 'background-image': `url(${cell.image})` }"></div>
        <div class="price-wrapper">
          <Price :value="cell.price" />
        </div>
        <div class="count">{{ cell.sales }}人购买</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getData() {
      const response = await axios.get('/api/products', {
        params: {
          isBenefit: 1,
          limit: 4,
          page: 1,
          priceOrder: '',
          salesOrder: '',
        },
      });
      this.items = response.data.data.data;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.seckill {
  background-image: url("~@/assets/Index/HomeB/seckill-bg.png");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  width: 92vw;
  height: 50.27vw;
  margin: 0 4vw;
  .row-a {
    display: flex;
    height: 5.33vw + 2.8vw + 2.8vw;
    align-items: center;
    .title {
      font-size: 4vw;
      font-weight: bold;
      margin-left: 2.13vw;
      color: #fff;
      margin-right: 4vw - 1.33vw;
      font-family: sans-serif;
    }
  }
  .row-b {
    margin-top: 5.07vw - 2.8vw;
    .cell {
      width: 21.33vw;
      height: 32.8vw;
      margin-left: 1.33vw;
      background-color: #fff;
      box-shadow: 0 0 2vw 0 rgba(47, 49, 49, 0.06);
      .cover {
        display: block;
        width: 19.07vw;
        height: 19.07vw;
        margin: 1.33vw auto 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .price-wrapper {
        font-size: 2.67vw;
        margin-top: 3.2vw;
        margin-left: 1.33vw;
        .price::v-deep {
          color: inherit;
          .monetary-unit {
            font-size: 2.67vw;
          }
          .int,
          .float {
            font-size: 3.2vw;
          }
          .monetary-unit,
          .int,
          .float {
            font-weight: normal;
          }
        }
      }
      .count {
        margin-top: 0.93vw;
        margin-left: 1.47vw;
        font-size: 2.67vw;
        color: #ff450b;
        height: 3.73vw;
        padding: 0 1.47vw;
        background-color: #fff2f2;
        border-radius: 3.73vw * 0.5;
        display: flex;
        align-items: center;
        width: max-content;
      }
    }
  }
}
</style>
