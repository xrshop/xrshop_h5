<template>
  <div class="category-details">
    <TitleBar canBack>
      <template v-slot:center>
        <SearchSimple />
      </template>
      <template v-slot:right>
        <div class="menu-button"></div>
      </template>
      <template v-slot:other>
        <Tabs :options="sort" v-model="sortActivated" />
      </template>
    </TitleBar>
    <div class="list">
      <div class="cell" v-for="index of 20" :key="index">
        <div
          class="cover"
          :style="{'background-image':'url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4165551527,846326127&fm=26&gp=0.jpg)'}"
        ></div>
        <div class="info">
          <div class="title">纯手工糯米糍糍粑手工 年糕湖南地道特产</div>
          <div class="mass">2400g</div>
          <div class="row-a">
            <Price :value="56.80" />
            <span class="count">236人买过</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: [
        { id: 0, text: '五花肉', red: true },
        { id: 1, text: '价格', direction: 0 },
        { id: 2, text: '销量' },
        { id: 3, text: '新品' },
      ],
      sortActivated: 1,
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
  background-image: url("~@/assets/CategoryDetails/menu-button.png");
  background-repeat: no-repeat;
  background-size: 4.4vw;
  background-position: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  padding: calc((100vw - 46vw * 2) / 6);
  .cell {
    width: 46vw;
    height: 74.4vw;
    background-color: #fff;
    border-radius: 2vw;
    overflow: hidden;
    margin: calc((100vw - 46vw * 2) / 6);
    box-shadow: 0 0 1vw 0 rgba($color: #000000, $alpha: 0.01);
  }
  .cover {
    height: 46vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .info {
    padding: 2.53vw;
  }
  .title {
    margin-top: 3.87vw - 2.53vw - (5.2vw - 4vw) / 2;
    font-size: 4vw;
    line-height: 5.2vw;
  }
  .mass {
    margin-top: 2.53vw - (5.2vw - 4vw) / 2;
    color: #bbb;
    font-size: 3.2vw;
  }
  .row-a {
    margin-top: 2.67vw;
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
    margin-left: 2.67vw;
  }
}
</style>
