<template>
  <div class="mask" v-show="isMask">
    <div class="content">
      <div class="banner">
        <div class="top"></div>
        <div class="title">商场新闻</div>
        <div class="cover"></div>
        <div class="text">星然科技电商商城促销大酬宾</div>
        <div class="but">立即前往</div>
      </div>
      <div class="close">
        <img  @click="isMask = false" src="@/assets/Index/HomeB/Mask/x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMask: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.mask {
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: .2);
  position: fixed;
  z-index: 1000;
  .content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 67.6vw;
    .banner {
      width: 100%;
      background-color: #fff;
      border-radius: 2.4vw;
      padding-bottom: 5.07vw;
      background-image: url('~@/assets/Index/HomeB/Mask/tu.png');
      background-size: 67.6vw 42.53vw;
      background-repeat: no-repeat;
      background-position: bottom;
      .top {
        width: 100%;
        height: 22.4vw;
        background-image: url('~@/assets/Index/HomeB/Mask/bj1.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
      .title {
        font-size: 4vw;
        color: #FF450B;
        font-weight: bold;
        text-align: center;
        margin-top: 2.8vw;
      }
      .cover {
        width: 47.6vw;
        height: 24.93vw;
        background-image: url('~@/assets/Index/HomeB/Mask/3587.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        margin: 2.4vw auto 0;
      }
      .text {
        font-size: 3.2vw;
        color: #FF450B;
        text-align: center;
        margin-top: 2.53vw;
      }
      .but {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52.27vw;
        height: 10.93vw;
        color: #fff;
        font-size: 4vw;
        background-color: #FF450B;
        margin: 8.53vw auto 0;
        border-radius: 5.47vw;
      }
    }
    .close {
      margin-top: 3.87vw;
      text-align: center;
      img {
        width: 6.93vw;
      }
    }
  }
}
</style>
