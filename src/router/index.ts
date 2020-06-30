import Vue from 'vue';
import { RouteConfig } from 'vue-router';
import VueRouter from '@/library/VueRouterPlus';
import Index from '@/views/Index.vue';
import Home from '@/views/Index/HomeB.vue';
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
        meta: {
          auth: 1,
        },
      },
      {
        path: '/index/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "My" */ '@/views/Index/MyB.vue'),
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
    component: () => import(/* webpackChunkName: "NewsList" */ '../views/NewsListB.vue'),
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
    path: '/order-confirm',
    name: 'OrderConfirm',
    component: () => import(/* webpackChunkName: "OrderConfirm" */ '../views/OrderConfirm.vue'), // 确认订单
    meta: {
      auth: 1,
    },
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/order-details',
    name: 'OrderDetails',
    component: () => import(/* webpackChunkName: "OrderDetails" */ '../views/OrderDetailsB.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/address-management',
    name: 'AddressManagement',
    component: () => import(/* webpackChunkName: "AddressManagement" */ '../views/AddressManagement.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/add-region',
    name: 'AddRegion',
    meta: {
      auth: 1,
    },
    component: () => import(/* webpackChunkName: "AddRegion" */ '../views/AddRegion.vue'),
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: () => import(/* webpackChunkName: "Logistics" */ '../views/Logistics.vue'), // 物流详情
    meta: {
      auth: 1,
    },
  },
  {
    path: '/post-sale',
    name: 'PostSale',
    component: () => import(/* webpackChunkName: "PostSale" */ '../views/PostSale.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/post-sale-need',
    name: 'PostSaleNeed',
    component: () => import(/* webpackChunkName: "PostSaleNeed" */ '../views/PostSaleNeed.vue'), // 申请售后
    meta: {
      auth: 1,
    },
  },
  {
    path: '/post-sale-details',
    name: 'PostSaleDetails',
    component: () => import(/* webpackChunkName: "PostSaleDetails" */ '../views/PostSaleDetails.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/coupon-list',
    name: 'CouponList',
    component: () => import(/* webpackChunkName: "CouponList" */ '../views/CouponList.vue'),
    meta: {
      auth: 1,
    },
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
    meta: {
      auth: 1,
    },
  },
  {
    path: '/integral-details',
    name: 'IntegralDetails',
    component: () => import(/* webpackChunkName: "IntegralDetails" */ '../views/IntegralDetails.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/integral-goods',
    name: 'IntegralGoods',
    component: () => import(/* webpackChunkName: "IntegralGoods" */ '../views/IntegralGoods.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/integral-order',
    name: 'IntegralOrder',
    component: () => import(/* webpackChunkName: "IntegralOrder" */ '../views/IntegralOrder.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/balance',
    name: 'Balance',
    component: () => import(/* webpackChunkName: "Balance" */ '../views/Balance.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/balance-record',
    name: 'BalanceRecord',
    component: () => import(/* webpackChunkName: "BalanceRecord" */ '../views/BalanceRecord.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/bind-phone',
    name: 'BindPhone',
    component: () => import(/* webpackChunkName: "BindPhone" */ '../views/BindPhone.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/item-details',
    name: 'ItemDetails',
    component: () => import(/* webpackChunkName: "ItemDetails" */ '../views/ItemDetails.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "Setting" */ '../views/Setting.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/bank-card',
    name: 'BankCard',
    component: () => import(/* webpackChunkName: "BankCard" */ '../views/BankCard.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/bind-alipay',
    name: 'BindAlipay',
    component: () => import(/* webpackChunkName: "BindAlipay" */ '../views/BindAlipay.vue'),
    meta: {
      auth: 1,
    },
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "ChangePassword" */ '../views/ChangePassword.vue'),
  },
  {
    path: '/change-phone',
    name: 'ChangePhone',
    component: () => import(/* webpackChunkName: "ChangePhone" */ '../views/ChangePhone.vue'),
  },
  {
    path: '/certification',
    name: 'Certification',
    component: () => import(/* webpackChunkName: "Certification" */ '../views/Certification.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/login-phone',
    name: 'LoginPhone',
    component: () => import(/* webpackChunkName: "LoginPhone" */ '../views/LoginPhone.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
  },
  {
    path: '/menu-vegetable',
    name: 'MenuVegetable',
    component: () => import(/* webpackChunkName: "MenuVegetable" */ '../views/MenuVegetable.vue'),
  },
  {
    path: '/menu-fruit',
    name: 'MenuFruit',
    component: () => import(/* webpackChunkName: "MenuFruit" */ '../views/MenuFruit.vue'),
  },
  {
    path: '/menu-recommend',
    name: 'MenuRecommend',
    component: () => import(/* webpackChunkName: "MenuRecommend" */ '../views/MenuRecommend.vue'),
  },
  {
    path: '/menu-contend',
    name: 'MenuContend',
    component: () => import(/* webpackChunkName: "MenuContend" */ '../views/MenuContend.vue'), // 超值抢购
  },
  {
    path: '/menu-find',
    name: 'MenuFind',
    component: () => import(/* webpackChunkName: "MenuFind" */ '../views/MenuFind.vue'), // 发现好物
  },
  {
    path: '/menu-ticket',
    name: 'MenuTicket',
    component: () => import(/* webpackChunkName: "MenuTicket" */ '../views/MenuTicketB.vue'), // 领券中心
    meta: {
      auth: 1,
    },
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import(/* webpackChunkName: "Comment" */ '../views/Comment.vue'), // 评论
    meta: {
      auth: 1,
    },
  },
  {
    path: '/comment-list',
    name: 'CommentList',
    component: () => import(/* webpackChunkName: "CommentList" */ '../views/CommentList.vue'), // 评论列表
    meta: {
      auth: 1,
    },
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
