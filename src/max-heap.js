const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.size = 0;
  }

  push(data, priority) {
    this.insertNode(new Node(data, priority));
    this.shiftNodeUp(new Node(data, priority));
  }

  pop() {
    if (this.size === 0) {
      return false;
    } else {
      this.restoreRootFromLastInsertedNode(this.detachRoot());
      this.shiftNodeDown(this.root);
      return this.root.data;
    }
  }

  detachRoot() {}

  restoreRootFromLastInsertedNode(detached) {}

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
    this.size = 0;
  }

  insertNode(node) {}

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
