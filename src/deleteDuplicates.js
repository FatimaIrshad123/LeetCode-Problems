"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function deleteDuplicates(head) {
    let node = head;
    while (node !== null) {
        if (node.next !== null) {
            if (node.val === node.next.val) {
                node.next = node.next.next;
                continue;
            }
        }
        node = node.next;
    }
    return head;
}
;
let val = deleteDuplicates(null);
console.log(val);
