<template>
  <div class="menu-vegetable">
    <TitleBar title="生鲜时蔬" canBack />
    <div class="bg-block"></div>
    <div class="banner"></div>
    <MenuList :list="item" bgColor="#43D105" isClick @menu-click="buyClick" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          id: 0, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2161396115,3539332695&fm=26&gp=0.jpg', title: '奶包菜', label: '满100减10元', money: 178,
        },
        {
          id: 1, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2161396115,3539332695&fm=26&gp=0.jpg', title: '奶包菜', label: '满100减10元', money: 178,
        },
        {
          id: 2, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2161396115,3539332695&fm=26&gp=0.jpg', title: '奶包菜', label: '满100减1元', money: 178,
        },
        {
          id: 3, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2161396115,3539332695&fm=26&gp=0.jpg', title: '奶包菜', label: '满100减10元', money: 178,
        },
      ],
    };
  },
  methods: {
    buyClick(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-vegetable {
  background-color: #F6F6F6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #43D105;
  .left svg path {
    fill: #fff;
  }
  .center {
    color: #fff;
  }
}
.bg-block {
  position: absolute;
  height: 43.93vw;
  width: 100%;
  top: 0;
  background-color: #43D105;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -3vw;
    height: 6vw;
    width: 100%;
    background-color: #43D105;
    border-radius: 0 0 50% 50%;
  }
}
.banner {
  position: relative;
  width: 92vw;
  height: 40vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url('~@/assets/MenuView/tu1.png');
  margin: 3.47vw auto 0;
  z-index: 1;
}
.menu-list {
  margin-top: 2.67vw;
}
</style>
