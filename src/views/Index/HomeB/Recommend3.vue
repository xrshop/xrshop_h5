<template>
  <div class="recommend3">
    <div class="type-row row">
      <div
        class="cell"
        v-for="(type, index) of types"
        :key="index"
        :class="{ active: active === index }"
        @click="active = index;getData(type.key)"
      >
        <div class="title">{{ type.title }}</div>
        <!-- <div class="subtitle">{{ type.subtitle }}</div> -->
      </div>
    </div>
    <div class="content">
      <router-link
        :to="{ path: '/item-details', query: { id: cell.id } }"
        class="cell"
        v-for="(cell, index) of data"
        :key="index"
      >
        <div
          class="cover"
          :style="{ 'background-image': `url(${cell.image})` }"
        ></div>
        <div class="title">{{ cell.storeName }}</div>
        <div class="row row-a">
          <Price :value="cell.price" />
          <div class="count">{{ cell.sales }}人购买</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      active: 0,
      types: [
        {
          title: '猜你喜欢',
          subtitle: '猜你喜欢',
          key: 'isBest',
        },
        {
          title: '首发新品',
          subtitle: '首发新品',
          key: 'news',
        },
        {
          title: '促销单品',
          subtitle: '促销单品',
          key: 'isBenefit',
        },
        {
          title: '精选好物',
          subtitle: '精选好物',
          key: 'isGood',
        },
      ],
    };
  },
  methods: {
    async getData(key) {
      const response = await axios.get('/api/products', {
        params: {
          [key]: 1, limit: 10, page: 1, priceOrder: '', salesOrder: '',
        },
      });
      this.data = response.data.data;
    },
  },
  created() {
    this.getData(this.types[this.active].key);
  },
};
</script>

<style lang="scss" scoped>
.type-row {
  height: 17.47vw;
  // justify-content: space-evenly;
  align-items: center;
  .cell {
    width: 25vw;
    box-sizing: border-box;
    border-right: solid thin #DDDDDD;
    &:last-of-type {
      border: none;
    }
    &.active .title {
      padding: 1vw 2vw;
      color: #fff;
      background: linear-gradient(-90deg,rgba(255,69,11,1), rgba(251,133,46,1));
      border-radius: 2.53vw;
      font-weight: bold;
    }
    .title {
      font-size: 3.47vw;
      margin: 0 auto;
      width: max-content;
      color: #999;
    }
    .subtitle {
      margin-top: 1.47vw;
      font-size: 3.2vw;
    }
  }
}
.content {
  padding: 0 4vw 2vw;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  .cell {
    width: 44.67vw;
    height: 65.33vw;
    // margin-left: 2.67vw;
    margin-bottom: 2.67vw;
    background-color: #fff;
    border-radius: 1vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .cover {
      display: block;
      width: 44.67vw;
      height: 44.67vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .title {
      margin-left: 2.67vw;
      margin-right: 2.67vw;
      font-size: 3.73vw;
      line-height: 4.53vw;
      margin-top: 1.87vw - (4.53vw - 3.73vw) * 0.5;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical
    }
    .row-a {
      margin-top: auto;
      margin-bottom: 4.27vw;
      align-items: baseline;
      justify-content: space-between;
      .price {
        margin-left: 3.47vw;
      }
      .count {
        margin-right: 2.67vw;
        font-size: 2.67vw;
        color: #bbb;
      }
    }
  }
}
</style>
