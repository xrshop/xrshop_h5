import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor) {
    const ctx = require.context('@/components/', true, /\.vue$/);
    ctx.keys().forEach((key) => {
      const component = ctx(key).default;
      // eslint-disable-next-line no-console
      console.log('Load component:', key, component);
      Vue.component(component.name, component);
    });
  },
};
