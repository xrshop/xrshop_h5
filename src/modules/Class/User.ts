export interface User {
  id: number;
  username: string;
  nickName: string;
  sex: string;
  avatar: string;
  email: string;
  phone: string;
  dept: string;
  job: string;
  enabled: boolean;
  createTime: number;
  roles: string[];
}

export class User implements User {
  constructor() {
    this.id = 0;
    this.username = '';
    this.nickName = '';
    this.sex = '';
    this.avatar = '';
    this.email = '';
    this.phone = '';
    this.dept = '';
    this.job = '';
    this.enabled = false;
    this.createTime = 0;
    this.roles = [];
  }
}
