<template>
  <div class="home">
    <div class="bg-block"></div>
    <Masks />
    <Header />
    <Banner :banner="banner" />
    <Menu :menu="menu" />
    <Seckill />
    <!-- <Recommend />
    <Recommend2 /> -->
    <Recommend3 :options="recommend3" />
  </div>
</template>

<script>
import Axios from 'axios';
import Masks from './HomeB/Mask.vue';
import Header from './HomeB/Header.vue';
import Banner from './HomeB/Banner.vue';
import Menu from './HomeB/Menu.vue';
import Seckill from './HomeB/Seckill.vue';
// import Recommend from './HomeB/Recommend.vue';
// import Recommend2 from './HomeB/Recommend2.vue';
import Recommend3 from './HomeB/Recommend3.vue';

export default {
  name: 'Home',
  components: {
    Masks,
    Header,
    Banner,
    Menu,
    Seckill,
    // Recommend,
    // Recommend2,
    Recommend3,
  },
  data() {
    return {
      banner: [],
      menu: [],
      recommend3: [],
    };
  },
  created() {
    Axios.get('/api/index').then((response) => {
      const { data } = response.data;
      this.banner = data.banner;
      this.menu = data.menus;
      this.recommend3 = [data.bastList, data.firstList, data.benefit, data.likeInfo];
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f6f6f6;
  position: relative;
}
.bg-block {
  position: absolute;
  height: 40.93vw;
  width: 100%;
  top: 0;
  background-color: #fff;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -6vw;
    height: 12vw;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 50% 50%;
  }
}
</style>
