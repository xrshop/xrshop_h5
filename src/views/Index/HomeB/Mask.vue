<template>
  <div class="mask" v-show="isMask">
    <div class="content">
      <div class="banner">
        <div class="top"></div>
        <div class="title">商场新闻</div>
        <div class="cover"></div>
        <div class="text">星然科技电商商城促销大酬宾</div>
        <router-link to="/news-list" class="but">立即前往</router-link>
      </div>
      <div class="close">
        <img @click="close" src="@/assets/Index/HomeB/Mask/x.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      isMask: false,
      newsLength: 0,
    };
  },
  methods: {
    close() {
      const date = new Date();
      const time = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
      if (localStorage.getItem('newsMask') !== time && !this.isMask && this.newsLength >= 1) {
        this.isMask = true;
      } else if (this.newsLength >= 1) {
        localStorage.setItem('newsMask', time);
        this.isMask = false;
      } else {
        this.isMask = false;
      }
    },
  },
  async created() {
    const response = await Axios.get('/api/article/list', { params: { limit: 1 } });
    this.newsLength = response.data.data.length;
    this.close();
  },
};
</script>

<style lang="scss" scoped>
.mask {
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  z-index: 1000;
  .content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 67.6vw;
    .banner {
      width: 100%;
      background-color: #fff;
      border-radius: 2.4vw;
      padding-bottom: 5.07vw;
      background-image: url("~@/assets/Index/HomeB/Mask/tu.png");
      background-size: 67.6vw 42.53vw;
      background-repeat: no-repeat;
      background-position: bottom;
      .top {
        width: 100%;
        height: 22.4vw;
        background-image: url("~@/assets/Index/HomeB/Mask/bj1.png");
        background-size: cover;
        background-repeat: no-repeat;
      }
      .title {
        font-size: 4vw;
        color: #ff450b;
        font-weight: bold;
        text-align: center;
        margin-top: 2.8vw;
      }
      .cover {
        width: 47.6vw;
        height: 24.93vw;
        background-image: url("~@/assets/Index/HomeB/Mask/3587.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        margin: 2.4vw auto 0;
      }
      .text {
        font-size: 3.2vw;
        color: #ff450b;
        text-align: center;
        margin-top: 2.53vw;
      }
      .but {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52.27vw;
        height: 10.93vw;
        color: #fff;
        font-size: 4vw;
        background-color: #ff450b;
        margin: 8.53vw auto 0;
        border-radius: 5.47vw;
      }
    }
    .close {
      margin-top: 3.87vw;
      text-align: center;
      img {
        width: 6.93vw;
      }
    }
  }
}
</style>
