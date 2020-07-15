/* eslint-disable object-curly-newline */
import Axios from 'axios';

// eslint-disable-next-line max-len
export function login(username: string, password: string, code?: string, uuid?: string, spread?: string) {
  return Axios.post('/api/login', { username, password, code, uuid, spread });
}

export function logout(token: string) {
  return Axios.delete('/api/logout', { headers: { Authorization: token } });
}

export function getUserInfo(token: string) {
  return Axios.get('/api/info', { headers: { Authorization: token } });
}
