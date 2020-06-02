<template>
  <div class="menu-ticket">
    <TitleBar title="领券中心" canBack />
    <div class="tab-box">
      <div
        class="cell"
        v-for="item in tabList"
        :key="item.id"
        :class="{active: item.id == active}"
        @click="active = item.id"
      >{{item.title}}</div>
    </div>
    <div class="list-box">
      <div class="row" v-for="index in 5" :key="index">
        <div class="left">
          <div class="title">可购买指定商品</div>
          <div class="img-box">
            <img
              v-for="index in 3"
              :key="index"
              src="http://img0.imgtn.bdimg.com/it/u=2424719088,682976730&fm=26&gp=0.jpg"
              alt
            />
          </div>
        </div>
        <div class="right">
          <div class="money">
            <span>￥</span>15
          </div>
          <div class="term">满100可用</div>
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
      tabList: [
        { id: 0, title: '全部' },
        { id: 1, title: '食品' },
        { id: 2, title: '生鲜时蔬' },
        { id: 3, title: '茗茶' },
        { id: 4, title: '零食干货' },
        { id: 5, title: '特色特产' },
      ],
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
  .left svg path {
    fill: #fff;
  }
  .center {
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
    height: 32.93vw;
    margin-bottom: 2.67vw;
    .left {
      width: 64vw;
      flex-shrink: 0;
      flex-grow: 0;
      border-radius: 2vw;
      background-color: #fff;
      .title {
        padding: 3.87vw 0 4vw 3.2vw;
        font-size: 3.73vw;
        font-weight: bold;
      }
      .img-box {
        padding: 0 3.2vw;
        display: flex;
        justify-content: space-between;
        img {
          width: 17.33vw;
          height: 17.33vw;
        }
      }
    }
    .right {
      background: linear-gradient(
        149deg,
        rgba(255, 255, 255, 1),
        rgba(255, 244, 245, 1)
      );
      border-radius: 2vw;
      width: 28vw;
      text-align: center;
      .money {
        margin-top: 6.93vw;
        font-size: 5.33vw;
        font-weight: bold;
        color: #FF450B;
        span {
          font-size: 2.67vw;
        }
      }
      .term {
        color: #FF450B;
        margin-top: 2vw;
        font-size: 3.2vw;
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
