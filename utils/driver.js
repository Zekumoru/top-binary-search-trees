const MergeSort = require('@zekumoru-dev/merge-sort');
const Tree = require('../balanced-bst/Tree');
const prettyPrint = require('./prettyPrint');

const length = 100;
const max = 300;

const generateRandom = (max) => Math.floor(Math.random() * max);
const generateArray = (length, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(generateRandom(max));
  }
  return array;
};

const printTreeOrders = (tree) => {
  console.log(`Level-order: ${tree.levelOrder()}`);
  console.log();

  console.log(`Pre-order: ${tree.preOrder()}`);
  console.log();

  console.log(`In-order: ${tree.inOrder()}`);
  console.log();

  console.log(`Post-order: ${tree.postOrder()}`);
  console.log();
};

const array = generateArray(length, max);
const tree = new Tree(MergeSort.sort(array));

console.clear();
console.log(`Is the tree balanced? ${tree.isBalanced() ? 'Yes' : 'No'}.`);
console.log();

printTreeOrders(tree);

console.log('Inserting new random numbers...');
generateArray(length, max).forEach((value) => tree.insert(value));
console.log(`Is the tree balanced? ${tree.isBalanced() ? 'Yes' : 'No'}.`);
console.log();

console.log('Now balancing...');
tree.rebalance();

console.log(`Is the tree now balanced? ${tree.isBalanced() ? 'Yes' : 'No'}.`);
console.log();

printTreeOrders(tree);

console.log('Printing final tree');
prettyPrint(tree.root);
console.log();
