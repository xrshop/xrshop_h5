<template>
  <div class="pull-to-refresh over-wrapper">
    <div
      class="move-wrapper"
      @touchstart="onMoveWrapperTouchStart"
      @touchmove="onMoveWrapperTouchMove"
      @touchend="onMoveWrapperTouchEnd"
      ref="moveWrapper"
    >
      <div class="top-wrapper">
        <slot name="top">
          <template v-if="testY > this.topThreshold">松开刷新</template>
          <template v-else>下拉刷新</template>
        </slot>
      </div>
      <div class="scroll-wrapper view-scroll" ref="scrollWrapper">
        <slot name="default" />
      </div>
      <div class="bottom-wrapper">
        <slot name="bottom">
          <template v-if="testY < -this.bottomThreshold">松开加载更多</template>
          <template v-else>上拉加载更多</template>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
function getMatrix(str) {
  const arr = str.match(/matrix\((\S*), (\S*), (\S*), (\S*), (\S*), (\S*)\)/);
  return {
    a: Number(arr?.[1] ?? 1), // arr ? Number(arr[1]) : 1
    b: Number(arr?.[2] ?? 0),
    c: Number(arr?.[3] ?? 0),
    d: Number(arr?.[4] ?? 1),
    tx: Number(arr?.[5] ?? 0),
    ty: Number(arr?.[6] ?? 0),
  };
}

function setMatrix({
  a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0,
}) {
  return `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
}

export default {
  name: 'PullToRefresh',
  props: {
    topThreshold: {
      default: 50,
      type: Number,
    },
    bottomThreshold: {
      default: 50,
      type: Number,
    },
  },
  data() {
    return {
      lastScreenY: 0,
      testY: 0,
    };
  },
  methods: {
    onMoveWrapperTouchStart(e) {
      const { screenY } = e.touches[0];
      const transform = window
        .getComputedStyle(this.$refs.moveWrapper)
        .getPropertyValue('transform');
      const matrix = getMatrix(transform);
      this.$refs.moveWrapper.style.setProperty('transform', transform);
      this.$refs.moveWrapper.style.setProperty('transition-duration', '0s');
      this.$refs.scrollWrapper.style.setProperty('pointer-events', matrix.ty === 0 ? 'unset' : 'none');
      this.lastScreenY = screenY;
    },
    onMoveWrapperTouchMove(e) {
      const { screenY } = e.touches[0];
      const transform = window
        .getComputedStyle(this.$refs.moveWrapper)
        .getPropertyValue('transform');
      const matrix = getMatrix(transform);

      let newY = 0;
      const oldY = matrix.ty;

      // 滚动的四种情况：
      // - 内容高度不足以滚动 1 允许上拉和下拉
      // + 内容高度足以滚动
      //   - 滚动在顶部 2 允许下拉
      //   - 滚动在中间 3 不允许下拉和上拉
      //   - 滚动在底部 4 允许上拉

      // 默认情况（滚动在中间 或 其他情况）
      if (this.$refs.scrollWrapper.scrollHeight - this.$refs.scrollWrapper.clientHeight === 0) {
        // 内容高度不足以滚动
        newY = oldY + (screenY - this.lastScreenY) * 0.36;
      } else if (this.$refs.scrollWrapper.scrollTop === 0) {
        // 滚动在顶部
        newY = Math.max(0, oldY + (screenY - this.lastScreenY) * 0.36);
      } else if (
        this.$refs.scrollWrapper.scrollTop
        >= this.$refs.scrollWrapper.scrollHeight - this.$refs.scrollWrapper.clientHeight - 1
      ) {
        // 滚动在底部，使用 >= 防止特殊情况，正常情况下用 === 即可。
        newY = Math.min(0, oldY + (screenY - this.lastScreenY) * 0.36);
      }

      this.$refs.moveWrapper.style.setProperty('transform', setMatrix({ ty: newY }));
      this.$refs.scrollWrapper.style.setProperty('pointer-events', newY === 0 ? 'unset' : 'none');
      this.lastScreenY = screenY;

      this.testY = newY;
      this.$emit('pulling', newY, oldY);
    },
    onMoveWrapperTouchEnd() {
      const { transform } = this.$refs.moveWrapper.style;
      const matrix = getMatrix(transform);

      const newY = 0;
      const oldY = matrix.ty;

      if (oldY !== 0) {
        this.$refs.moveWrapper.style.setProperty('transform', setMatrix({ ty: newY }));
        this.$refs.moveWrapper.style.setProperty('transition-duration', '0.5s');
      }
      this.$refs.scrollWrapper.style.setProperty('pointer-events', 'unset');

      this.testY = newY;
      this.$emit('pulled', newY, oldY);
      if (oldY > this.topThreshold) this.$emit('topPulled', newY, oldY);
      if (oldY < -this.bottomThreshold) this.$emit('bottomPulled', newY, oldY);
    },
  },
};
</script>

<style lang="scss" scoped>
.over-wrapper {
  height: calc(100% - var(--title-bar-height));
  overflow: hidden;
}
.move-wrapper {
  height: 100%;
  transition-property: transform;
  transition-duration: 0s;
}
.top-wrapper {
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  margin-top: -10vw;
}
.bottom-wrapper {
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  margin-bottom: -10vw;
}
.scroll-wrapper {
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
