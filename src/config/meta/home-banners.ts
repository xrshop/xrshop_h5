/* eslint-disable global-require */
export interface Banner {
  to?: string;
  image: string;
}

export default [
  {
    image: require('@/assets/Index/Home/Banner/1.png'),
  },
  {
    image: require('@/assets/Index/Home/Banner/1.png'),
  },
  {
    image: require('@/assets/Index/Home/Banner/1.png'),
  },
  {
    image: require('@/assets/Index/Home/Banner/1.png'),
  },
  {
    image: require('@/assets/Index/Home/Banner/1.png'),
  },
] as Banner[];
