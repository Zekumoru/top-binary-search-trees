const MergeSort = require('@zekumoru-dev/merge-sort');
const Tree = require('./balanced-bst/Tree');

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 2];

// eslint-disable-next-line no-unused-vars
const isSorted = (array) => array.reduce((sorted, current, index) => {
  if (index === 0) return true;
  if (array[index - 1] > current) return false;
  return sorted;
}, true);

// eslint-disable-next-line no-unused-vars
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) return;
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

MergeSort.sort(array);
const tree = new Tree();

tree.insert(4);
tree.insert(1);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(0);

console.clear();
console.log('Tree');
prettyPrint(tree.root);
console.log();

console.log(tree.levelOrder());
