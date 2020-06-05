<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt="">
    </div>
    <div class="import-box">
      <div class="item">
        <input type="text" placeholder="请输入账户名">
      </div>
      <div class="item">
        <input type="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="submit-above">
      <div class="left"></div>
      <div class="right">忘记密码</div>
    </div>
    <div class="submit-but">登陆</div>
    <div class="submit-under">
      <div class="left">手机号码登录</div>
      <router-link to="/register" class="right" >注册账号</router-link>
    </div>
  </div>
</template>

<script>
export default {

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
  background-color: #F84E4E;
  color: #ffffff;
  margin: 3.87vw auto 0;
}
.submit-above,.submit-under {
  display: flex;
  justify-content: space-between;
  padding: 0 10.67vw 0 6.53vw;
  font-size: 3.47vw;
  color: #bbb;
  margin-top: 3.87vw;
}
</style>
