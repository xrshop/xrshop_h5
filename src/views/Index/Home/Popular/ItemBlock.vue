<template>
  <div class="item-block">
    <div class="row-a row">
      <img class="block-title" src="@/assets/Index/Home/Popular/block-title/1.png" alt />
      <div class="text">
        <span class="red">488人想买</span>
        干辣椒可切段磨粉面特香特辣辣椒5斤装
      </div>
      <div class="more"></div>
    </div>
    <div class="line"></div>
    <div class="item-info">
      <div
        class="cover"
        style="background-image: url('http://m.360buyimg.com/mobilecms/s2000x1333_jfs/t5089/275/97604520/290394/96d59bf6/58f875d1Ne7589873.jpg')"
      ></div>
      <div class="title">干辣椒可切段磨粉面特香特辣辣椒5斤装</div>
      <div class="row">
        <div class="left">
          <div class="time">预售时间：05月20日</div>
          <div class="time">提货时间：05月20日</div>
          <div class="price">
            <span class="special">
              <span class="monetary-unit">￥</span>
              56.80
            </span>
            <span class="original">￥88.00</span>
          </div>
        </div>
        <!-- <div class="right column"> -->
        <div class="add-to-cart">加入购物车</div>
        <!-- </div> -->
      </div>
    </div>
    <div class="line"></div>
    <div class="row-b row">
      <div class="avatars row">
        <img class="avatar" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3341975254,1104840565&fm=26&gp=0.jpg" alt />
        <img class="avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234512406,842769121&fm=26&gp=0.jpg" alt />
        <img class="avatar" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=712528111,526139404&fm=15&gp=0.jpg" alt />
        <img class="avatar" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3341975254,1104840565&fm=26&gp=0.jpg" alt />
        <img class="avatar" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3341975254,1104840565&fm=26&gp=0.jpg" alt />
        <div class="avatar"></div>
      </div>
      <div class="text">等购买了此商品</div>
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.item-block {
  /* width: calc(100vw - 5.33vw * 2); */
  height: 84.13vw;
  /* margin: 0 auto; */
  background-color: #fff;
  margin-top: 5.33vw;
  border-radius: 1vw;
  padding: 0 2.67vw;
  display: flex;
  flex-direction: column;
}
.more {
  width: 4.53vw;
  height: 4.53vw;
  background-image: url("~@/assets/Index/Home/Popular/more.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  margin-left: 3vw;
}
.row-a {
  height: 8vw;
  align-items: center;
  .red {
    color: #f84e4e;
  }
  .block-title {
    width: 19.33vw;
    height: 3.47vw;
    display: block;
    flex-shrink: 0;
  }
  .text {
    position: relative;
    top: calc(1 * var(--px));
    margin-left: 2.4vw;
    font-size: 3.2vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.line {
  height: calc(1 * var(--px));
  background-color: #eee;
}
.item-info {
  // flex-grow: 1;
  // display: flex;
  // flex-direction: column;
  .cover {
    width: 84vw;
    height: 42vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .title {
    margin-top: 2.67vw;
    font-size: 3.73vw;
    font-weight: bold;
  }
  .time {
    font-size: 2.67vw;
    color: #ff775a;
    &:nth-of-type(1) {
      margin-top: 2.53vw;
    }
    &:nth-of-type(2) {
      margin-top: 1.07vw;
    }
  }
  // .row {
  //   flex-grow: 1;
  // }
  // .right {
  //   margin-left: auto;
  // }
  .add-to-cart {
    margin-top: auto;
    margin-left: auto;
    // margin-bottom: 2.8vw;
    width: 21.33vw;
    height: 8vw;
    background: linear-gradient(
      82deg,
      rgba(252, 61, 80, 1),
      rgba(251, 100, 60, 1)
    );
    border-radius: 4vw 4vw 4vw 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3.2vw;
  }
  .price {
    margin-top: 3.87vw;
    // margin-bottom: 2.8vw;
    .special {
      color: #f84e4e;
      font-size: 4vw;
      .monetary-unit {
        font-size: 2.8vw;
      }
    }
    .original {
      font-size: 2.67vw;
      color: #bbb;
      text-decoration: line-through;
    }
  }
}
.item-info + .line {
  margin-top: auto;
}
.row-b {
  height: 8vw;
  align-items: center;
  .text {
    position: relative;
    top: 1px;
    margin-left: 2.4vw;
    font-size: 3.2vw;
    color: #bbb;
  }
  .avatar {
    display: block;
    width: 5.6vw;
    height: 5.6vw;
    border-radius: 50%;
    background-color: #eee;
  }
  .avatar + .avatar {
    margin-left: -1.2vw;
  }
  .avatar:last-child {
    display: flex;
    justify-content: center;
    color: #fff;
    background-color: #ddd;
    background-image: url('~@/assets/Index/Home/Popular/dot.svg');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .more {
    margin-left: auto;
  }
}
</style>
