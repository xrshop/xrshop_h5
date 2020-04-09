<template>
  <div class="generalize">
    <TitleBar title="推广" canBack />
    <div class="banner">
      <div class="qrcode"><QRCode value="http://www.baidu.com" :options="codeStyle" /></div>
      <div class="text">扫码下载耒小阳APP</div>
    </div>
    <div class="operate">
      <div class="cell">
        <img src="@/assets/Generalize/lj.png" alt="">
        <div class="text">分享链接</div>
      </div>
      <div class="cell">
        <img src="@/assets/Generalize/bc.png" alt="">
        <div class="text">保存图片</div>
      </div>
      <div class="cell">
        <img src="@/assets/Generalize/fx.png" alt="">
        <div class="text">分享图片</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeStyle: { margin: 0 },
    };
  },
};
</script>

<style lang="scss" scoped>
.generalize {
  background: url('~@/assets/Generalize/tu.png') no-repeat;
  background-position: bottom;
  background-size: 100vw 64.67vw;
  font-family:PingFang SC;
}
.banner {
  width: 82.67vw;
  height: 125.07vw;
  margin: 0.8vw auto 0;
  background: url('~@/assets/Generalize/hb.png') no-repeat;
  background-position: center;
  background-size: cover;
  .qrcode::v-deep {
    display: inline-block;
    margin: 78.13vw auto 0;
    text-align: center;
    width: 100%;
    canvas {
      width: 31.07vw !important;
      height: 31.07vw !important;
      border: 1.6vw #fff solid;
      border-radius: 1.6vw;
    }
  }
  .text {
    font-size: 3.2vw;
    margin-top: 3.07vw;
    text-align: center;
  }
}
.operate {
  margin: 9.2vw auto 0;
  width: 82vw;
  height: 11.73vw;
  background-color: rgba(255,255,255,1);
  border-radius: 2vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .cell {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      width: 4vw;
      height: 4vw;
      margin-right: 1.2vw;
    }
    .text {
      font-size: 3.73vw;
    }
  }
}
</style>
