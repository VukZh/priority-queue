class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  appendChild(node) {
    if (!this.left) {
      // 1 priority
      this.left = node;
      node.parent = this;
    } else if (!this.right) {
      // 2 priority
      this.right = node;
      node.parent = this;
    } else return false;
  }

  removeChild(node) {
    node.parent = null;
    if (this.left === node) {
      this.left = null;
    } else if (this.right === node) {
      this.right = null;
    } else throw new Error("not this child");
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      if (this.parent.parent) {
        if (this.parent === this.parent.parent.left) {
          this.parent.parent.left = this;
        }
        if (this.parent === this.parent.parent.right) {
          this.parent.parent.right = this;
        }
      }

      if (this === this.parent.right) {
        if (this.parent.left) this.parent.left.parent = this;
        [this.parent.left, this.left] = [this.left, this.parent.left];
        [this.parent.right, this.right] = [this.right, this.parent];
      }

      if (this === this.parent.left) {
        if (this.parent.right) this.parent.right.parent = this;
        [this.left, this.parent.left] = [this.parent, this.left];
        [this.right, this.parent.right] = [this.parent.right, this.right];
      }

      [this.parent.parent, this.parent] = [this, this.parent.parent];
    }
  }
}

module.exports = Node;
