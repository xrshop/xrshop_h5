/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 持久化对象字面量
 * @param name 储存名
 * @param sourceObject 数据源对象
 */
export function save(name: string, sourceObject: any) {
  localStorage.setItem(name, JSON.stringify(sourceObject));
}

/**
 * 读取持久化对象字面量
 * @param name 读取名
 * @param targetObject 数据合并目标对象（Object.assign 浅替换）
 */
export function load(name: string, targetObject: any) {
  const json = localStorage.getItem(name);
  if (json) {
    const newData = JSON.parse(json);
    if (newData) Object.assign(targetObject, newData);
  }
}
