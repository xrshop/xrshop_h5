export function setDpr() {
  const rootEL = document.querySelector(':root') as HTMLElement | undefined;
  if (!rootEL) return;
  rootEL.style.setProperty('--device-pixel-ratio', String(window.devicePixelRatio)); // 设置DPR
}

export function initSafeArea() {
  const rootEL = document.querySelector(':root') as HTMLElement | undefined;
  if (!rootEL) return;
  const statusbarHeight = window.plus.navigator.getStatusbarHeight(); // 获取状态条逻辑高度
  rootEL.style.setProperty('--status-bar-height', `${statusbarHeight}px`); // 设置沉浸模式补偿值为状态条高度
  if (window.plus.navigator.isImmersedStatusbar()) rootEL.classList.add('use-safe-area'); // 判断是否为沉浸模式，若是沉浸模式则使用安全区域
}

export function closeSplashscreen() {
  window.plus.navigator.closeSplashscreen(); // wap2app关闭启动页
}
