<template>
  <div class="tabs row" ref="tabs">
    <div
      class="cell"
      v-for="item of options"
      :key="item.id"
      :class="{ active: active === item.id }"
      @click="onCellClick(item)"
    >
      <span class="text" :class="{ red: item.red }">{{ item.text }}</span>
      <!-- v-if="typeof item.direction === 'number'" -->
      <div
        class="direction"
        v-if="item.hasOwnProperty('direction')"
        :data-direction="item.direction"
      >
        <Icon name="down" class="up" />
        <Icon name="down" class="down" />
      </div>
    </div>
    <div class="indicator" ref="indicator"></div>
  </div>
</template>
<script>
export default {
  name: 'TabsCopy',
  model: {
    prop: 'active',
    event: 'change',
  },
  props: {
    options: { required: true },
    active: { required: true },
  },
  watch: {
    active: {
      handler(newValue, oldValue) {
        this.$nextTick(this.updateIndicator.bind(this, oldValue === undefined));
      },
      immediate: true,
    },
  },
  methods: {
    updateIndicator(noTransition = false) {
      const { indicator } = this.$refs;
      const span = this.$refs.tabs.querySelector('.active span');
      if (!span) return;
      const w = (span.clientWidth / window.screen.width) * 100;
      const x = (span.offsetLeft / window.screen.width) * 100;
      indicator.style.transform = `translateX(${span.offsetLeft}px)`;
      indicator.style.width = `${w}vw`;
      indicator.style.transitionDuration = noTransition ? '0s' : '0.36s';
    },
    onCellClick(item) {
      if (this.active !== item.id) {
        // this.active = item.id;
        this.$emit('change', item.id);
      } else if (Object.prototype.hasOwnProperty.call(item, 'direction')) {
        // eslint-disable-next-line no-param-reassign
        item.direction = item.direction ? 0 : 1;
        this.$emit('direction-change', item.id, item.direction);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  height: 14.53vw;
  position: relative;
  .cell {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
    .text.red {
      color: #f84e4e;
    }
  }
  .direction {
    width: 1.6vw;
    margin-left: 1.33vw;
    .up,
    .down {
      // width: 1.6vw;
      // height: 0.93vw;
      width: 2.4vw;
      height: 2.4vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .up {
      transform: rotate(180deg);
    }
    &[data-direction="0"] .up,
    &[data-direction="1"] .down {
      ::v-deep svg path {
        fill: #f84e4e;
      }
    }
  }
  .indicator {
    position: absolute;
    width: 0vw;
    height: 0.67vw;
    border-radius: 0.335vw;
    background-color: #f84e4e;
    top: 10.5vw;
    transition-property: width, transform;
  }
}
</style>
