<template>
  <div class="change-phone">
    <TitleBar title="修改手机" canBack />
    <div class="list-box">
      <div class="item">
        <div class="left">当前手机号</div>
        <div class="right">
          <input type="text" placeholder="请输入当前手机号" maxlength="11">
        </div>
      </div>
      <div class="item">
        <div class="left">新手机号</div>
        <div class="right">
          <input type="text" placeholder="请输入新手机号" maxlength="11">
        </div>
      </div>
      <div class="item">
        <div class="left">验证码</div>
        <div class="right">
          <input type="text" placeholder="请输入验证码" maxlength="6">
          <div class="verify-but">获取验证码</div>
        </div>
      </div>
    </div>
    <div class="submit-but">确定修改</div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
input{
  outline: none;
  border: none;
}
.change-phone {
  background-color: #f5f5f5;
}
.list-box {
  margin-top: 1.33vw;
  background: #fff;
  padding: 0 5.2vw;
  .item {
    display: flex;
    align-items: center;
    height: 14.4vw;
    border-top: solid #eee var(--px);
    &:first-of-type {
      border: none;
    }
    .left {
      width: 29vw;
      font-size: 4vw;
      flex-shrink: 0;
    }
    .right {
      display: flex;
      width: 100%;
      align-items: center;
      input {
        font-size: 4vw;
        min-width: 0;
        height: 100%;
        &::-webkit-input-placeholder {
          color: #bbb;
        }
      }
      .verify-but {
        border-radius: 3.73vw;
        border: solid var(--px) #f84e4e;
        padding: 2.13vw 3.2vw;
        font-size: 3.2vw;
        flex-shrink: 0;
      }
    }
  }
}
.submit-but {
  width: 89.47vw;
  line-height: 11.73vw;
  background: rgba(255,255,255,1);
  border-radius: 5.87vw;
  color: #bbb;
  text-align: center;
  margin: 36.8vw auto 10.33vw;
}
</style>
