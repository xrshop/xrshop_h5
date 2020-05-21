<template>
  <div class="home">
    <div class="bg-block"></div>
    <Header />
    <Banner />
    <News />
    <Menu />
    <Popular />
  </div>
</template>

<script>
import Header from './HomeB/Header.vue';
import Banner from './HomeB/Banner.vue';
import News from './HomeB/News.vue';
import Menu from './HomeB/Menu.vue';
import Popular from './HomeB/Popular.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    News,
    Menu,
    Popular,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #F6F6F6;
  position: relative;
}
.bg-block {
  position: absolute;
  height: 40vw;
  width: 100%;
  top: 0;
  background-color: #fff;
  z-index: 1;
  &::before {
    content: '';
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
