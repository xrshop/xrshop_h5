<template>
  <div class="footer">
    <div class="nav-buttons">
      <router-link class="nav-button" to="/">
        <img class="icon" src="@/assets/ItemDetails/home.png" alt />
        <div class="text">首页</div>
      </router-link>
      <router-link class="nav-button" to="/index/cart">
        <img class="icon" src="@/assets/ItemDetails/cart.png" alt />
        <div class="text">购物车</div>
      </router-link>
      <div class="nav-button" v-show="!usercollect"  @click="collect">
        <img class="icon" src="@/assets/ItemDetails/like.png" alt />
        <div class="text">已收藏</div>
      </div>
      <div class="nav-button" v-show="usercollect" @click="collect">
        <img class="icon" src="@/assets/ItemDetails/like.png" alt />
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="add-to-cart" @click="addCart">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  props: ['usercollect'],
  name: 'Footer',
  methods: {
    addCart() {
      this.$emit('eventCart');
    },
    collect() {
      this.$emit('eventCollect');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 13.07vw;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  display: flex;
  .nav-buttons {
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
  }
  .nav-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14vw;
    // flex-grow: 1;
    .icon {
      // width: 5vw;
      height: 7vw;
      margin-top: 1.2vw;
      display: block;
    }
    .text {
      font-size: 2.67vw;
      margin-top: 0.6vw;
    }
  }
  .add-to-cart,
  .buy {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 28.27vw;
  }
  .add-to-cart {
    background-color: #ffd40c;
  }
  .buy {
    background-color: #f84e4e;
  }
}
</style>
