/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { DEFAULT_API_BASE_URL } from '@/config/constant';

export default function installAxiosDefault() {
  Axios.defaults.baseURL = DEFAULT_API_BASE_URL;
  Axios.defaults.headers.tenantId = (window as any).tenantId;
  // Axios.interceptors.request.use((config) => {
  //   config.headers.tenantId = (window as any).tenantId;
  //   return config;
  // });
}
