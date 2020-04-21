<template>
  <div class="post-sale-refund">
    <TitleBar title="申请退款" canBack />
     <div class="product">
      <div class="cover" :style="{ 'background-image': `url(${product.img})`}"></div>
      <div class="info">
        <div class="title">{{ product.title }}</div>
        <div class="count">{{ product.name }} *{{ product.number }}{{ product.unit }}</div>
      </div>
    </div>
    <div class="info">
      <div class="item select">
        <div class="left">货物状态</div>
        <div class="right">请选择</div>
      </div>
      <div class="item select">
        <div class="left">退款原因</div>
        <div class="right">请选择</div>
      </div>
      <div class="item">
        <div class="left">
          <div class="text">退款金额:</div>
          <div class="money"><Price :value="product.money" /></div>
        </div>
      </div>
    </div>
    <div class="upload">
      <div class="title">上传凭证</div>
      <div class="img-box">
        <div class="img-but"></div>
      </div>
    </div>
    <div class="submit-but">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
        name: '白糯米糍粑250g',
        money: 88.4,
        number: 5,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585650459489&di=fe8e9b52eb9bafff24c23f03dd27ec25&imgtype=0&src=http%3A%2F%2Ff1.meishipu.com%2Fupload%2F11%2Fnd8upkfxkxx9l0khfrsali5tl0pwns51179074_1.jpg',
        unit: '袋',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.post-sale-refund {
  background-color: #f7f5f6;
  font-family: PingFang SC;
  >div {
    border-radius: 2vw;
    background-color: #fff;
  }
}
.title-bar::v-deep .main{
  background-color: rgba(235, 235, 235, 0.8);
}
.product {
  padding: 4vw 5.2vw;
  display: flex;
  .cover {
    margin-right: 2.67vw;
    width: 18.67vw;
    height: 18.67vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.8vw;
    flex-shrink: 0;
  }
  .info {
    color: rgba(51,51,51,1);
    .title {
      font-size: 3.73vw;
      line-height: 5.2vw;
    }
    .count {
      display: inline-block;
      padding: 1vw 1.6vw;
      margin-top: 3.26vw;
      font-size: 3.2vw;
      background-color: #f5f5f5;
      border-radius: 2.67vw;
    }
  }
}
.info {
  margin-top: 2.67vw;
  padding: 0 5.2vw 1.2vw;
  .item {
    height: 10.94vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.73vw;
    position: relative;
    &:first-of-type {
      height: 13.33vw;
      border-bottom: solid #eee var(--px);
    }
    &.select::after {
      content: ' ';
      position: absolute;
      display: block;
      width: 1.03vw;
      height: 1.63vw;
      background: url('~@/assets/PostSaleRefund/ic.png') no-repeat;
      background-size: cover;
      background-position: center center;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .left {
      display: flex;
      align-items: center;
      color: rgba(51,51,51,1);
      .money{
        margin-left: 3.87vw;
        &::v-deep .price *{
          font-size: 3.2vw;
          font-weight: 400;
        }
      }
    }
    .right {
      color: rgba(187,187,187,1);
      margin-right: 3.6vw;
    }
  }
}
.upload {
  margin-top: 4vw;
  .title {
    padding: 4vw 5vw;
    font-size:3.73vw;
    font-weight:500;
  }
  .img-box {
    padding: 2.26vw 5vw 7.6vw;
    display: flex;
    flex-wrap: wrap;
    >div {
      width: 20vw;
      height: 20vw;
      margin-right: 3vw;
      margin-bottom: 2vw;
    }
    >div:nth-of-type(4n) {
      margin-right: 0;
    }
    .img-but {
      background-color: #F5F5F5;
      background-image: url('~@/assets/PostSaleRefund/j.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 5.33vw 5.33vw;
    }
  }
}
.submit-but {
  background-color: #F84E4E !important;
  width: 89.47vw;
  height: 11.73vw;
  border-radius: 5.87vw !important;
  margin: 33.33vw auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: 500;
  color: #fff;
}
</style>
