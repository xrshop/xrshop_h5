<template>
  <div class="menu-recommend">
    <TitleBar title="为你推荐" canBack />
    <div class="bg-block"></div>
    <div class="banner">
      <div class="tab-box">
        <div
        class="cell"
        :class="{active: tabIndex === item.id}"
        v-for="item in tabList"
        :key="item.id"
        @click="tabIndex = item.id"
        >
          {{item.title}}
        </div>
      </div>
      <div class="content-box">
        <div class="left">
          <div class="theme">{{contentData.events.theme}}</div>
          <div class="text1">{{contentData.events.text1}}</div>
          <div class="text2">{{contentData.events.text2}}</div>
          <div class="less-img">
            <img v-for="(img, index) in contentData.events.lessImg" :key="index" :src="img" alt="">
          </div>
        </div>
        <div
        class="cover"
        :style="{'background-image': `url(${contentData.events.primaryImg})`}">
        </div>
      </div>
    </div>
    <MenuList :list="contentData.product" bgColor="#FF5058"/>
  </div>
</template>

<script>
import { recommendList, recommendMap } from '@/config/meta/menu-recommend';

export default {
  data() {
    return {
      tabList: recommendList,
      tabIndex: 1,
    };
  },
  computed: {
    contentData() {
      return recommendMap[this.tabIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-recommend {
  background-color: #F6F6F6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #FF5058;
  .left svg path {
    fill: #fff;
  }
  .center {
    color: #fff;
  }
}
.bg-block {
  position: absolute;
  height: 47.2vw;
  width: 100%;
  top: 0;
  background-color: #FF5058;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -3vw;
    height: 6vw;
    width: 100%;
    background-color: #FF5058;
    border-radius: 0 0 50% 50%;
  }
}
.banner {
  width: 100vw;
  position: relative;
  z-index: 1;
  .tab-box {
    margin: 4.67vw 5.47vw 2.53vw;
    display: flex;
    overflow: scroll;
    align-items: flex-end;
    .cell {
      margin-right: 4vw;
      flex-shrink: 0;
      font-size: 3.2vw;
      color: #fff;
      opacity: 0.5;
      &.active {
        opacity: 1;
        font-size: 4vw;
      }
    }
  }
  .content-box {
    width: 92vw;
    height: 43.87vw;
    background: rgba(255,255,255,1);
    border-radius: 2vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2.8vw 2.8vw 2.8vw 0;
    box-sizing: border-box;
    .left {
      .theme {
        background-color: #FC681F;
        padding: 2.13vw 4.8vw 2.13vw 2.27vw;
        border-radius: 0 4vw 4vw 0;
        width: max-content;
        color: #fff;
        font-size: 4vw;
        margin-top: 3.73vw;
      }
      .text1,.text2 {
        color: #FF5058;
        margin-left: 2.53vw;
      }
      .text1 {
        font-size: 4vw;
        font-weight: bold;
        margin-top: 2.53vw;
      }
      .text2 {
        margin-top: 1.2vw;
        font-size: 3.2vw;
      }
      .less-img {
        display: flex;
        margin-left: 2.67vw;
        margin-top: 3.2vw;
        img {
          width: 14.67vw;
          margin-right: 1.33vw;
        }
      }
    }
    .cover {
      width: 38.67vw;
      height: 38.67vw;
      flex-shrink: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
}
.menu-list {
  margin-top: 2.67vw;
}
</style>
