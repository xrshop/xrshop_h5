<template>
  <div class="integral">
    <TitleBar title="我的积分" canBack />
    <div class="obvious">
      <div class="main">
        <div class="top">
          <div class="left">
            <div class="number">{{user.integral}}</div>
            <div class="text">购物赚积分</div>
          </div>
          <router-link to="/integral-details" class="right">积分明细 </router-link>
        </div>
        <div class="bottom" v-for="item in record" :key="item.id">
          {{item.title}}，积分
          <span>{{item.pm == 1 ? '+' : '-'}}{{item.number}}</span>
        </div>
      </div>
    </div>
    <!-- <div class="shops">
      <div class="title">今日特惠</div>
      <div class="shop-list">
         <router-link to="/integral-goods" v-for="item in goods" :key="item.id" class="item">
            <div class="cover" :style="{ 'background-image': `url(${item.image})`}"></div>
            <div class="text">
              <div class="title">{{ item.storeName }}</div>
              <div class="money">￥{{ item.price | floatPad }}</div>
               <div class="point">{{ item.point }} <span>积分</span></div>
            </div>
         </router-link>
      </div>
    </div> -->
    <div class="shops">
      <div class="title">今日特惠</div>
           <div class="box">
        <router-link
          class="cell"
          v-for="(item, index) in goods"
          :key="index"
          :to="{ path: '/item-details', query: { id: item.id } }"
        >
          <div class="cover" :style="{ 'background-image': `url(${item.image})` }"></div>
          <div class="text">{{ item.storeName }}</div>
          <div class="bottom">
            <div class="left">
              <Price :value="item.price" />
            </div>
            <div class="right">{{ item.sales }}人已买</div>
          </div>
        </router-link>
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
      user: [],
      record: [],
      goods: [],
    };
  },
  async created() {
    await axios.get('/api/userinfo', { headers: { Authorization: userManage.data.token } }).then((response) => {
      this.user = response.data.data;
    });
    await axios.get('/api/integral/list', {
      params: { limit: 1 },
      headers: { Authorization: userManage.data.token },
    }).then((response) => {
      this.record = response.data.data;
    });
    await axios.get('/api/products', {
      params: {
        limit: 8, isBenefit: 1, priceOrder: '', salesOrder: '',
      },
      headers: { Authorization: userManage.data.token },
    }).then((response) => {
      this.goods = response.data.data;
      console.log(this.goods);
    });
  },
  filters: {
    floatPad(value) {
      const strArr = String(value).split('.');
      const float = strArr.length === 2 ? strArr[1].padEnd(2, '0') : '00';
      return `${strArr[0]}.${float}`;
    },
    dateTimeFormat(value) {
      return new DateExtend(value * 1000).Format('yyyy-MM-dd h:m');
    },
  },
};
</script>

<style lang="scss" scoped>
.obvious {
  background-color: #FFF0F0;
  height: 57.6vw;
  border-radius: 0 0 2vw 2vw;
  padding: 9.87vw 0 8vw;
  box-sizing: border-box;
  position: relative;
  .main {
    background-color: #fff;
    position: relative;
    height: 100%;
    width: 89.6vw;
    border-radius: 2vw 2vw 0 0;
    margin: 0 auto;
    z-index: 1;
    padding: 0 4.8vw;
    box-sizing: border-box;
    .top {
      display: flex;
      justify-content: space-between;
      padding-top: 7.87vw;
      .left {
        margin-left: 3.07vw;
        .number {
          font-size:6.67vw;
          font-weight:800;
        }
        .text {
          margin-top: 4.4vw;
          font-size: 3.2vw;
        }
      }
      .right {
        height: 6.4vw;
        width: 16vw;
        background-color: #f5f5f5;
        font-size: 3.2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3.2vw;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      margin-top: 5.2vw;
      background-color: #F5F5F5;
      height: 8vw;
      border-radius: 0.8vw;
      font-size:  3.2vw;
      box-sizing: border-box;
      padding: 0 2.67vw;
      span {
        color: #F84E4E;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 90vw;
    box-shadow: 0 0 2vw 2vw rgba(230, 78, 78, 0.1);
    left: 50%;
    bottom: 8vw;
    transform: translateX(-50%);
    z-index: 0;
  }
}
.shops {
  &>.title {
    padding: 8vw 0 5.2vw 2.67vw;
    font-weight: bold;
    font-size: 4.8vw;
  }
  .shop-list {
    padding: 0 2.67vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 46vw;
      height: 74.4vw;
      margin-bottom: 2.67vw;
      box-shadow: 0.2vw 0.2vw 1.2vw 0.8vw rgba(175,180,184,0.2);
      border-radius: 2vw;
      .cover {
        width: 46vw;
        height: 46vw;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 2vw 2vw 0 0;
      }
      .text {
        padding: 0 2.4vw;
        .title {
          margin-top: 3.28vw;
          font-size: 4vw;
          line-height: 5.2vw;
        }
        .money {
          margin-top: 1.93vw;
          text-decoration:line-through;
          color:rgba(187,187,187,1);
          font-size: 3.2vw;
        }
        .point {
          margin-top: 3.6vw;
          font-size: 4vw;
          font-weight:bold;
          span {
            font-size: 3.2vw;
            font-weight: 500;
          }
        }
      }
    }
  }
}
//今日特惠商品
  .box {
    padding: 0 4vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cell {
      width: 44.67vw;
      background-color: #F5F5F5;
      border-radius: 1.33vw;
      margin-bottom: 2.67vw;
      .cover {
        width: 44.67vw;
        height: 44.67vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 1.33vw 1.33vw 0 0;
      }
      .text {
        font-size: 3.73vw;
        line-height: 4.53vw;
        padding: 0 2.67vw;
        margin-top: 1.47vw;
      }
      .bottom {
        margin-top: 2vw;
        margin-bottom: 4.27vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2.67vw 0 3.47vw;
        .right {
          font-size: 2.67vw;
          color: #bbbbbb;
        }
      }
    }
  }
</style>
