const Node = require('./Node');

module.exports = class Tree {
  #root;

  constructor(array) {
    this.#root = Tree.buildTree(array);
  }

  get root() {
    return this.#root;
  }

  static buildTree(array) {
    array = this.#removeDuplicate(array);
    return this.#buildTree(array, 0, array.length);
  }

  static #removeDuplicate(array) {
    return array.filter((item, index, array) => {
      if (index === 0) return true;
      if (item === array[index - 1]) return false;
      return true;
    });
  }

  static #buildTree(array, start, end) {
    if (start >= end) return null;

    const middle = Math.floor((start + end) / 2);
    const left = this.#buildTree(array, start, middle);
    const right = this.#buildTree(array, middle + 1, end);

    return new Node(array[middle], left, right);
  }

  remove(value) {
    return this.#remove(this.#root, value);
  }

  #remove(node, value) {
    if (node == null) return null;
    if (node.value === value) return node;

    const left = this.#remove(node.left, value);
    if (left != null) {
      if (left === node.left) {
        // First case: a leaf node
        if (left.left == null && left.right == null) {
          node.left = null;
          return left;
        }
      }

      return left;
    }

    const right = this.#remove(node.right, value);
    if (right != null) {
      // First case: a leaf node
      if (right === node.right) {
        if (right.left == null && right.right == null) {
          node.right = null;
          return right;
        }
      }

      return right;
    }

    return null;
  }
};
