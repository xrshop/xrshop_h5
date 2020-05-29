<template>
  <div class="recommend">
    <div class="item">
      <div class="title">
        <div class="text"><span>精选好物</span></div>
        <div class="subtitle" :style="{'color': textColor[0]}">口碑好推荐</div>
      </div>
      <div class="content">
        <div class="cell" v-for="index in 2" :key="index">
          <div class="cover" :style="{'background-image': `url(https://tu1.whhost.net/uploads/20190103/04/1546460806-TntlsXUcyh.jpg)`}"></div>
          <div class="price">￥178</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">
        <div class="text"><span>发现好货</span></div>
        <div class="subtitle" :style="{'color': textColor[1]}">美味等你来寻</div>
      </div>
      <div class="content">
        <div class="cell" v-for="index in 2" :key="index">
          <div class="cover" :style="{'background-image': `url(https://tu1.whhost.net/uploads/20190103/04/1546460806-TntlsXUcyh.jpg)`}"></div>
          <div class="price">￥178</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">
        <div class="text">今日优选</div>
        <div class="subtitle" :style="{'color': textColor[2]}">惊喜有折扣</div>
      </div>
      <div class="content">
        <div class="cell" v-for="index in 2" :key="index">
          <div class="cover" :style="{'background-image': `url(https://tu1.whhost.net/uploads/20190103/04/1546460806-TntlsXUcyh.jpg)`}"><div class="text">满100减20</div></div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">
        <div class="text">新鲜市场</div>
        <div class="subtitle" :style="{'color': textColor[3]}">绿色健康有营养</div>
      </div>
      <div class="content">
        <div class="cell" v-for="index in 2" :key="index">
          <div class="cover" :style="{'background-image': `url(https://tu1.whhost.net/uploads/20190103/04/1546460806-TntlsXUcyh.jpg)`}"></div>
          <div class="price">￥178</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data() {
    return {
      textColor: ['#FF9343', '#FE575F', '#E562F5', '#6DDA96'],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 92vw;
  margin: 2.67vw auto 0;
  border-radius: 2vw;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 4.27vw;
  .item {
    margin-top: 3.87vw;
    width: 50%;
    .title {
      font-size: 4vw;
      font-weight: bold;
      margin-left: 2.53vw;
      .subtitle {
        font-size: 3.2vw;
        font-weight: 400;
        margin-top: 1.2vw;
      }
    }
    .content {
      display: flex;
      padding-left: 2.67vw;
      margin-top: 2.2vw;
      .cell {
        margin-right: 1.33vw;
        &:last-of-type {
          margin-right: 0;
        }
        .cover {
          width: 20vw;
          height: 20vw;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 0.4vw;
        }
        .price {
          text-align: center;
          margin-top: 3.2vw;
          font-size: 3.2vw;
        }
      }
    }
    &:nth-of-type(3) .content .cell .cover {
      height: 23.2vw;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .text {
        color: #fff;
        font-size: 2.67vw;
        padding: 0.27vw 1.33vw;
        background-color: #FFBE7E;
        margin-bottom: 1.33vw;
        border-radius: 1.67vw;
      }
    }
    &:nth-of-type(4) .content .cell .price {
      font-size: 3.2vw;
      margin-top: 0.8vw;
    }
    &:nth-of-type(1),&:nth-of-type(2) {
      .title .text {
        position: relative;
        display: inline;
        span {
          position: relative;
          z-index: 1;
        }
        &::after {
          content: '';
          width: 4vw;
          height: 4vw;
          position: absolute;
          top: -1.87vw;
          right: -1.87vw;
          z-index: 0;
          background-image: url('~@/assets/Index/HomeB/Recommend/t1.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
    }
    &:nth-of-type(2) .title .text::after {
      background-image: url('~@/assets/Index/HomeB/Recommend/t2.png');
    }
  }
}
</style>
