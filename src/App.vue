<template>
  <div id="app" :class="{ 'use-safe-area': useSafeArea }">
    <router-view id="views" />
  </div>
</template>

<script>
import plusready from '@/utils/html5plus';

export default {
  data() {
    return {
      useSafeArea: false, // 是否使用安全区域
    };
  },
  created() {
    plusready(() => {
      window.plus.navigator.closeSplashscreen(); // wap2app关闭启动页
      this.useSafeArea = window.plus.navigator.isImmersedStatusbar(); // 判断是否为沉浸模式，若是沉浸模式则使用安全区域
      const statusbarHeight = window.plus.navigator.getStatusbarHeight(); // 获取状态条逻辑高度
      const statusbarHeightPx = `${statusbarHeight}px`;
      document.querySelector(':root').style.setProperty('--status-bar-height', statusbarHeightPx); // 设置沉浸模式补偿值为状态条高度
    });
    document
      .querySelector(':root')
      .style.setProperty('--device-pixel-ratio', window.devicePixelRatio); // 设置DPR
  },
};
</script>

<style>
:root {
  --status-bar-height: 24px; /* 状态条高度 */
  --safe-top: 0px; /* 上安全区域 */
  --safe-bottom: 0px; /* 下安全区域 */
  --device-pixel-ratio: 2; /* 默认dpr为2 */
  --px: calc(1px / var(--device-pixel-ratio));
}

#app.use-safe-area {
  --safe-top: var(--status-bar-height);
  --safe-bottom: var(--status-bar-height);
}

@supports (bottom: constant(safe-area-inset-bottom)) {
  #app.use-safe-area {
    --safe-top: constant(safe-area-inset-top);
    --safe-bottom: constant(safe-area-inset-bottom);
  }
}

@supports (bottom: env(safe-area-inset-bottom)) and (padding: max(0px)) {
  #app.use-safe-area {
    /* max(env(safe-area-inset-bottom),var(--status-bar-height)); */
    --safe-top: env(safe-area-inset-bottom);
    --safe-bottom: env(safe-area-inset-bottom);
  }
}
</style>
<style>
html {
  font-size: calc(16 / 3.75 * 1vw);
}
</style>
<style lang="scss">
body {
  margin: 0;
}

html,
body,
#app {
  overflow: hidden;
}

html,
body,
#app,
#views {
  height: 100%;
}

#views {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1;
}

a {
  text-decoration: none;
}

.tab-highlight {
  transition: background-color 0.1s;
  &:active {
    background-color: #ade1f5;
    transition: background-color 0s;
  }
}

input,
textarea,
select {
  font-size: 1em;
  ::placeholder {
    font-size: 1em;
  }
}
</style>
<style lang="scss" src="@/assets/layout.scss"></style>
