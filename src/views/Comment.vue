<template>
  <div class="comment">
    <TitleBar title="发表评价" canBack>
      <template v-slot:right>提交</template>
      <template v-slot:other>
        <div class="product">
          <div class="top">
            <div class="cover" :style="{'background-image': 'url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4230184984,3981411641&fm=26&gp=0.jpg)'}"></div>
            <div class="info">
              <div class="title">纯手工糯米糍糍粑手工年糕湖南地道特产</div>
              <div class="text">5斤装</div>
            </div>
          </div>
          <div class="bottom">
            <div class="title">商品评价</div>
            <Grade v-model="product" :text="evaluate" />
          </div>
        </div>
      </template>
    </TitleBar>
    <div class="card card1">
      <div class="top">
        <img src="@/assets/Comment/bj.png" alt="">
        <textarea placeholder="请填写您的评价"></textarea>
      </div>
      <div class="img-box">
        <div class="add-img">
          <img src="@/assets/Comment/xj.png" alt="">
          <div class="text">添加图片</div>
        </div>
      </div>
      <div class="bottom" @click="isFake = !isFake">
        <div class="radio-box">
          <div class="radio" :class="{ active: !isFake }"></div>
        </div>
        <div class="text">匿名评价</div>
      </div>
    </div>
    <div class="card card2">
      <div class="right">
        <div class="title">物流服务评价</div>
        <div class="content">
          <div class="row">
            <div class="left">快递包装</div>
            <div class="right"> <Grade v-model="packaging" :text="evaluate" /></div>
          </div>
          <div class="row">
            <div class="left">送货速度</div>
            <div class="right"> <Grade v-model="speed" :text="evaluate" /></div>
          </div>
          <div class="row">
            <div class="left">快递员服务</div>
            <div class="right"> <Grade v-model="serve" :text="evaluate" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: 0,
      packaging: 0,
      speed: 0,
      serve: 0,
      evaluate: ['', '很差', '差', '一般', '好', '很好'],
      isFake: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment {
  background-color: #F5F5F5;
}
.title-bar::v-deep {
  border-radius: 0 0 2vw 2vw;
  .main {
    .right {
      display: flex;
      align-items: center;
      margin-right: 4vw;
      color: #FF534F;
      font-size: 3.73vw;
    }
  }
  .product {
    height: 26.93vw;
    padding: 2.8vw 8vw 0;
    .top {
      display: flex;
      .cover {
        flex-shrink: 0;
        width: 13.33vw;
        height: 13.33vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .info {
        margin-left: 2.67vw;
        .title {
          margin-top: 3.07vw;
          font-size: 3.2vw;
        }
        .text {
          color: #bbbbbb;
          font-size: 3.2vw;
          margin-top: 1.2vw;
        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      margin-top: 3.73vw;
      .title {
        font-size: 3.2vw;
        margin-right: 2.4vw;
      }
    }
  }
}
.card {
  width: 92vw;
  box-sizing: border-box;
  border-radius: 2vw;
  margin: 2.67vw auto 0;
  background-color: #FFFFFF;
  padding: 3.87vw 3.6vw 2.67vw;
}
.card1 {
  .top {
    display: flex;
    img {
      width: 5.07vw;
      height: 5.07vw;
      margin-right: 1.6vw;
    }
    textarea {
      width: 100%;
      min-height: 30vw;
      font-size: 3.2vw;
      outline: none;
      border: none;
      resize: none;
      &::placeholder {
        color: #bbb;
      }
    }
  }
  .img-box {
    display: flex;
    .add-img {
      width: 19.74vw;
      height: 19.74vw;
      background-color: #f6f6f6;
      text-align: center;
      border-radius: 1.33vw;
      img {
        width: 6.67vw;
        height: 5.47vw;
        margin-top: 5.2vw;
      }
      .text {
        font-size: 2.67vw;
        font-weight: bold;
        margin-top: 1.07vw;
      }
    }
  }
  .bottom {
    margin-top: 2.67vw;
    display: flex;
    align-items: center;
    width: max-content;
    .text {
      font-size: 3.2vw;
    }
    .radio-box {
      position: relative;
      margin-right: 2vw;
      .radio {
        width: 4.8vw;
        height: 4.8vw;
        border-radius: 50%;
        background-color: #f5f5f5;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 3vw;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        border: solid var(--px) #ddd;
        &.active {
          transition-duration: 0.16s;
          transition-property: background-color;
          background-image: url("~@/assets/OrderConfirm/g.png");
          background-color: #ef2424;
        }
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 4vw;
        box-shadow: 0 0 4px 1px rgba(102, 102, 102, 0.3);
        bottom: 2px;
        left: calc((4.8vw - 4vw) / 2);
        z-index: 0;
      }
    }
  }
}
.card2 {
  display: flex;
  img {
    width: 5.07vw;
    height: 5.07vw;
    flex-shrink: 0;
  }
  .right {
    padding-left: 1.6vw;
    width: 100%;
    .title {
      margin-top: 0.67vw;
      font-size: 3.2vw;
    }
    .content {
      padding-top: 1.33vw;
      padding-bottom: 2.66vw;
      .row {
        margin-top: 5.2vw;
        .left {
          width: 30%;
          font-size: 3.2vw;
        }
      }
    }
  }
}
</style>
