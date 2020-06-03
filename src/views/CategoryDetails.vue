<template>
  <div class="category-details">
    <TitleBar canBack>
      <template v-slot:center>
        <SearchSimple />
      </template>
      <template v-slot:right>
        <div class="menu-button"
        :class="{'style2': changeStyle}"
        @click="changeStyle = !changeStyle">
        </div>
      </template>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" />
      </template>
    </TitleBar>
    <div class="list" :class="{'row-style': changeStyle}">
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
            <Price :value="56.80" />
            <span class="count">236人买过</span>
            <div class="type">
              <div class="item stress">自营</div>
              <div class="item">满减</div>
              <div class="item">惠</div>
            </div>
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

.list {
  display: flex;
  flex-wrap: wrap;
  padding: 2.67vw 4vw;
  justify-content: space-between;
  .cell {
    width: 44.67vw;
    background-color: #fff;
    border-radius: 2vw;
    overflow: hidden;
    box-shadow: 0 0 1vw 0 rgba($color: #000000, $alpha: 0.01);
    margin-bottom: 2.67vw;
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
    padding: 2.67vw;
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
    align-items: center;
    margin-top: 3.07vw;
    .type {
      display: none;
    }
  }
  // .price ::v-deep {
  //   .float {
  //     font-size: 3.2vw;
  //     font-weight: bold;
  //   }
  // }
  .count {
    font-size: 3.2vw;
    color: #bbb;
    // margin-left: 2.67vw;
  }
}
.list.row-style {
  .cell {
    width: 92vw;
    height: 40.13vw;
    padding: 4vw;
    display: flex;
    box-sizing: border-box;
    border-radius: 1.33vw;
    position: relative;
    .icon {
      display: block;
      width: 7.47vw;
      position: absolute;
      right: 4vw;
      bottom: 9.73vw;
    }
    .cover {
      width: 32vw;
      height: 32vw;
      flex-shrink: 0;
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
          background-color: #F6F6F6;
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
            border: solid var(--px) #FF450B;
            color: #FF450B;
          }
          .stress {
            color: #fff;
            background-color: #FF450B;
            border-radius: 0.4vw;
          }
        }
      }
    }
  }
}
.tabs::v-deep {
  .active {
    color: #F84E4E;
  }
}
</style>
