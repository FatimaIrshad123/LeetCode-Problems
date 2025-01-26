"use strict";
function singleNumber(nums) {
    return nums.reduce((prev, val) => prev ^ val, 0);
}
;
let ab = singleNumber([4, 1, 2, 1, 2]);
console.log(ab);
