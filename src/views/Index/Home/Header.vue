<template>
  <div class="header">
    <SearchSimple />
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
  // background-color: #fff;
  background-color: rgba($color: #fff, $alpha: 0.8);
  backdrop-filter: blur(10px) brightness(110%);
}
.logo {
  width: 12.4vw;
  height: 6.8vw;
  margin-left: auto;
  margin-right: 5.47vw;
}
.search {
  margin-left: 5.33vw;
}
</style>
