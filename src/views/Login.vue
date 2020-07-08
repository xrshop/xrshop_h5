<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt />
    </div>
    <form ref="form" onsubmit="return false" @submit="onSubmit">
      <div class="import-box">
        <div class="item">
          <input
            type="text"
            placeholder="请输入账户名"
            required
            v-model="username"
          />
        </div>
        <div class="item">
          <input
            type="password"
            placeholder="请输入密码"
            required
            minlength="6"
            v-model="password"
          />
        </div>
      </div>
      <div class="submit-above">
        <div class="left"></div>
        <div class="right">忘记密码</div>
      </div>
      <input class="submit-but" type="submit" value="登陆" />
    </form>
    <div class="submit-under">
      <div class="left">手机号码登录</div>
      <router-link
        :to="{ path: '/register', query: { target: $route.query.target } }"
        class="right"
        replace
        >注册账号</router-link
      >
    </div>
  </div>
</template>

<script>
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      userManage
        .login(this.username, this.password)
        .then(() => {
          this.$router.replace(this.$route.query.target || '/');
        })
        .catch((error) => {
          console.log(error.request);
        });
    },
  },
  created() {
    if (navigator.userAgent.toLowerCase().includes('micromessenger')) {
      const url = encodeURIComponent(`${window.location.origin}/wx-login`);
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2cf320b044e9b937&redirect_uri=${
        url
      }&response_type=code&scope=snsapi_userinfo#wechat_redirect`;
    }
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}
.logo {
  margin: 24.67vw auto 0;
  width: 40.53vw;
  img {
    width: 100%;
  }
}
.import-box {
  padding: 0 5.33vw;
  margin-top: 6.8vw;
  .item {
    border-bottom: solid thin #eee;
    height: 13.6vw;
    padding-left: 3.2vw;
    box-sizing: border-box;
    input {
      height: 99%;
      width: 100%;
      box-sizing: border-box;
      font-size: 3.2vw;
      &::placeholder {
        color: #bbb;
      }
    }
  }
}
.submit-but {
  border-radius: 5.87vw;
  line-height: 11.73vw;
  width: 89.33vw;
  text-align: center;
  background-color: #f84e4e;
  color: #ffffff;
  margin: 3.87vw auto 0;
  display: block;
}
.submit-above,
.submit-under {
  display: flex;
  justify-content: space-between;
  padding: 0 10.67vw 0 6.53vw;
  font-size: 3.47vw;
  color: #bbb;
  margin-top: 3.87vw;
}
</style>
