<template>
  <div class="integral-order">
    <TitleBar title="确认订单" canBack />
    <div class="site">
      <img src="@/assets/IntegralOrder/dz.png" alt="">
      <div class="text">
        <div class="top">
          <div class="name">{{ userInfo.name }}</div>
          <div class="tel">{{ userInfo.tel }}</div>
        </div>
        <div class="bottom">地址：{{ userInfo.site }}</div>
      </div>
    </div>
    <div class="product">
      <div class="cover" :style="{'background-image': `url(${productInfo.img})`}"></div>
      <div class="info">
        <div class="top">{{ productInfo.title }}</div>
        <div class="bottom">{{ productInfo.point }}<span>积分</span></div>
      </div>
      <div class="number">x{{ productInfo.number }}</div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="text">合计:</div>
        <div class="point">{{ productInfo.point }}<span>积分</span></div>
      </div>
      <div class="right">立即支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: { name: '小明', tel: 13445697854, site: '广东省深圳市福田区 梅乐新村164栋' },
      productInfo: {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
        title: '纯手工糯米糍糍粑手工年糕湖南 地道特产',
        number: 5,
        point: 1220,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.integral-order {
  background-color: #F7F5F6;
}
.site {
  height: 26.67vw;
  background: #fff;
  border-radius: 0 0 2vw 2vw;
  position: relative;
  padding-bottom: 1.6vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &>img {
    width: 4.27vw;
    height: 4.27vw;
    margin-left: 10.4vw;
  }
  &::before {
    content: '';
    display: block;
    width: 1.07vw;
    height: 1.87vw;
    background-image: url('~@/assets/IntegralOrder/arrow.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: absolute;
    right: 14.67vw;
  }
  .text {
    margin-left: 3.47vw;
    .top {
      display: flex;
      .name {
        font-size: 4VW;
        margin-right: 2.93vw;
      }
      .tel {
        font-size: 3.73vw;
      }
    }
    .bottom {
      font-size: 2.67vw;
      margin-top: 2.4vw;
      color: #bbb;
    }
  }
}
.product {
  margin-top: 2.67vw;
  border-radius: 2vw;
  background-color: #fff;
  padding: 4vw 5.2vw;
  display: flex;
  position: relative;
  .cover {
    border-radius: 0.8vw;
    flex-shrink: 0;
    width: 26.67vw;
    height: 26.67vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .info {
    margin-left: 2.67vw;
    max-width: 45vw;
    .top {
      font-size: 3.2vw;
      line-height: 5.2vw;
    }
    .bottom {
      font-size: 3.73vw;
      margin-top: 4.6vw;
      span {
        font-size: 2.4vw;
      }
    }
  }
  .number {
    position: absolute;
    bottom: 10.8vw;
    right: 5.6vw;
    font-size: 3.2vw;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  height: 13.07vw;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 2px 1px rgba(235,235,235,0.76);
  .left {
    margin-left: 5.07vw;
    display: flex;
    align-items: center;
    .text {
      font-size: 3.2vw;
      margin-right: 2vw;
    }
    .point {
      font-size: 4.8vw;
      color: #F84E4E;
      font-weight: bold;
      span {
        font-size: 3.2vw;
        font-weight: 500;
      }
    }
  }
  .right {
    width: 37.33vw;
    background: #F84E4E;
    font-size: 4vw;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
