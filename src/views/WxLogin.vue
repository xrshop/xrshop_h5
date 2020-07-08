<template>
  <div class="wx-login">
    <div class="text">登录中</div>
    <Icon name="loading" class="loading" />
  </div>
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
    userManage.data.exp = response.data.data.expiresInMs;
    userManage.data.logged = true;
    userManage.save();
    this.$router.replace('/');
  },
};
</script>

<style lang="scss" scoped>
.wx-login {
  display: flex;
  padding-top: 20vw;
  justify-content: center;
  .text {
    padding-top: 24px;
  }
}
.loading {
  width: 48px;
  height: 48px;
  margin-left: 4vw;
  &::v-deep svg circle {
    animation-name: jump;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0s;
    }
  }
}
@keyframes jump {
  from {
    cy: 8;
  }
  to {
    cy: 28;
  }
}
</style>
