<template>
  <div class="balance">
    <TitleBar
      canBack
      title="我的余额"
      rightText="消费明细"
      @rightTextClick="$router.push('/balance-record')"
    />
    <div class="info row">
      <div class="cell column">
        <div class="title">
          <span class="space"></span>账户余额（元）
        </div>
        <div class="value">
          <template v-if="user.nowMoney == null">
            --
          </template>
          <template v-else>
            <Price :value="user.nowMoney" />
          </template>
        </div>
      </div>
      <div class="cell column">
        <div class="title">当前佣金</div>
        <div class="value">
          <template v-if="user.brokeragePrice == null">--</template>
          <template v-else>
            <Price :value="user.brokeragePrice" />
          </template>
        </div>
      </div>
      <div class="cell column">
        <div class="title">优惠券</div>
        <div class="value">
          <template v-if="user.couponCount == null">--</template>
          <template v-else>
             {{user.couponCount}}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      user: {
        nowMoney: null,
        brokeragePrice: null,
        couponCount: null,
      },
    };
  },
  async created() {
    await axios.get('/api/userinfo', { headers: { Authorization: this.token } })
      .then((response) => {
        this.user = response.data.data;
      });
  },
  computed: {
    token() {
      return userManage.data.token;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  background-color: #f64c52;
  backdrop-filter: none;
  color: #fff;
  &::v-deep {
    svg path {
      fill: #fff;
    }
  }
}
.info {
  background-color: #f64c52;
  height: 54vw;
  color: #fff;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 0 2vw 2vw;
  .cell {
    align-items: center;
  }
  .title {
    font-size: 3.2vw;
  }
  .value {
    margin-top: 5.07vw;
    font-size: 5.33vw;
  }
  .price {
    color: #fff;
    &::v-deep {
      .int,
      .float {
        font-size: 5.33vw;
      }
    }
  }
  .space {
    width: 1em;
    height: 1em;
    display: inline-block;
  }
}
</style>
