<template>
  <div class="recommend3">
    <div class="type-row row">
      <div
        class="cell"
        v-for="(type, index) of types"
        :key="index"
        :class="{ active: active === index }"
        @click="active = index"
      >
        <div class="title">{{ type.title }}</div>
        <div class="subtitle">{{ type.subtitle }}</div>
      </div>
    </div>
    <div class="content">
      <div class="cell" v-for="(cell, index) of content" :key="index">
        <div class="cover" :style="{'background-image': `url(${cell.cover})`}"></div>
        <div class="title">{{ cell.title }}</div>
        <div class="row row-a">
          <Price :value="cell.price" />
          <div class="count">{{ cell.count }}人购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      types: [
        {
          title: '全部',
          subtitle: '猜你喜欢',
        },
        {
          title: '农家自制',
          subtitle: '健康无添加',
        },
        {
          title: '超值',
          subtitle: '实惠平价',
        },
        {
          title: '排行榜',
          subtitle: '好评推荐',
        },
      ],
      content: [
        {
          cover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3443588101,409150815&fm=26&gp=0.jpg',
          title: '西红柿樱桃小番茄水果荷兰瓜柿子蔬菜',
          price: 178.00,
          count: 232,
        },
        {
          cover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3443588101,409150815&fm=26&gp=0.jpg',
          title: '西红柿樱桃小番茄水果荷兰瓜柿子蔬菜',
          price: 178.00,
          count: 326,
        },
        {
          cover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3443588101,409150815&fm=26&gp=0.jpg',
          title: '西红柿樱桃小番茄水果荷兰瓜柿子蔬菜',
          price: 178.00,
          count: 768,
        },
        {
          cover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3443588101,409150815&fm=26&gp=0.jpg',
          title: '西红柿樱桃小番茄水果荷兰瓜柿子蔬菜',
          price: 178.00,
          count: 683,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.type-row {
  height: 17.47vw;
  justify-content: space-evenly;
  align-items: center;
  .cell {
    text-align: center;
    &.active {
      color: #ff450b;
    }
    .title {
      font-size: 4vw;
      font-weight: bold;
    }
    .subtitle {
      margin-top: 1.47vw;
      font-size: 3.2vw;
    }
  }
}
.content {
  padding: 0 4vw 2vw;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  .cell {
    width: 44.67vw;
    height: 65.33vw;
    // margin-left: 2.67vw;
    margin-bottom: 2.67vw;
    background-color: #fff;
    border-radius: 1vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .cover {
      display: block;
      width: 44.67vw;
      height: 44.67vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .title {
      margin-left: 2.67vw;
      font-size: 3.73vw;
      line-height: 4.53vw;
      margin-top: 1.87vw - (4.53vw - 3.73vw) * 0.5;
    }
    .row-a {
      margin-top: auto;
      margin-bottom: 4.27vw;
      align-items: baseline;
      justify-content: space-between;
      .price {
        margin-left: 3.47vw;
      }
      .count {
        margin-right: 2.67vw;
        font-size: 2.67vw;
        color: #bbb;
      }
    }
  }
}
</style>
