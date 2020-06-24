<template>
  <div class="recommend2 row">
    <div class="left column">
      <div class="title">
        为&ensp;你
        <br />推&ensp;荐
      </div>
      <router-link to="/menu-recommend" class="more">
        更多
        <Icon class="icon" name="right" />
      </router-link>
    </div>
    <div class="right row">
       <router-link class="item" v-for="(item, index ) in listInfo" :key="index"
      :to="{ path: '/item-details', query: { id: item.id }}">
        <!-- <img class="cover" :src="item.cover" alt /> -->
        <div class="cover" :style="{'background-image': `url(${item.image})`}"></div>
        <div class="title">{{ item.storeName }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      listInfo: [],
    };
  },
  created() {
    axios.get('/api/product/hot', {
      params: { limit: 4 },
      headers: { Authorization: this.token },
    })
      .then((response) => {
        this.listInfo = response.data.data;
        console.log(this.listInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.recommend2 {
  margin: 2.67vw 4vw 0;
  background-color: #fff;
  border-radius: 2vw;
  height: 27.33vw;
}
.left {
  width: 19.93vw;
  align-items: center;
  .title {
    font-size: 4vw;
    font-weight: bold;
    margin-top: 7vw;
    line-height: 1.25;
  }
  .more {
    display: flex;
    width: 8.93vw;
    height: 3.73vw;
    align-items: center;
    justify-content: center;
    border-radius: 3.73vw * 0.5;
    background-color: #fff2f2;
    color: #ff450b;
    margin-top: 0.7vw;
    font-size: 2.67vw;
    .icon::v-deep {
      width: 1vw;
      height: 2vw;
      svg {
        display: block;
      }
      path {
        stroke: #ff450b;
      }
    }
  }
}
.item {
  margin-top: 3.2vw;
  margin-right: 1.33vw;
  .title {
    font-size: 2.67vw;
    text-align: center;
    margin-top: 1.35vw;
  }
  .cover {
    width: 17.07vw;
    height: 17.05vw;
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
