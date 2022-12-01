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

const tree = new Tree([8]);
tree.root.right = new Node(2, new Node(4), new Node(3));

console.clear();
console.log('Before remove');
prettyPrint(tree.root);
console.log();

const value = 8;
const node = tree.remove(value);
console.log('Removed', { value: node?.value || null, left: node?.left?.value || null, right: node?.right?.value || null });
console.log();

console.log('After remove');
prettyPrint(tree.root);
console.log();
