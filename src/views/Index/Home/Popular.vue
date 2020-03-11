<template>
  <div class="popular">
    <img class="popular-title" src="@/assets/Index/Home/Popular/popular-title.png" alt />
    <ItemSlide />
    <ItemBlock />
    <ItemBlock />
    <ItemSlide />
    <ItemBlock />
  </div>
</template>

<script>
import ItemSlide from './Popular/ItemSlide.vue';
import ItemBlock from './Popular/ItemBlock.vue';


export default {
  components: {
    ItemSlide,
    ItemBlock,
  },
};
</script>

<style lang="scss" scoped>
.popular {
  display: flex;
  flex-direction: column;
  padding: 5.33vw;
}
.popular-title {
  display: block;
  width: 35.6vw;
  height: 9.2vw;
  margin: 0 auto 1.2vw;
}
</style>
