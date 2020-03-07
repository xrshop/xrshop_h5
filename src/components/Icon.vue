<template>
  <div class="icon-wrapper" v-html="currentSvgXml"></div>
</template>

<script>
const ICON_MAP = {
  default: '',
};

const ctx = require.context('!@a-z.ren/string-loader!@/assets/icons/', true, /\.svg$/);
ctx.keys().forEach((key) => {
  const matchedList = key.match(/\.\/(.+?)\.svg/);
  if (matchedList && matchedList[1]) {
    const name = matchedList[1];
    ICON_MAP[name] = ctx(key);
  }
});

export default {
  name: 'Icon',
  props: {
    name: {
      default: 'default',
    },
  },
  computed: {
    currentSvgXml() {
      return Object.prototype.hasOwnProperty.call(ICON_MAP, this.name)
        ? ICON_MAP[this.name]
        : this.name;
    },
  },
};
</script>

<style lang="css">
.icon-wrapper > svg {
  width: 100%;
  height: 100%;
}
</style>
