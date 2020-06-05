<template>
  <div class="register">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt />
    </div>
    <div class="import-box">
      <div class="item">
        <div class="text">+86</div>
        <input type="number" placeholder="请输入手机号码" maxlength="11" v-model="phone" />
      </div>
      <div class="item">
        <input type="null" placeholder="请输入验证码" maxlength="6" v-model="verify" />
        <div class="verify" @click="onVerify">{{verifyText}}</div>
      </div>
      <div class="item">
        <input type="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="submit-but">注册</div>
    <div class="submit-under">
      <div class="left"></div>
      <div class="right">已有账号,去登陆</div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
  data() {
    return {
      phone: null,
      verify: null,
      verifyText: '获取验证码',
      initial: 60,
      count: 60,
      isClick: true,
    };
  },
  methods: {
    onVerify() {
      if (this.isClick === false) return;
      Axios.post('/api/register/verify', {
        phone: this.phone,
        type: '',
      }).then((response) => {
        if (response.status === 200) {
          this.isClick = false;
          console.log(response.data);
          this.countDown();
        }
      });
    },
    countDown() {
      // eslint-disable-next-line no-plusplus
      this.count--;
      this.verifyText = `重新获取 (${String(this.count).padStart(2, '0')})`;
      if (this.count === 0) {
        this.isClick = true;
        this.verifyText = '获取验证码';
        this.count = this.initial;
        return;
      }
      setTimeout(() => {
        this.countDown();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
  padding: 0;
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
    padding: 0 3.2vw;
    display: flex;
    align-items: center;
    &:first-of-type {
      height: 11.73vw;
    }
    &:nth-of-type(2) {
      height: 15vw;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      font-size: 3.2vw;
      min-width: 0;
      &::placeholder {
        color: #bbb;
      }
    }
    .verify {
      flex-shrink: 0;
      font-size: 2.67vw;
      color: #666;
      line-height: 6.4vw;
      width: 21.2vw;
      text-align: center;
      border: solid var(--px) #f84e4e;
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
  background-color: #f84e4e;
  color: #ffffff;
  margin: 6.27vw auto 0;
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
