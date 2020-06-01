<template>
  <div class="menu-vegetable">
    <TitleBar title="新鲜水果" canBack />
    <div class="banner"></div>
    <div class="box">
      <div class="cell" v-for="item in items" :key="item.id">
        <div class="cover" :style="{'background-image': `url(${item.img})`}"></div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="label">
            <div class="item">{{item.label}}</div>
          </div>
          <div class="money"><Price :value="item.money" /></div>
        </div>
        <div class="button">立即抢购</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 1, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 2, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 3, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-vegetable {
  background-color: #F6F6F6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #FCC400;
  .left svg path {
    fill: #fff;
  }
  .center {
    color: #fff;
  }
}
.banner {
  width: 100vw;
  height: 53.87vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  background-image: url('~@/assets/MenuView/tu.png');
}
.box {
  width: 92vw;
  margin: 0.93vw auto 0;
  .cell {
    background-color: #fff;
    border-radius: 2vw;
    margin-bottom: 2.67vw;
    padding: 4vw 0;
    display: flex;
    position: relative;
    .cover {
      width: 26.67vw;
      height: 26.67vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-left: 2.53vw;
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-left: 2.8vw;
      position: relative;
      .title {
        margin-top: 1.33vw;
        font-size: 3.73vw;
        font-weight: bold;
      }
      .label {
        margin-top: 2.53vw;
        .item {
          padding: 0.8vw 1.2vw;
          color: #FF5058;
          font-size: 2.67vw;
          border-radius: 0.8vw;
          border-color: #FFAAAE;
          border-style: solid;
          border-width: var(--px);
        }
      }
      .money {
        position: absolute;
        bottom: 1.2vw;
      }
    }
    .button {
      width: 22.53vw;
      height: 8.53vw;
      line-height: 8.53vw;
      text-align: center;
      background-color: #FCC400;
      border-radius: 4.27vw;
      color: #ffffff;
      position: absolute;
      bottom: 8.93vw;
      right: 2.67vw;
      font-size: 3.73vw;
    }
  }
}
</style>
