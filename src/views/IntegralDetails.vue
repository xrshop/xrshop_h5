<template>
  <div class="integral-details">
    <TitleBar title="积分明细" canBack />
    <div class="block">
      <div class="text">{{clacPoint.total}}<span>积分</span></div>
    </div>
    <div class="list-box">
      <div class="item-box">
        <div class="item title">
          <div class="left"><div class="text">积分</div></div>
          <div class="right">
            <div class="gain">获取
              <span class="red">{{clacPoint.srpoint}}</span>
            </div>
            <div class="use">使用 {{clacPoint.zcpoint}}</div>
          </div>
        </div>
        <div v-for="item in record" class="item" :key="item.id">
          <div class="left">
            <div class="text">{{item.title}}</div>
            <div class="time">{{item.addTime | dateTimeFormat}}</div>
          </div>
          <div class="right red">{{item.pm == 1 ? '+' : '-'}}{{item.number}}</div>
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
      record: null,
    };
  },
  async created() {
    await axios.get('/api/integral/list', { headers: { Authorization: userManage.data.token } }).then((response) => {
      this.record = response.data.data;
    });
  },
  computed: {
    clacPoint() {
      const data = { zcpoint: 0, srpoint: 0, total: 0 };
      if (!this.record) return false;
      this.record.forEach((item) => {
        if (item.pm) {
          data.srpoint += item.number;
        } else {
          data.zcpoint += item.number;
        }
      });
      data.total = data.srpoint + data.zcpoint;
      return data;
    },
  },
  filters: {
    dateTimeFormat(value) {
      return new DateExtend(value * 1000).Format('yyyy-MM-dd h:m');
    },
  },
};

</script>

<style lang="scss" scoped>
.block {
  height: 57.6vw;
  background: rgba(255,240,240,1);
  border-radius: 0vw 0vw 2vw 2vw;
  padding-top: 13.47vw;
  padding-left: 5.2vw;
  box-sizing: border-box;
  .text {
    font-size: 6.67vw;
    font-weight: bold;
    span {
      font-size: 3.2vw;
      font-weight: 400;
    }
  }
}
.list-box {
  position: relative;
  top: -33.2vw;
  width: 89.6vw;
  margin: 0 auto -20vw;
  .item-box {
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    padding: 0 4vw 4vw;
    background: #fff;
    border-radius: 2vw;
    .item {
      &.title {
        font-weight: bold;
        .right .gain{
          margin-right: 4vw;
        }
      }
      display: flex;
      padding: 5.2vw 0;
      border-bottom: solid thin #eee;
      justify-content: space-between;
      .left {
        .text {
          font-size: 4vw;
        }
        .time {
          font-size: 2.67vw;
          color: rgba(187,187,187,1);
          margin-top: 2.67vw;
        }
      }
      .right {
        display: flex;
      }
    }
    .red {
      color: #F84E4E;
    }
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% - 17vw);
    position: absolute;
    bottom: 0;
    z-index: 0;
    border-radius: 2vw;
    box-shadow: 0 0 3vw 0.8vw rgba(175,180,184,0.2);
  }
}
</style>
