import Vue from 'vue';
import Axios from 'axios';
import userManage from '@/modules/user-manage';

export default function installLoginCheck(app: Vue) {
  app.$router.beforeEach((to, from, next) => {
    // if (from.name === to.name) {
    //   next();
    //   return;
    // }
    if (from.path === to.path) {
      next();
      return;
    }
    if (to.matched.some((record) => record.meta.auth)) {
      if (userManage.valid()) {
        next();
      } else {
        if (userManage.data.logged) userManage.logout();
        app.$router.push({ name: 'Login', query: { target: to.path } });
      }
    } else {
      next();
    }
  });

  app.$router.afterEach((to, from) => {
    // if (from.name === to.name) {
    //   return;
    // }
    if (from.path === to.path) {
      return;
    }
    if (to.matched.some((record) => record.meta.auth)) {
      if (!userManage.valid()) {
        if (userManage.data.logged) userManage.logout();
        app.$router.replace({ name: 'Login', query: { target: to.path } });
      }
    }
  });

  Axios.interceptors.response.use((response) => {
    // 即使是请求失败抛出错误也会经过 onFulfilled 。
    if (response.status === 401) app.$router.replace({ name: 'Login', query: { target: app.$route.path } });
    return response;
  });
  // (error) => {} 单独的 onRejected 可能会捕捉到非请求错误。
}
