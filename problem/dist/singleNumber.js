"use strict";
function singleNumber(nums) {
    return nums.reduce((prev, val) => prev ^ val, 0);
}
;
let ab = singleNumber([4, 1, 2, 1, 2]);
console.log(ab);
const arr = [10, 20, 25, 100, 40];
console.log(arr.sort());
arr.sort((a, b) => a - b);
console.log(arr);
