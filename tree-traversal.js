class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadthFirst() {
    //iterative solution
    if (!this.root) return [];
    let queue = [];
    let data = [];
    let current;
    queue.push(this.root);
    while (queue.length) {
      //0 is falsey
      current = queue.shift();
      data.push(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return data;
  }

  depthFirstPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  depthFirstPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node);
      if (node.right) traverse(node);
      data.push(node);
    }
    traverse(this.root);
    return data;
  }

  depthFirstInorder() {
      let data = []
      function traverse(node) {
          if (node.left) travserse(node.left)
          data.push(node)
          if (node.right) traverse(node.right)
      }
      traverse(this.root)
      return data
  }
}
