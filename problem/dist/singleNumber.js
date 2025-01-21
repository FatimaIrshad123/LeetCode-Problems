"use strict";
function singleNumber(nums) {
    let num = [];
    for (let i = 0; i < nums.length; i++) {
        //console.log(nums[i])
        if (nums[i] == nums[i++]) {
            num.push(nums[i]);
            console.log(num);
        }
    }
    console.log(num);
    return nums.reduce((prev, val) => prev ^ val, 0);
}
;
let ab = singleNumber([4, 1, 2, 1, 2]);
console.log(ab);
