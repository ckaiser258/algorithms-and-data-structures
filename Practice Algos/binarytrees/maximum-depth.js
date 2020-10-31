/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var maxDepth = function(root) {
    function maxNum(node, sum) {
        if (!node) return sum
        return Math.max(maxNum(node.left, sum + 1), maxNum(node.right, sum + 1))
    }
    return maxNum(root, 0)
};