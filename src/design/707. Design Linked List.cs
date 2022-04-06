public class MyLinkedList {
    private class Node {
        public int val;
        public Node next;

        public Node(int val) {
            this.val = val;
        }
    }

    private Node head;
    private int size = 0;

    public MyLinkedList() { }
    
    public int Get(int index) {
        if (index < 0 || index >= size || head is null)
        {
            return -1;
        }

        var currentNode = head;
        for (int i = 0; i < index; ++i)
        {
            currentNode = currentNode.next;
        }

        return currentNode.val;
    }
    
    public void AddAtHead(int val) {
        var node = new Node(val);
        node.next = head;
        head = node;
        ++size;
    }
    
    public void AddAtTail(int val) {
        AddAtIndex(size, val);
    }
    
    public void AddAtIndex(int index, int val) {
        if (index < 0 || index > size)
        {
            return;
        }
        
        if(index == 0) {
            AddAtHead(val);
            return;
        }
        
        var node = new Node(val);

        var parrentNode = head;
        for (int i = 0; i < index - 1; ++i)
        {
            parrentNode = parrentNode.next;
        }
        node.next = parrentNode.next;
        parrentNode.next = node;
        ++size;
    }
    
    public void DeleteAtIndex(int index) {
        if (index < 0 || index >= size)
        {
            return;
        }

        if (index == 0) {
            head = head.next;
            return;
        }

        var parrentNode = head;
        for (int i = 0; i < index - 1; ++i)
        {
            parrentNode = parrentNode.next;
        }
        parrentNode.next = parrentNode.next.next;
        --size;
    }
}
