<template>
  <transition name="fade" @after-leave="$emit('sub')">
    <div v-if="value" class="position">
      <div class="hint">{{ text }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Hint',
  props: ['text'],
  data() {
    return {
      value: false,
    };
  },
  mounted() {
    this.value = true;
    window.setTimeout(() => {
      this.value = false;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.position {
  width: 100%;
  position: fixed;
  bottom: 30vw;
  display: flex;
  justify-content: center;
  z-index: 5;
}
.hint {
  font-size: 4vw;
  border-radius: 0.5em;
  padding: 0.5em 0.75em;
  color: #fff;
  background-color: rgba($color: #000, $alpha: 0.5);
  box-shadow: 0 0 3vw 0 rgba($color: #fff, $alpha: 0.5);
}
</style>
