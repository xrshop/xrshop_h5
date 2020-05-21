<template>
  <div class="header">
    <div class="top">
      <img class="logo" src="@/assets/Index/HomeB/Logo/logo2.png" alt />
      <img class="right" src="@/assets/Index/HomeB/Header/sys2.png" alt />
    </div>
    <SearchSimpleB />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: rgba($color: #fff, $alpha: 0.8);
  backdrop-filter: blur(10px) brightness(110%);
  padding: 0 3.83vw 0 4vw;
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--title-bar-height);
    .right {
      width: 5.33vw;
    }
  }
  .box {
    margin-bottom: 1.83vw;
  }
}
.logo {
  width: 42.27vw;
  height: 3.73vw;
}
</style>
