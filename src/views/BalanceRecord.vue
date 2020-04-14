<template>
  <div class="balance-recode">
    <TitleBar title="消费记录" canBack />
    <PullToRefresh
      @pulling="onPulling"
      @pulled="onPulled"
      @topPulled="onTopPulled"
      @bottomPulled="onBottomPulled"
    >
      <div class="cell" v-for="key of 100" :key="key">test</div>
    </PullToRefresh>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onPulling(newY, oldY) {
      console.log('onPulling', newY, oldY);
    },
    onPulled(newY, oldY) {
      console.log('onPulled', newY, oldY);
    },
    onTopPulled(newY, oldY) {
      console.log('onTopPulled', newY, oldY);
    },
    onBottomPulled(newY, oldY) {
      console.log('onBottomPulled', newY, oldY);
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  height: 10vw;
}
</style>
