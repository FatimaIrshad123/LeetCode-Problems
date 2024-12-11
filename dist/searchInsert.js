"use strict";
function searchInsert(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }
    else {
        nums.push(target);
        let a = nums.sort((a, b) => a - b);
        console.log(a);
        return a.indexOf(target);
    }
}
;
let res = searchInsert([3, 5, 7, 9, 10], 8);
console.log(res);
