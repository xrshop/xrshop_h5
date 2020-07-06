<template>
  <div class="wx-login">登录中</div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  created() {
    const { code } = this.$route.query;
    const { state } = this.$route.query;
    axios.get('/api/wechat/auth', {
      params: {
        code,
        spread: state,
      },
    }).then((response) => {
      userManage.data.token = response.data.data.token;
      userManage.data.exp = new Date(response.data.data.expires_time).getTime();
      userManage.data.logged = true;
      userManage.save();
      console.log(userManage.valid(), this, userManage);
      // this.$router.replace('/');
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
