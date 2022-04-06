package src

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func rangeSumBST(root *TreeNode, low int, high int) int {
	return bfs(root, low, high, 0)
}

func bfs(root *TreeNode, low int, high int, sum int) int {
	if root == nil {
		return sum
	}

	if root.Val < low || root.Val > high {
		return bfs(root.Left, low, high, sum) + bfs(root.Right, low, high, sum)
	}

	return bfs(root.Left, low, high, sum) + bfs(root.Right, low, high, sum) + root.Val
}
