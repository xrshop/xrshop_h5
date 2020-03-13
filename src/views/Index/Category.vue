<template>
  <div class="category">
    <TitleBar title="分类" />
    <Search />
    <div class="category-wrapper row">
      <div class="left">
        <div
          class="cell"
          v-for="(item, index) of left"
          :key="index"
          :class="{ active: leftSelected === item.id }"
          @click="leftSelected = item.id"
        >{{ item.title }}</div>
      </div>
      <div class="right">
        <div class="cell" v-for="(item, index) of right" :key="index">
          <div class="cover" :style="{ 'background-image': `url('${item.cover}')` }"></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryList, categoryItemsMap } from '@/config/meta/category';
import Search from './Category/Search.vue';

export default {
  components: {
    Search,
  },
  data() {
    return {
      leftSelected: 0,
      left: categoryList,
      // right: [],
    };
  },
  computed: {
    right() {
      return categoryItemsMap[this.leftSelected];
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  overflow-y: hidden;
}
.category::after {
  display: none;
}
.category-wrapper {
  height: calc(
    100% - var(--title-bar-height) - var(--category-search-height) -
      var(--category-search-bottom-margin)
  );
  // border-top: calc(1 * var(--px)) solid #F5F5F5;
  // box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
}
.category-wrapper {
  .left {
    width: 26.67vw;
    background-color: #f6f6f6;
    .cell {
      height: 11.73vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.73vw;
      font-weight: bold;
      position: relative;
      &.active {
        background-color: #fff;
        &::before {
          content: "";
          display: block;
          width: 1.07vw;
          height: 4vw;
          background-color: rgba(239, 36, 36, 1);
          border-radius: 0vw 1vw 1vw 0vw;
          position: absolute;
          left: 0;
          top: calc((100% - 4vw) / 2);
        }
      }
    }
  }
  .right {
    width: 73.33vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-top: 3.33vw;
    .cell {
      width: calc(100% / 3);
      height: 21.6vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .cover {
        width: 12vw;
        height: 12vw;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .title {
        font-size: 3.2vw;
        color: #040000;
      }
    }
  }
}
</style>
