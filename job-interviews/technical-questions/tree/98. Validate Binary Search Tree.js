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
const isValidBST = root => helper(root, null, null)

const helper = (root, min, max) => {
  if (root === null) return true
  if (min !== null && root.val <= min) return false
  if (max !== null && root.val >= max) return false
  const leftValidBST = helper(root.left, min, root.val)
  const rightValidBST = helper(root.right, root.val, max)
  return leftValidBST && rightValidBST
}