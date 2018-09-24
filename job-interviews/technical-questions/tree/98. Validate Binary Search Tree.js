/**

 * Given a binary tree, determine if it is a valid binary search tree (BST).

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.

 solution: https://www.youtube.com/watch?v=NjTqDotq6D0

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
var isValidBST = root => helper(root, null, null);

var helper = (root, min, max) => {
  if (root === null) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
