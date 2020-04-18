<template>
  <div class="setting">
    <TitleBar title="设置" canBack />
    <div class="list-box">
      <div class="item">
        <div class="left">微信绑定</div>
        <div class="right">已绑定</div>
      </div>
      <div class="item">
        <div class="left">支付宝绑定</div>
        <div class="right">未绑定</div>
      </div>
      <div class="item">
        <div class="left">实名认证</div>
        <div class="right">未认证</div>
      </div>
    </div>
    <div class="list-box">
      <div class="item">
        <div class="left">修改密码</div>
        <div class="right"></div>
      </div>
      <div class="item">
        <div class="left">修改手机号</div>
        <div class="right">134****4365</div>
      </div>
    </div>
    <div class="out-login">退出登陆</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.setting {
  background-color: #F5F5F5;
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
      content: '›';
      position: absolute;
      right: 0;
      font-size: 4vw;
      color: #aEaEaE;
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
  background: rgba(255,255,255,1);
  border-radius: 5.87vw;
  margin: 59.33vw auto 0;
  text-align: center;
  position: sticky;
  bottom: 14.67vw;
  color: #bbb;
  font-size: 4vw;
}
</style>
