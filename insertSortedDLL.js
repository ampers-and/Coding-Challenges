// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
  let node = head;
  while (data > node.data) {
    node = node.next;
  }
  node = node.prev;
  let temp = node.next;
  node.next.data = data;
  node = node.next;
  node.next = temp;
}


// function sortedInsert(head, data) {
//     let node = head;
//     while (data > node.data && node.data != null) {
//         node = node.next;
//     }
//     node = node.prev;
//     let temp = node.next;
//     node.next.data = data;
//     node = node.next;
//     node.next = temp;

//     return head.data
// }