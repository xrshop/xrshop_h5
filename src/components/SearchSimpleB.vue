<template>
  <div class="box">
    <input class="search" type="search" placeholder="搜索商品" />
    <div class="icon"></div>
  </div>
</template>
<script>
export default {
  name: 'SearchSimpleB',
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 8vw;
  border-radius: 4vw;
  background-color: #ffffff;
  border: 0.27vw solid rgba(255,69,11,1);
  padding: 0 4vw;
  box-sizing: border-box;
  display: flex;
  .search {
    outline: none;
    border: none;
    // background-color: rgba(238,238,238,0.5);
    padding-left: 5.33vw;
    padding-right: 2.4vw;
    background-image: url("~@/assets/search.png");
    background-repeat: no-repeat;
    background-size: 4vw;
    // background-position: 2.4vw;
    background-position: left center;
    line-height: 1;
    font-size: 3.2vw;
    &::placeholder {
      color: #333;
    }
  }
}
</style>
