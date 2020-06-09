<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt />
    </div>
    <form action ref="form">
      <div class="import-box">
        <div class="item">
          <input type="text" placeholder="请输入账户名" required v-model="username" />
        </div>
        <div class="item">
          <input type="password" placeholder="请输入密码" required minlength="6" v-model="password" />
        </div>
      </div>
      <div class="submit-above">
        <div class="left"></div>
        <div class="right">忘记密码</div>
      </div>
      <div class="submit-but" @click="onSubmit">登陆</div>
    </form>
    <div class="submit-under">
      <div class="left">手机号码登录</div>
      <router-link
        :to="{ path: '/register', query: { target: $route.query.target } }"
        class="right"
        replace
      >注册账号</router-link>
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
      if (!this.$refs.form.reportValidity()) return;
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
    border-bottom: solid var(--px) #eee;
    line-height: 13.6vw;
    padding-left: 3.2vw;
    box-sizing: border-box;
    input {
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
