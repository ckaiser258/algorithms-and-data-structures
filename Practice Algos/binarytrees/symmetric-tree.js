/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isSymmetric = function(root) {
    if (!root) return true
    function isMirror(node1, node2) {
        if (!node1 || !node2) return node1 === node2
        if (node1.val !== node2.val) return false
        return isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right)
    }
    return isMirror(root.left, root.right)
};