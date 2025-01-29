"use strict";
function twoSum2(numbers, target) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        let rem = target - numbers[i];
        console.log(rem);
        for (let j = i + 1; j < numbers.length; j++) {
            console.log(numbers[j]);
            if (numbers[j] == rem) {
                return [i + 1, j + 1];
            }
        }
    }
}
;
twoSum2([1, 5, 5, 4, 3], 6);
