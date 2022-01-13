//input:(head)
//0->1->2->3->4->5 the head node has a value of zero
//0 <- 1 <-
//outut:
// 5-4-3-2-1-0

//set prev to currNode
//currNode to prev

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//curr 0, prev null

//0->null
//currNode.next = prev  || 0-> null
//
//currNode = currNode.next
// 0-1

function reverseLinkedList(head) {
  // Write your code here.
  let currNode = head
  let prev = null; //0
  /// have a pointer of the currnode
  while (currNode !== null) {
    let nextNode = currNode.next //2
    currNode.next = prev // currNode
    prev = currNode // 0
    currNode = nextNode // 1
  }
  return prev
  //create a while loop and loop through the entire linked list(currnode !== null)
//
}

let head =new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(4);


