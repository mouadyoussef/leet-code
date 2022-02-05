export class Tree {
  private root: TreeNode;
  constructor() { }

  public add(value: number) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currentNode: TreeNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  public delete(value: number): void {
    // TODO:
  }

  public printInorder(): void {
    this.inorderTraversal(this.root);
  }

  public printPreorder(): void {
    this.preorderTraversal(this.root);
  }

  public printPostorder(): void {
    this.postorderTraversal(this.root);
  }

  private inorderTraversal(root: TreeNode): void {
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
  }

  private preorderTraversal(root: TreeNode): void {
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
  }

  private postorderTraversal(root: TreeNode): void {
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
  }

  public contains(value: number): boolean {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  public isBST(): boolean {
    return this.isValidBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_VALUE);
  }

  private isValidBST(node: TreeNode, min: number, max: number): boolean {
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
  }
}

class TreeNode {
  public left: TreeNode = null;
  public right: TreeNode = null;

  constructor(public value: number) { }
}

const tree = new Tree();

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
