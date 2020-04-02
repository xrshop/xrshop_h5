<template>
  <span class="price">
    <span class="monetary-unit">￥</span>
    <span class="int">{{ int }}</span>
    <span class="float">.{{ float }}</span>
  </span>
</template>
<script>
export default {
  name: 'Price',
  props: {
    value: {
      type: Number,
    },
  },
  computed: {
    valueSplitArray() {
      return String(this.value).split('.');
    },
    int() {
      return this.valueSplitArray[0];
    },
    float() {
      return this.valueSplitArray.length === 2 ? this.valueSplitArray[1].padEnd(2, '0') : '00';
    },
  },
};
</script>
<style lang="scss" scoped>
.price {
  color: #f84e4e;
  .monetary-unit,.float {
    font-size: 2.4vw;
    font-weight: bold;
  }
  .int {
    font-size: 4vw;
    font-weight: bolder;
  }
}
</style>
