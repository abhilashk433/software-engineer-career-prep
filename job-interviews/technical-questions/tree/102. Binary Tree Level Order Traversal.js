/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  let res = [];
  levelRecursion(root, res, 0);
  return res;
};

const levelRecursion = (node, res, level) => {
  if (node === null) return;

  if (res.length < level + 1) {
    res.push([]);
  }

  levelRecursion(node.left, res, level + 1);
  levelRecursion(node.right, res, level + 1);

  res[level].push(node.val);
};
