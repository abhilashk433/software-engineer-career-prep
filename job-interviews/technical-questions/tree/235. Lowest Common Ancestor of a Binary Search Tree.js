// Lowest Common Ancestor must sit between p and q
// p < Lowest Common Ancestor < q
var lowestCommonAncestor = (root, p, q) => {
  // Lowest Common Ancestor bigger than both p and q so we move left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // Lowest Common Ancestor small than both p and q so we move right
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
