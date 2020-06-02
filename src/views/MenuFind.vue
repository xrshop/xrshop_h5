<template>
  <div class="menu-find">
    <TitleBar title="发现好物" canBack />
    <div class="bg-block"></div>
    <div class="ranking">
      <div class="cell" v-for="index in 3" :key="index">
        <img :src="require(`@/assets/MenuView/top${index}.png`)" alt class="icon" />
        <div
          class="cover"
          :style="{
            'background-image': `url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591093731611&di=e26d980aa240a8002348f9157fd9362a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F385713fdd8b8eeb9500ab2637b82709a266b1da83880d-DxwDUj_fw658)`
          }"
        ></div>
        <div class="money">￥178</div>
        <div class="text">120人购买</div>
      </div>
    </div>
    <div class="card">
      <div class="head">甄选好物</div>
      <div class="card-content">
        <div
        class="cell"
        v-for="item in goodList"
        :key="item.id"
        >
          <div class="cover" :style="{'background-image': `url(${item.img})`}"></div>
          <div class="title">{{item.title}}</div>
          <div class="describe">{{item.describe}}</div>
        </div>
      </div>
    </div>
    <MenuList :list="item" bgColor="#FF5058" />
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  data() {
    return {
      item: [
        {
          id: 0,
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg',
          title: '牛油果',
          label: '满100减10元',
          money: 178,
        },
        {
          id: 1,
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg',
          title: '牛油果',
          label: '满100减10元',
          money: 178,
        },
        {
          id: 2,
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg',
          title: '牛油果',
          label: '满100减10元',
          money: 178,
        },
        {
          id: 3,
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg',
          title: '牛油果',
          label: '满100减10元',
          money: 178,
        },
      ],
      goodList: [
        {
          id: 0,
          title: '什锦曲奇饼干',
          describe: '美味又实惠',
          img:
            'http://5b0988e595225.cdn.sohucs.com/images/20171212/35bfcee8ae464735bd42492b741d9dd4.jpeg',
        },
        {
          id: 1,
          title: '特色肉松饼',
          describe: '休闲小吃',
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1164147668,1312210658&fm=26&gp=0.jpg',
        },
        {
          id: 2,
          title: '红糖糯米糍粑',
          describe: '小时候的味道',
          img:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1965856844,768770&fm=26&gp=0.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-find {
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
.bg-block {
  position: absolute;
  height: 36.33vw;
  width: 100%;
  top: 0;
  background-color: #ff5058;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -3vw;
    height: 6vw;
    width: 100%;
    background-color: #ff5058;
    border-radius: 0 0 50% 50%;
  }
}
.ranking {
  position: relative;
  padding: 5.07vw 4vw;
  display: flex;
  justify-content: space-between;
  .cell {
    background-color: #fff;
    width: 28.8vw;
    height: 28.8vw;
    position: relative;
    border-radius: 1.33vw;
    .icon {
      width: 6.27vw;
      height: 8.27vw;
      display: block;
      position: absolute;
      left: -0.3vw;
      top: -0.3vw;
    }
    .cover {
      width: 16.8vw;
      height: 15.6vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin: 2.67vw auto 0;
    }
    .money {
      margin-top: 3.6vw;
      font-size: 3.2vw;
      font-weight: bold;
      text-align: center;
    }
    .text {
      margin-top: 0.4vw;
      color: #ff450b;
      font-size: 2.67vw;
      text-align: center;
    }
  }
}
.card {
  margin: 0 4vw;
  background-color: #ffffff;
  border-radius: 1.33vw;
  .head {
    width: 100%;
    height: 17.2vw;
    background-image: url('~@/assets/MenuView/bg1.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 4vw;
    padding-left: 2.67vw;
    box-sizing: border-box;
    font-size: 4vw;
    font-weight: bold;
    color: #FF5058;
  }
  .card-content {
    margin-top: -3.73vw;
    display: flex;
    padding: 0 2.67vw 4.13vw;
    .cell {
      margin-right: 1.33vw;
      flex: 1;
      background-color: #fff;
      text-align: center;
      &:last-of-type {
        margin-right: 0;
      }
      .cover {
        margin: 2.67vw auto 0;
        width: 22.67vw;
        height: 22.67vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      .title {
        margin-top: 1.33vw;
        font-size: 3.2vw;
      }
      .describe {
        color: #bbb;
        font-size: 2.67vw;
        margin-top: 1.2vw;
      }
    }
  }
}
.menu-list {
  margin-top: 2.67vw;
}
</style>
