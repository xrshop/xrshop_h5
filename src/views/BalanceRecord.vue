<template>
  <div class="balance-recode">
    <TitleBar title="消费记录" canBack />
    <!-- <PullToRefresh
      @pulling="onPulling"
      @pulled="onPulled"
      @topPulled="onTopPulled"
      @bottomPulled="onBottomPulled"
    >
      <div class="cell" v-for="key of 100" :key="key">test</div>
    </PullToRefresh>-->
    <div class="cell" v-for="(cell, index) of recode" :key="index">
      <div class="title">{{ cell.title }}</div>
      <div class="time">{{ cell.time }}</div>
      <div
        class="money"
        :class="{ green: cell.money > 0 }"
      >{{ cell.money > 0 ? "+" : "-" }}{{ cell.money | abs }}</div>
    </div>
    <div class="bottom-text">已加载全部</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recode: [
        {
          title: '佣金结算',
          time: '2020-03-12 12:30:56',
          money: 2,
        },
        {
          title: '叽里呱啦 基里瓜',
          time: '2020-03-12 12:30:56',
          money: -43.63,
        },
      ],
    };
  },
  methods: {
    // onPulling(newY, oldY) {
    //   console.log('onPulling', newY, oldY);
    // },
    // onPulled(newY, oldY) {
    //   console.log('onPulled', newY, oldY);
    // },
    // onTopPulled(newY, oldY) {
    //   console.log('onTopPulled', newY, oldY);
    // },
    // onBottomPulled(newY, oldY) {
    //   console.log('onBottomPulled', newY, oldY);
    // },
  },
  filters: {
    abs(value) {
      return Math.abs(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  box-shadow: 0 0 1vw 0 rgba(0, 0, 0, 0.08);
}
.cell {
  height: 19.83vw;
  position: relative;
  &::after {
    content: "";
    height: var(--px);
    width: 90vw;
    left: 5vw;
    bottom: 0;
    position: absolute;
    background-color: #eee;
  }
}
.title {
  position: absolute;
  left: 5.2vw;
  top: 5.33vw;
  font-size: 4vw;
}
.time {
  position: absolute;
  left: 5.2vw;
  top: 11.73vw;
  font-size: 2.67vw;
  color: #bbb;
}
.money {
  font-size: 4vw;
  color: #f84e4e;
  position: absolute;
  top: 8.13vw;
  right: 5.47vw;
  &.green {
    color: #8ace41;
  }
}
.bottom-text {
  margin: 6.93vw;
  color: #bbb;
  font-size: 3.2vw;
  text-align: center;
}
</style>
