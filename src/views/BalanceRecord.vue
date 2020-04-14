<template>
  <div class="balance-recode">
    <TitleBar title="消费记录" canBack />
    <div class="over-wrapper">
      <div
        class="move-wrapper"
        @touchstart="onMoveWrapperTouchStart"
        @touchmove="onMoveWrapperTouchMove"
        @touchend="onMoveWrapperTouchEnd"
        ref="moveWrapper"
      >
        <div class="top-text">下拉刷新</div>
        <div class="scroll-wrapper view-scroll" @scroll="onScrollWrapperScroll" ref="scrollWrapper">
          <div class="cell" v-for="key of 100" :key="key">test</div>
        </div>
        <div class="bottom-text">加载更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastTouchClientY: 0,
    };
  },
  methods: {
    onMoveWrapperTouchStart(e) {
      const { screenY } = e.touches[0];
      const currentY = Number(this.$refs.moveWrapper.style.transform.match(/translateY\((\S*)px\)/)?.[1]) || 0;
      this.$refs.scrollWrapper.style.setProperty('pointer-events', currentY === 0 ? 'unset' : 'none');
      this.$refs.moveWrapper.style.setProperty('transition-duration', '0s');
      this.lastTouchClientY = screenY;
    },
    onMoveWrapperTouchMove(e) {
      const { screenY } = e.touches[0];
      const currentY = Number(this.$refs.moveWrapper.style.transform.match(/translateY\((\S*)px\)/)?.[1]) || 0;
      // 滚动的四种情况：
      // - 内容高度不足以滚动 1 允许上拉和下拉
      // + 内容高度足以滚动
      //   - 滚动在顶部 2 允许下拉
      //   - 滚动在中间 3 不允许下拉和上拉
      //   - 滚动在底部 4 允许上拉
      let newY = 0;
      // 默认情况（滚动在中间 或 其他情况）
      if (this.$refs.scrollWrapper.scrollHeight - this.$refs.scrollWrapper.clientHeight === 0) {
        // 内容高度不足以滚动
        newY = currentY + (screenY - this.lastTouchClientY) * 0.36;
      } else if (this.$refs.scrollWrapper.scrollTop === 0) {
        // 滚动在顶部
        newY = Math.max(0, currentY + (screenY - this.lastTouchClientY) * 0.36);
      } else if (
        this.$refs.scrollWrapper.scrollTop
        >= this.$refs.scrollWrapper.scrollHeight - this.$refs.scrollWrapper.clientHeight - 1
      ) {
        // 滚动在底部，使用 >= 防止特殊情况，正常情况下用 === 即可。
        newY = Math.min(0, currentY + (screenY - this.lastTouchClientY) * 0.36);
      }
      this.$refs.moveWrapper.style.setProperty('transform', `translateY(${newY}px)`);
      this.$refs.scrollWrapper.style.setProperty('pointer-events', newY === 0 ? 'unset' : 'none');
      this.lastTouchClientY = screenY;
    },
    onMoveWrapperTouchEnd() {
      const currentY = Number(this.$refs.moveWrapper.style.transform.match(/translateY\((\S*)px\)/)?.[1]) || 0;
      if (currentY !== 0) {
        this.$refs.moveWrapper.style.setProperty('transform', 'translateY(0px)');
        this.$refs.moveWrapper.style.setProperty('transition-duration', '0.5s');
        this.$refs.scrollWrapper.style.setProperty('pointer-events', 'unset');
      }
    },
    onScrollWrapperScroll(e) {
      // eslint-disable-next-line no-console
      // this.isTop = !e.target.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
.balance-recode {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.over-wrapper {
  flex-grow: 1;
  height: calc(100% - var(--title-bar-height));
  overflow: hidden;
}
.move-wrapper {
  height: 100%;
  transition-property: transform;
  transition-duration: 0s;
}
.top-text {
  height: 5vw;
  background-color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: -5vw;
}
.bottom-text {
  height: 5vw;
  background-color: #0000ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: -5vw;
}
.scroll-wrapper {
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.cell {
  height: 10vw;
}
</style>
