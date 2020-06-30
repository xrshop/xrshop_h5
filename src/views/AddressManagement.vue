/* eslint-disable no-alert */
<template>
  <div class="address-management">
    <TitleBar title="地址管理" canBack />
    <div class="list">
      <div class="cell" v-for="item of addressList" :key="item.id">
        <div class="left">
          <div class="top row">
            <div class="name">{{ item.realName }}</div>
            <div class="phone">{{ item.phone | phoneMask}}</div>
            <div class="is-default" v-if="item.isDefault">默认</div>
          </div>
          <div class="bottom">
            <div class="address">
              {{ item.province }}{{ item.city }}{{ item.district }}{{ item.detail }}
            </div>
          </div>
        </div>
        <div class="right">
          <router-link class="edit-button" :to="{ path: '/add-region', query: { id: item.id } }">
          </router-link>
          <div class="delete-button" @click="del(item)"></div>
        </div>
      </div>
    </div>
    <router-link to="/add-region" class="add-button">添加新地址</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      addressList: null,
    };
  },
  methods: {
    del(item) {
      alert('是否删除该地址?');
      this.addressList.splice(this.addressList.indexOf(item), 1);
      axios.post('/api/address/del', { id: item.id }, { headers: { Authorization: userManage.data.token } }).then((response) => {
        alert(response.data.msg);
      }).catch((msg) => { alert(msg); });
    },
  },
  created() {
    axios.get('/api/address/list', { headers: { Authorization: userManage.data.token } }).then((response) => {
      this.addressList = response.data.data;
    });
  },
  filters: {
    phoneMask(value) {
      return value.replace(/(\w{3})(\d+)(\d{2})/g, '$1******$3');
    },
  },
};


</script>

<style lang="scss" scoped>
.address-management {
  display: flex;
  flex-direction: column;
}
.title-bar {
  box-shadow: 0 0 1vw 0 rgba($color: #000000, $alpha: 0.08);
}
.list {
  margin-bottom: auto;
}
.cell {
  display: flex;
  min-height: 18.53vw;
  position: relative;
  padding: 0 5.2vw;
  &::before {
    content: "";
    display: block;
    width: 89.47vw;
    height: var(--px);
    background-color: #eee;
    position: absolute;
    bottom: 0;
    left: (100vw - 89.47vw) * 0.5;
  }
  .top {
    margin-top: 3.87vw;
    .name {
      font-size: 4vw;
      font-weight: bold;
    }
    .phone {
      font-size: 4vw;
      margin-left: 8.67vw;
      font-weight: bold;
    }
    .is-default {
      margin-left: 0.8vw;
      height: 3.47vw;
      padding: 0 0.93vw;
      display: flex;
      align-items: center;
      font-size: 2.67vw;
      color: #f84e4e;
      background-color: #ffdcdc;
    }
  }
  .bottom {
    margin-top: 3.87vw;
    .address {
      font-size: 3.2vw;
      line-height: 2;
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
    .edit-button {
      width: 4.27vw * 2;
      height: 4.27vw * 2;
      background-image: url("~@/assets/AddressManagement/edit-button.png");
      background-size: 4.27vw;
      background-position: center;
      background-repeat: no-repeat;
    }
    .delete-button {
      width: 4.27vw * 2;
      height: 4.27vw * 2;
      margin-right: -4.27vw * 0.5;
      background-image: url("~@/assets/AddressManagement/delete.png");
      background-size: 4.27vw;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
.add-button {
  width: 89.47vw;
  height: 11.73vw;
  border-radius: 11.73vw * 0.5;
  margin: 5.33vw auto;
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
