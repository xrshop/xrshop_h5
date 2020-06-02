<template>
  <div class="menu-fruit">
    <TitleBar title="新鲜水果" canBack />
    <div class="banner"></div>
    <MenuList :list="item" bgColor="#FCC400"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          id: 0, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 1, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 2, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
        {
          id: 3, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3750666341,463573211&fm=26&gp=0.jpg', title: '牛油果', label: '满100减10元', money: 178,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-fruit {
  background-color: #F6F6F6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #FCC400;
  .left svg path {
    fill: #fff;
  }
  .center {
    color: #fff;
  }
}
.banner {
  width: 100vw;
  height: 53.87vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  background-image: url('~@/assets/MenuView/tu.png');
}
.menu-list {
  margin-top: 0.93vw;
}
</style>
