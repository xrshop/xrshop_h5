<template>
  <div class="category-details">
    <TitleBar canBack>
      <template v-slot:center>
        <SearchSimple @select="getData" />
      </template>
      <template v-slot:right>
        <div
          class="menu-button"
          :class="{ style2: changeStyle }"
          @click="changeStyle = !changeStyle"
        ></div>
      </template>
      <template v-slot:other>
        <Tabs
          :options="sort"
          v-model="sortActivated"
          @direction-change="order"
        />
      </template>
    </TitleBar>
    <waterfall
      :data="data"
      :col="2"
      :isTransition="false"
      v-if="changeStyle === false"
    >
      <template>
        <router-link
          :to="{path: '/item-details', query: {id: item.id}}"
          class="cell"
          v-for="item of data"
          :key="item.id"
        >
          <div
            class="cover"
            :style="{
              'background-image': `url(${item.image})`
            }"
          ></div>
          <div class="info">
            <div class="title">{{item.storeName}}</div>
            <div class="label">
              <div class="item">{{item.unitName}}</div>
            </div>
            <div class="row-a">
              <div class="money">
                <Price :value="item.price" />
                <div class="type">
                  <div class="item stress">自营</div>
                  <div class="item">满减</div>
                  <div class="item">惠</div>
                </div>
              </div>
              <span class="count">{{item.sales}}人买过</span>
            </div>
          </div>
          <img src="@/assets/CategoryDetails/gwc.png" class="icon" alt />
        </router-link>
      </template>
    </waterfall>
    <div class="changeStyle" v-show="changeStyle">
      <router-link
        :to="{path: '/item-details', query: {id: item.id}}"
        class="cell"
        v-for="item of data"
        :key="item.id"
      >
        <div
          class="cover"
          :style="{
            'background-image':
            `url(${item.image})`
          }"
        ></div>
        <div class="info">
          <div class="title">{{item.storeName}}</div>
          <div class="label">
            <div class="item">{{item.unitName}}</div>
          </div>
          <div class="row-a">
            <div class="money">
              <Price :value="item.price" />
              <div class="type">
                <div class="item stress">自营</div>
                <div class="item">满减</div>
                <div class="item">惠</div>
              </div>
            </div>
            <span class="count">{{item.sales}}人买过</span>
          </div>
        </div>
        <img src="@/assets/CategoryDetails/gwc.png" class="icon" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-nested-ternary */
import axios from 'axios';

export default {
  data() {
    return {
      sort: [
        { id: 0, text: '综合排序' },
        { id: 1, text: '价格', direction: null },
        { id: 2, text: '销量', direction: null },
        { id: 3, text: '新品' },
      ],
      sortActivated: 0,
      changeStyle: false,
      data: [],
    };
  },
  computed: {
    priceOrder() {
      return this.sort[1].direction === 1 ? 'desc' : this.sort[1].direction === 0 ? 'asc' : '';
    },
    salesOrder() {
      return this.sort[2].direction === 1 ? 'asc' : this.sort[2].direction === 0 ? 'desc' : '';
    },
  },
  methods: {
    order() {
      this.getData();
    },
    getData() {
      this.data = [];
      axios
        .get('/api/products', {
          params: {
            limit: 10,
            page: 1,
            keyword: this.$route.query.keyword,
            sid: this.$route.query.type,
            news: this.sortActivated === 3 ? 1 : 0,
            priceOrder: this.priceOrder,
            salesOrder: this.salesOrder,
          },
        })
        .then((response) => {
          this.data = response.data.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.category-details {
  background-color: #f6f6f6;
}
.title-bar::v-deep {
  border-radius: 0 0 2vw 2vw;
  .center {
    display: flex;
    align-items: center;
  }
  .back-button {
    width: calc((100vw - 75vw) * 0.5);
  }
}
.search {
  width: 75vw;
}
.menu-button {
  width: calc((100vw - 75vw) * 0.5);
  height: var(--title-bar-height);
  background-image: url("~@/assets/CategoryDetails/menu-button1.png");
  background-repeat: no-repeat;
  background-size: 4.4vw;
  background-position: center;
}
.menu-button.style2 {
  background-image: url("~@/assets/CategoryDetails/menu-button.png");
}

.vue-waterfall::v-deep {
  padding: 0 3.33vw;
  box-sizing: border-box;
  margin-top: 2.67vw;
  .vue-waterfall-column {
    padding: 0 0.67vw;
    box-sizing: border-box;
    .cell {
      display: block;
      width: 44.67vw;
      background-color: #fff;
      border-radius: 2vw;
      overflow: hidden;
      box-shadow: 0 0 1vw 0 rgba($color: #000000, $alpha: 0.01);
      margin: 0 auto 2.67vw;
      position: relative;
      .icon {
        display: none;
      }
    }
    .cover {
      height: 44.67vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .info {
      padding: 2.67vw 2.67vw 4vw;
      .label {
        margin-top: 2.13vw;
        .item {
          width: max-content;
          padding: 0.53vw 1.33vw;
          font-size: 2.67vw;
          color: #999;
          background-color: #f6f6f6;
          border-radius: 1.87vw;
        }
      }
    }
    .title {
      margin-top: 1.87vw - 2.53vw - (4.53vw - 3.73vw) / 2;
      font-size: 3.73vw;
      line-height: 4.53vw;
    }
    .mass {
      margin-top: 2.53vw - (5.2vw - 4vw) / 2;
      color: #bbb;
      font-size: 3.2vw;
    }
    .row-a {
      display: flex;
      justify-content: space-between;
      margin-top: 3.07vw;
      .type {
        display: flex;
        margin-top: 2.53vw;
        .item {
          margin-right: 1.33vw;
          font-size: 2.67vw;
          padding: 0.53vw 1.2vw;
          border: solid var(--px) #ff450b;
          color: #ff450b;
          border-radius: 0.4vw;
          &:last-of-type {
            margin-right: 0;
          }
        }
        .stress {
          color: #fff;
          background-color: #ff450b;
        }
      }
    }
    .count {
      position: absolute;
      font-size: 2.67vw;
      color: #bbb;
      right: 4vw;
    }
  }
}

.changeStyle {
  padding: 0 4vw;
  .cell {
    width: 92vw;
    height: 40.13vw;
    display: flex;
    border-radius: 1.33vw;
    position: relative;
    background-color: #fff;
    margin-top: 2.67vw;
    padding: 4vw;
    box-sizing: border-box;
    .icon {
      display: block;
      width: 7.47vw;
      position: absolute;
      right: 4vw;
      bottom: 9.73vw;
    }
    .cover {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 32vw;
      height: 32vw;
      flex-shrink: 0;
      border-radius: 1.33vw;
      margin-right: 2.67vw;
    }
    .info {
      position: relative;
      .title {
        margin-top: 1.06vw;
        font-size: 3.73vw;
        line-height: 4.53vw;
      }
      .label {
        margin-top: 2.13vw;
        .item {
          width: max-content;
          padding: 0.53vw 1.33vw;
          font-size: 2.67vw;
          color: #999;
          background-color: #f6f6f6;
          border-radius: 1.87vw;
        }
      }
      .row-a {
        position: absolute;
        bottom: 0;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
        .count {
          display: none;
        }
        .type {
          display: flex;
          margin-top: 2.53vw;
          .item {
            margin-right: 1.33vw;
            font-size: 2.67vw;
            padding: 0.53vw 1.2vw;
            border: solid var(--px) #ff450b;
            color: #ff450b;
            border-radius: 0.4vw;
          }
          .stress {
            color: #fff;
            background-color: #ff450b;
          }
        }
      }
    }
  }
}
.tabs::v-deep {
  .active {
    color: #f84e4e;
  }
}
</style>
