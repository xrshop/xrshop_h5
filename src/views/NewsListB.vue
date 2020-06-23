<template>
  <div class="news-list">
    <TitleBar title="商城新闻" canBack />
    <router-link class="box" :to="{ path: '/news-details', query: { id: item.id } }"
    v-for="(item, index) of listInfo" :key="index">
      <div class="time">{{ item.addTime | dateFormat }}</div>
      <div class="card">
        <div class="cover" :style="{ 'background-image': `url(${item.imageInput})` }"></div>
        <div class="card-content">
          <div class="title">{{ item.title }}</div>
          <div class="describe">{{ item.synopsis }}</div>
        </div>
      </div>
    </router-link>
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
    axios.get('/api/article/list', {
      params: { limit: 4 },
    }).then((response) => {
      this.listInfo = response.data.data;
      console.log(this.listInfo);
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
.news-list {
  background-color: #f6f6f6;
}
.title-bar {
  background-color: rgba($color: #fff, $alpha: 0.8);
}
.box {
  margin-top: 2.67vw;
  display: block;
  .time {
    width: max-content;
    margin: 0 auto;
    color: #fff;
    font-size: 2.67vw;
    background-color: #dddddd;
    border-radius: 2.67vw;
    padding: 1.4vw 2.53vw;
  }
  .card {
    display: block;
    background-color: #fff;
    border-radius: 2vw;
    width: 92vw;
    margin: 2.67vw auto 0;
    .cover {
      height: 40vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 2vw 2vw 0 0;
    }
    .card-content {
      padding: 0 2.67vw 3.33vw;
      .title {
        margin-top: 4vw;
        font-size: 4vw;
        font-weight: bold;
      }
      .describe {
        margin-top: 1.73vw;
        color: #bbbbbb;
        font-size: 3.2vw;
        line-height: 1.5;
      }
    }
  }
}
</style>
