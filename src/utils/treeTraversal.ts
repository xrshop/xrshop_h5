/* eslint-disable @typescript-eslint/no-explicit-any */
export default function treeTraversal(
  node: any,
  path: string,
  callback: (node: any) => boolean | void,
) {
  if (!node) return;
  if (callback(node)) return;
  if (node[path] && node[path].length > 0) {
    for (let i = 0; i < node[path].length; i += 1) {
      treeTraversal(node[path][i], path, callback);
    }
  }
}
