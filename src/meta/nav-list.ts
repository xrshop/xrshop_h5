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
    icon: require('@/assets/Index/TabBar/11.png'),
    activeIcon: require('@/assets/Index/TabBar/12.png'),
    to: 'home',
  },
  {
    text: '分类',
    icon: require('@/assets/Index/TabBar/21.png'),
    activeIcon: require('@/assets/Index/TabBar/22.png'),
    to: 'category',
  },
  {
    text: '购物车',
    icon: require('@/assets/Index/TabBar/31.png'),
    activeIcon: require('@/assets/Index/TabBar/32.png'),
    to: 'cart',
  },
  {
    text: '我的',
    icon: require('@/assets/Index/TabBar/41.png'),
    activeIcon: require('@/assets/Index/TabBar/42.png'),
    to: 'my',
  },
] as NavListItem[];
