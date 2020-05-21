/* eslint-disable global-require */
export interface NavListItem {
  to: string;
  icon: string;
  activeIcon: string;
  text: string;
}

export default [
  {
    text: '首页',
    icon: require('@/assets/Index/TabBar/5.png'),
    activeIcon: require('@/assets/Index/TabBar/1.png'),
    to: 'home',
  },
  {
    text: '分类',
    icon: require('@/assets/Index/TabBar/6.png'),
    activeIcon: require('@/assets/Index/TabBar/2.png'),
    to: 'category',
  },
  {
    text: '购物车',
    icon: require('@/assets/Index/TabBar/7.png'),
    activeIcon: require('@/assets/Index/TabBar/3.png'),
    to: 'cart',
  },
  {
    text: '我的',
    icon: require('@/assets/Index/TabBar/8.png'),
    activeIcon: require('@/assets/Index/TabBar/4.png'),
    to: 'my',
  },
] as NavListItem[];
