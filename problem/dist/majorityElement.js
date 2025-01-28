"use strict";
function majorityElement(nums) {
    let xyz = nums.sort((a, b) => nums.filter(v => v === a).length - nums.filter(v => v === b).length).pop();
    console.log(xyz);
}
;
majorityElement([1, 2, 2, 3, 3, 3, 1, 2, 4]);
