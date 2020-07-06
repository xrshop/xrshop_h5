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
        state,
      },
    }).then((response) => {
      userManage.wxLogin(response.data.data.token, response.data.data.expires_time).then(() => {
        this.$router.replace('/');
      });
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
