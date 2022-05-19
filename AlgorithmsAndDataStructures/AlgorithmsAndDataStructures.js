// ALGORITHMS

// Linear Search, O(n)

const arr = [1, 3, 5, 3, 7, -1, 12, 4, 6, 123];

const linearSearchFunc = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
};

// Binary Search, O(log n)

const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
};

const binarySearchRecursive = (
  arr,
  target,
  start = 0,
  stop = arr.length - 1
) => {
  let midPoint = Math.floor((stop - start) / 2 + start);

  switch (true) {
    case arr[midPoint] === target:
      return true;
    case stop - start === 0:
      return false;
    case arr[midPoint] < target:
      return binarySearchRecursive(arr, target, midPoint + 1, stop);
    case arr[midPoint] > target:
      return binarySearchRecursive(arr, target, start, midPoint);
  }
};

// Selection Sort, O(n^2)

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

// Bubble Sort, O(n^2)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

// Quick Sort, O(log n * n)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

// Breadth Search for Graphs

const graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

const breadthSearch = (graph, start, end) => {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
};

// Dijkstra Search for Graphs

const graphForDijkstraSearch = {};

graphForDijkstraSearch.a = { b: 2, c: 1 };
graphForDijkstraSearch.b = { f: 7 };
graphForDijkstraSearch.c = { d: 5, e: 2 };
graphForDijkstraSearch.d = { f: 2 };
graphForDijkstraSearch.e = { f: 1 };
graphForDijkstraSearch.f = { g: 1 };
graphForDijkstraSearch.g = {};

const dijkstraSearch = (graph, start) => {
  const costs = {};
  const processed = [];
  let neighbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1000000000;
    }
  });
  let node = findNodeLowestCosts(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCosts(costs, processed);
  }
  return costs;
};

const findNodeLowestCosts = (costs, processed) => {
  let lowestCost = 1000000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
};

// Cash Data Algorithm

const cashFunc = (fn) => {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    return result;
  };
};

const factorial = (n) => {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

const cashFactorial = cashFunc(factorial);

// DATA STRUCTURES

// Linked List

class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.add(5);
list.add(6);

list.print();

list.getSize();

// Binary Tree

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree();

tree.add(8);
tree.add(9);
tree.add(10);
tree.add(7);
tree.add(6);

tree.print();

// Повторил Map, Set, WeakMap и WeekSet
