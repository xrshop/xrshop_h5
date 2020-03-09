<template>
  <div class="home">
    <div class="white-background">
      <Header />
      <Banner />
      <News />
      <Menu />
    </div>
    <Hot />
  </div>
</template>

<script>
import Header from './Home/Header.vue';
import Banner from './Home/Banner.vue';
import News from './Home/News.vue';
import Menu from './Home/Menu.vue';
import Hot from './Home/Hot.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    News,
    Menu,
    Hot,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f7f5f6;
}
.white-background {
  background-color: #fff;
  overflow: hidden;
}
</style>
