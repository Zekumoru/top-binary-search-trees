const LinkedList = require('@zekumoru-dev/linked-list');
const Node = require('./Node');
const Queue = require('../queue/Queue');

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

  insert(value) {
    const inserted = this.#insert(this.#root, value);
    if (this.#root == null) this.#root = inserted;
    return inserted;
  }

  #insert(node, value) {
    if (node == null) return new Node(value);

    let inserted;
    if (value < node.value) {
      inserted = this.#insert(node.left, value);
      if (node.left == null) node.left = inserted;
    }
    else {
      inserted = this.#insert(node.right, value);
      if (node.right == null) node.right = inserted;
    }

    return inserted;
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

  levelOrder(fn) {
    return this.#levelOrder(this.#root, fn).toArray();
  }

  #levelOrder(node, fn, queue = new Queue()) {
    if (node == null) return new LinkedList();

    if (node.left != null) queue.enqueue(node.left);
    if (node.right != null) queue.enqueue(node.right);

    if (typeof fn === 'function') fn(node.value);

    const list = this.#levelOrder(queue.dequeue(), fn, queue);
    list.prepend(node.value);
    return list;
  }

  preOrder(fn) {
    return this.#preOrder(this.#root, fn);
  }

  #preOrder(node, fn, array = []) {
    if (node == null) return array;

    if (typeof fn === 'function') fn(node.value);
    array.push(node.value);
    this.#preOrder(node.left, fn, array);
    this.#preOrder(node.right, fn, array);

    return array;
  }

  inOrder(fn) {
    return this.#inOrder(this.#root, fn);
  }

  #inOrder(node, fn, array = []) {
    if (node == null) return array;

    this.#inOrder(node.left, fn, array);
    if (typeof fn === 'function') fn(node.value);
    array.push(node.value);
    this.#inOrder(node.right, fn, array);

    return array;
  }

  postOrder(fn) {
    return this.#postOrder(this.#root, fn);
  }

  #postOrder(node, fn, array = []) {
    if (node == null) return array;

    this.#postOrder(node.left, fn, array);
    this.#postOrder(node.right, fn, array);

    if (typeof fn === 'function') fn(node.value);
    array.push(node.value);

    return array;
  }

  height(node) {
    return this.#height(this.#root, node);
  }

  #height(node, target, found = false) {
    if (node == null) {
      if (found) return 0;
      return -1;
    }

    if (node === target) found = true;

    const lh = this.#height(node.left, target, found);
    const rh = this.#height(node.right, target, found);
    const height = Math.max(lh, rh);

    if (found && node !== target) return height + 1;
    if (height >= 0) return height;

    return -1;
  }

  depth(node) {
    return this.#depth(this.#root, node);
  }

  #depth(node, target) {
    if (node == null) return -1;
    if (node === target) return 0;

    const lh = this.#depth(node.left, target);
    if (lh >= 0) return lh + 1;

    const rh = this.#depth(node.right, target);
    if (rh >= 0) return rh + 1;

    return -1;
  }

  isBalanced() {
    return this.#isBalanced(this.#root) > 0;
  }

  #isBalanced(node) {
    if (node == null) return 1;

    const lh = this.#isBalanced(node.left);
    if (lh === 0) return 0;

    const rh = this.#isBalanced(node.right);
    if (rh === 0) return 0;

    if (rh - lh > 1) return 0;
    return 1 + Math.max(lh, rh);
  }

  rebalance() {
    this.#root = Tree.buildTree(this.inOrder());
    return this.#root;
  }
};
