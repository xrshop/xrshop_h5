<template>
  <div class="setting">
    <TitleBar title="设置" canBack />
    <div class="list-box">
      <router-link to class="item">
        <div class="left">微信绑定</div>
        <div class="right">已绑定</div>
      </router-link>
      <router-link to="/bind-alipay" class="item">
        <div class="left">支付宝绑定</div>
        <div class="right">未绑定</div>
      </router-link>
      <router-link to="/certification" class="item">
        <div class="left">实名认证</div>
        <div class="right">未认证</div>
      </router-link>
    </div>
    <div class="list-box">
      <router-link to="/change-password" class="item">
        <div class="left">修改密码</div>
        <div class="right"></div>
      </router-link>
      <router-link to="/change-phone" class="item">
        <div class="left">修改手机号</div>
        <div class="right">{{user.phone | phoneMask}}</div>
      </router-link>
    </div>
    <div class="out-login" @click="outLogin">退出登陆</div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      user: [],
    };
  },
  created() {
    axios.get('/api/userinfo', { headers: { Authorization: userManage.data.token } })
      .then((response) => {
        this.user = response.data.data;
        console.log(this.user);
      });
  },
  methods: {
    outLogin() {
      userManage.logout();
      this.$router.replace('/login');
    },
  },
  filters: {
    phoneMask(value) {
      return value.replace(/(\w{3})(\d+)(\d{2})/g, '$1******$3');
    },
  },
};
</script>

<style lang="scss" scoped>
.setting {
  background-color: #f5f5f5;
}
.list-box {
  margin-top: 1.33vw;
  padding: 0 5.2vw;
  background-color: #fff;
  .item {
    height: 14.4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid #eee var(--px);
    position: relative;
    padding-right: 2.4vw;
    &:last-of-type {
      border: none;
    }
    &::after {
      content: "›";
      position: absolute;
      right: 0;
      font-size: 4vw;
      color: #aeaeae;
    }
    .left {
      font-size: 4vw;
    }
    .right {
      font-size: 3.2vw;
      color: #bbb;
    }
  }
}
.out-login {
  width: 89.47vw;
  line-height: 11.73vw;
  background: rgba(255, 255, 255, 1);
  border-radius: 5.87vw;
  margin: 59.33vw auto 0;
  text-align: center;
  position: sticky;
  bottom: 14.67vw;
  color: #bbb;
  font-size: 4vw;
}
</style>
