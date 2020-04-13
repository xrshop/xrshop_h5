<template>
  <div class="balance-recode">
    <TitleBar title="消费记录" canBack />
    <!-- <div class="over-wrapper">
      <div class="move-wrapper">
        <div class="top-text">下拉刷新</div>
        <div class="scroll-wrapper view-scroll" @scroll="onScrollWrapperScroll">
          <div class="cell" v-for="key of 100" :key="key">test</div>
        </div>
        <div class="bottom-text">加载更多</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    // onScrollWrapperScroll(e) {
    //   // eslint-disable-next-line no-console
    //   console.log(e);
    // },
  },
};
</script>

<style lang="scss" scoped>
.balance-recode {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
// .over-wrapper {
//   flex-grow: 1;
//   height: calc(100% - var(--title-bar-height));
//   overflow: hidden;
// }
// .move-wrapper {
//   height: 100%;
// }
// .top-text {
//   height: 5vw;
//   background-color: #f00;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   margin-top: -5vw;
// }
// .bottom-text {
//   height: 5vw;
//   background-color: #44f;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   margin-bottom: -5vw;
// }
// .scroll-wrapper {
//   height: 100%;
//   background-color: #44f;
// }
// .cell {
//   height: 10vw;
// }
</style>
