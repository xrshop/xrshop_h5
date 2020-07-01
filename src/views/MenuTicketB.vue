<template>
  <div class="menu-ticket">
    <TitleBar title="领券中心" canBack />
    <div class="list-box">
      <div class="empty" v-if="listInfo.length <= 0">
        抱歉,暂无可领取的优惠券
      </div>
      <div class="row" v-for="item in listInfo" :key="item.id">
        <div class="left">
          <div class="radius">
            <span><label>￥</label>{{ item.couponPrice }}</span>
            <p>满{{ item.useMinPrice }}元可用</p>
            <div class="left_top"></div>
            <div class="right_top"></div>
            <div class="left_bottom"></div>
            <div class="right_bottom"></div>
          </div>
        </div>
        <div class="center">
          <div class="title">商品购物优惠券</div>
          <div>全场商品可用</div>
          <div>
            {{ item.startTime | dateTimeFormat }}-{{
              item.endTime | dateTimeFormat
            }}
          </div>
        </div>
        <div class="right">
          <template v-if="isReceive(item.id)">
            <div class="button ylq">已领取</div>
          </template>
          <template v-else>
            <div class="button" @click="receive(`${item.id}`)">立即领取</div>
          </template>
        </div>
      </div>
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
      listInfo: [],
      userReceive: [],
    };
  },
  created() {
    this.getCoupons();
    this.getUserCoupons();
  },
  methods: {
    async receive(id) {
      await axios.post('/api/coupon/receive', { couponId: id }, { headers: { Authorization: userManage.data.token } })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error.response.data.msg);
        });
      this.getCoupons();
      this.getUserCoupons();
    },
    isReceive(id) {
      if (!this.userReceive) return false;
      return this.userReceive.some((c) => c.cid === id);
    },
    getUserCoupons() { // 获取用户领券列表
      axios.get(`/api/coupons/user/${this.$route.query.type ?? 0}`, { headers: { Authorization: userManage.data.token } }).then((response) => {
        this.userReceive = response.data.data;
      });
    },
    getCoupons() { // 获取领券列表
      axios.get('/api/coupons', { headers: { Authorization: userManage.data.token } }).then((response) => {
        this.listInfo = response.data.data;
      });
    },
  },
  filters: {
    dateTimeFormat(value) {
      return new DateExtend(value * 1000).Format('yyyy.MMdd');
    },
  },
};
</script>

<style lang="scss" scoped>
.empty{
    height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbbbbb;
}
.ylq {
  background-color: #dedede !important;
}
.menu-ticket {
  background-color: #f6f6f6;
  position: relative;
}
.title-bar::v-deep {
  background-color: #ff5058;
  .left svg path {
    fill: #fff;
  }
  .center {
    color: #fff;
  }
}
.tab-box {
  position: sticky;
  top: var(--title-bar-height);
  display: flex;
  height: 9.47vw;
  align-items: flex-end;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 5.47vw 2vw;
  font-size: 3.2vw;
  overflow: scroll;
  .cell {
    margin-right: 4.2vw;
    flex-shrink: 0;
    &.active {
      color: #f84e4e;
      font-size: 4vw;
      font-weight: bold;
      position: relative;
      &::before {
        content: "";
        width: 85%;
        height: 0.53vw;
        border-radius: 0.27vw;
        position: absolute;
        bottom: -2vw;
        background-color: #ff5058;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.list-box {
  margin: 2.67vw auto 0;
  width: 92vw;
  .row {
    margin-bottom: 2.67vw;
    .left {
      width: 30.4vw;
      padding: 2.8vw 0;
      height: 19.23vw;
      background-color: #fff;
      border-top-left-radius: 2vw;
      border-bottom-left-radius: 2vw;
      .radius {
        background-color: #fff4f5;
        margin-left: 2.8vw;
        width: 24.8vw;
        height: 12.26vw;
        padding: 3.47vw 0;
        font-size: 2.67vw;
        color: #ff5058;
        text-align: center;
        position: relative;
        label {
          font-size: 2.67vw;
        }
        span {
          font-size: 4.8vw;
          font-weight: bold;
        }
      }
      .left_top {
        position: absolute;
        height: 3vw;
        width: 3vw;
        top: 0px;
        left: 0px;
        background-color: #ffffff;
        border-radius: 0px 0px 3vw 0px;
      }
      .right_top {
        position: absolute;
        height: 3vw;
        width: 3vw;
        top: -1px;
        right: -1px;
        background-color: #ffffff;
        border-radius: 0px 0px 0px 3vw;
      }
      .left_bottom {
        position: absolute;
        height: 3vw;
        width: 3vw;
        left: -1px;
        bottom: -1px;
        background-color: #ffffff;
        border-radius: 0px 3vw 0px 0px;
      }
      .right_bottom {
        position: absolute;
        height: 3vw;
        width: 3vw;
        right: -1px;
        bottom: -1px;
        background-color: #ffffff;
        border-radius: 3vw 0px 0px 0px;
      }
    }
    .center {
      width: 33.6vw;
      padding: 2.8vw 0;
      height: 19.23vw;
      flex-shrink: 0;
      flex-grow: 0;
      border-top-right-radius: 2vw;
      border-bottom-right-radius: 2vw;
      background-color: #fff;
      .title {
        font-size: 3.73vw;
        height: 4vw;
        line-height: 4vw;
        font-weight: bold;
      }
      div {
        font-size: 2.67vw;
        color: #bbbbbb;
        margin-bottom: 2.53vw;
      }
    }
    .right {
      padding: 2.8vw 0;
      height: 19.23vw;
      background: linear-gradient(
        149deg,
        rgba(255, 255, 255, 1),
        rgba(255, 244, 245, 1)
      );
      width: 28vw;
      text-align: center;
      border-radius: 2vw;
      .money {
        margin-top: 6.93vw;
        font-size: 5.33vw;
        font-weight: bold;
        color: #ff450b;
        span {
          font-size: 2.67vw;
        }
      }
      .button {
        width: 22.53vw;
        line-height: 8vw;
        text-align: center;
        background-color: #ff450b;
        border-radius: 4vw;
        font-size: 3.73vw;
        color: #fff;
        margin: 4.8vw auto 0;
      }
    }
  }
}
</style>
