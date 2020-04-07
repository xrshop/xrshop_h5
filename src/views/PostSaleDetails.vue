<template>
  <div class="post-sale-details">
    <TitleBar title="退款详情" canBack />
    <div class="progress card">
      <div class="cell row">
        <div class="icon"></div>
        <div class="right column">
          <div class="title">退款成功</div>
          <div class="time">2020-03-09 12:51:00</div>
        </div>
      </div>
    </div>
    <div class="details card">
      <div class="card-title">退款明细</div>
      <div class="money">
        退款金额：
        <span class="red">￥250.00</span>
      </div>
    </div>
    <div class="info card">
      <div class="card-title">退款信息</div>
      <div class="row-a row">
        <div
          class="cover"
          :style="{'background-image':'url(https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg)'}"
        ></div>
        <div class="right column">
          <div class="item-title">纯手工糯米糍糍粑手工年糕湖南地道特产</div>
          <div class="subitem-title">白糯米糍粑250g *5袋</div>
        </div>
      </div>
      <div class="text">退款原因：其他</div>
      <div class="text">退款金额：￥250.00</div>
      <div class="text">申请时间：2020-10-15 15:30</div>
      <div class="text">退款编号：5a155ads2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-sale-details {
  background-color: #f7f5f6;
}
.title-bar {
  background-color: #f7f5f6;
}
.card {
  background-color: #fff;
  border-radius: 2vw;
  margin-bottom: 2.67vw;
  display: flex;
  flex-direction: column;
  padding: 0 5.2vw;
  .card-title {
    margin-top: 4.2vw;
    font-size: 3.73vw;
  }
}
.progress {
  border-radius: 0 0 2vw 2vw;
  overflow-x: scroll;
  .cell {
    height: 26.67vw;
    align-items: center;
  }
  .icon {
    width: 7.2vw;
    height: 6.27vw;
    background-image: url("~@/assets/more/pass.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 4.27vw - 5.2vw;
  }
  .right {
    margin-left: 2vw;
  }
  .title {
    font-size: 3.73vw;
  }
  .time {
    margin-top: 2.67vw;
    font-size: 2.67vw;
    color: #bbb;
  }
}
.details {
  height: 19.6vw;
  .money {
    margin-top: 3.73vw;
    // margin-bottom: 5.07vw;
    font-size: 3.2vw;
    .red {
      color: #ef2424;
    }
  }
}
.info {
  .row-a {
    margin-top: 5.33vw;
  }
  .cover {
    width: 18.67vw;
    height: 18.67vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .right {
    margin-left: 2.67vw;
  }
  .item-title {
    font-size: 3.73vw;
    line-height: 5.2vw;
  }
  .subitem-title {
    margin-top: 4vw - (5.2vw - 3.73vw) * 0.5;
    font-size: 3.2vw;
    background-color: #f5f5f5;
    height: 5.33vw;
    border-radius: 5.33vw * 0.5;
    padding: 0 1.6vw;
    display: flex;
    align-items: center;
    width: max-content;
  }
  .text {
    margin-top: 4.93vw;
    font-size: 3.2vw;
    color: #bbb;
    &:first-of-type{
      margin-top: 3.87vw;
    }
    &:last-of-type{
      margin-bottom: 4vw;
    }
  }
}
</style>
