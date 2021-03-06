/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历 inOrder(r)
// inOrder(r->left)
// print r
// inOrder(r->right)
var inorderTraversal = function(root) {
    const result = [];
    function pushRoot(node) {
       if (node !== null) {
            if (node.left !== null) {
                pushRoot(node.left);
            }
            result.push(node.val);
            if (node.right !== null) {
               pushRoot(node.right);
            }
       }
    }
    pushRoot(root);
    return result;
};
