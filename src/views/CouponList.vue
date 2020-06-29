<template>
  <div class="coupon-list">
    <TitleBar title="优惠券" canBack>
      <template v-slot:other>
        <Tabs :options="filterOptions" v-model="filterActivated" />
      </template>
    </TitleBar>
    <div class="coupon row" v-for="coupon of coupons" :key="coupon.id" :data-status="coupon.status">
      <div class="left">
        <div class="text-a">
          <span class="monetary-unit">￥</span>
          {{coupon.couponPrice}}
        </div>
        <div class="text-b">满{{coupon.useMinPrice}}元可用</div>
      </div>
      <div class="right">
        <div class="title">{{coupon.couponTitle}}</div>
        <div class="row-a row">
          <div class="time">
            {{ coupon.addTime | dateTimeFormat }}-{{
              coupon.endTime | dateTimeFormat
            }}</div>
          <div class="use-button" v-if="coupon.status===0">立即使用</div>
        </div>
      </div>
      <img class="state" v-if="coupon.status===1" src="@/assets/CouponList/sy.png" alt />
      <img class="state" v-if="coupon.status===2" src="@/assets/CouponList/gq.png" alt />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DateExtend from '@/library/DateExtend';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      filterOptions: [
        { id: 0, text: '全部' },
        { id: 1, text: '未使用' },
        { id: 2, text: '已使用' },
        { id: 3, text: '已过期' },
      ],
      filterActivated: Number(this.$route.query.type ?? 0),
      coupons: [],
    };
  },
  watch: {
    filterActivated(v) {
      this.$router.replace({ query: { type: v } });
      this.getData(v);
    },
  },
  methods: {
    getData(type) {
      this.coupons = [];
      axios.get(`/api/coupons/user/${this.filterActivated}`, { headers: { Authorization: userManage.data.token } }).then((response) => {
        this.coupons = response.data.data;
      });
    },
  },
  created() {
    this.getData(this.filterActivated);
  },
  filters: {
    dateTimeFormat(value) {
      return new DateExtend(value * 1000).Format('yyyy.MMdd');
    },
  },
};
</script>

<style lang="scss" scoped>
.coupon-list {
  background-color: #f7f5f6;
}
.title-bar {
  border-radius: 0 0 2vw 2vw;
}
.coupon {
  margin: 2.67vw;
  height: 32vw;
  background-color: #fff;
  border-radius: 2vw;
  overflow: hidden;
  position: relative;
  .left {
    width: 38.53vw;
    background-image: linear-gradient(
      151deg,
      rgba(187, 187, 187, 1),
      rgba(160, 160, 160, 1)
    );
    color: #fff;
    text-align: center;
    .text-a {
      margin-top: 8.67vw;
      font-size: 10.67vw;
      font-weight: bolder;
      display: flex;
      justify-content: center;
      align-items: baseline;
      .monetary-unit {
        font-size: 4.8vw;
        font-weight: bold;
      }
    }
    .text-b {
      margin-top: 4vw;
      font-size: 2.67vw;
    }
  }
  .right {
    position: relative;
    flex-grow: 1;
    .title {
      margin-top: 5.2vw;
      margin-left: 2.67vw;
      font-size: 3.73vw;
      font-weight: bold;
    }
    .row-a {
      margin-top: 8vw;
      align-items: center;
      .time {
        margin-left: 2.67vw;
        font-size: 2.67vw;
      }
      .use-button {
        margin-left: auto;
        margin-right: 2.8vw;
        height: 6.4vw;
        padding: 0 2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.2vw;
        color: #f84e4e;
        border-radius: 3.2vw;
        border: var(--px) solid;
      }
    }
  }
  .state {
    display: block;
    width: 12.53vw;
    height: 12.53vw;
    // background-size: contain;
    // background-position: center;
    // background-repeat: no-repeat;
    // position: absolute;
    position: absolute;
    right: -1.87vw;
    top: 1.6vw;
  }
  &[data-status="0"] {
    .left {
      background-image: linear-gradient(
        151deg,
        rgba(253, 131, 148, 1),
        rgba(249, 100, 100, 1)
      );
    }
  }
}
</style>
