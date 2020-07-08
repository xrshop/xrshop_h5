<template>
  <div class="comment" v-if="productData">
    <TitleBar title="发表评价" rightText="提交" @rightTextClick="submit" canBack>
      <template v-slot:other>
        <div class="product">
          <div class="top">
            <div
              class="cover"
              :style="{
                'background-image': `url(${productData.productInfo.attrInfo.image})`
              }"
            ></div>
            <div class="info">
              <div class="title">{{ productData.productInfo.storeName }}</div>
              <div class="text">{{ productData.productInfo.attrInfo.suk }}</div>
            </div>
          </div>
          <div class="bottom">
            <div class="title">商品评价</div>
            <Grade v-model="product" :text="evaluate" />
          </div>
        </div>
      </template>
    </TitleBar>
    <div class="card card1">
      <div class="top">
        <img src="@/assets/Comment/bj.png" alt="" />
        <textarea placeholder="请填写您的评价" required ref="text" v-model="text"></textarea>
      </div>
      <div class="img-box">
        <div
          v-for="(img, i) in imageArr"
          :key="i"
          class="cell"
          :style="{ 'background-image': `url(${img})` }"
        ></div>
        <label for="file" class="add-img">
          <img src="@/assets/Comment/xj.png" alt="" />
          <div class="text">添加图片</div>
        </label>
        <input type="file" id="file" ref="file" name="file" hidden @input="upload" />
      </div>
      <!-- <div class="bottom" @click="isFake = !isFake">
        <div class="radio-box">
          <div class="radio" :class="{ active: !isFake }"></div>
        </div>
        <div class="text">匿名评价</div>
      </div> -->
    </div>
    <div class="card card2">
      <div class="right">
        <div class="title">商家评价</div>
        <div class="content">
          <!-- <div class="row">
            <div class="left">快递包装</div>
            <div class="right">
              <Grade v-model="packaging" :text="evaluate" />
            </div>
          </div>
          <div class="row">
            <div class="left">送货速度</div>
            <div class="right"><Grade v-model="speed" :text="evaluate" /></div>
          </div>
           -->
          <div class="row">
            <div class="left">服务</div>
            <div class="right"><Grade v-model="serve" :text="evaluate" /></div>
          </div>
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
      product: 5,
      packaging: 5,
      speed: 5,
      serve: 5,
      text: '',
      evaluate: ['', '很差', '差', '一般', '好', '很好'],
      isFake: true,
      oId: 0,
      productData: '',
      imageArr: [],
    };
  },
  methods: {
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
      if (!this.$refs.text.reportValidity()) return;
      axios
        .post(
          '/api/order/comment',
          {
            comment: this.text,
            oid: this.oId,
            productId: Number(this.$route.query.pid),
            productScore: this.product,
            serviceScore: this.serve,
            replyType: this.productData.type,
            unique: this.productData.unique,
            pics: this.imageArr.join(','),
          },
          { headers: { Authorization: userManage.data.token } },
        )
        .then((response) => {
          this.$com alert(response.data.msg);
          this.$router.back();
        });
    },
  },
  created() {
    axios
      .get(`/api/order/detail/${this.$route.query.key}`, {
        headers: { Authorization: userManage.data.token },
      })
      .then((response) => {
        this.oId = response.data.data.id;
        // eslint-disable-next-line prefer-destructuring
        this.productData = response.data.data.cartInfo.filter(
          (item) => item.productId === Number(this.$route.query.pid),
        )[0];
      });
  },
};
</script>

<style lang="scss" scoped>
.comment {
  background-color: #f5f5f5;
}
.title-bar::v-deep {
  border-radius: 0 0 2vw 2vw;
  .main {
    .right {
      display: flex;
      align-items: center;
      margin-right: 4vw;
      color: #ff534f;
      font-size: 3.73vw;
    }
  }
  .product {
    height: 26.93vw;
    padding: 2.8vw 8vw 0;
    .top {
      display: flex;
      .cover {
        flex-shrink: 0;
        width: 13.33vw;
        height: 13.33vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .info {
        margin-left: 2.67vw;
        .title {
          margin-top: 3.07vw;
          font-size: 3.2vw;
        }
        .text {
          color: #bbbbbb;
          font-size: 3.2vw;
          margin-top: 1.2vw;
        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      margin-top: 3.73vw;
      .title {
        font-size: 3.2vw;
        margin-right: 2.4vw;
      }
    }
  }
}
.card {
  width: 92vw;
  box-sizing: border-box;
  border-radius: 2vw;
  margin: 2.67vw auto 0;
  background-color: #ffffff;
  padding: 3.87vw 3.6vw 2.67vw;
}
.card1 {
  .top {
    display: flex;
    img {
      width: 5.07vw;
      height: 5.07vw;
      margin-right: 1.6vw;
    }
    textarea {
      width: 100%;
      min-height: 30vw;
      font-size: 3.2vw;
      outline: none;
      border: none;
      resize: none;
      &::placeholder {
        color: #bbb;
      }
    }
  }
  .img-box {
    display: flex;
    margin-top: 5vw;
    .cell {
      width: 19.74vw;
      height: 19.74vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      margin-right: 1vw;
    }
    .add-img {
      width: 19.74vw;
      height: 19.74vw;
      background-color: #f6f6f6;
      text-align: center;
      border-radius: 1.33vw;
      img {
        width: 6.67vw;
        height: 5.47vw;
        margin-top: 5.2vw;
      }
      .text {
        font-size: 2.67vw;
        font-weight: bold;
        margin-top: 1.07vw;
      }
    }
  }
  .bottom {
    margin-top: 2.67vw;
    display: flex;
    align-items: center;
    width: max-content;
    .text {
      font-size: 3.2vw;
    }
    .radio-box {
      margin-right: 2vw;
      margin-top: 1vw;
      .radio {
        width: 7.2vw;
        height: 7.2vw;
        background-image: url("~@/assets/Index/Cart/1.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        &.active {
          transition-duration: 0.16s;
          background-image: url("~@/assets/Index/Cart/2.png");
        }
      }
    }
  }
}
.card2 {
  display: flex;
  img {
    width: 5.07vw;
    height: 5.07vw;
    flex-shrink: 0;
  }
  .right {
    padding-left: 1.6vw;
    width: 100%;
    .title {
      margin-top: 0.67vw;
      font-size: 3.2vw;
    }
    .content {
      padding-top: 1.33vw;
      padding-bottom: 2.66vw;
      .row {
        margin-top: 5.2vw;
        .left {
          width: 30%;
          font-size: 3.2vw;
        }
      }
    }
  }
}
</style>
