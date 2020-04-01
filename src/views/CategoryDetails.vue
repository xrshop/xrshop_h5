<template>
  <div class="category-details">
    <TitleBar canBack>
      <template v-slot:center>
        <SearchSimple />
      </template>
      <template v-slot:right>
        <div class="menu-button"></div>
      </template>
    </TitleBar>
    <div class="sort row" ref="sort">
      <div
        class="cell"
        v-for="item of sort"
        :key="item.id"
        :class="{ active: sortActivated === item.id }"
        @click="sortActivated = item.id"
      >
        <span class="text" :class="{ red: item.red }">{{ item.text }}</span>
        <!-- v-if="typeof item.direction === 'number'" -->
        <div
          class="direction"
          v-if="item.hasOwnProperty('direction')"
          :data-direction="item.direction"
        >
          <div class="top"></div>
          <div class="down"></div>
        </div>
      </div>
      <div class="indicator" ref="indicator"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: [
        { id: 0, text: '五花肉', red: true },
        { id: 1, text: '价格', direction: 0 },
        { id: 2, text: '销量' },
        { id: 3, text: '新品' },
      ],
      sortActivated: 1,
    };
  },
  watch: {
    sortActivated: {
      handler(newValue, oldValue) {
        this.$nextTick(this.updateIndicator.bind(this, oldValue === undefined));
      },
      immediate: true,
    },
  },
  methods: {
    updateIndicator(noTransition = false) {
      const { indicator } = this.$refs;
      const span = this.$refs.sort.querySelector('.active span');
      if (!span) return;
      const w = span.clientWidth;
      const x = span.offsetLeft;
      indicator.style.transform = `translateX(calc(${x}px + 1.87vw))`;
      indicator.style.width = `calc(${w}px - 1.87vw * 2)`;
      indicator.style.transitionDuration = noTransition ? '0s' : '0.36s';
    },
  },
};
</script>

<style lang="scss" scoped>
.category-details {
  background-color: #f6f6f6;
}
.title-bar::v-deep {
  // justify-content: flex-start;
  // .left,
  // .right {
  //   position: relative;
  // }
  .center {
    display: flex;
    align-items: center;
  }
  // .right {

  // }
  .back-button {
    width: calc((100vw - 75vw) * 0.5);
  }
}
.search {
  width: 75vw;
  // width: calc(100vw - var(--title-bar-height) * 2);
}
.menu-button {
  // width: var(--title-bar-height);
  width: calc((100vw - 75vw) * 0.5);
  height: var(--title-bar-height);
  background-image: url("~@/assets/CategoryDetails/menu-button.png");
  background-repeat: no-repeat;
  background-size: 4.4vw;
  background-position: center;
}
.sort {
  height: 14.53vw;
  background-color: #fff;
  border-radius: 0 0 2vw 2vw;
  position: relative;
  .cell {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
  }
  .indicator {
    position: absolute;
    width: 0vw;
    height: 0.67vw;
    border-radius: 0.335vw;
    background-color: #f84e4e;
    top: 10.5vw;
    transition-property: width, transform;
    // transition-duration: 0s;
    // &.enabled-duration {
    //   transition-duration: 0.5s;
    // }
  }
}
</style>
