package src

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func diameterOfBinaryTree(root *TreeNode) int {
	max := 0

	var solve func(*TreeNode) int
	solve = func(root *TreeNode) int {
		if root == nil {
			return 0
		}

		left := solve(root.Left)
		right := solve(root.Right)

		if left+right > max {
			max = left + right
		}

		if left > right {
			return left + 1
		}

		return right + 1
	}

	solve(root)
	return max
}
