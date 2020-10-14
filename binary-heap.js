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
      let temp = this.values[parentIndex];
      this.values[parentIndex] = val;
      this.values[index] = temp;
      index = parentIndex;
    }
  }
}
