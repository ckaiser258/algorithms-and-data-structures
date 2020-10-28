class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp(val);
  }
  bubbleUp(val) {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (val <= parent) break;
      this.values[parentIndex] = val;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      //check if left child exists
      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild > element) {
          swap = leftIndex;
        }
      }
      //check if right child exists
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

//Priority Queue as a min binary heap
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
}
