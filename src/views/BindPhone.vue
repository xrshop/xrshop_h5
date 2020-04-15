<template>
  <div class="bind-phone">
    <TitleBar title="绑定手机号" canBack />
    <div class="list">
      <div class="item">
        <div class="title">输入手机号码</div>
        <div class="form-box">
          <input
          type="text"
          class="input-import"
          placeholder="请输入手机号码"
          v-model.number="tel"
          @input="inputNumber"
          maxlength="11"
          />
        </div>
      </div>
      <div class="item">
        <div class="title">短信验证码</div>
        <div class="form-box">
          <input
          type="text"
          class="input-import"
          v-model="verify"
          placeholder="请输入短信验证码"
          maxlength="6"
          />
          <div
          class="but-verify"
          :class="{'style-tow':isTime}"
          @click="verifyClick"
        >
          {{verifyText}}
        </div>
        </div>
      </div>
    </div>
    <div class="but-submit">
      <span class="text" :style="{'opacity': `${isSubmit ? 1 : 0.5}`}">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: null,
      verify: null,
      count: 15,
      isTime: false,
      verifyText: '获取验证码',
      isClick: true,
      isSubmit: false,
    };
  },
  methods: {
    countDown() {
      // eslint-disable-next-line no-plusplus
      this.count--;
      this.verifyText = `重新获取 (${String(this.count).padStart(2, '0')})`;
      if (this.count === 0) {
        this.isClick = true;
        this.isTime = false;
        this.verifyText = '获取验证码';
        this.count = 15;
        return;
      }
      setTimeout(() => {
        this.countDown();
      }, 1000);
    },
    verifyClick() {
      if (!this.isClick) return;
      this.isClick = false;
      this.isTime = true;
      this.countDown();
    },
    inputNumber(e) {
      e.target.value = String(e.target.value).replace(/[^\d]/g, '');
    },
  },
  computed: {
    fillOver() {
      const { tel, verify } = this;
      return {
        tel,
        verify,
      };
    },
  },
  watch: {
    fillOver(e) {
      if (e.tel && e.verify) {
        this.isSubmit = true;
      } else {
        this.isSubmit = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}
.bind-phone {
  background-color: #f5f5f5;
}
.list {
  padding-top: 5.2vw;
  .item {
    padding: 0 5.2vw;
    margin-bottom: 8vw;
    .title {
      font-size: 4vw;
    }
    .form-box {
      margin-top: 4.1vw;
      display: flex;
      .input-import {
        padding: 4vw;
        flex-grow: 1;
        flex-shrink: 1;;
        background: #fff;
        box-sizing: border-box;
        font-size: 4vw;
        min-width: 40vw;
        &::placeholder {
          color: #bbbbbb;
        }
      }
      .but-verify {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 37.33vw;
        border-radius: 0.8vw;
        flex-shrink: 0;
        background-color: #F84E4E;
        margin-left: 2.67vw;
        font-size: 4vw;
        color: #fff;
        &.style-tow {
          background-color: #DDDDDD;
          color: #BBBBBB;
        }
      }
    }
  }
}
.but-submit {
  width: 89.47vw;
  line-height: 11.73vw;
  background: rgba(248,78,78,1);
  text-align: center;
  border-radius: 0.8vw;
  margin: 13.6vw auto 0;
  .text {
    font-size: 4vw;
    color: #fff;
  }
}
</style>
