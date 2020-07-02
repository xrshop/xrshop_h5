import Axios from 'axios';
import { DEFAULT_API_BASE_URL } from '@/config/constant';

export default function installAxiosDefault() {
  Axios.defaults.baseURL = DEFAULT_API_BASE_URL;
}
