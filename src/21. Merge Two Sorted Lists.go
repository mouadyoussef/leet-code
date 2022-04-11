package src

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	if list1 == nil || (list1 == nil && list2 == nil) {
		return list2
	} else if list2 == nil {
		return list1
	}

	var list *ListNode
	if list1.Val < list2.Val {
		list = &ListNode{Val: list1.Val}
		list1 = list1.Next
	} else {
		list = &ListNode{Val: list2.Val}
		list2 = list2.Next
	}
	p := list

	for list1 != nil || list2 != nil {
		if list1 == nil || (list2 != nil && list1.Val > list2.Val) {
			p.Next = &ListNode{Val: list2.Val}
			list2 = list2.Next
		} else {
			p.Next = &ListNode{Val: list1.Val}
			list1 = list1.Next
		}
		p = p.Next
	}

	return list
}
