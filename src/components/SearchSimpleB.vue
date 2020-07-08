<template>
  <div class="box">
    <input
      class="search"
      type="search"
      v-model="keyword"
      @keyup.enter="submit"
      placeholder="特色美食"
    />
    <!-- <img class="icon" src="@/assets/Index/HomeB/Header/tu.png" /> -->
  </div>
</template>
<script>
export default {
  name: 'SearchSimpleB',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    submit() {
      if (!this.keyword) return;
      this.$router.push({ path: '/category-details', query: { keyword: this.keyword } });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 8vw;
  border-radius: 4vw;
  background-color: #ffffff;
  border: 0.27vw solid rgba(255, 69, 11, 1);
  padding: 0 4vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .search {
    outline: none;
    border: none;
    // background-color: rgba(238,238,238,0.5);
    padding-left: 5.33vw;
    padding-right: 2.4vw;
    background-image: url("~@/assets/search.png");
    background-repeat: no-repeat;
    background-size: 4vw;
    // background-position: 2.4vw;
    background-position: left center;
    line-height: 1;
    flex: 1;
    font-size: 3.2vw;
    &::placeholder {
      color: #bbb;
    }
  }
  .icon {
    width: 4vw;
    height: 4vw;
  }
}
</style>
