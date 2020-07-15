/* eslint-disable @typescript-eslint/no-explicit-any */
import userManage from '@/modules/user-manage';

export default function installTestLogin() {
  const { TEST_ENABLED, TEST_USERNAME, TEST_PASSWORD } = window as any;
  // 启用测试登录 且 （上次登录账号与测试账号相同 或 登录失效）
  if (TEST_ENABLED && (userManage.data.user.username === TEST_USERNAME || !userManage.valid())) {
    userManage.login(TEST_USERNAME, TEST_PASSWORD);
  }
}
