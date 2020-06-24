<template>
  <div class="address-management">
    <TitleBar v-show="this.$route.query.id" title="编辑地址" canBack />
    <TitleBar v-show="!this.$route.query.id" title="添加地址" canBack />
      <form class="list" onsubmit="return false" action ref="form">
      <div class="list_row">
        <label>收货人</label>
        <input
          type="text"
          placeholder="填写收货人姓名"
          v-model="realName"
          ref="realName"
          maxlength="15"
          value="listInfo.realName"
        />
      </div>
      <div class="list_row">
        <label>手机号码</label>
        <input
          type="text"
          placeholder="请填写收货人手机号"
          v-model.number="phone"
          ref="phone"
          maxlength="11"
        />
      </div>
      <div class="list_row">
        <label>邮政编码</label>
        <input
          type="text"
          placeholder="请填写邮政编码"
          v-model.number="postCode"
          ref="postCode"
          maxlength="6"
        />
      </div>
      <div class="list_row">
        <label>所在地区</label>
        <SelectAddress v-model="address" :default="defaultAddress"></SelectAddress>
      </div>
      <div class="list_row detailaddress">
        <label>详细地址</label>
        <textarea cols="30" rows="10" placeholder="街道、楼盘号等等" v-model="detail"  ref="detail" >
        </textarea>
      </div>
      <div class="line"></div>
      <div class="default">
        <div>设为默认地址</div>
        <label class="ui-switch">
          <input type="checkbox" value="1" v-model="isDefault" @click="test"/>
        </label>
     </div>
       <button class="add-button" @click="onSubmit">保存</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
import userManage from '@/modules/user-manage';
import checkRules, { isRealName, isPhone, isPostCode } from '@/utils/check';

export default {
  data() {
    return {
      id: '',
      country: '',
      defaultAddress: {
        province: '',
        city: '',
        district: '',
      },
      address: {
      },
      realName: '',
      phone: '',
      postCode: '',
      detail: '',
      listInfo: '',
      isDefault: 0,
      realnameRules: [(v) => !!v || '填写收货人姓名', (v) => isRealName(v) || '请填写中文姓名'],
      phoneRules: [(v) => !!v || '填写手机号码', (v) => isPhone(v) || '请填正确的手机号码'],
      postcodeRules: [(v) => !!v || '填写邮政编码', (v) => isPostCode(v) || '请填正确的邮政编码'],
      detailRules: [
        (v) => !!v || '详细地址不能为空',
        (v) => (v.length >= 1 && v.length <= 255) || '详细地址不能超过255个字符',
      ],
    };
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      axios.get(`/api/address/detail/${this.$route.query.id}`, { headers: { Authorization: userManage.data.token } })
        .then((response) => {
          this.listInfo = response.data.data;
          this.realName = this.listInfo.realName;
          this.phone = this.listInfo.phone;
          this.postCode = this.listInfo.postCode;
          this.detail = this.listInfo.detail;
          this.isDefault = this.listInfo.isDefault;
          this.defaultAddress = this.listInfo;
        });
    }
  },
  methods: {
    test() {
      this.isDefault = !this.isDefault;
      console.log(this.isDefault);
    },
    onSubmit() {
      if (!checkRules(this.realName, this.realnameRules, this.$refs.realName)) return;
      if (!checkRules(this.phone, this.phoneRules, this.$refs.phone)) return;
      if (!checkRules(this.postCode, this.postcodeRules, this.$refs.postCode)) return;
      if (!checkRules(this.detail, this.detailRules, this.$refs.detail)) return;
      axios.post('/api/address/edit', {
        address: {
          city: this.address.city,
          district: this.address.district,
          province: this.address.province,
        },
        realName: this.realName,
        phone: this.phone,
        detail: this.detail,
        isDefault: this.isDefault,
        postCode: this.postCode,
        id: this.id,
      },
      {
        headers: {
          Authorization: userManage.data.token,
        },
      }).then((response) => {
        alert(response.data.msg);
        if (!this.$route.query.id) {
          this.realName = '';
          this.phone = '';
          this.detail = '';
          this.isDefault = '';
          this.postCode = '';
        }
      })
        .catch((msg) => {
          alert(msg);
        });
    },
  },

};
</script>

<style lang="scss" scoped>
.list {
  box-shadow: 0 -5px 3px #aaa;
  .list_row {
    width: 90vw;
    margin: 0 5vw;
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
      font-family: "微软雅黑";
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
  .line{
    height: 1.33vw ;
    width: 100vw;
    background-color: #f6f6f6;
  }
  .detailaddress {
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
      font-family: "微软雅黑";
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
      border: 1px solid #f6f6f6;
      background-color: #f6f6f6;
      border-radius: 3vw;
      cursor: pointer;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      border-color: #f6f6f6;
      -webkit-box-shadow: #f6f6f6 0 0 0 0 inset;
      box-shadow: #f6f6f6 0 0 0 0 inset;
      -webkit-transition: border 0.4s, -webkit-box-shadow 0.4s;
      transition: border 0.4s, box-shadow 0.4s;
      -webkit-background-clip: content-box;
      background-clip: content-box;
      left: 0vw;
    }
    input:checked:before {
      border-color: #64bd63;
      -webkit-box-shadow: #64bd63 0 0 0 0.16vw inset;
      box-shadow: #64bd63 0 0 0 0.16vw inset;
      background-color: #64bd63;
      transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;
      -webkit-transition: border 0.4s, -webkit-box-shadow 0.4s,
        background-color 1.2s;
      background-color: #64bd63;
    }
    input:checked:after {
      left:9vw;
    }
    input:after {
      content: "";
      width: 6.67vw;
      height: 6.67vw;
      position: absolute;
      top: -0.25vw;
      left: 0vw;
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
  width: 90vw;
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
  border: none;
  cursor: pointer;
  outline: none;
}
.add-button :focus{outline:0;}

</style>
