<template>
  <div class="category-details">
    <TitleBar canBack>
      <template v-slot:center>
        <SearchSimple />
      </template>
      <template v-slot:right>
        <div
          class="menu-button"
          :class="{'style2': changeStyle}"
          @click="changeStyle = !changeStyle"
        ></div>
      </template>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" />
      </template>
    </TitleBar>
    <waterfall :data="data" :col="2" :isTransition="false" v-show="changeStyle == false">
      <template>
        <router-link to="/item-details" class="cell" v-for="item of data" :key="item.id">
          <div
            class="cover"
            :style="{'background-image':'url(https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3507028413,2530873393&fm=26&gp=0.jpg)'}"
          ></div>
          <div class="info">
            <div class="title">{{item.title}}</div>
            <div class="label">
              <div class="item">冷冻</div>
            </div>
            <div class="row-a">
              <div class="money">
                <Price :value="56.80" />
                <div class="type">
                  <div class="item stress">自营</div>
                  <div class="item">满减</div>
                  <div class="item">惠</div>
                </div>
              </div>
              <span class="count">236人买过</span>
            </div>
          </div>
          <img src="@/assets/CategoryDetails/gwc.png" class="icon" alt />
        </router-link>
      </template>
    </waterfall>
    <div class="changeStyle" v-show="changeStyle">
      <router-link to="/item-details" class="cell" v-for="index of 20" :key="index">
        <div
          class="cover"
          :style="{'background-image':'url(https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3507028413,2530873393&fm=26&gp=0.jpg)'}"
        ></div>
        <div class="info">
          <div class="title">西红柿樱桃小番茄水果 荷兰瓜柿子蔬菜</div>
          <div class="label">
            <div class="item">冷冻</div>
          </div>
          <div class="row-a">
            <div class="money">
              <Price :value="56.80" />
              <div class="type">
                <div class="item stress">自营</div>
                <div class="item">满减</div>
                <div class="item">惠</div>
              </div>
            </div>
            <span class="count">236人买过</span>
          </div>
        </div>
        <img src="@/assets/CategoryDetails/gwc.png" class="icon" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: [
        { id: 0, text: '综合排序' },
        { id: 1, text: '价格', direction: 0 },
        { id: 2, text: '销量' },
        { id: 3, text: '新品' },
      ],
      sortActivated: 1,
      changeStyle: false,
      data: [
        { id: 0, title: '西红柿樱桃小番茄水果 荷兰瓜柿子蔬菜', money: 56.8 },
        { id: 1, title: '柿樱桃小番茄水果 荷兰瓜柿子蔬菜', money: 56.8 },
        { id: 2, title: '西红柿樱桃小番茄水果 荷兰瓜柿子蔬菜', money: 56.8 },
        { id: 3, title: '柿樱桃小番茄水果 荷兰瓜柿子蔬菜', money: 56.8 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.category-details {
  background-color: #f6f6f6;
}
.title-bar::v-deep {
  border-radius: 0 0 2vw 2vw;
  .center {
    display: flex;
    align-items: center;
  }
  .back-button {
    width: calc((100vw - 75vw) * 0.5);
  }
}
.search {
  width: 75vw;
}
.menu-button {
  width: calc((100vw - 75vw) * 0.5);
  height: var(--title-bar-height);
  background-image: url("~@/assets/CategoryDetails/menu-button1.png");
  background-repeat: no-repeat;
  background-size: 4.4vw;
  background-position: center;
}
.menu-button.style2 {
  background-image: url("~@/assets/CategoryDetails/menu-button.png");
}

.vue-waterfall::v-deep {
  padding: 0 3.33vw;
  box-sizing: border-box;
  margin-top: 2.67vw;
  .vue-waterfall-column {
    padding: 0 0.67vw;
    box-sizing: border-box;
    .cell {
      display: block;
      width: 44.67vw;
      background-color: #fff;
      border-radius: 2vw;
      overflow: hidden;
      box-shadow: 0 0 1vw 0 rgba($color: #000000, $alpha: 0.01);
      margin:0 auto 2.67vw;
      position: relative;
      .icon {
        display: none;
      }
    }
    .cover {
      height: 44.67vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .info {
      padding: 2.67vw 2.67vw 4vw;
      .label {
        margin-top: 2.13vw;
        .item {
          width: max-content;
          padding: 0.53vw 1.33vw;
          font-size: 2.67vw;
          color: #999;
          background-color: #f6f6f6;
          border-radius: 1.87vw;
        }
      }
    }
    .title {
      margin-top: 1.87vw - 2.53vw - (4.53vw - 3.73vw) / 2;
      font-size: 3.73vw;
      line-height: 4.53vw;
    }
    .mass {
      margin-top: 2.53vw - (5.2vw - 4vw) / 2;
      color: #bbb;
      font-size: 3.2vw;
    }
    .row-a {
      display: flex;
      justify-content: space-between;
      margin-top: 3.07vw;
      .type {
        display: flex;
        margin-top: 2.53vw;
        .item {
          margin-right: 1.33vw;
          font-size: 2.67vw;
          padding: 0.53vw 1.2vw;
          border: solid var(--px) #ff450b;
          color: #ff450b;
          border-radius: 0.4vw;
          &:last-of-type {
            margin-right: 0;
          }
        }
        .stress {
          color: #fff;
          background-color: #ff450b;
        }
      }
    }
    .count {
      position: absolute;
      font-size: 2.67vw;
      color: #bbb;
      right: 4vw;
    }
  }
}

.changeStyle {
  padding: 0 4vw;
  .cell {
    width: 92vw;
    height: 40.13vw;
    display: flex;
    border-radius: 1.33vw;
    position: relative;
    background-color: #fff;
    margin-top: 2.67vw;
    padding: 4vw;
    box-sizing: border-box;
    .icon {
      display: block;
      width: 7.47vw;
      position: absolute;
      right: 4vw;
      bottom: 9.73vw;
    }
    .cover {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 32vw;
      height: 32vw;
      flex-shrink: 0;
      border-radius: 1.33vw;
      margin-right: 2.67vw;
    }
    .info {
      position: relative;
      .label {
        margin-top: 2.13vw;
        .item {
          width: max-content;
          padding: 0.53vw 1.33vw;
          font-size: 2.67vw;
          color: #999;
          background-color: #f6f6f6;
          border-radius: 1.87vw;
        }
      }
      .row-a {
        position: absolute;
        bottom: 0;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
        .count {
          display: none;
        }
        .type {
          display: flex;
          margin-top: 2.53vw;
          .item {
            margin-right: 1.33vw;
            font-size: 2.67vw;
            padding: 0.53vw 1.2vw;
            border: solid var(--px) #ff450b;
            color: #ff450b;
            border-radius: 0.4vw;
          }
          .stress {
            color: #fff;
            background-color: #ff450b;
          }
        }
      }
    }
  }
}
.tabs::v-deep {
  .active {
    color: #f84e4e;
  }
}
</style>
