## Algorithms and Data Structures

### How to implement a stack using a queue?

(1) When calling the push method, enqueue the element to queue 2 and then dequeue all the elements from queue 1 into queue 2, and make queue 2 as queue 1, which reverses the order of the elements.
(2) When calling the pop method, simply dequeue the elements from the queue 1.

### How to implement a queue using a stack?

(1) When calling the enqueue method, simply push the elements into the stack 1.
(2) If the dequeue method is called, push all the elements from stack 1 into stack 2, which reverses the order of the elements. Now pop from stack 2.

### When does the worst case of QuickSort occur?

1. Array is already sorted in same order.
2. Array is already sorted in reverse order.
3. All elements are same (special case of case 1 and 2)

### How to check if a given Binary Tree is BST or not?

By definition, a BST is a binary tree in which a node (value) is greater than all its left nodes and smaller than all its right node, and this applies to every node in the tree.

### What is a Linked List and What are its types?

A linked list can be viewed as a group of items, each item points to its neighbourhood. An item in a linked list is known as a node. A node contains a data part and one or two pointer part which contains the address of the neighbouring nodes in the list.

Types of linked lists

1.  Singly linked lists
2.  Circular linked lists
3.  Doubly linked lists

### Can Binary Search be used for linked lists?

We don't use binary search in linked list.

Because we cannot satisfiy "Any random element can be accessed in constant time".

### What is Stack and where it can be used?

Last in first out.

JavaScript call stack

### What is a Queue, how it is different from stack and how is it implemented?

Stack uses LIFO (last in first out) method to access and add data elements.

Queue uses FIFO (First in first out) method to access and add data elements.

### Given a big string of characters, how to efficiently find the first unique character in it?

1. Scan the string from left to right and construct the count array.
2. Again, scan the string from left to right and check for count of each
   character, if you find an element who's count is 1, return it.

### Which Data Structure Should be used for implementiong LRU cache?

We use two data structures to implement an LRU Cache.

- Queue which is implemented using a doubly linked list. The maximum size of the queue will be equal to the total number of frames available (cache size).The most recently used pages will be near front end and least recently pages will be near rear end.
- A Hash with page number as key and address of the corresponding queue node as value.

### Given a big array, how to efficiently find k’th largest element in it?

###### References

- https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/css-questions.md
