<template>
  <div class="layout-queue">
    <component
      v-for="(item, index) of queue"
      :key="item.id"
      :is="item.is"
      :id="item.id"
      v-on="item.on"
      v-bind="item.bind"
      @sub="sub(index)"
    />
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'LayoutQueue',
  data() {
    return {
      queue: [],
      count: 0,
    };
  },
  methods: {
    add(options) {
      this.count += 1;
      const obj = { id: this.count, ...options };
      this.queue.push(obj);
    },
    sub(index) {
      this.queue.splice(index, 1);
    },
  },
  created() {
    Vue.prototype.$hint = (text, color) => this.add({
      is: 'Hint',
      bind: { text, color },
    });
    Vue.prototype.$confirm = (text) => new Promise((resolve, reject) => {
      this.add({
        is: 'Confirm',
        bind: { text },
        on: { resolve, reject },
      });
    });
  },
};
</script>
