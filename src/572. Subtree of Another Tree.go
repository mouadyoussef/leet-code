package src

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
	var queue []*TreeNode
	var node *TreeNode

	queue = append(queue, root) // Push

	for len(queue) > 0 {
		node = queue[0]
		queue = queue[1:] // Pop

		if node.Left != nil {
			queue = append(queue, node.Left) // Push
		}

		if node.Right != nil {
			queue = append(queue, node.Right) // Push
		}

		if bfs(node, subRoot) {
			return true
		}
	}

	return false
}

func bfs(root *TreeNode, subRoot *TreeNode) bool {
	if root == nil && subRoot == nil {
		return true
	}

	if root == nil || subRoot == nil || root.Val != subRoot.Val {
		return false
	}

	return bfs(root.Left, subRoot.Left) && bfs(root.Right, subRoot.Right)
}
