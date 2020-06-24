<template>
  <div class="favorites">
    <TitleBar title="收藏商品" canBack>
      <!-- <template v-slot:other>
        <Tabs :options="filterOptions" v-model="filterActivated" />
      </template> -->
    </TitleBar>
    <div class="list">
      <router-link class="cell row" v-for="(item, index ) in listInfo" :key="index"
      :to="{ path: '/item-details', query: { id: item.pid }}">
        <div
          class="cover" :style="{ 'background-image': `url(${item.image})` }">
        </div>
        <div class="right">
          <div  class="title">
          {{ item.storeName }}
          </div>
          <div class="row-a row">
            <Price :value="item.price" />
            <div class="add-to-cart"></div>
          </div>
           </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      filterOptions: [
        { id: 0, text: '全部' },
        { id: 1, text: '促销' },
        { id: 2, text: '购买过' },
      ],
      filterActivated: 1,
      listInfo: '',
    };
  },
  created() {
    console.log(this.token);
    axios.get('/api/collect/user', { headers: { Authorization: this.token } })
      .then((response) => {
        this.listInfo = response.data.data;
        console.log(response);
      });
  },
  computed: {
    token() {
      return userManage.data.token;
    },
  },
};
</script>

<style lang="scss" scoped>
.favorites {
  background-color: #f7f5f6;
}
.title-bar {
  border-radius: 0 0 2vw 2vw;
}
.list {
  background-color: #fff;
  border-radius: 2vw;
  margin-top: 2.67vw;
}
.cell {
  position: relative;
  height: 33.3vw;
  &::after {
    content: "";
    display: block;
    width: 62.67vw;
    height: var(--px);
    background-color: #eee;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .cover {
    display: block;
    width: 26.67vw;
    height: 26.67vw;
    margin-left: 5.2vw;
    margin-top: 2.67vw;
    border-radius: 1vw;
    flex-shrink: 0;
    background-position: center;
    background-size:100% 100%;
  }
  .right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .title {
    margin-left: 2.67vw;
    margin-top: 4.67vw - (5.2vw - 3.2vw) * 0.5;
    font-size: 3.2vw;
    color: #333;
    width: 43.73vw;
    line-height: 5.2vw;
    display: block;
  }
  .row-a {
    margin-top: auto;
    margin-bottom: 7.47vw;
    align-items: center;
    .price {
      margin-left: 2.67vw;
    }
    .add-to-cart {
      width: 6.67vw;
      height: 6.67vw;
      background-image: url("~@/assets/more/add-to-cart.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      margin-left: auto;
      margin-right: 5.47vw;
    }
  }
}
</style>
