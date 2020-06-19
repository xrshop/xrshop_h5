<template>
  <div class="address-management">
    <TitleBar title="添加地址" canBack />
    <div class="list">
      <div class="list_row">
        <label>收货人</label>
        <input type="text" placeholder="请填写收货人姓名" />
      </div>
      <div class="list_row">
        <label>手机号码</label>
        <input type="text" placeholder="请填写收货人手机号" maxlength="11" />
      </div>
      <div class="list_row">
        <label>所在地区</label>
        <input type="text" placeholder="省市区县、乡镇等" />
      </div>
      <div class="list_row">
        <label>详细地址</label>
        <textarea cols="30" rows="10" placeholder="街道、楼盘号等等"></textarea>
      </div>
    </div>
    <div class="default">
      <div>设为默认地址</div>
      <label class="ui-switch">
        <input type="checkbox" checked="" />
      </label>
    </div>
    <div class="add-button">保存</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.list {
  border-bottom: 1.33vw solid #f6f6f6;
box-shadow:  0 -5px 3px #aaa;
  .list_row {
    width: 89.6vw;
    margin: 0 5.2vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    height: 14vw;
    line-height: 14vw;
    label {
      display: block;
      width: 17vw;
      flex-shrink: 0;
      font-size: 3.73vw;
      color: #333333;
      font-family: '微软雅黑';
    }
    input {
      border: 0;
      display: block;
      width: 100%;
      outline: none;
      font-size: 3.73vw;
      text-indent: 2vw;
    }
  }
  .list_row:last-child {
    display: flex;
    align-items: baseline;
    border-bottom: 0px;
    padding-bottom: 5vw;
    height: 20vw;
    textarea {
      height: 12vw;
      margin: 2vw !important;
      outline: none;
      border: 0;
      width: 100%;
      display: block;
      resize: none;
      font-size: 3.73vw;
      font-family: '微软雅黑';
    }
  }
}
.default {
  display: flex;
  justify-items: center;
  width: 89.47vw;
  margin: 5.33vw auto;
  position: relative;
  font-size: 3.73vw;
  color: #333333;
  /*表单开关样式*/
  .ui-switch {
    position: absolute;
    font-size: 0.16vw;
    right: 0vw;
    top: -1.8vw;
    margin-top: -0.16vw;
    width: 15.07vw;
    height: 5.33vw;
    line-height: 5.33vw;
    input {
      width: 15.07vw;
      height: 5.33vw;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      border: 0;
      background: 0 0;
      -webkit-appearance: none;
      outline: 0;
    }
    input:before {
      content: "";
      width: 15.07vw;
      height: 5.33vw;
      border: 1px solid #64bd63;
      background-color: #64bd63;
      border-radius: 3vw;
      cursor: pointer;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      border-color: #64bd63;
      -webkit-box-shadow: #64bd63 0 0 0 0 inset;
      box-shadow: #64bd63 0 0 0 0 inset;
      -webkit-transition: border 0.4s, -webkit-box-shadow 0.4s;
      transition: border 0.4s, box-shadow 0.4s;
      -webkit-background-clip: content-box;
      background-clip: content-box;
    }
    input:checked:before {
      border-color: #f6f6f6;
      -webkit-box-shadow: #f6f6f6 0 0 0 0.16vw inset;
      box-shadow: #f6f6f6 0 0 0 0.16vw inset;
      background-color: #f6f6f6;
      transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;
      -webkit-transition: border 0.4s, -webkit-box-shadow 0.4s,
        background-color 1.2s;
      background-color: #f6f6f6;
    }
    input:checked:after {
      left: 0.4vw;
    }
    input:after {
      content: "";
      width: 6.67vw;
      height: 6.67vw;
      position: absolute;
      top: -0.25vw;
      left: 9vw;
      border-radius: 100%;
      background-color: #fff;
      -webkit-box-shadow: 0 0.01vw 0.03vw rgba(0, 0, 0, 0.4);
      box-shadow: 0 0.01vw 0.03vw rgba(0, 0, 0, 0.4);
      -webkit-transition: left 0.2s;
      transition: left 0.2s;
    }
  }
}
.add-button {
  width: 89.6vw;
  height: 11.73vw;
  border-radius: 11.73vw * 0.5;
  margin: 15vw auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f84e4e;
  color: #fff;
  font-size: 4vw;
  flex-shrink: 0;
  position: sticky;
  bottom: 5.33vw;
}
</style>
