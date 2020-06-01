<template>
  <div class="menu-list">
    <div class="cell" v-for="item in list" :key="item.id">
      <div class="cover" :style="{'background-image': `url(${item.img})`}"></div>
      <div class="info">
        <div class="title">{{item.title}}</div>
        <div class="label">
          <div class="item">{{item.label}}</div>
        </div>
        <div class="money"><Price :value="item.money" /></div>
      </div>
      <div class="button"
      @click="eventClick(item)"
      :style="{'background-color': bgColor}">
        立即抢购
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    list: {
      required: true,
    },
    bgColor: {
      default: '#DDDDDD',
      type: String,
    },
    isClick: {
      default: undefined,
    },
  },
  methods: {
    eventClick(item) {
      if (this.isClick !== undefined) {
        this.$emit('menu-click', item);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-list {
  width: 92vw;
  margin: 0 auto;
  .cell {
    background-color: #fff;
    border-radius: 2vw;
    margin-bottom: 2.67vw;
    padding: 4vw 0;
    display: flex;
    position: relative;
    .cover {
      width: 26.67vw;
      height: 26.67vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-left: 2.53vw;
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-left: 2.8vw;
      position: relative;
      .title {
        margin-top: 1.33vw;
        font-size: 3.73vw;
        font-weight: bold;
      }
      .label {
        margin-top: 2.53vw;
        .item {
          padding: 0.8vw 1.2vw;
          color: #FF5058;
          font-size: 2.67vw;
          border-radius: 0.8vw;
          border-color: #FFAAAE;
          border-style: solid;
          border-width: var(--px);
        }
      }
      .money {
        position: absolute;
        bottom: 1.2vw;
      }
    }
    .button {
      width: 22.53vw;
      height: 8.53vw;
      line-height: 8.53vw;
      text-align: center;
      border-radius: 4.27vw;
      color: #ffffff;
      position: absolute;
      bottom: 8.93vw;
      right: 2.67vw;
      font-size: 3.73vw;
    }
  }
}
</style>
