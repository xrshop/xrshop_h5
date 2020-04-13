<template>
  <div class="balance">
    <TitleBar canBack title="我的余额" rightText="消费明细" />
    <div class="info row">
      <div class="cell column">
        <div class="title">账户余额（元）</div>
        <div class="value">
          <Price :value="4399.80" />
        </div>
      </div>
      <div class="cell column">
        <div class="title">当前佣金</div>
        <div class="value">
          <Price :value="544.80" />
        </div>
      </div>
      <div class="cell column">
        <div class="title">优惠券</div>
        <div class="value">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.title-bar {
  background-color: #f64c52;
  backdrop-filter: none;
  color: #fff;
  &::v-deep {
    svg path {
      fill: #fff;
    }
  }
}
.info {
  background-color: #f64c52;
  height: 54vw;
  color: #fff;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 0 2vw 2vw;
  .cell {
    align-items: center;
  }
  .title {
    font-size: 3.2vw;
  }
  .value {
    margin-top: 5.07vw;
    font-size: 5.33vw;
  }
  .price {
    color: #fff;
    &::v-deep {
      .int,
      .float {
        font-size: 5.33vw;
      }
    }
  }
}
</style>
