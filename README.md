# Balanced Binary Search Trees

The seventh project of the JavaScript course from The Odin Project.

# Documentation

## Node

### Constructor

```js
Node((value = null), (left = null), (right = null))
```

Creates a tree node.

### Members

#### value

Returns the value of the node.

#### left

Returns the left node of the node.

#### right

Returns the right node of the node.

## Queue

### Constructor

```js
Queue()
```

Creates a queue.

### Members

#### size

Returns the size/length of the queue.

### Methods

#### enqueue

```js
enqueue(value)
```

Enqueues the given `value` to the queue. Returns `undefined`.

**Time complexity**: O(1)

**Space complexity**: O(1)

#### dequeue

```js
dequeue()
```

Returns the first enqueued value from the queue and removes it.

**Time complexity**: O(1)

**Space complexity**: O(1)

#### peek

```js
peek()
```

Returns the first enqueued value from the queue. It **does not** remove it from the queue.

**Time complexity**: O(1)

**Space complexity**: O(1)

## Tree

### Constructor

```js
Tree((array = []))
```

Creates a balanced tree.

### Members

#### root

Returns the _frozen_ object of the root of the tree. Frozen object means that it cannot be modified. Check [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

**Time complexity**: O(1)

**Space complexity**: O(1)

### Methods

#### buildTree

```js
static buildTree(array)
```

Builds a balanced BST. `array` should be sorted before passing it in. This method removes duplicate values.

Returns the root node.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### find

```js
find(value)
```

Returns the node with the given `value`, otherwise `null`.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### insert

```js
insert(value)
```

Inserts a new node with the given `value` in the tree.

Returns the inserted node.

**Time complexity**: O(log n)

**Space complexity**: O(log n)

#### remove

```js
remove(value)
```

Removes the node with the given `value` from the tree.

Returns the removed node, otherwise `null`.

**Time complexity**: O(log n)

**Space complexity**: O(log n)

#### levelOrder

```js
levelOrder(fn)
```

Traverses the tree in level-order. Calls `fn` passing in the node value.

Returns an array of the tree's values in level-order.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### preOrder

```js
preOrder(fn)
```

Traverses the tree in pre-order. Calls `fn` passing in the node value.

Returns an array of the tree's values in pre-order.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### inOrder

```js
inOrder(fn)
```

Traverses the tree in in-order. Calls `fn` passing in the node value.

Returns an array of the tree's values in in-order.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### postOrder

```js
postOrder(fn)
```

Traverses the tree in post-order. Calls `fn` passing in the node value.

Returns an array of the tree's values in post-order.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### height

```js
height(node)
```

Returns the height of the given `node`, otherwise `-1`.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### depth

```js
depth(node)
```

Returns the depth of the given `node`, otherwise `-1`.

Returns the height of the given `node`, otherwise `-1`.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### isBalanced

```js
isBalanced()
```

Returns `true` is the tree is balanced, otherwise `false`.

**Time complexity**: O(n)

**Space complexity**: O(n)

#### rebalance

```js
rebalance()
```

Re-balances the tree. Returns the root node.

**Time complexity**: O(n)

**Space complexity**: O(n)
