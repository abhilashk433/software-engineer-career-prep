/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const visits = [];
  while (head) {
    if (visits.includes(head)) return true;
    visits.push(head);
    head = head.next;
  }
  return false;
};
