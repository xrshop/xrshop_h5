<template>
  <div class="home">
    <TitleBar>
      <template v-slot:left>
        <input class="search" type="search" placeholder="搜索商品" />
      </template>
    </TitleBar>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.title-bar ::v-deep .left {
  display: flex;
  align-items: center;
}
.search {
  width: 66.27vw;
  height: 8.13vw;
  margin-left: 5.33vw;
  border-radius: 8.13vw * 0.5;
  border: none;
  background-color: #f6f6f6;
  padding-left: 7.73vw;
  padding-right: 2.4vw;
  background-image: url("~@/assets/Index/Home/search.png");
  background-repeat: no-repeat;
  background-size: 3.33vw;
  background-position: 2.4vw;
  line-height: 1;
  // &:placeholder-shown {
  //   background-color: #f6f6f6;
  // }
  &::placeholder {
    color: #333;
  }
}
</style>
