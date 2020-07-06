<template>
  <div class="wx-login">登录中</div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';
import { getUserInfo } from '@/api/auth';

export default {
  async created() {
    const { code } = this.$route.query;
    const { state } = this.$route.query;
    const response = await axios.get('/api/wechat/auth', { params: { code, spread: state } });
    const response2 = await getUserInfo(`Bearer ${response.data.data.token}`);
    userManage.data.user = response2.data.data;
    userManage.data.token = `Bearer ${response.data.data.token}`;
    userManage.data.exp = new Date(response.data.data.expires_time).getTime();
    userManage.data.logged = true;
    userManage.save();
    this.$router.replace('/');
  },
};
</script>

<style lang="scss" scoped></style>
