// Count Good Nodes in Binary Tree
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function goodNodes(root) {
    if (root == null)
        return 0;
    return dfs(root, 0);
}
;
function dfs(root, max) {
    if (root == null)
        return 0;
    max = max >= root.val ? max : root.val;
    if (root.val >= max) {
        return 1 + dfs(root.left, max) + dfs(root.right, max);
    }
    else {
        return dfs(root.left, max) + dfs(root.right, max);
    }
}
var root = new TreeNode(3, new TreeNode(1, new TreeNode(3), null), new TreeNode(4, new TreeNode(1), new TreeNode(5)));
console.log(goodNodes(root));
