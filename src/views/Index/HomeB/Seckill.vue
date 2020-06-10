<template>
  <div class="seckill">
    <div class="row-a row">
      <div class="title">今日秒杀</div>
      <div class="time">{{ countdown.h }}</div>
      <div class="colon">:</div>
      <div class="time">{{ countdown.m }}</div>
      <div class="colon">:</div>
      <div class="time">{{ countdown.s }}</div>
    </div>
    <div class="row-b row">
      <div class="cell" v-for="(cell, index) of items" :key="index">
        <!-- <img class="cover" :src="cell.cover" alt /> -->
        <div
          class="cover"
          :style="{ 'background-image': `url(${cell.cover})` }"
        ></div>
        <div class="price-wrapper">
          秒杀
          <Price :value="cell.price" />
        </div>
        <div class="count">{{ cell.count }}人购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      endTime: new Date(Date.now()),
      countdown: {
        h: '00',
        m: '00',
        s: '00',
      },
      countdownTimer: null,
      items: [
        {
          price: 99.9,
          cover:
            'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1458608591,1382786727&fm=26&gp=0.jpg',
          count: 125,
        },
        {
          price: 178,
          cover:
            'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2171816357,1039499863&fm=26&gp=0.jpg',
          count: 125,
        },
        {
          price: 13,
          cover:
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2159025442,2281497770&fm=26&gp=0.jpg',
          count: 125,
        },
        {
          price: 701,
          cover:
            'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1182098454,3267588061&fm=26&gp=0.jpg',
          count: 125,
        },
      ],
    };
  },
  methods: {
    async seckillMap() {
      const response = await axios.get('/api/seckill/index');
      const { data } = response.data;
      const seckillIndex = data.seckillTimeIndex;
      this.endTime = data.seckillTime[seckillIndex].stop * 1000;
    },
  },
  created() {
    if (this.countdownTimer) clearInterval(this.countdownTimer);
    this.seckillMap();
    setInterval(() => {
      const diff = new Date(this.endTime - Date.now());
      if (diff >= 0) {
        // this.countdown.h = String(diff.getUTCHours()).padStart(2, '0'); // 最大24，要适配
        this.countdown.h = String(Math.floor(diff / 3600000)).padStart(2, '0');
        this.countdown.m = String(diff.getUTCMinutes()).padStart(2, '0');
        this.countdown.s = String(diff.getUTCSeconds()).padStart(2, '0');
      } else {
        this.seckillMap();
        // this.countdown.h = '00';
        // this.countdown.m = '00';
        // this.countdown.s = '00';
        // clearInterval(this.countdownTimer);
      }
    }, 1000);
  },
  destroyed() {
    if (this.countdownTimer) clearInterval(this.countdownTimer);
  },
};
</script>

<style lang="scss" scoped>
.seckill {
  background-image: url("~@/assets/Index/HomeB/seckill-bg.png");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  width: 92vw;
  height: 50.27vw;
  margin: 0 4vw;
  .row-a {
    display: flex;
    height: 5.33vw + 2.8vw + 2.8vw;
    align-items: center;
    .title {
      font-size: 4vw;
      font-weight: bold;
      margin-left: 2.13vw;
      color: #fff;
      margin-right: 4vw - 1.33vw;
      font-family: sans-serif;
    }
    .time {
      width: 5.87vw;
      height: 5.33vw;
      border-radius: 1vw;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff4c12;
      margin: 0 1.33vw;
      font-size: 4vw;
      font-family: sans-serif;
    }
    .colon {
      font-weight: bold;
      color: #fff;
    }
  }
  .row-b {
    margin-top: 5.07vw - 2.8vw;
    .cell {
      width: 21.33vw;
      height: 32.8vw;
      margin-left: 1.33vw;
      background-color: #fff;
      box-shadow: 0 0 2vw 0 rgba(47, 49, 49, 0.06);
      .cover {
        display: block;
        width: 19.07vw;
        height: 16.93vw;
        margin: 1.33vw auto 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .price-wrapper {
        font-size: 2.67vw;
        margin-top: 3.2vw;
        margin-left: 1.33vw;
        .price::v-deep {
          color: inherit;
          .monetary-unit {
            font-size: 2.67vw;
          }
          .int,
          .float {
            font-size: 3.2vw;
          }
          .monetary-unit,
          .int,
          .float {
            font-weight: normal;
          }
        }
      }
      .count {
        margin-top: 0.93vw;
        margin-left: 1.47vw;
        font-size: 2.67vw;
        color: #ff450b;
        height: 3.73vw;
        padding: 0 1.47vw;
        background-color: #fff2f2;
        border-radius: 3.73vw * 0.5;
        display: flex;
        align-items: center;
        width: max-content;
      }
    }
  }
}
</style>
