import Vue from 'vue';
import { RouteConfig } from 'vue-router';
import VueRouter from '@/library/VueRouterPlus';
import Index from '@/views/Index.vue';
import Home from '@/views/Index/Home.vue';
import { loadViewScrollPosition, saveViewScrollPosition } from '@/utils/view-scroll-behavior';

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
        component: () => import(/* webpackChunkName: "Category" */ '@/views/Index/Category.vue'),
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
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/news-list',
    name: 'NewsList',
    component: () => import(/* webpackChunkName: "NewsList" */ '../views/NewsList.vue'),
  },
  {
    path: '/news-details',
    name: 'NewsDetails',
    component: () => import(/* webpackChunkName: "NewsDetails" */ '../views/NewsDetails.vue'),
  },
  {
    path: '/category-details',
    name: 'CategoryDetails',
    component: () => import(/* webpackChunkName: "CategoryDetails" */ '../views/CategoryDetails.vue'),
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList.vue'),
  },
  {
    path: '/order-details',
    name: 'OrderDetails',
    component: () => import(/* webpackChunkName: "OrderDetails" */ '../views/OrderDetails.vue'),
  },
  {
    path: '/address-management',
    name: 'AddressManagement',
    component: () => import(/* webpackChunkName: "AddressManagement" */ '../views/AddressManagement.vue'),
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: () => import(/* webpackChunkName: "Logistics" */ '../views/Logistics.vue'), // 物流详情
  },
  {
    path: '/post-sale',
    name: 'PostSale',
    component: () => import(/* webpackChunkName: "PostSale" */ '../views/PostSale.vue'),
  },
  {
    path: '/post-sale-need',
    name: 'PostSaleNeed',
    component: () => import(/* webpackChunkName: "PostSaleNeed" */ '../views/PostSaleNeed.vue'), // 申请售后
  },
  {
    path: '/post-sale-details',
    name: 'PostSaleDetails',
    component: () => import(/* webpackChunkName: "PostSaleDetails" */ '../views/PostSaleDetails.vue'),
  },
  {
    path: '/coupon-list',
    name: 'CouponList',
    component: () => import(/* webpackChunkName: "CouponList" */ '../views/CouponList.vue'),
  },
  {
    path: '/post-sale-refund',
    name: 'PostSaleRefund',
    component: () => import(/* webpackChunkName: "PostSaleRefund" */ '../views/PostSaleRefund.vue'),
  },
  {
    path: '/generalize',
    name: 'Generalize',
    component: () => import(/* webpackChunkName: "Generalize" */ '../views/Generalize.vue'),
  },
  {
    path: '/integral',
    name: 'Integral',
    component: () => import(/* webpackChunkName: "Integral" */ '../views/Integral.vue'),
  },
  {
    path: '/integral-details',
    name: 'IntegralDetails',
    component: () => import(/* webpackChunkName: "IntegralDetails" */ '../views/IntegralDetails.vue'),
  },
  {
    path: '/integral-goods',
    name: 'IntegralGoods',
    component: () => import(/* webpackChunkName: "IntegralGoods" */ '../views/IntegralGoods.vue'),
  },
  {
    path: '/integral-order',
    name: 'IntegralOrder',
    component: () => import(/* webpackChunkName: "IntegralOrder" */ '../views/IntegralOrder.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue'),
  },
  {
    path: '/balance',
    name: 'Balance',
    component: () => import(/* webpackChunkName: "Balance" */ '../views/Balance.vue'),
  },
  {
    path: '/balance-record',
    name: 'BalanceRecord',
    component: () => import(/* webpackChunkName: "BalanceRecord" */ '../views/BalanceRecord.vue'),
  },
  {
    path: '/bind-phone',
    name: 'BindPhone',
    component: () => import(/* webpackChunkName: "BindPhone" */ '../views/BindPhone.vue'), // 绑定手机
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      if (loadViewScrollPosition(to)) {
        return undefined;
      }
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  saveViewScrollPosition(from);
  next();
});

export default router;
