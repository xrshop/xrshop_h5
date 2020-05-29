<template>
  <div class="my">
    <div class="head">
      <router-link to="/setting" class="setting">
        <img src="@/assets/Index/My/setting.png" alt="" />
      </router-link>
      <div class="row">
        <img
          class="avatar"
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1101389292,2805696108&fm=26&gp=0.jpg"
          alt
        />
        <div class="right">
          <div class="nickname">吃葡萄不吐葡萄皮</div>
          <router-link to="/bind-phone" class="phone">绑定手机</router-link>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="text">0</div>
          <div class="title">余额</div>
        </div>
        <div class="cell">
          <div class="text">0</div>
          <div class="title">当前佣金</div>
        </div>
        <div class="cell">
          <div class="text">0</div>
          <div class="title">优惠券</div>
        </div>
      </div>
      <div class="row streamer">
        <img src="@/assets/Index/MyB/xw.png" alt="" class="icon">
        <div class="text">湖南星然科技旗下电商平台</div>
        <div class="button">去看看＞</div>
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
          <img src="@/assets/Index/MyB/OrderMenu/1.png" alt class="icon" />
          <div class="text">待付款</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/MyB/OrderMenu/2.png" alt class="icon" />
          <div class="text">待发货</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/MyB/OrderMenu/3.png" alt class="icon" />
          <div class="text">待收货</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/MyB/OrderMenu/4.png" alt class="icon" />
          <div class="text">待评价</div>
        </div>
        <router-link class="cell" to="/post-sale">
          <img src="@/assets/Index/MyB/OrderMenu/5.png" alt class="icon" />
          <div class="text">售后退款</div>
        </router-link>
      </div>
    </div>
    <div class="card card-3">
      <div class="menu">
        <router-link class="cell" to="/balance">
          <img src="@/assets/Index/MyB/ServiceMenu/1.png" alt class="icon" />
          <div class="text">我的余额</div>
        </router-link>
        <router-link class="cell" to="/favorites">
          <img src="@/assets/Index/MyB/ServiceMenu/2.png" alt class="icon" />
          <div class="text">收藏商品</div>
        </router-link>
        <router-link class="cell" to="/coupon-list">
          <img src="@/assets/Index/MyB/ServiceMenu/3.png" alt class="icon" />
          <div class="text">优惠券</div>
        </router-link>
        <router-link class="cell" to="/address-management">
          <img src="@/assets/Index/MyB/ServiceMenu/4.png" alt class="icon" />
          <div class="text">地址管理</div>
        </router-link>
        <router-link class="cell" to="/generalize">
          <img src="@/assets/Index/MyB/ServiceMenu/5.png" alt class="icon" />
          <div class="text">我的推广</div>
        </router-link>
        <router-link class="cell" to="/integral">
          <img src="@/assets/Index/MyB/ServiceMenu/6.png" alt class="icon" />
          <div class="text">我的积分</div>
        </router-link>
        <div class="cell">
          <img src="@/assets/Index/MyB/ServiceMenu/7.png" alt class="icon" />
          <div class="text">商户管理</div>
        </div>
        <div class="cell">
          <img src="@/assets/Index/MyB/ServiceMenu/8.png" alt class="icon" />
          <div class="text">砍价记录</div>
        </div>
      </div>
    </div>
    <div class="card card4">
      <div class="title">优惠动态</div>
      <div class="box">
        <div class="cell" v-for="index in 6" :key="index">
          <div class="cover" :style="{'background-image': `url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1314844998,2187906168&fm=26&gp=0.jpg)`}"></div>
          <div class="bottom">
            <div class="text">125人购买</div>
            <Price :value="178" />
          </div>
          <div class="label">买一送一</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="title">为你推荐</div>
      <div class="box">
        <div class="cell" v-for="index in 6" :key="index">
          <div class="cover" :style="{'background-image': 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590755604371&di=8e3436d3528c48053a8ebdf04db84224&imgtype=0&src=http%3A%2F%2Fi05.c.aliimg.com%2Fimg%2Fibank%2F2015%2F827%2F972%2F2287279728_1393199764.jpg)'}"></div>
          <div class="text">西红柿樱桃小番茄水果 荷兰瓜柿子蔬菜</div>
          <div class="bottom">
            <div class="left"><Price :value="178" /></div>
            <div class="right">123人已买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my {
  background-color: #f5f5f5;
}
.card {
  background-color: #fff;
  margin: 0 auto;
  border-radius: 2vw;
  overflow: hidden;
  margin-top: 2.67vw;
  width: 92vw;
}
.head {
  background-image: url("~@/assets/Index/MyB/bj.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding-top: 9.33vw - 3.83vw;
  position: relative;
  .setting {
    width: 4.53vw;
    height: 4.8vw;
    position: absolute;
    top: 4vw;
    right: 6.53vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .avatar {
    width: 11.73vw;
    height: 11.73vw;
    border-radius: 50%;
    margin: 0 2.53vw 0 4.93vw;
  }
  .right {
    margin-left: 3.07vw - 2.53vw;
    flex-grow: 1;
  }
  .nickname {
    margin-top: 2.4vw;
    font-size: 4vw;
    color: #fff;
  }
  .phone {
    margin-top: 2.53vw;
    width: max-content;
    height: 5.33vw;
    border-radius: 2.2vw;
    padding: 0 2.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2vw;
    color: #BBBBBB;
    background-color: #ffffff;
  }
  .row {
    justify-content: center;
    margin-top: 3.83vw;
    .cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 11.73vw;
      position: relative;
      color: #fff;
      justify-items: center;
      flex-shrink: 0;
      .title {
        font-size: 3.2vw;
        margin-top: 2.13vw;
      }
      .text {
        font-size: 4vw;
        font-weight: bold;
      }
    }
    .cell + .cell::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 2.67vw;
      width: var(--px);
      height: 4vw;
      background-color: #eee;
    }
    &.streamer {
      width: 92vw;
      height: 10.67vw;
      background-color: #333;
      margin: 3.87vw auto 0;
      border-radius: 2vw 2vw 0 0;
      align-items: center;
      justify-content: flex-start;
      .icon {
        width: 16.4vw;
        height: 3.87vw;
        margin-left: 3.73vw;
      }
      .text {
        color: #EFD2A7;
        font-size: 3.47vw;
        margin-left: 3.47vw;
      }
      .button {
        width: 16.67vw;
        line-height: 6.4vw;
        background: linear-gradient(-90deg,rgba(241,215,180,1),rgba(254,237,213,1));
        border-radius: 3.2vw;
        text-align: center;
        font-size: 3.2vw;
        margin-left: 5.07vw;
      }
    }
  }
}
.card-2 {
  .card-head {
    display: flex;
    align-items: center;
    height: 11.6vw;
    margin: 0 2.67vw;
    border-bottom: var(--px) solid #eee;
    .title {
      font-size: 4vw;
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
  .menu {
    display: flex;
    .cell {
      width: 20%;
      height: 22.67vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 8vw;
        height: 8vw;
        display: block;
        // background-color: #ddfbfe;
        // border: var(--px) dashed #638baa;
      }
      .text {
        margin-top: 2.53vw;
        font-size: 2.67vw;
      }
    }
  }
}
.card-3 {
  .menu {
    display: flex;
    flex-wrap: wrap;
    .cell {
      width: 25%;
      height: 21.34vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 8vw;
        height: 8vw;
        display: block;
      }
      .text {
        margin-top: 2.53vw;
        font-size: 2.67vw;
      }
    }
  }
}
.card4 {
  padding: 1.07vw 0 5.6vw;
  .title {
    line-height: 9.73vw;
    font-size: 4vw;
    font-weight: bold;
    margin-left: 2.8vw;
  }
  .box {
    margin: 0 2.67vw;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    .cell {
      background-color: #f6f6f6;
      height: 32.67vw;
      width: 23.2vw;
      margin-right: 2.33vw;
      flex-shrink: 0;
      position: relative;
      .cover {
        width: 23.2vw;
        height: 23.2vw;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      .bottom {
        background-image: url('~@/assets/Index/MyB/gwc.png');
        background-repeat: no-repeat;
        background-size: 4.8vw 4.8vw;
        background-position: 16.93vw 2vw;
        .text {
          margin-top: 1.87vw;
          margin-left: 1.33vw;
          color: #FF450B;
          font-size: 2.67vw;
        }
      }
      .label {
        position: absolute;
        top: 17.07vw;
        left: 0;
        width: 12.53vw;
        line-height: 3.73vw;
        background: rgba(51,51,51,1);
        border-radius: 0vw 2vw 2vw 0vw;
        opacity: 0.7;
        font-size: 2.67vw;
        color: #fff;
        padding-left: 1.33vw;
      }
    }
  }
}
.recommend {
  padding-bottom: 8.2vw;
  .title {
    line-height: 11.2vw;
    text-align: center;
    font-size: 4vw;
    font-weight: bold;
    margin-bottom: 0.4vw;
  }
  .box {
    padding: 0 4vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cell {
      width: 44.67vw;
      background-color: #fff;
      border-radius: 1.33vw;
      margin-bottom: 2.67vw;
      .cover {
        width: 44.67vw;
        height: 44.67vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 1.33vw 1.33vw 0 0;
      }
      .text {
        font-size: 3.73vw;
        line-height: 4.53vw;
        padding: 0 2.67vw;
        margin-top: 1.47vw;
      }
      .bottom {
        margin-top: 2vw;
        margin-bottom: 4.27vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2.67vw 0 3.47vw;
        .right {
          font-size: 2.67vw;
          color: #bbbbbb;
        }
      }
    }
  }
}
</style>
