## Can Binary Search be used for linked lists?

We don't use binary search in linked list.

Because we cannot satisfiy "Any random element can be accessed in constant time".

## What is Stack and where it can be used?

Last in first out.

JavaScript call stack

## What is a Queue, how it is different from stack and how is it implemented?

Stack uses LIFO (last in first out) method to access and add data elements.

Queue uses FIFO (First in first out) method to access and add data elements.

## Given a big string of characters, how to efficiently find the first unique character in it?

1. Scan the string from left to right and construct the count array.
2. Again, scan the string from left to right and check for count of each
   character, if you find an element who's count is 1, return it.

## What is a Linked List and What are its types?

A linked list can be viewed as a group of items, each of which points to the item in its neighbourhood. An item in a linked list is known as a node. A node contains a data part and one or two pointer part which contains the address of the neighbouring nodes in the list.

Types of linked lists

1.  Singly linked lists
2.  Circular linked lists
3.  Doubly linked lists

## How to implement a stack using a queue?

We need 2 queue

push(x) // x is the element to be pushed and s is stack

1. Enqueue x to q2
2. One by one dequeue everything from q1 and enqueue to q2.
3. Swap the names of q1 and q2
   // Swapping of names is done to avoid one more movement of all elements
   // from q2 to q1.

pop()

1. Dequeue an item from q1 and return it.
