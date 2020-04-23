<template>
  <div class="login-phone">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt="">
    </div>
    <div class="import-box">
      <div class="item">
         <div class="text">+86</div>
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="item">
        <input type="text" placeholder="请输入验证码">
        <div class="verify">获取验证码</div>
      </div>
    </div>
    <div class="submit-but">登陆</div>
    <div class="submit-under">
      <div class="left">账号密码登录</div>
      <div class="right">注册账号</div>
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
    height: 13.6vw;
    display: flex;
    align-items: center;
    padding: 0 3.2vw;
    box-sizing: border-box;
    &:nth-of-type(2) {
      height: 15.2vw;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      font-size: 3.2vw;
      &::placeholder {
        color: #bbb;
        min-width: 0;
      }
    }
    .verify {
      flex-shrink: 0;
      font-size: 2.67vw;
      color: #666;
      line-height: 6.4vw;
      width: 21.2vw;
      text-align: center;
      border: solid var(--px) #F84E4E;
      border-radius: 3.2vw;
    }
    .text {
      margin-right: 5.47vw;
      font-size: 4vw;
      color: #bbb;
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
  margin: 5.33vw auto 0;
}
.submit-under {
  display: flex;
  justify-content: space-between;
  padding: 0 10.67vw 0 6.53vw;
  font-size: 3.47vw;
  color: #bbb;
  margin-top: 3.87vw;
}
</style>
