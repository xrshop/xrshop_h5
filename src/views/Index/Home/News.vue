<template>
  <div class="news">
    <img class="icon" src="@/assets/Index/Home/news.png" alt />
    <div class="text">湖南星然科技旗下生鲜电商平台耒小阳是大中华地区遥遥领先的生鲜电商</div>
    <img class="more" src="@/assets/Index/Home/more.png" alt />
  </div>
</template>

<style lang="scss" scoped>
.news {
  width: 89.2vw;
  height: 8vw;
  margin: 4.27vw auto 0;
  background-color: #f5f5f5;
  border-radius: 0.8vw;
  display: flex;
  align-items: center;
  .icon {
    width: 15.2vw;
    height: 3.39vw;
    margin: 0 2.67vw;
    display: block;
  }
  .text {
    border-left: calc(1 * var(--px)) solid #c0c0c0;
    padding-left: 2.67vw;
    width: 58vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 3.2vw;
    // color: #333;
  }
  .more {
    width: 4.53vw;
    height: 4.53vw;
    margin-left: auto;
    margin-right: 2.67vw;
    display: block;
  }
}
</style>
