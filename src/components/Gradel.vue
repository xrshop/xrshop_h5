<template>
  <div class="gradel">
    <div class="img-box">
      <img
      :src="options >= index ? icon[1] : icon[0]"
      alt="" class="cell"
      v-for="index in number"
      :key="index"
      @click="changeIndex(index)"
      >
    </div>
    <div class="text">{{evaluate}}</div>
  </div>
</template>

<script>
export default {
  /* eslint-disable global-require */
  name: 'Gradel',
  data() {
    return {
      icon: [require('@/assets/2.png'), require('@/assets/1.png')],
    };
  },
  model: {
    prop: 'options',
    event: 'change',
  },
  props: {
    options: { default: 0 },
    number: { default: 5 },
    text: { type: Array },
  },
  methods: {
    changeIndex(index) {
      this.$emit('change', index);
    },
  },
  computed: {
    evaluate() {
      return this.text[this.options];
    },
  },
};
</script>

<style lang="scss" scoped>
.gradel{
  display: flex;
  align-items: center;
  .cell {
    width: 3.33vw;
    margin-right: 4vw;
    &:last-of-type {
      margin-right: 0;
    }
  }
  .text {
    margin-left: 5.47vw;
    color: #BBBBBB;
    font-size: 3.2vw;
  }
}
</style>
