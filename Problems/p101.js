/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true
    }
    return isSameTree(root.left, root.right)
};
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true
    }
    if (p === null || q === null) {
        return false
    }
    if (p.val === q.val) {
        return isSameTree(p.left, q.right) && isSameTree(p.right, q.left)
    }
    return false
};