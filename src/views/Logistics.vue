<template>
  <div class="logistics">
    <TitleBar title="物流详情" canBack />
    <div class="info">
      <div class="left">
        <div class="item">物流公司:</div>
        <div class="item">物流单号:</div>
      </div>
      <div class="right">
        <div class="item">顺丰快递</div>
        <div class="item">785692669416</div>
      </div>
    </div>
    <div class="details">
      <div class="item-box">
        <div class="item active">
          <div class="status">已签收</div>
          <div class="title">您的订单已由本人签收，感谢您在耒小阳商城购物，欢迎 您再次光临。</div>
          <div class="time">2020-03-09 03:40:00</div>
        </div>
        <div class="item">
          <div class="title">[自提柜]您的快递已经存放在国贸新城B栋丰巢自提柜，请 及时取件。</div>
          <div class="time">2020-03-09 03:40:00</div>
        </div>
        <div class="item">
          <div class="title">[四川省]快件离开xx地方。 及时取件。 </div>
          <div class="time">2020-03-09 03:40:00</div>
        </div>
        <div class="item">
          <div class="title">包裹正在揽收</div>
          <div class="time">2020-03-09 03:40:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
.logistics {
  background-color: #F7F5F6;
  font-family:PingFang SC;
}
.info {
  font-size:3.73vw;
  color: #333333;
  border-radius: 0 0 2vw 2vw;
  background-color: #fff;
  padding: 6.8vw 5.2vw;
  height: 26.67vw;
  display: flex;
  box-sizing: border-box;
  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right {
    font-weight: bold;
    margin-left: 4.27vw;
  }
}
.details {
  background-color: #fff;
  border-radius: 2vw;
  margin-top: 2.67vw;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 7.6vw;
    top: 11%;
    display: block;
    height: 81%;
    width: var(--px);
    background-color: #ddd;
  }
  .item-box {
    padding: 7.73vw 5vw 6.8vw 0;
    .item {
      position: relative;
      margin-bottom: 7.87vw;
      padding-left: 14vw;
      color: #333333;
      &:last-of-type {
        margin-bottom: 2.93vw;
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 1.6vw;
        height: 1.6vw;
        background-color: #ddd;
        left: 6.8vw;
        top: 2vw;
        border-radius: 50%;
      }
      &.active::after {
        content: '';
        position: absolute;
        display: block;
        width: 7.2vw;
        height: 7.2vw;
        background-image: url('~@/assets/Logistics/g.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        left: 4vw;
        top: -0.67vw;
        border-radius: 50%;
      }
      .status {
        margin-bottom: 3.37vw;
        font-size: 3.73vw;
        font-weight: 800;
      }
      .title {
        font-size:3.2vw;
        line-height:4.27vw;
        margin-bottom: 2.4vw;
      }
      .time {
        font-size:2.67vw;
        color:rgba(187,187,187,1);
      }
    }
  }
}
</style>
