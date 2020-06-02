<template>
  <div class="menu-contend" @scroll="onScroll" :class="{ 'is-top': isTop }">
    <TitleBar title="超值抢购" canBack />
    <div class="banner">
      <div class="text1">超值抢购</div>
      <div class="text2">省钱有绝招 实惠好选择</div>
    </div>
    <div class="tab-box">
      <div class="bg-top"></div>
      <div class="bg-bottom"></div>
      <div class="tab-list">
        <div
        class="cell"
        v-for="(item,index) in tab"
        :key="index"
        :class="{'active': active === index}"
        @click="active = index"
        >
          {{item}}
        </div>
      </div>
   </div>
    <MenuList :list="item" bgColor="#FF5058"/>
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
      isTop: true,
      active: 0,
      tab: ['优惠抢购', '今日热抢', '明日预告'],
    };
  },
  methods: {
    onScroll(e) {
      this.isTop = e.target.scrollTop < 30;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-contend {
  background-color: #F6F6F6;
}
.title-bar::v-deep {
  position: fixed;
  background-color: rgba($color: #FF5058, $alpha: 1);
  transition-property: background-color;
  transition-duration: 0.36s;
  width: 100vw;
  backdrop-filter: none;
  color: #fff;
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
    svg path {
      fill: #fff;
    }
  }
  .center {
    transition-duration: 0.26s;
    opacity: 1;
   }
}
.is-top .title-bar::v-deep {
   background-color: rgba($color: #FF5058, $alpha: 0);
   .center {
     opacity: 0;
   }
}
.banner {
  width: 100vw;
  height: 44.1vw;
  background-image: url('~@/assets/MenuView/tu2.png');
  background-repeat: no-repeat;
  background-size: 101%;
  background-position: -0.2vw center;
  .text1 {
    font-size: 10.59vw;
    margin-top: 16.8vw;
    width: 100%;
    display: inline-block;
    text-align: center;
    color: #fff;
  }
  .text2 {
    text-align: center;
    margin-top: 1.6vw;
    color: #fff;
    font-size: 3.73vw;
  }
}
.tab-box {
  position: relative;
  top: -2vw;
  background-image: linear-gradient(to right, #ff5d64 , #FF5058);
  .bg-top,.bg-bottom {
    position: absolute;
  }
  .bg-top {
    background-color: #E6333B;
    width: 92vw;
    left: 4vw;
    height: 8vw;
  }
  .bg-bottom {
    background-color: #ffffff;
    bottom: 0;
    width: 92vw;
    left: 4vw;
    height: 5vw;
  }
  .tab-list {
    position: relative;
    display: flex;
    .cell {
      line-height: 15.2vw;
      text-align: center;
      flex: 1;
      background-color: #E6333B;
      border-radius: 4vw;
      font-size: 4.8vw;
      color: rgba($color: #ffffff, $alpha: 0.5);
      &:first-of-type {
        border-radius: 4vw 4vw 4vw 0;
      }
      &:last-of-type {
        border-radius: 4vw 4vw 0 4vw;
      }
      &.active {
        background-color: #ffffff;
        font-size: 4.8vw;
        font-weight: bold;
        color: #E6333B;
      }
    }
  }
}
.menu-list {
  margin-top: 2.67vw;
}
</style>
