/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

export default function installAxiosDefault() {
  Axios.defaults.baseURL = (window as any).API_URL;
  Axios.defaults.headers.tenantId = (window as any).tenantId;
}
