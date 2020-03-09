<template>
  <div class="header">
    <input class="search" type="search" placeholder="搜索商品" />
    <img class="logo" src="@/assets/logo.png" alt />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 14.8vw;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px) brightness(110%);
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
  font-size: 3.2vw;
  &::placeholder {
    color: #333;
  }
}
.logo {
  width: 12.4vw;
  height: 6.8vw;
  margin-left: auto;
  margin-right: 5.47vw;
}
</style>
