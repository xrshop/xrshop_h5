<template>
  <div class="home">
    <div class="white-background">
      <Header />
      <Banner />
      <News />
      <Menu />
    </div>
    <Popular />
  </div>
</template>

<script>
import Header from './Home/Header.vue';
import Banner from './Home/Banner.vue';
import News from './Home/News.vue';
import Menu from './Home/Menu.vue';
import Popular from './Home/Popular.vue';

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
  background-color: #f7f5f6;
}
.white-background {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
