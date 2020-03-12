<template>
  <div class="item-slide row">
    <div class="item" v-for="index in 9" :key="index">
      <div
        class="cover"
        style="background-image: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg')"
      ></div>
      <div class="badge hot"></div>
      <div class="title">纯糯米糍粑手工年糕特产无敌产品</div>
      <div class="row">
        <div class="price">
          <span class="monetary-unit">￥</span> 56
        </div>
        <div class="add-to-cart"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-slide {
  // width: 100vw - 5.33vw * 2;
  height: 42.27vw;
  // margin: 5.33vw auto 0;
  margin-top: 5.33vw;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  .item {
    position: relative;
    width: 24.53vw;
    height: 42.27vw;
    margin: 0 0.66vw;
    border-radius: 1vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow: hidden;
    scroll-snap-align: start;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    .cover {
      width: 24.53vw;
      height: 24.53vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .badge {
      position: absolute;
      left: 1.33vw;
      top: 1.33vw;
      width: 4.8vw;
      height: 6.13vw;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      &.hot {
        background-image: url("~@/assets/Index/Home/Popular/badge/hot.png");
      }
    }
    .title {
      margin: 1.3vw 1.3vw 0;
      font-size: 3.2vw;
      line-height: 3.73vw;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
    }
    .row {
      margin-top: auto;
      margin-bottom: 2.8vw;
      .price {
        margin-left: 1.2vw;
        color: #f84e4e;
        font-size: 3.2vw;
        font-weight: bold;
        .monetary-unit {
          font-size: 2.4vw;
        }
      }
      .add-to-cart {
        width: 4vw;
        height: 4vw;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("~@/assets/Index/Home/Popular/add-to-cart.png");
        margin-left: auto;
        margin-right: 1.47vw;
      }
    }
  }
}
</style>
