<template>
  <div class="recommend2 row">
    <div class="left column">
      <div class="title">
        为&ensp;你
        <br />推&ensp;荐
      </div>
      <div class="more">
        更多
        <Icon class="icon" name="right" />
      </div>
    </div>
    <div class="right row">
      <div class="cell" v-for="(cell, index) of list" :key="index">
        <!-- <img class="cover" :src="cell.cover" alt /> -->
        <div class="cover" :style="{'background-image': `url(${cell.cover})`}"></div>
        <div class="title">{{ cell.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data() {
    return {
      list: [
        {
          cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3999999862,3608295271&fm=26&gp=0.jpg',
          title: '哈密哈密瓜',
        },
        {
          cover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1849785126,3032824496&fm=26&gp=0.jpg',
          title: '欧润橘',
        },
        {
          cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1532261164,3961390486&fm=26&gp=0.jpg',
          title: '英格兰樱桃',
        },
        {
          cover: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1547794081,2749047391&fm=26&gp=0.jpg',
          title: '青岛青苹果',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend2 {
  margin: 2.67vw 4vw 0;
  background-color: #fff;
  border-radius: 2vw;
  height: 27.33vw;
}
.left {
  width: 19.93vw;
  align-items: center;
  .title {
    font-size: 4vw;
    font-weight: bold;
    margin-top: 7vw;
    line-height: 1.25;
  }
  .more {
    display: flex;
    width: 8.93vw;
    height: 3.73vw;
    align-items: center;
    justify-content: center;
    border-radius: 3.73vw * 0.5;
    background-color: #fff2f2;
    color: #ff450b;
    margin-top: 0.7vw;
    font-size: 2.67vw;
    .icon::v-deep {
      width: 1vw;
      height: 2vw;
      svg {
        display: block;
      }
      path {
        stroke: #ff450b;
      }
    }
  }
}
.cell {
  margin-top: 3.2vw;
  margin-right: 1.33vw;
  .title {
    font-size: 2.67vw;
    text-align: center;
    margin-top: 1.35vw;
  }
  .cover {
    width: 17.07vw;
    height: 17.05vw;
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
