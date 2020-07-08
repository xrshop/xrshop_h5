<template>
  <div class="popup">
    <slot v-bind:isShow="isShow" />
  </div>
</template>
<script>
export default {
  name: 'Popup',
  props: ['id'],
  computed: {
    isShow() {
      return this.$route.query[`popup-${this.id}`];
    },
  },
  watch: {
    isShow(newValue) {
      if (!newValue) {
        this.$emit('closed');
      }
    },
  },
  methods: {
    close() {
      this.$router.back();
    },
    open(query) {
      this.$router.addQuery({ [`popup-${this.id}`]: true, ...query });
    },
  },
};
</script>
