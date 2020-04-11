<template>
  <div class="integral-goods">
    <TitleBar rightText=" " @rightTextClick="shar" canBack />
    <div class="banner" v-for="(item,index) in img.banner" :key="index">
      <div class="cover" :style="{'background-image': `url(${item})`}"></div>
    </div>
    <div class="footer">
      <div class="but">立即兑换</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        banner: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539655970,3080509067&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539655970,3080509067&fm=26&gp=0.jpg'],
        publicity: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586606284942&di=be237b85c55069eba52036e732305f8c&imgtype=0&src=http%3A%2F%2Fwww.zbzdjbx.cn%2Fuploads%2Ftk12032274.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586606300832&di=1943ebca864f1a6a19348e9d7209e5b3&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fdish%2Fd%2F4%2F3%2F600_d4e9a1c2bd0fa0cc8378680cd26cccf3.jpg'],
      },
    };
  },
  methods: {
    shar() {
      return console.log(1);
    },
  },
};

</script>

<style lang="scss" scoped>
.title-bar::v-deep {
  .main {
    .right,.left {
      width: 6.67vw;
      height: 6.67vw;
      background: #000;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      opacity: .5;
    }
    .right {
      right: 5.47vw;
      padding: none;
    }
    .left {
      left: 5.07vw;
      .back-button {
        width: 100%;
        height: 100%;
        >svg{
          width: 80%;
          height: 80%;
          path {
          fill: rgb(255, 255, 255)
        }
        }
      }
    }
  }
}
.footer {
  height: 17.07vw;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFang SC;
  box-shadow: 0 0 6px 0px rgba(200,200,200,0.3);
  .but {
    width: 89.33vw;
    text-align: center;
    line-height: 11.73vw;
    background: rgba(248,78,78,1);
    border-radius: 5.87vw;
    font-size: 4vw;
    color: #fff;
  }
}
</style>
