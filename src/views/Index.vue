<template>
  <div class="index">
    <router-view class="index-views"></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from './Index/TabBar.vue';

export default {
  name: 'Index',
  components: {
    TabBar,
  },
};
</script>

<style lang="scss" scoped>
#views.index {
  overflow-y: hidden;
}
.index-views {
  // height: calc(100% - var(--tab-bar-height));
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
