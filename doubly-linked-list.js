class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.head === null) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let i = 0;
      let temp = this.head;
      while (i !== index) {
        temp = temp.next;
        i++;
      }
    } else {
      let i = this.length - 1;
      let temp = this.tail;
      while (i !== index) {
        temp = temp.prev;
        i--;
      }
    }
    return temp;
  }
  set(index, val) {
    let node = this.get(index);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let after = prev.next;

    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prev = removedNode.prev;
    let next = removedNode.next;

    prev.next = next;
    next.prev = prev;
    //Or removedNode.prev.next = removedNode.next
    //removedNode.next.prev = removedNode.prev
    removedNode.next = null;
    removedNode.prev = null; //So the .next and .prev of removedNode will be null after it is returned
    this.length--;
    return removedNode;
  }
}
