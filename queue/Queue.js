const LinkedList = require('@zekumoru-dev/linked-list');

module.exports = class Queue {
  #list;

  constructor() {
    this.#list = new LinkedList();
  }

  get size() {
    return this.#list.size();
  }

  enqueue(value) {
    this.#list.append(value);
  }

  dequeue() {
    return this.#list.shift()?.value;
  }

  peek() {
    return this.#list.head?.value;
  }
};
