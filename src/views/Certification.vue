<template>
  <div class="certification">
    <TitleBar title="实名认证" canBack />
    <div class="info">
      <div class="item">
        <div class="left">真实姓名</div>
        <div class="right"><input type="text" placeholder="请输入真实姓名"></div>
      </div>
      <div class="item">
        <div class="left">身份证号码</div>
        <div class="right"><input type="number" placeholder="请输入真实身份证号码"></div>
      </div>
    </div>
    <div class="upload">
      <div class="title">上传证件</div>
      <div class="cell-list">
        <div class="cell">
          <div class="text">身份证正面</div>
          <div class="shoot"
          :style="{'background-image': `url(${require('@/assets/Certification/zm.png')})`}"
          >
            <img src="@/assets/Certification/sc.png" alt="" />
          </div>
        </div>
        <div class="cell">
          <div class="text">身份证反面</div>
          <div class="shoot"
          :style="{'background-image': `url(${require('@/assets/Certification/bm.png')})`}"
          ><img src="@/assets/Certification/sc.png" alt="" /></div>
        </div>
        <div class="cell">
          <div class="text">手持证件照</div>
          <div class="shoot"
          :style="{'background-image': `url(${require('@/assets/Certification/bs.png')})`}"
          ><img src="@/assets/Certification/sc.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="tips">
      <div class="title"><span>*</span>须知</div>
      <div class="item-list">
        <div class="item">必须本人身份证，且内容清晰可辨。请您确认拍照权限已开启。</div>
      </div>
    </div>
    <div class="submit-but">确认提交</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.certification {
  background-color: #FAFAFA;
}
.title-bar::v-deep {
  .main .center .center-text {
    font-weight: bold;
  }
}
input {
  outline: none;
  border: none;
}
.info {
  margin: 2.67vw 0;
  background-color: #fff;
  padding: 0 3.2vw;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 14.4vw;
    border-top: solid #F5F8FD var(--px);
    &:first-of-type {
      border: none;
    }
    .left {
      font-size: 4vw;
    }
    .right input {
      text-align: right;
      font-size: 3.2vw;
      &::placeholder {
        color: #bbb;
      }
    }
  }
}
.upload {
  background-color: #fff;
  padding: 5.33vw 3.47vw 0vw 3.2vw;
  .title {
    margin-bottom: 7.8vw;
    font-size: 4vw;
  }
  .cell-list {
    display: flex;
    flex-wrap: wrap;
    .cell {
      width: 41.07vw;
      margin-right: 11.04vw;
      margin-bottom: 5.33vw;
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      .text {
        font-size: 3.2vw;
        margin-bottom: 2.67vw;
      }
      .shoot {
        width: 100%;
        height: 24.93vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        img {
          width: 8.53vw;
          height: 8.53vw;
        }
      }
    }
  }
}
.tips {
  padding: 0 3.2vw;
  margin-top: 2.67vw;
  font-size: 3.2vw;
  color: #bbb;
  .title {
    margin-bottom: 1.3vw;
    span {
      color: #FF5858;
    }
  }
}
.submit-but {
  border-radius: 5.87vw;
  line-height: 11.73vw;
  width: 89.47vw;
  background-color: #F84E4E;
  text-align: center;
  margin: 5.87vw auto 10vw;
  font-size: 4vw;
  color: #fff;
}
</style>
