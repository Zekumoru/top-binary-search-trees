const Node = require('./Node');

module.exports = class Tree {
  #root;

  constructor(array = []) {
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

  find(value) {
    return this.#find(this.#root, value);
  }

  #find(node, value) {
    if (node == null) return null;
    if (node.value === value) return node;
    return this.#find(node.left, value) || this.#find(node.right, value);
  }

  remove(value) {
    return this.#remove(this.#root, value);
  }

  #remove(node, value) {
    if (node == null) return null;
    if (node.value === value) {
      if (node === this.#root) {
        // First case: a leaf node
        if (node.left == null && node.right == null) this.#root = null;
        // Third case: has both children
        else if (node.left != null && node.right != null) {
          const next = this.#getNext(node.right);

          if (node.left !== next) next.left = node.left;
          if (node.right !== next) next.right = node.right;

          this.#root = next;
        }
        // Second case: has one child
        else if (node.left != null) this.#root = node.left;
        else this.#root = node.right;
      }

      return node;
    }

    const toRemove = this.#remove(node.left, value) || this.#remove(node.right, value);
    const child = (toRemove === node.left) ? node.left : node.right;

    if (toRemove != null) {
      if (toRemove === child) {
        // First case: a leaf node
        if (toRemove.left == null && toRemove.right == null) {
          if (child === node.left) node.left = null;
          else node.right = null;
        }
        // Third case: has both children
        else if (toRemove.left != null && toRemove.right != null) {
          const next = this.#getNext(toRemove.right);

          if (toRemove.left !== next) next.left = toRemove.left;
          if (toRemove.right !== next) next.right = toRemove.right;

          if (child === node.left) node.left = next;
          else node.right = next;
        }
        // Second case: has one child
        else if (toRemove.left != null) {
          if (child === node.left) node.left = toRemove.left;
          else node.right = toRemove.left;
        }
        else if (child === node.left) node.left = toRemove.right;
        else node.right = toRemove.right;
      }

      return toRemove;
    }

    return null;
  }

  #getNext(node) {
    if (node.left != null) {
      const next = this.#getNext(node.left);
      if (next === node.left) node.left = next.right;
      return next;
    }
    return node;
  }
};
