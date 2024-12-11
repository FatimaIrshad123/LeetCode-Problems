"use strict";
function removeDuplicates(nums) {
    let arr = nums.sort();
    let uniq = [...new Set(arr)];
    for (let i = 0; i < uniq.length; i++) {
        // return uniq[i]
    }
    //return uniq.length
}
;
let z = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
//console.log(z)
function practive(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        //console.log(i)
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        console.log(nums[i]);
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    console.log('count', count);
    return count;
}
;
console.log(practive([0, 1, 2, 3, 4]));
