<template>
  <div class="address-management">
    <TitleBar title="地址管理" canBack />
    <div class="list">
      <div class="cell" v-for="addressItem of addressList" :key="addressItem.id">
        <div class="left">
          <div class="top row">
            <div class="name">{{ addressItem.name }}</div>
            <div class="phone">{{ addressItem.phone | phoneMask}}</div>
            <div class="is-default" v-if="addressItem.isDefault">默认</div>
          </div>
          <div class="bottom">
            <div class="address">{{ addressItem.address }}</div>
          </div>
        </div>
        <div class="right">
          <div class="edit-button"></div>
        </div>
      </div>
    </div>
    <div class="add-button">添加新地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: [
        {
          id: 0,
          name: '马三刀',
          phone: '18377886644',
          address: '台湾省台北市中山区解放路 世荣滨江花园B21栋323户',
          isDefault: true,
        },
        {
          id: 1,
          name: '赵灵奇',
          phone: '18377886644',
          address: '台湾省台北市中山区五一大道167号 石兰小区A2栋362户',
          isDefault: false,
        },
        {
          id: 2,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 3,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 4,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 5,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 6,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 7,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 8,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
        {
          id: 9,
          name: '霍煜煜',
          phone: '+86 18377886644',
          address: '台湾省台北市中山区人民东路一段69号 人民小学',
          isDefault: false,
        },
      ],
    };
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
  height: 18.53vw;
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
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
    .edit-button {
      width: 4.27vw * 2;
      height: 4.27vw * 2;
      margin-right: -4.27vw * 0.5;
      background-image: url("~@/assets/AddressManagement/edit-button.png");
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
