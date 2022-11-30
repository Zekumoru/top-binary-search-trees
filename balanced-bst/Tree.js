const MergeSort = require('../merge-sort/MergeSort');
const Node = require('./Node');

module.exports = class Tree {
  #root;

  constructor(array) {
    this.#root = Tree.buildTree(array);
  }

  get root() {
    return this.#root;
  }

  static buildTree(array) {}
};
