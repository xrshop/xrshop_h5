<template>
  <div class="menu-ticket">
    <TitleBar title="领券中心" canBack />
    <div class="list-box">
      <div class="row" v-for="index in 5" :key="index">
        <div class="left">
          <div class="radius">
            <span><s>￥</s>50</span>
            <p>满200元可用</p>
          </div>
        </div>
        <div class="center">
          <div class="title">商品购物优惠券</div>
          <div class="img-box">全场商品可用</div>
          <div class="img-box">2020.0301-2020.0309</div>
        </div>
        <div class="right">
          <div class="button">立即领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-ticket {
  background-color: #f6f6f6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #ff5058;
  .center svg path {
    fill: #fff;
  }
  .center{
    color: #fff;
  }
}
.tab-box {
  position: sticky;
  top: var(--title-bar-height);
  display: flex;
  height: 9.47vw;
  align-items: flex-end;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 5.47vw 2vw;
  font-size: 3.2vw;
  overflow: scroll;
  .cell {
    margin-right: 4.2vw;
    flex-shrink: 0;
    &.active {
      color: #f84e4e;
      font-size: 4vw;
      font-weight: bold;
      position: relative;
      &::before {
        content: "";
        width: 85%;
        height: 0.53vw;
        border-radius: 0.27vw;
        position: absolute;
        bottom: -2vw;
        background-color: #ff5058;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.list-box {
  margin: 2.67vw auto 0;
  width: 92vw;
  .row {
    margin-bottom: 2.67vw;
    .left{
      width: 30.4vw;
      padding: 2.8vw 0;
      height: 19.23vw;
      background-color: #fff;
    }
    .center {
      width: 33.6vw;
      padding: 2.8vw 0;
      height: 19.23vw;
      flex-shrink: 0;
      flex-grow: 0;
      background-color: #fff;
      border-top-right-radius: 2vw;
      border-bottom-right-radius: 2vw;
      .title {
        padding: 0vw 0 4vw 0vw;
        font-size: 3.73vw;
        text-align: center;
        font-weight: bold;
        color: #333333;
      }
      div{
        color: #BBBBBB;
        font-size: 2.67vw;
      }
    }
    .right {
        height: 19.23vw;
      background: linear-gradient(
        149deg,
        rgba(255, 255, 255, 1),
        rgba(255, 244, 245, 1)
      );
      border-radius: 2vw;
      width: 28vw;
      text-align: center;
          padding: 2.8vw 0;
      .money {
        margin-top: 6.93vw;
        font-size: 5.33vw;
        font-weight: bold;
        color: #FF450B;
        span {
          font-size: 2.67vw;
        }
      }
      .button {
        width: 22.53vw;
        line-height: 8vw;
        text-align: center;
        background-color: #FF450B;
        border-radius: 4vw;
        font-size: 3.73vw;
        color: #fff;
        margin: 4.8vw auto 0;
      }
    }
  }
}
</style>
