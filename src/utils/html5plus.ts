// 根据 plus 初始化情况进行调用或等待 plus 初始化完毕调用
export default function plusready(handler: () => void) {
  // 添加的函数一定会执行
  if (plus) {
    handler();
  } else {
    document.addEventListener('plusready', handler, { once: true });
  }
}
