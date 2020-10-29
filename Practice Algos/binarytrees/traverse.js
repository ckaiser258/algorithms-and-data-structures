/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */

//Preorder traversal checks root and then left and then right
var preorderTraversal = function (root) {
  let result = [];
  function traverse(node) {
    if (node) {
      // if(node) because we need to make sure an empty array wasn't passed in
      //Because if an empty array is passed in, .push() would break
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
  }
  traverse(root);
  return result;
};

//Inorder traversal checks left and then root and then right
var inorderTraversal = function (root) {
  let result = [];
  function traverse(root) {
    if (root) {
      if (root.left) traverse(root.left);
      result.push(root.val);
      if (root.right) traverse(root.right);
    }
  }
  traverse(root);
  return result;
};
