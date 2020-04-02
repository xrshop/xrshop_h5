<template>
  <div class="news-list">
    <titleBar title="商城新闻" canBack />
    <router-link to="/news-details/" class="card" v-for="(item, index) of list" :key="index">
      <div class="card-head">
        <div class="icon"></div>
        <div class="type">{{ item.type }}</div>
        <div class="time">{{ item.time | dateFormat }}</div>
      </div>
      <div class="card-content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="cover" :style="{ 'background-image': `url(${item.cover})` }"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable global-require */

export default {
  data() {
    return {
      list: [
        {
          type: '促销活动',
          time: 1584524337999,
          title: '耒小阳大量现摘新鲜蔬菜等大家来下单',
          desc: '当季新鲜蔬菜',
          cover: require('@/assets/NewsList/cover.png'),
        },
        {
          type: '促销活动',
          time: 1584524337999,
          title: '湖南星然科技旗下生鲜电商平台耒小阳让利大酬宾 耒阳十大特产你都吃过吗？',
          desc: '耒阳十大特产',
          cover: require('@/assets/NewsList/cover.png'),
        },
      ],
    };
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
  background-color: rgba($color: #f6f6f6, $alpha: 0.8);
}
.card {
  display: block;
  margin: 4vw 5.27vw;
  background-color: #fff;
  border-radius: 2vw;
  padding: 0 2.8vw 4vw;
  .card-head {
    height: 12.13vw;
    display: flex;
    align-items: center;
    .icon {
      position: relative;
      top: 0.27vw;
      width: 5.47vw;
      height: 5.2vw;
      background-image: url("~@/assets/NewsList/flag.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .type {
      margin-left: 0.67vw;
      font-size: 3.2vw;
      color: #f34a45;
    }
    .time {
      margin-left: auto;
      font-size: 3.2vw;
    }
  }
  .card-content {
    .title {
      font-size: 4vw;
      color: #040000;
      font-weight: bold;
      line-height: 6vw;
      margin: -1vw 0;
    }
    .desc {
      font-size: 3.2vw;
      color: #040000;
      margin-top: 2.53vw;
    }
    .cover {
      margin-top: 4vw;
      height: 40vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>
