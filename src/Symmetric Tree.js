/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return false;
  }
  return areNodesEqual(root.left, root.right);
};


var areNodesEqual = function (n1, n2) {
  if (!n1 && !n2) {
    return true;
  }

  if ((!n1 || !n2) || n1.val !== n2.val) {
    return false;
  }

  return areNodesEqual(n1.left, n2.right) && areNodesEqual(n1.right, n2.left);
};