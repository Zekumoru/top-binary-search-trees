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
    return this.#buildTree(array, 0, array.length);
  }

  static #buildTree(array, start, end) {
    if (start > end) return null;

    const middle = (start + end) / 2;
    const left = this.#buildTree(array, start, middle - 1);
    const right = this.#buildTree(array, middle + 1, end);

    return new Node(array[middle], left, right);
  }
};
