<template>
  <div class="tab-bar">
    <router-link
      v-for="(item, index) in list"
      :key="index"
      :to="item.to"
      v-slot="{ isActive, href, navigate }"
    >
      <a
        class="nav-item"
        :class="{ 'router-link-active': isActive }"
        :href="href"
        @click="navigate"
      >
        <div
          class="icon"
          :style="{
            'background-image': `url(${isActive ? item.activeIcon : item.icon})`
          }"
        ></div>
        <div class="text">{{ item.text }}</div>
      </a>
    </router-link>
  </div>
</template>

<script>
import list from '@/config/meta/nav-list';

export default {
  name: 'TabBar',
  data() {
    return {
      list,
    };
  },
};
</script>

<style>
:root {
  --tab-bar-height: calc(50 / 3.75 * 1vw);
}
</style>

<style lang="scss" scoped>
.tab-bar {
  position: sticky;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: var(--tab-bar-height);
  background-color: rgba($color: #fff, $alpha: 0.8);
  backdrop-filter: blur(10px) brightness(110%);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  .nav-item {
    // flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22.67vw;
    .icon {
      height: 6.67vw;
      width: 6.67vw;
      // margin-top: 1.73vw;
      margin-top: 1.2vw;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .text {
      text-align: center;
      // margin-top: 0.67vw;
      margin-top: 1.2vw;
      font-size: 3.2vw;
      color: #bbb;
    }
    &.router-link-active .text {
      color: #f84e4e;
    }
  }
}
</style>
