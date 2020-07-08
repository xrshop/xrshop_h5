<template>
  <div class="bank-card">
    <TitleBar title="添加银行卡" canBack />
    <div class="list-box">
      <div class="item" v-for="item of bankList" :key="item.id">
        <div class="top">
          <div class="cover" :style="{'background-image': `url(${item.img})`}"></div>
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <div class="type">{{ item.type }}</div>
          </div>
        </div>
        <div class="code">
          <div>****</div>
          <div>****</div>
          <div>****</div>
          <div>{{ item.lastCode | codeCut }}</div>
        </div>
        <div class="bottom">
          <div class="left">持卡人: {{ item.userName }}</div>
          <div class="right">绑定日期: {{ item.time }}</div>
        </div>
        <div class="item-but">解除绑定</div>
      </div>
    </div>
    <div class="add-but">添加银行卡</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bankList: [
        {
          id: 0,
          img: 'http://img.taodabai.com/upload/05/64/05647fc0481ba50444811e9bd67dd964.jpg',
          title: '招商银行',
          type: '信用卡',
          lastCode: 4534536688,
          userName: '李朝阳',
          time: '2018/10/08',
        },
        {
          id: 1,
          img: 'http://img.taodabai.com/upload/05/64/05647fc0481ba50444811e9bd67dd964.jpg',
          title: '招商银行',
          type: '信用卡',
          lastCode: 4534536688,
          userName: '李朝阳',
          time: '2018/10/08',
        },
      ],
    };
  },
  filters: {
    codeCut(value) {
      return String(value).substr(-4);
    },
  },
};
</script>

<style lang="scss" scoped>
.bank-card {
  background-color: #f6f6f6;
}
.list-box {
  padding: 0 4vw;
  .item {
    background-color: #fff;
    border-radius: 2vw;
    margin-top: 4vw;
    position: relative;
    .top {
      padding: 5.33vw 5.07vw;
      display: flex;
      align-items: center;
      .cover {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 13.33vw;
        height: 13.33vw;
        margin-right: 4vw;
      }
      .text {
        .title {
          font-size: 4.8vw;
          color: #000;
        }
        .type {
          margin-top: 2.5vw;
          font-size: 4vw;
          color: #999;
        }
      }
    }
    .code {
      display: flex;
      justify-content: space-between;
      padding: 0 5.2vw 2.4vw;
      font-size: 6.67vw;
      border-bottom: solid #eee thin;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 4.2vw 5.2vw;
      font-size: 3.2vw;
      color: #999999;
    }
    .item-but {
      position: absolute;
      top: 6.27vw;
      right: 5.33vw;
      padding: 1.47vw 2vw;
      border-radius: 2.67vw;
      background-color: #f6f6f6;
      color: #999999;
      font-size: 2.67vw;
    }
  }
}
.add-but {
  width: 92vw;
  line-height: 11.73vw;
  margin: 20vw auto 10vw;
  background-color: #FA5D53;
  border-radius: 5.87vw;
  text-align: center;
  font-size: 4vw;
  color: #fff;
}
</style>
