"use strict";
exports.__esModule = true;
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.add = function (value) {
        var node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        var currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    };
    Tree.prototype["delete"] = function (value) {
        // TODO:
    };
    Tree.prototype.printInorder = function () {
        this.inorderTraversal(this.root);
    };
    Tree.prototype.printPreorder = function () {
        this.preorderTraversal(this.root);
    };
    Tree.prototype.printPostorder = function () {
        this.postorderTraversal(this.root);
    };
    Tree.prototype.inorderTraversal = function (root) {
        if (!root) {
            return;
        }
        if (root.left) {
            this.inorderTraversal(root.left);
        }
        console.log(root.value);
        if (root.right) {
            this.inorderTraversal(root.right);
        }
    };
    Tree.prototype.preorderTraversal = function (root) {
        if (!root) {
            return;
        }
        console.log(root.value);
        if (root.left) {
            this.preorderTraversal(root.left);
        }
        if (root.right) {
            this.preorderTraversal(root.right);
        }
    };
    Tree.prototype.postorderTraversal = function (root) {
        if (!root) {
            return;
        }
        if (root.left) {
            this.postorderTraversal(root.left);
        }
        if (root.right) {
            this.postorderTraversal(root.right);
        }
        console.log(root.value);
    };
    Tree.prototype.contains = function (value) {
        if (!this.root) {
            return false;
        }
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    };
    Tree.prototype.isBST = function () {
        return this.isValidBST(this.root, Number.MIN_VALUE, Number.MAX_VALUE);
    };
    Tree.prototype.isValidBST = function (node, min, max) {
        if (node.value <= min || node.value >= max) {
            return false;
        }
        if (node.left && !this.isValidBST(node.left, min, node.value)) {
            return false;
        }
        if (node.right && !this.isValidBST(node.right, node.value, max)) {
            return false;
        }
        return true;
    };
    return Tree;
}());
exports.Tree = Tree;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var tree = new Tree();
tree.add(3);
tree.add(5);
tree.add(2);
tree.add(4);
tree.add(1);
tree.add(6);
console.log(JSON.stringify(tree, null, 4));
// tree.printInorder();
// tree.printPreorder();
// tree.printPostorder();
// console.log(tree.contains(1));
console.log(tree.isBST());
