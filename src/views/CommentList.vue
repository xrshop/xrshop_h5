<template>
  <div class="comment-list">
    <TitleBar title="发表评价" canBack>
      <template v-slot:other>
        <Tabs v-model="commentActive" :options="tabList"></Tabs>
      </template>
    </TitleBar>
    <div class="page page1" v-show="commentActive===0">
      <div class="card" v-for="index in 6" :key="index">
        <div class="cover" :style="{'background-image': 'url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=460186720,1103652554&fm=26&gp=0.jpg)'}"></div>
        <div class="info">
          <div class="title">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
          <div class="award">评完可以获得<span>10</span>积分</div>
        </div>
        <router-link to="/comment" class="button">评价</router-link>
      </div>
    </div>
    <div class="page page2" v-show="commentActive===1">
      <div class="card" v-for="index in 5" :key="index">
        <div class="top">
          <div class="cover" :style="{'background-image': 'url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=460186720,1103652554&fm=26&gp=0.jpg)'}"></div>
          <div class="info">
            <div class="title">纯手工糯米糍糍粑手工年糕湖南 地道特产</div>
            <div class="grade">
              <div class="text">评价</div>
              <Grade :options="grade" /></div>
          </div>
        </div>
        <div class="bottom">
          <div class="content">您还没有填写评价内容</div>
        </div>
        <div class="button">
          <div class="cell">追评</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grade: 4,
      tabList: [
        { id: 0, text: '待评价' },
        { id: 1, text: '已评价' },
      ],
      commentActive: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment-list {
  background-color: #F5F5F5;
}
.title-bar::v-deep {
  background-color: #FF4F59;
  border-radius: 0 0 2vw 2vw;
  .main {
    .center {
      color: #FFFFFF;
    }
    .left {
      svg > path {
        fill: #fff;
      }
    }
  }
  .tabs {
    height: 13.6vw;
    .cell {
      opacity: 0.5;
      color: #fff;
    }
    .active {
      opacity: 1;
    }
    .indicator {
      background-color: #fff;
    }
  }
}
.card {
  width: 92vw;
  box-sizing: border-box;
  border-radius: 2vw;
  margin: 2.67vw auto 0;
  background-color: #FFFFFF;
  padding: 6.67vw 4vw;
  position: relative;
}
.page {
  margin-bottom: 4vw;
}
.page1 .card {
  display: flex;
  .cover {
    width: 20vw;
    height: 20vw;
    flex-shrink: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.8;
    margin-right: 2.4vw;
  }
  .info {
    width: 55%;
    .title {
      font-size: 3.2vw;
      line-height: 5.2vw;
    }
    .award {
      font-size: 2.67vw;
      margin-top: 0.33vw;
      color: #bbb;
      span {
        color: #FF4F59;
      }
    }
  }
  .button {
    position: absolute;
    width: 18.67vw;
    line-height: 8vw;
    height: 8vw;
    background: rgba(255,255,255,1);
    border: var(--px) solid rgba(255,79,89,1);
    border-radius: 4vw;
    text-align: center;
    color: #FF4F59;
    font-size: 3.2vw;
    right: 4vw;
    bottom: 6.67vw;
  }
}
.page2 .card {
  .top {
    display: flex;
    .cover{
      width: 13.33vw;
      height: 13.33vw;
      border-radius: 0.8vw;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-right: 2.67vw;
      flex-shrink: 0;
    }
    .info {
      .title {
        font-size: 3.2vw;
        color: #bbb;
      }
      .grade {
        margin-top: 4.5vw;
        display: flex;
        font-size: 3.2vw;
        align-items: center;
        .text {
          margin-right: 0.93vw;
        }
      }
    }
  }
  .bottom {
    margin-top: 3.73vw;
    .content {
      font-size: 3.2vw;
    }
  }
  .button {
    margin-top: 4vw;
    display: flex;
    justify-content: flex-end;
    .cell {
      width: 18.67vw;
      height: 8vw;
      line-height: 8vw;
      text-align: center;
      background: rgba(255,255,255,1);
      border: var(--px) solid rgba(187,187,187,1);
      border-radius:4vw;
      font-size: 3.2vw;
    }
  }
}
</style>
