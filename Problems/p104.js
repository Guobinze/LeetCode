/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 迭代，利用null作为每层的分割
// var maxDepth = function(root) {
//     if (!root) {return 0}
//     if (!root.left && !root.right) {return 1}
//     let cur = root;
//     const queue = [root, null];
//     let depth = 1;
//     while ((cur = queue.shift()) !== undefined) {
//         if (cur === null) {
//             // 注意⚠️： 不处理会无限循环，进而堆栈溢出
//             if (queue.length === 0) return depth;
//             depth++;
//             queue.push(null);
//             continue;
//         }
//         const l = cur.left;
//         const r = cur.right;
//
//         if (l) queue.push(l);
//         if (r) queue.push(r);
//     }
//     return depth
// };
// 递归
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
