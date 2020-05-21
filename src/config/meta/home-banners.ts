/* eslint-disable global-require */
export interface Banner {
  to?: string;
  image: string;
}

export default [
  {
    image: require('@/assets/Index/HomeB/Banner/banner.png'),
  },
  {
    image: require('@/assets/Index/HomeB/Banner/banner.png'),
  },
  {
    image: require('@/assets/Index/HomeB/Banner/banner.png'),
  },
  {
    image: require('@/assets/Index/HomeB/Banner/banner.png'),
  },
  {
    image: require('@/assets/Index/HomeB/Banner/banner.png'),
  },
] as Banner[];
