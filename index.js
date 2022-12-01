const MergeSort = require('./merge-sort/MergeSort');
const Tree = require('./balanced-bst/Tree');
const Node = require('./balanced-bst/Node');

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 2];

// eslint-disable-next-line no-unused-vars
const isSorted = (array) => array.reduce((sorted, current, index) => {
  if (index === 0) return true;
  if (array[index - 1] > current) return false;
  return sorted;
}, true);

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

// for testing removing node with both children
const tree = new Tree([50]);
tree.root.left = new Node(30, new Node(20), new Node(40));
tree.find(40).left = new Node(35, new Node(33, null, new Node(34)), new Node(36, null, new Node(38)));

console.clear();
console.log('Before remove');
prettyPrint(tree.root);
console.log();

const value = 30; // this is not removed yet, implement later
const node = tree.remove(value);
console.log('Removed', { value: node?.value, left: node?.left?.value, right: node?.right?.value });
// console.log(`Removed ${value}`);
// prettyPrint(node);
console.log();

console.log('After remove');
prettyPrint(tree.root); // 33, which is next of 30, should be gone
