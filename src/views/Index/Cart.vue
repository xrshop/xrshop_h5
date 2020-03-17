<template>
  <div class="cart">
    <TitleBar title="购物车" rightText="编辑" />
    <div class="item" v-for="index of 2" :key="index">
      <div class="checkbox"></div>
      <div
        class="cover"
        style="background-image: url('https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=694356326,2448328272&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=c8699771b450bac7767b93c682e02cc1')"
      ></div>
      <div class="right">
        <div class="title">汉马王堆直裾素纱襌衣，绝世国宝，禁止出口文物</div>
        <div class="subitem-title">丝绸50g*1件</div>
        <div class="row">
          <div class="price">
            <span class="monetary-unit">￥</span>
            <span class="int">56,0000,0000</span>
            <span class="float">.00</span>
          </div>
          <div class="count-wrapper">
            <div class="sub">-</div>
            <div class="count">1</div>
            <div class="add">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart {
  background-color: #f6f6f6;
}
.item {
  height: 42.8vw;
  background-color: #fff;
  display: flex;
  margin-top: 4.13vw;
  align-items: center;
  .checkbox {
    width: 4.8vw;
    height: 4.8vw;
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--px) solid #e3e3e3;
    margin-left: 5.33vw;
    background-color: #f6f6f6;
    flex-shrink: 0;
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #fff;
    }
  }
  .cover {
    width: 26.67vw;
    height: 26.67vw;
    margin-left: 4vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1vw;
    flex-shrink: 0;
  }
  .right {
    margin-left: 2.67vw;
    margin-right: 4vw;
    flex-grow: 1;
    .title {
      font-size: 4vw;
      line-height: 5.4vw;
    }
    .subitem-title {
      width: max-content;
      height: 5.33vw;
      border-radius: 2.83vw;
      display: flex;
      align-items: center;
      padding: 0 1.6vw;
      margin-top: 2.07vw;
      background-color: #f5f5f5;
      font-size: 3.2vw;
      &::after {
        content: "";
        display: block;
        width: 1.6vw;
        height: 0.93vw;
        margin-left: 1.2vw;
        background-image: url("~@/assets/Index/Cart/down.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .price {
      margin-top: 3.87vw;
      color: #f84e4e;
      .monetary-unit {
        font-size: 2.4vw;
        font-weight: bold;
      }
      .int {
        font-size: 4vw;
        font-weight: bolder;
      }
      .float {
        font-size: 2.4vw;
        font-weight: bold;
      }
    }
    .count-wrapper {
      display: flex;
      height: 5.33vw;
      margin-top: 3.07vw;
      margin-left: auto;
      .sub,
      .add {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 2.53vw * 2 + 2vw;
        font-weight: bold;
        &.disabled {
          background-color: #f1f1f1;
        }
      }
      .count {
        height: 100%;
        background-color: #f7f5f6;
        width: 10.67vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
