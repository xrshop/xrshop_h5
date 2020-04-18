<template>
  <div class="integral">
    <TitleBar title="我的积分" canBack />
    <div class="obvious">
      <div class="main">
        <div class="top">
          <div class="left">
            <div class="number">6879</div>
            <div class="text">购物赚积分</div>
          </div>
          <router-link to="/integral-details" class="right">积分明细 </router-link>
        </div>
        <div class="bottom">确认收货，积分<span>+2</span></div>
      </div>
    </div>
    <div class="shops">
      <div class="title">兑换商品</div>
      <div class="shop-list">
         <router-link to="/integral-goods" v-for="item in goods" :key="item.id" class="item">
            <div class="cover" :style="{ 'background-image': `url(${item.img})`}"></div>
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="money">￥{{ item.money | floatPad }}</div>
              <div class="point">{{ item.point }} <span>积分</span></div>
            </div>
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        {
          id: 0, title: '纯手工糯米糍糍粑手工 年糕湖南地道特产', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg', money: 55, point: 500,
        },
        {
          id: 1, title: '纯手工糯米糍糍粑手工 年糕湖南地道特产', img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1449381160,686885548&fm=26&gp=0.jpg', money: 55.2, point: 500,
        },
        {
          id: 2, title: '纯手工糯米糍糍粑手工 年糕湖南地道特产', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586513143929&di=87d98d9eb824cd881109dad46c3a4e7b&imgtype=0&src=http%3A%2F%2Fwww.csf.org.cn%2FAttachFile%2F2016%2F1010020506%2F0%2F636186221979348644.jpg', money: 55.03, point: 500,
        },
        {
          id: 3, title: '纯手工糯米糍糍粑手工 年糕湖南地道特产', img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1449381160,686885548&fm=26&gp=0.jpg', money: 55, point: 500,
        },
      ],
    };
  },
  filters: {
    floatPad(value) {
      const strArr = String(value).split('.');
      const float = strArr.length === 2 ? strArr[1].padEnd(2, '0') : '00';
      return `${strArr[0]}.${float}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.obvious {
  background-color: #FFF0F0;
  height: 57.6vw;
  border-radius: 0 0 2vw 2vw;
  padding: 9.87vw 0 8vw;
  box-sizing: border-box;
  position: relative;
  .main {
    background-color: #fff;
    position: relative;
    height: 100%;
    width: 89.6vw;
    border-radius: 2vw 2vw 0 0;
    margin: 0 auto;
    z-index: 1;
    padding: 0 4.8vw;
    box-sizing: border-box;
    .top {
      display: flex;
      justify-content: space-between;
      padding-top: 7.87vw;
      .left {
        margin-left: 3.07vw;
        .number {
          font-size:6.67vw;
          font-weight:800;
        }
        .text {
          margin-top: 4.4vw;
          font-size: 3.2vw;
        }
      }
      .right {
        height: 6.4vw;
        width: 16vw;
        background-color: #f5f5f5;
        font-size: 3.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3.2vw;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      margin-top: 5.2vw;
      background-color: #F5F5F5;
      height: 8vw;
      border-radius: 0.8vw;
      font-size:  3.2vw;
      box-sizing: border-box;
      padding: 0 2.67vw;
      span {
        color: #F84E4E;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 90vw;
    box-shadow: 0 0 2vw 2vw rgba(230, 78, 78, 0.1);
    left: 50%;
    bottom: 8vw;
    transform: translateX(-50%);
    z-index: 0;
  }
}
.shops {
  &>.title {
    padding: 8vw 0 5.2vw 2.67vw;
    font-weight: bold;
    font-size: 4.8vw;
  }
  .shop-list {
    padding: 0 2.67vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 46vw;
      height: 74.4vw;
      margin-bottom: 2.67vw;
      box-shadow: 0.2vw 0.2vw 1.2vw 0.8vw rgba(175,180,184,0.2);
      border-radius: 2vw;
      .cover {
        width: 46vw;
        height: 46vw;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 2vw 2vw 0 0;
      }
      .text {
        padding: 0 2.4vw;
        .title {
          margin-top: 3.28vw;
          font-size: 4vw;
          line-height: 5.2vw;
        }
        .money {
          margin-top: 1.93vw;
          text-decoration:line-through;
          color:rgba(187,187,187,1);
          font-size: 3.2vw;
        }
        .point {
          margin-top: 3.6vw;
          font-size: 4vw;
          font-weight:bold;
          span {
            font-size: 3.2vw;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
