"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(list1, list2) {
    if (list1 === null) {
        return [];
    }
    if (list2 === null) {
        return [];
    }
    if (list1.val < list2.val) {
        {
            list1.next = mergeTwoLists(list1.next, list2);
        }
        ;
        return list1;
    }
    else {
        let result = list1.concat(list2);
        return result.sort();
    }
}
;
console.log(mergeTwoLists([1, 2, 3], [3, 4, 5, 6]));
