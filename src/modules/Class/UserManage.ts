import EventHub from '@a-z.ren/event-hub/src/main';
import { login, logout } from '@/api/auth';
import jwtDecode from '@/utils/jwt-decode';
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

  async login(username: string, password: string, code: string, uuid: string, save: boolean) {
    const response = await login(username, password, code, uuid);
    this.data.user = response.data.user;
    this.data.token = response.data.token;
    this.data.exp = jwtDecode(response.data.token)?.payload?.exp * 1000;
    this.data.logged = true;
    if (save) this.save();
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
