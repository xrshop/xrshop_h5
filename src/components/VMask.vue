<template>
  <div class="mask"></div>
</template>
<script>
export default {
  name: 'VMask',
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  &.dark {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
