import UserManage from '@/modules/Class/UserManage';
import { User } from '@/modules/Class/User';

const userManage = new UserManage('user-manage', {
  user: new User(),
  token: '',
  logged: false,
  exp: 0,
});

userManage.load();

export default userManage;
