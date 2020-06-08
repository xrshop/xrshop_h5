/* eslint-disable object-curly-newline */
import Axios from 'axios';

export function login(username: string, password: string, code: string, uuid: string) {
  return Axios.post('/api/login', { username, password, code, uuid });
}

export function logout(token: string) {
  return Axios.delete('/api/logout', { headers: { Authorization: token } });
}

// export function getUserInfo(token: string) {
//   return Axios.get('/auth/login', { headers: { Authorization: token } });
// }

export function getCode() {
  return Axios.get('/auth/code');
}
