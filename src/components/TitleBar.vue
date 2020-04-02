<template>
  <div class="title-bar">
    <div class="main">
      <div class="left">
        <slot name="left">
          <Icon
            name="back"
            class="back-button"
            v-if="canBack!==undefined"
            @click.native="onBackButtonClick"
          />
        </slot>
      </div>
      <div class="center">
        <slot name="center">
          <div class="center-text" v-if="title">{{title}}</div>
        </slot>
      </div>
      <div class="right">
        <slot name="right">
          <div class="right-text" v-if="rightText" @click="onRightTextClick">{{rightText}}</div>
        </slot>
      </div>
    </div>
    <slot name="other"></slot>
  </div>
</template>
<script>
export default {
  name: 'TitleBar',
  props: ['title', 'canBack', 'rightText'],
  methods: {
    onBackButtonClick() {
      this.$router.back();
    },
    onRightTextClick() {
      this.$emit('rightTextClick');
    },
  },
};
</script>
<style >
:root {
  --title-bar-height: 11.2vw;
}
</style>
<style lang="scss" scoped>
.title-bar {
  position: sticky;
  top: 0;
  z-index: 3;
  border-top: var(--safe-top) solid transparent;
  background-color: rgba($color: #fff, $alpha: 0.8);
  background-clip: border-box;
  background-origin: border-box;
  backdrop-filter: blur(10px) brightness(110%);
  .main {
    height: var(--title-bar-height);
    display: flex;
    justify-content: center;
    position: relative;
  }
  .left,
  .right {
    position: absolute;
    top: 0;
  }
  .left,
  .right,
  .center {
    height: 100%;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  .back-button {
    width: var(--title-bar-height);
    height: var(--title-bar-height);
    display: flex;
    justify-content: center;
    align-items: center;
    &::v-deep > svg {
      width: 60%;
      height: 60%;
    }
  }
  .center-text {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // color: #333;
    font-size: 4.8vw;
  }
  .right-text {
    width: auto;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
    font-size: 4vw;
  }
}
</style>
