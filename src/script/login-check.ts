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
        app.$router.push({ name: 'Login', query: { target: to.fullPath } });
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
        app.$router.replace({ name: 'Login', query: { target: to.fullPath } });
      }
    }
  });

  Axios.interceptors.response.use(undefined, (error) => {
    if (error.response?.status === 401) {
      if (userManage.data.logged) userManage.logout();
      app.$router.replace({ name: 'Login', query: { target: app.$route.fullPath } });
    }
    throw error;
  });
}
