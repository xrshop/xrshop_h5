<template>
  <div class="register">
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt />
    </div>
    <form action ref="form">
      <div class="import-box">
        <div class="item">
          <div class="text">+86</div>
          <input
            type="tel"
            placeholder="请输入手机号码"
            maxlength="11"
            v-model="phone"
            required
            ref="phone"
          />
        </div>
        <div class="item">
          <input
            type="text"
            placeholder="请输入验证码"
            required
            minlength="6"
            maxlength="6"
            v-model="verify"
            oninvalid="setCustomValidity('请输入6位数验证码')"
            oninput="setCustomValidity('')"
          />
          <div class="verify" @click="onVerify">
            <template v-if="isClick">获取验证码</template>
            <template v-else>重新获取 ({{ count }}s)</template>
          </div>
        </div>
        <div class="item">
          <input
            type="password"
            placeholder="请输入密码"
            minlength="6"
            required
            v-model="password"
          />
        </div>
      </div>
      <div class="submit-but" @click="onSubmit">注册</div>
      <div class="submit-under">
        <div class="left"></div>
        <router-link
          :to="{ path: '/login', query: { target: $route.query.target } }"
          class="right"
          replace
          >已有账号,去登陆</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-alert */
import Axios from 'axios';

export default {
  data() {
    return {
      phone: null,
      verify: null,
      password: null,
      count: 0,
    };
  },
  computed: {
    isClick() {
      return this.count === 0;
    },
  },
  methods: {
    onVerify() {
      if (!this.isClick) return;
      if (!this.$refs.phone.reportValidity()) return;
      Axios.post('/api/register/verify', { phone: this.phone })
        .then((response) => {
          this.$hint(response.data.msg);
          this.count = 60;
          const timer = setInterval(() => {
            this.count -= 1;
            if (!this.count) clearInterval(timer);
          }, 1000);
        })
        .catch((msg) => {
          this.$hint(msg);
        });
    },
    onSubmit() {
      if (!this.$refs.form.reportValidity()) return;
      Axios.post('/api/register', {
        account: this.phone,
        captcha: this.verify,
        password: this.password,
      })
        .then((response) => {
          this.$hint(response.data.msg);
        })
        .catch((msg) => {
          //  this.$hint(msg);
        });
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
    border-bottom: solid thin #eee;
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
      border: solid thin #f84e4e;
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
