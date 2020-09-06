class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (val === temp.val) return undefined;
      if (val < temp.val) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  find(val) { //Return the node
    if (!this.root) return false;
    if (this.root.val === val) return true;
    let temp = this.root;
    found = false
    while (temp && !found) {
      if (val > temp.val) {
        temp = temp.right;
      } else if (val < temp.val) {
        temp = temp.left;
      } else {
          found = true
      }
    }
    if (!found) return false
    return temp
  }

  contains(val) { //Return true or false
    if (!this.root) return false;
    let temp = this.root;
    found = false
    while (temp && !found) {
      if (val > temp.val) {
        temp = temp.right;
      } else if (val < temp.val) {
        temp = temp.left;
      } else {
          return true
      }
    }
    return false
  }
}
