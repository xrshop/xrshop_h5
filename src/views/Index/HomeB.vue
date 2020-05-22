<template>
  <div class="home">
    <div class="bg-block"></div>
    <Header />
    <Banner />
    <Menu />
    <Seckill />
    <Recommend />
    <Recommend2 />
    <Recommend3 />
  </div>
</template>

<script>
import Header from './HomeB/Header.vue';
import Banner from './HomeB/Banner.vue';
import Menu from './HomeB/Menu.vue';
import Seckill from './HomeB/Seckill.vue';
import Recommend from './HomeB/Recommend.vue';
import Recommend2 from './HomeB/Recommend2.vue';
import Recommend3 from './HomeB/Recommend3.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Menu,
    Seckill,
    Recommend,
    Recommend2,
    Recommend3,
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
  height: 53.93vw;
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
