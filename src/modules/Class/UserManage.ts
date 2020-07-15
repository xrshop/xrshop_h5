import EventHub from '@a-z.ren/event-hub/src/main';
import { login, logout, getUserInfo } from '@/api/auth';
import Persistence from './Persistence';
import { User } from './User';

export interface UserManageData {
  user: User;
  token: string;
  logged: boolean;
  exp: number;
}

export default class UserManage extends Persistence<UserManageData> {
  public events = new EventHub();

  public get on() {
    return this.events.on.bind(this.events);
  }

  public get once() {
    return this.events.once.bind(this.events);
  }

  public get emit() {
    return this.events.emit.bind(this.events);
  }

  // eslint-disable-next-line max-len
  async login(username: string, password: string, code?: string, uuid?: string, spread?: string) {
    const response = await login(username, password, code, uuid, spread);
    const response2 = await getUserInfo(`Bearer ${response.data.data.token}`);
    this.data.user = response2.data.data;
    this.data.token = `Bearer ${response.data.data.token}`;
    this.data.exp = response.data.data.expiresInMs;
    this.data.logged = true;
    this.save();
    this.emit('login');
    return response;
  }

  logout() {
    logout(this.data.token);
    this.data.token = '';
    this.data.logged = false;
    this.save();
    this.emit('logout');
  }

  valid() {
    return this.data.logged && this.data.exp > Date.now();
  }
}
