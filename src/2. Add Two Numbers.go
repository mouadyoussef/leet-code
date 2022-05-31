package src

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var result *ListNode = &ListNode{}
	var current *ListNode = result
	var carry int = 0

	for l1 != nil || l2 != nil {
		sum := carry
		carry = 0

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		if sum >= 10 {
			carry = 1
			sum -= 10
			current.Next = &ListNode{Val: 1}
		}

		current.Val += sum
		if l1 != nil || l2 != nil {
			current.Next = &ListNode{}
		}
		current = current.Next
	}

	return result
}
