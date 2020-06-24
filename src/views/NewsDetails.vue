<template>
  <div class="news-details">
    <TitleBar title="商城新闻" canBack />
    <div class="news-cover" :style="{ 'background-image': `url(${detail.imageInput})` }"></div>
    <div class="article">
      <div class="title">{{ detail.title }}</div>
      <div class="row row-a">
        <span class="count">{{ detail.visit }}阅读</span>
        <span class="time">{{ detail.addTime}}</span>
      </div>
      <div class="content" v-html="detail.content"></div>
    </div>
    <div class="recommend">
      <div class="recommend-title">推荐商品</div>
      <div class="list">
        <router-link class="item" :to="{ path: '/item-details', query: { id: item.id } }"
        v-for="(item, index) of recommendList" :key="index">
          <div class="cover" :style="{ 'background-image': `url(${item.image})` }"></div>
          <div class="right">
            <div class="title">{{ item.storeName }}</div>
            <div class="count">{{ item.sales }}人买过</div>
            <Price :value="item.price" />
            <div class="add-to-cart"></div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import axios from 'axios';

export default {
  data() {
    return {
      detail: '',
      recommendList: '',
    };
  },
  created() {
    const { id } = this.$route.query;
    axios.get(`/api/article/details/${id}`, {
    }).then((response) => {
      this.detail = response.data.data;
      console.log(this.detail);
    });
    axios.get('/api/product/hot', {
      params: { limit: 2 },
    })
      .then((response) => {
        this.recommendList = response.data.data;
        console.log(this.recommendList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  filters: {
    dateFormat(value) {
      return new Date(value).toISOString().slice(0, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-details {
  background-color: #f5f5f5;
}
.news-cover {
  height: 50.4vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.article {
  margin-top: -11.87vw;
  background-color: #fff;
  border-radius: 4vw;
  padding: 0 5.47vw;
  overflow: hidden;
  .title {
    font-size: 4.8vw;
    font-weight: bold;
    line-height: 1.25;
    margin-top: 3.73vw - 4.8vw * 0.125;
  }
  // font-size - (line-height - 1)/2
  .row-a {
    font-size: 3.2vw;
    color: #bbb;
    margin-top: 3.47vw - 4.8vw * 0.125;
    .time {
      margin-left: 4.27vw;
    }
  }
  .content {
    margin-top: 7.87vw - 3.2vw * 0.5;
    margin-bottom: 8vw - 3.2vw * 0.5;
    font-size: 3.2vw;
    line-height: 2;
  }
}
.recommend {
  .recommend-title {
    font-size: 4vw;
    margin: 5.33vw 5.2vw 0;
  }
  .list {
    background-color: #fff;
    border-radius: 2vw;
    margin: 4.13vw 5.33vw 7.6vw;
    padding: 2vw 0;
    .item {
      padding: 2vw 2.53vw;
      height: 26.67vw;
      position: relative;
      display: flex;
      .cover {
        // position: absolute;
        width: 26.67vw;
        height: 26.67vw;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 1vw;
        flex-shrink: 0;
      }
      .right {
        margin-left: 2.67vw;
        margin-right: 2.8vw;
      }
      .title {
        line-height: 5.2vw;
        font-size: 4vw;
      }
      .count {
        display: flex;
        align-items: center;
        width: max-content;
        height: 5.33vw;
        padding: 0 1.47vw;
        margin-top: 2.67vw - (5.2vw - 4vw) * 0.5;
        background-color: #f5f5f5;
        font-size: 3.2vw;
        border-radius: 5.33vw * 0.5;
      }
      .price {
        margin-top: 3.73vw;
        display: block;
      }
      .add-to-cart {
        position: absolute;
        right: 2.8vw;
        bottom: 1.73vw;
        width: 6.67vw;
        height: 6.67vw;
        background-image: url("~@/assets/more/add-to-cart.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
