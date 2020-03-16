<template>
  <div class="my">
    <TitleBar title="我的" />
    <div class="card card-1">
      <div class="row">
        <img
          class="avatar"
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1101389292,2805696108&fm=26&gp=0.jpg"
          alt
        />
        <div class="right">
          <div class="nickname">吃葡萄不吐葡萄皮</div>
          <div class="phone">绑定手机号</div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="title">我的余额</div>
          <div class="text">0</div>
        </div>
        <div class="cell">
          <div class="title">当前佣金</div>
          <div class="text">0</div>
        </div>
        <div class="cell">
          <div class="title">优惠券</div>
          <div class="text">0</div>
        </div>
      </div>
    </div>
    <div class="card card-2">
      <div class="card-head">
        <div class="title">我的订单</div>
        <div class="more">查看全部订单</div>
      </div>
      <div class="menu">
        <div class="cell">
          <div class="icon"></div>
          <div class="text">待付款</div>
        </div>
      </div>
    </div>
    <div class="card card-3">
      <div class="card-head">
        <div class="title">我的服务</div>
        <div class="more">查看全部订单</div>
      </div>
      <div class="menu">
        <div class="cell">
          <div class="icon"></div>
          <div class="text">我的余额</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  background-color: transparent;
  backdrop-filter: none;
  &::v-deep .center-text {
    color: #fff;
  }
}
.my {
  background-image: url("~@/assets/Index/My/bg.png");
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}
.card {
  width: 89.33vw;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 2vw;
  overflow: hidden;
}
.card-1 {
  margin-top: 4.68vw;
  .avatar {
    width: 12.8vw;
    height: 12.8vw;
    border-radius: 50%;
    margin: 3.87vw 2.53vw;
  }
  .right {
    margin-left: 3.07vw - 2.53vw;
    flex-grow: 1;
  }
  .nickname {
    margin-top: 3.87vw;
    font-size: 4vw;
  }
  .phone {
    margin-top: 2.93vw;
    width: max-content;
    height: 5.33vw;
    border-radius: 5.33vw * 0.5;
    padding: 0 2.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2vw;
    background-color: #f5f5f5;
  }
  .row {
    margin-top: 5.33vw - 3.87vw;
    justify-content: center;
    .cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 3.2vw;
      }
      .text {
        margin-top: 5.2vw;
        font-size: 4vw;
        font-weight: bold;
        color: #f84e4e;
      }
    }
  }
}
.card-2 {
  margin-top: 4vw;
}
.card-3 {
  margin-top: 6.67vw;
}
</style>
