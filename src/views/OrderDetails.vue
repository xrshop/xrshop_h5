<template>
  <div class="order-details">
    <TitleBar title="订单详情" canBack/>
    <div class="region arrow">
      <img src="@/assets/Order/wl.png" alt="">
      <div>
        <h4>已签收, 您的快递已经由自提柜签收。感谢您的使用。</h4>
        <p>2020-03-09  12:51:00</p>
      </div>
    </div>
    <div class="region">
      <img src="@/assets/Order/dz.png" alt="">
      <div>
        <h4><span>小明</span>13445697854</h4>
        <p>地址：广东省深圳市福田区 梅乐新村164栋</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.order-details {
  background-color: #F7F4F8;
}
.region {
  width:100vw;
  height:26.67vw;
  background:rgba(255,255,255,1);
  border-radius:0vw 0vw 2vw 2vw;
  margin-bottom: 2.67vw;
  display: flex;
  align-items: center;
  position: relative;
  * {
    margin: 0;
  }
  img {
    width: 4.27vw;
    height: 4.27vw;
    margin-left: 10.27vw;
  }
  & > div {
    width: 62vw;
    margin-left: 3.6vw;
    font-family: PingFang SC;
    font-weight: 500;
    h4 {
      font-size:3.73vw;
      color:rgba(51,51,51,1);
      line-height:4.67vw;
      font-weight: 500;
      span {
        font-size: 4vw;
        margin-right: 2.9vw;
      }
    }
    p {
      font-size: 2.67vw;
      color: rgba(187,187,187,1);
      margin-top: 2.4vw;
    }
  }
  &.arrow::after {
    content: '>';
    position: absolute;
    top: 9.47vw;
    right: 14.67vw;
  }
}
.region + .region {
   border-radius:2vw 2vw 2vw 2vw;
}
</style>
