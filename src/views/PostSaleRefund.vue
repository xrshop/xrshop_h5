<template>
  <div class="post-sale-refund" v-if="data !== null">
    <TitleBar title="申请退款" canBack />
    <div class="product-box">
      <div class="product" v-for="item in data.cartInfo" :key="item.id">
        <div
          class="cover"
          :style="{
            'background-image': `url(${item.productInfo.attrInfo.image})`
          }"
        ></div>
        <div class="right">
          <div class="title">{{ item.productInfo.storeName }}</div>
          <div class="count">
            {{ item.productInfo.attrInfo.suk }} *{{ item.cartNum }}{{ item.productInfo.unitName }}
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <!-- <div class="item select">
        <div class="left">货物状态</div>
        <select class="right" v-model="selected">
          <option value="" disabled>请选择</option>
        </select>
      </div> -->
      <div class="item select">
        <div class="left">退款原因</div>
        <select class="right" v-model="selected">
          <option value="" disabled>请选择</option>
          <option v-for="(item, index) in reason" :key="index">{{ item }}</option>
        </select>
      </div>
      <div class="item">
        <div class="left">
          <div class="text">退款金额:</div>
          <div class="money"><Price :value="data.totalPrice" /></div>
        </div>
      </div>
    </div>
    <div class="upload">
      <div class="title">上传凭证</div>
      <div class="img-box">
        <img v-for="(image, index) in imageArr" :key="index" :src="image" class="cell" />
        <label for="file">
          <div class="cell img-but"></div>
          <input type="file" name="file" id="file" hidden @input="upload" ref="file" />
        </label>
      </div>
    </div>
    <div class="submit-but" @click="submit">提交</div>
  </div>
</template>

<script>
import axios from 'axios';
import userManage from '@/modules/user-manage';

export default {
  data() {
    return {
      data: null,
      reason: [],
      selected: '',
      imageArr: [],
    };
  },
  methods: {
    getData() {
      axios
        .get(`/api/order/detail/${this.$route.query.key}`, {
          headers: { Authorization: userManage.data.token },
        })
        .then((response) => {
          this.data = response.data.data;
          console.log(this.data);
        });
    },
    getReason() {
      axios
        .get('/api/order/refund/reason', {
          headers: { Authorization: userManage.data.token },
        })
        .then((response) => {
          this.reason = response.data.data;
        });
    },
    upload(e) {
      if (this.imageArr.length >= 3) {
        this.$hint('最多只能传3张图片');
        return;
      }
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      axios
        .post('/api/api/upload', formData, {
          headers: { Authorization: userManage.data.token, 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          this.imageArr.push(response.data.link);
          this.$refs.file.value = '';
        });
    },
    submit() {
      if (!this.selected) {
        this.$hint('请选择退款理由');
        return;
      }
      if (this.imageArr.length < 1) {
        this.$hint('请上传凭证');
        return;
      }
      axios
        .post(
          '/api/order/refund/verify',
          {
            refundReasonWapExplain: '',
            refundReasonWapImg: this.imageArr.join(','),
            text: this.selected,
            uni: this.data.unique,
          },
          {
            headers: { Authorization: userManage.data.token },
          },
        )
        .then((response) => {
          /**/alert(response.data.msg);
          this.$router.back();
        }).catch((error) => {
          this.$hint(error.response.data.msg);
        });
    },
  },
  created() {
    this.getData();
    this.getReason();
  },
};
</script>

<style lang="scss" scoped>
.post-sale-refund {
  background-color: #f7f5f6;
  font-family: PingFang SC;
  > div {
    border-radius: 2vw;
    background-color: #fff;
  }
}
.title-bar::v-deep .main {
  background-color: rgba(235, 235, 235, 0.8);
}
.product-box {
  border-radius: 0 0 2vw 2vw;
  padding: 2vw 0;
  background-color: #fff;
}
.product {
  padding: 4vw 5.2vw;
  display: flex;
  .cover {
    margin-right: 2.67vw;
    width: 18.67vw;
    height: 18.67vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 0.8vw;
    flex-shrink: 0;
  }
  .right {
    color: rgba(51, 51, 51, 1);
    .title {
      font-size: 3.73vw;
      line-height: 5.2vw;
    }
    .count {
      display: inline-block;
      padding: 1vw 1.6vw;
      margin-top: 3.26vw;
      font-size: 3.2vw;
      background-color: #f5f5f5;
      border-radius: 2.67vw;
    }
  }
}
.info {
  margin-top: 2.67vw;
  padding: 0 5.2vw 1.2vw;
  .item {
    height: 10.94vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.73vw;
    position: relative;
    &:first-of-type {
      height: 13.33vw;
      border-bottom: solid #eee thin;
    }
    // &.select::after {
    //   content: ' ';
    //   position: absolute;
    //   display: block;
    //   width: 1.03vw;
    //   height: 1.63vw;
    //   background: url('~@/assets/PostSaleRefund/ic.png') no-repeat;
    //   background-size: cover;
    //   background-position: center center;
    //   right: 0;
    //   top: 50%;
    //   transform: translateY(-50%);
    // }
    .left {
      display: flex;
      align-items: center;
      color: rgba(51, 51, 51, 1);
      .money {
        margin-left: 3.87vw;
        &::v-deep .price * {
          font-size: 3.2vw;
          font-weight: 400;
        }
      }
    }
    .right {
      color: rgba(187, 187, 187, 1);
      margin-right: 3.6vw;
      height: 90%;
      outline: none;
      border: none;
    }
  }
}
.upload {
  margin-top: 4vw;
  .title {
    padding: 4vw 5vw;
    font-size: 3.73vw;
    font-weight: 500;
  }
  .img-box {
    padding: 2.26vw 5vw 7.6vw;
    display: flex;
    flex-wrap: wrap;
    > div:nth-of-type(4n) {
      margin-right: 0;
    }
    .cell {
      margin-right: 3vw;
      margin-bottom: 2vw;
      width: 20vw;
      height: 20vw;
    }
    .img-but {
      background-color: #f5f5f5;
      background-image: url("~@/assets/PostSaleRefund/j.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 5.33vw 5.33vw;
      margin-right: 0;
      margin-bottom: 0;
    }
  }
}
.submit-but {
  background-color: #f84e4e !important;
  width: 89.47vw;
  height: 11.73vw;
  border-radius: 5.87vw !important;
  margin: 13.33vw auto 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: 500;
  color: #fff;
}
</style>
