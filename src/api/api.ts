import Axios from 'axios';

export function getMenus(token: string) {
  return Axios.get('/api/menus', { headers: { Authorization: token } });
}

export function getMenusSimple(token: string) {
  return Axios.get('/api/menus/build', { headers: { Authorization: token } });
}

export function addMenuItem(token: string) {
  return Axios.post('/api/menus', { headers: { Authorization: token } });
}
