<template>
  <input class="search" type="search" placeholder="搜索商品" />
</template>
<script>
export default {
  name: 'SearchSimple',
};
</script>
<style lang="scss" scoped>
.search {
  outline: none;
  width: 66.27vw;
  height: 8.13vw;
  margin-left: 5.33vw;
  border-radius: 8.13vw * 0.5;
  border: none;
  background-color: #f6f6f6;
  padding-left: 7.73vw;
  padding-right: 2.4vw;
  background-image: url("~@/assets/search.png");
  background-repeat: no-repeat;
  background-size: 3.33vw;
  // background-position: 2.4vw;
  background-position: 3vw;
  line-height: 1;
  font-size: 3.2vw;
  &::placeholder {
    color: #333;
  }
}
</style>
