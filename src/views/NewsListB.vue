<template>
  <div class="news-list">
    <TitleBar title="商城新闻" canBack />
    <div class="box">
      <div class="time">昨天 12:00</div>
      <router-link to="/news-details/" class="card" v-for="(item, index) of list" :key="index">
        <div class="cover" :style="{ 'background-image': `url(${item.cover})` }"></div>
        <div class="card-content">
          <div class="title">{{ item.title }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */

export default {
  data() {
    return {
      list: [
        {
          title: '大量现摘新鲜蔬菜等大家来下单',
          describe: '当季新鲜蔬菜,感恩回馈不负信赖！生鲜嗨抢季，更有多重 优惠等你来抢购！',
          cover: require('@/assets/NewsList/1.png'),
        },
        {
          title: '大量现摘新鲜蔬菜等大家来下单',
          describe: '当季新鲜蔬菜,感恩回馈不负信赖！生鲜嗨抢季，更有多重 优惠等你来抢购！',
          cover: require('@/assets/NewsList/2.png'),
        },
      ],
    };
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
