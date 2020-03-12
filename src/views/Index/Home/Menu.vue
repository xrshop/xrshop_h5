<template>
  <div class="menu">
    <div class="cell" v-for="(cell, index) of menu" :key="index">
      <img class="icon" :src="cell.icon" alt />
      <div class="text">{{ cell.text }}</div>
    </div>
  </div>
</template>
<script>
import menu from '@/config/meta/home-menu';

export default {
  data() {
    return {
      menu,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3.33vw;
  margin-bottom: 3.2vw;
}
.cell {
  width: 23.2vw;
  height: 19.06vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 9.33vw;
  height: 9.33vw;
  display: block;
}
.text {
  margin-top: 2.67vw;
  font-size: 3.2vw;
  // color: #333;
}
</style>
