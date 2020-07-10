<template>
  <div id="app">
    <router-view id="views" class="view-scroll" />
    <LayoutQueue />
  </div>
</template>

<script>
import plusready from '@/utils/html5plus';
import { initSafeArea, closeSplashscreen, setDpr } from '@/utils/app-init';

export default {
  created() {
    setDpr();
    plusready(() => {
      initSafeArea();
      closeSplashscreen();
    });
  },
};
</script>

<style lang="css" src="@/assets/constant.css"></style>
<style lang="css" src="@/assets/safe-area.css"></style>
<style lang="scss" src="@/assets/base.scss"></style>
<style lang="scss" src="@/assets/layout.scss"></style>
<style lang="scss" src="@/assets/view-scroll.scss"></style>
<style lang="scss" src="@/assets/ck-content.scss"></style>
