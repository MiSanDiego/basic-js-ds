const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let curr = l;
  let prevNode = null;
  while (curr) {
    let nextNode = curr.next;
    if (curr.value === k && !prevNode) {
      head = nextNode;
      curr = nextNode;
      continue;
    } else if (curr.value === k && prevNode) {
      prevNode.next = nextNode;
      curr = nextNode;
      continue;
    } 
    prevNode = curr;
    curr = nextNode;
  }
  return head;
}

module.exports = {
  removeKFromList
};
