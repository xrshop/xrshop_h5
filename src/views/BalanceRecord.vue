<template>
  <div class="balance-recode">
    <TitleBar title="消费记录" canBack />
    <PullToRefresh>
      <div class="cell" v-for="key of 100" :key="key">test</div>
    </PullToRefresh>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.cell {
  height: 10vw;
}
</style>
