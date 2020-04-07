<template>
  <div class="post-sale">
    <TitleBar title="售后退款" canBack />
    <div class="card" v-for="task of tasks" :key="task.id">
      <div class="row row-a">
        <div class="icon"></div>
        <div class="merchant-title">{{ task.merchantTitle }}</div>
        <div class="state">{{ task.state }}</div>
      </div>
      <div class="row row-b">
        <div class="cover" :style="{ 'background-image': `url('${task.cover}')` }"></div>
        <div class="right">
          <div class="item-title">{{ task.itemTitle }}</div>
          <div class="subitem-title">{{ task.subitemTitle }} *{{ task.count }}</div>
          <div class="desc">{{ task.desc }}</div>
        </div>
      </div>
      <div class="summary">{{ task.summary }}</div>
      <router-link to="/post-sale-details" class="details-button">查看详情</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 0,
          merchantTitle: '雄霸天下农产品专营店',
          itemTitle: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          subitemTitle: '白糯米糍粑500g',
          count: 5,
          desc: '退款：￥250.00',
          state: '待处理',
          summary: '申请退款￥250.00',
          cover:
            'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg',
        },
        {
          id: 2,
          merchantTitle: '仰德四方农产品专营店',
          itemTitle: '纯机器玉米派机器自动生产美国地道特产',
          subitemTitle: '蜂蜜玉米派300g',
          count: 5,
          desc: '退款：￥250.00',
          state: '退款成功',
          summary: '退款成功￥250.00',
          cover:
            'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg',
        },
        {
          id: 3,
          merchantTitle: '雄霸天下农产品专营店',
          itemTitle: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          subitemTitle: '白糯米糍粑500g',
          count: 5,
          desc: '退款：￥250.00',
          state: '退款成功',
          summary: '退款成功￥250.00',
          cover:
            'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg',
        },
        {
          id: 4,
          merchantTitle: '仰德四方农产品专营店',
          itemTitle: '纯机器玉米派机器自动生产美国地道特产',
          subitemTitle: '蜂蜜玉米派300g',
          count: 5,
          desc: '退款：￥250.00',
          state: '待处理',
          summary: '申请退款￥250.00',
          cover:
            'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023280524,2108392352&fm=26&gp=0.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-sale {
  background-color: #f7f5f6;
}
.title-bar {
  background-color: #f7f5f6;
}
.card {
  background-color: #fff;
  border-radius: 2vw;
  margin-bottom: 2.67vw;
  padding: 5.2vw;
}
.row-a {
  align-items: center;
  .icon {
    width: 4.8vw;
    height: 4.8vw;
    background-image: url("~@/assets/OrderDetails/shop.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .merchant-title {
    font-size: 3.73vw;
    font-weight: bold;
    margin-left: 1.33vw;
  }
  .state {
    margin-left: auto;
    font-size: 3.2vw;
    color: #f84e4e;
  }
}
.row-b {
  margin-top: 4.67vw;
  .cover {
    width: 26.67vw;
    height: 26.67vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
  }
  .right {
    margin-left: 2.67vw;
    font-size: 3.2vw;
    display: flex;
    flex-direction: column;
  }
  .item-title {
    margin-top: 2vw - (5.2vw - 3.2vw) * 0.5;
    line-height: 5.2vw;
  }
  .subitem-title {
    width: max-content;
    margin-top: auto;
    margin-bottom: 2.67vw;
    height: 5.33vw;
    border-radius: 5.33vw * 0.5;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    padding: 0 1.6vw;
  }
  .desc {
    margin-left: 4vw - 2.67vw;
    margin-bottom: 2.67vw;
  }
}
.summary {
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  margin-top: 4.13vw;
  border-radius: 1vw;
  font-size: 3.2vw;
}
.details-button {
  margin-left: auto;
  margin-top: 5.33vw;
  width: 24vw;
  height: 8vw;
  font-size: 3.2vw;
  border-radius: 4vw;
  border: var(--px) solid #f84e4e;
  color: #f84e4e;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
