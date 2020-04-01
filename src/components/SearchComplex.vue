<template>
  <div class="search-wrapper">
    <input class="search" type="search" placeholder=" " />
    <div class="search-placeholder">
      <div class="search-placeholder-content">
        <div class="icon"></div>
        <div class="text">搜索商品</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchComplex',
};
</script>
<style>
:root {
  --category-search-height: 8vw;
  --category-search-bottom-margin: 5.6vw;
}
</style>
<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  height: var(--category-search-height);
  margin: 0 6vw var(--category-search-bottom-margin);
}

.search {
  width: 100%;
  height: 100%;
  border-radius: 8vw * 0.5;
  border: none;
  background-color: #f6f6f6;
  padding-left: 7.73vw;
  padding-right: 2.4vw;
  line-height: 1;
  font-size: 3.2vw;
  outline: none;
}

.search + .search-placeholder {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 8vw * 0.5;
  transition-property: background-color;
  transition-delay: 0.3s;
  .search-placeholder-content {
    position: absolute;
    left: 3vw;
    width: 20vw;
    height: 100%;
    display: flex;
    align-items: center;
    transition-property: left, color;
    transition-duration: 0.3s, 0.3s;
  }
  .text {
    color: #333;
    font-size: 3.2vw;
    opacity: 0;
  }
  .icon {
    display: block;
    width: 3.33vw;
    height: 3.33vw;
    margin-right: 2vw;
    background-image: url("~@/assets/search.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}

// 有占位符
.search:placeholder-shown + .search-placeholder {
  background-color: #f6f6f6;
  .search-placeholder-content {
    left: calc((100% - 20vw) / 2);
  }
  .text {
    opacity: 1;
  }
}

// 有焦点
.search:focus + .search-placeholder {
  background-color: transparent;
  .search-placeholder-content {
    left: 3vw;
  }
  .text {
    color: #666;
  }
}
</style>
