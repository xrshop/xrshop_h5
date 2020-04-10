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
        <router-link to="/order-list" class="right-text">查看全部订单</router-link>
        <div class="more1"></div>
      </div>
      <div class="menu">
        <div class="cell">
          <img src="@/assets/Index/My/OrderMenu/1.png" alt class="icon" />
          <div class="text">待付款</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/OrderMenu/2.png" alt class="icon" />
          <div class="text">待发送</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/OrderMenu/3.png" alt class="icon" />
          <div class="text">待收货</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/OrderMenu/4.png" alt class="icon" />
          <div class="text">待评价</div>
        </div>
        <router-link class="cell" to="/post-sale">
          <img src="@/assets/Index/My/OrderMenu/5.png" alt class="icon" />
          <div class="text">售后退款</div>
        </router-link>
      </div>
    </div>
    <div class="card card-3">
      <div class="card-head">
        <div class="title">我的服务</div>
      </div>
      <div class="menu">
        <router-link class="cell" to="/balance">
          <img src="@/assets/Index/My/ServiceMenu/1.png" alt class="icon" />
          <div class="text">我的余额</div>
        </router-link>
        <router-link class="cell" to="/favorites">
          <img src="@/assets/Index/My/ServiceMenu/2.png" alt class="icon" />
          <div class="text">收藏商品</div>
        </router-link>
        <router-link class="cell" to="/coupon-list">
          <img src="@/assets/Index/My/ServiceMenu/3.png" alt class="icon" />
          <div class="text">优惠券</div>
        </router-link>
        <router-link class="cell" to="/address-management">
          <img src="@/assets/Index/My/ServiceMenu/4.png" alt class="icon" />
          <div class="text">地址管理</div>
        </router-link>
        <div class="cell">
          <img src="@/assets/Index/My/ServiceMenu/5.png" alt class="icon" />
          <div class="text">我的推广</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/ServiceMenu/6.png" alt class="icon" />
          <div class="text">我的积分</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/ServiceMenu/7.png" alt class="icon" />
          <div class="text">商户管理</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/My/ServiceMenu/8.png" alt class="icon" />
          <div class="text">砍价记录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  background-color: rgba($color: #f64c52, $alpha: 0.8);
  // backdrop-filter: none;
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
  .card-head {
    display: flex;
    align-items: center;
    height: 9.33vw;
    margin: 0 2.67vw;
    border-bottom: var(--px) solid #eee;
    .title {
      font-size: 3.2vw;
      color: #333;
      font-weight: bold;
    }
    .right-text {
      color: #bbb;
      font-size: 3.2vw;
      margin-left: auto;
      margin-right: 1.2vw;
    }
  }
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
    margin-bottom: 5.73vw;
    .cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 28.27vw;
      position: relative;
      .title {
        font-size: 3.2vw;
      }
      .text {
        margin-top: 3.73vw;
        font-size: 4vw;
        font-weight: bold;
        color: #f84e4e;
      }
    }
    .cell + .cell::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0.67vw;
      width: var(--px);
      height: 100%;
      background-color: #eee;
    }
  }
}
.card-2 {
  margin-top: 4vw;
  .menu {
    display: flex;
    .cell {
      width: 20%;
      height: 19.2vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 8vw;
        height: 8vw;
        display: block;
        background-color: #ddfbfe;
        border: var(--px) dashed #638baa;
      }
      .text {
        margin-top: 1.6vw;
        font-size: 2.67vw;
      }
    }
  }
}
.card-3 {
  margin-top: 6.67vw;
  margin-bottom: 6.67vw;
  .menu {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2.4vw - 3.73vw * 0.5;
    padding-bottom: 5.33vw - 3.73vw * 0.5;
    .cell {
      width: 25%;
      height: 16.4vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 10.93vw;
        height: 10.93vw;
        display: block;
      }
      .text {
        margin-top: -0.8vw;
        font-size: 2.67vw;
      }
    }
  }
}
</style>
