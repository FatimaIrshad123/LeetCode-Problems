"use strict";
function merge(nums1, m, nums2, n) {
    let x = nums1.filter(val => val !== 0);
    let y = nums2.filter(val => val !== 0);
    console.log(y);
    let res = x.concat(y);
    nums1 = res.sort();
    console.log(nums1);
}
;
merge([1, 2, 3, 0, 0, 0], 1, [2, 5, 6], 4);
merge([0], 1, [1], 4);
