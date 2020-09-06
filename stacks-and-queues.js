class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null; //same as head
    this.last = null; //same as tail
    this.size = 0; //same as length
  }

  //Push acts as shift and pop acts as unshift.
  //This is because in a stack we use LOFO
  //and removing/adding from beginning in a
  //singly linked list is fastest

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      //aka if the stack only has one item
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null
        let removedNode = this.first
        if (this.first === this.last) {
            this.last = null
        }
            this.first = this.first.next
            this.size--
            return removedNode.value
    }
}
