import Vue from 'vue';
import { RouteConfig } from 'vue-router';
import VueRouter from '@/library/VueRouterPlus';
import Index from '@/views/Index.vue';
import Home from '@/views/Index/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/index/home',
    children: [
      {
        path: '/index/home',
        name: 'Home',
        component: Home, // 首屏同依赖包一起一次性加载完
      },
      {
        path: '/index/category',
        name: 'Category',
        component: () => import(
          /* webpackChunkName: "Category" */ '@/views/Index/Category.vue',
        ),
      },
      {
        path: '/index/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/Index/Cart.vue'), // 其余页分包加载
      },
      {
        path: '/index/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "My" */ '@/views/Index/My.vue'),
        meta: {
          auth: 1,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
