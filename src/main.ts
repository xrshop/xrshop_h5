/**
 * npm package
 */
import Vue from 'vue';

/**
 * vue plugins
 */
import vueAutoComponentsLoader from '@/plugins/vueAutoComponentsLoader';

/**
 * Vue options dependencies
 */
import router from './router';
import store from './store';
import App from './App.vue';

/**
 * Set Vue config
 */
Vue.config.productionTip = false;

/**
 * Use Vue plugins
 */
Vue.use(vueAutoComponentsLoader);

/**
 * Vue instance
 */
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

/**
 * Install extension script
 */

app.$mount('#app');
