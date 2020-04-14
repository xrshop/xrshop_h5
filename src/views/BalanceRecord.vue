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
    onPulling(y) {
      console.log('onPulling', y);
    },
    onPulled(y) {
      console.log('onPulled', y);
    },
    onTopPulled(y) {
      console.log('onTopPulled', y);
    },
    onBottomPulled(y) {
      console.log('onBottomPulled', y);
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  height: 10vw;
}
</style>
