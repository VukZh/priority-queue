const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize = 30) {
    this.maxSize = maxSize;
    this.heap = new MaxHeap();
  }

  push(data, priority) {
    if (this.size() >= this.maxSize) {
      throw new Error("more than maxSize");
    }
    this.heap.push(data, priority);
  }

  shift() {}

  size() {
    return this.heap.size;
  }

  isEmpty() {
    return this.heap.isEmpty();
  }
}

module.exports = PriorityQueue;
