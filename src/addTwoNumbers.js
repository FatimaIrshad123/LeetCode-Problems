"use strict";
function addTwoNumbers(l1, l2) {
    let sum = [];
    for (let i = 0; i < l1.length; i++) {
        //console.log(l1[i])
        for (let j = 0; j < l2.length; j++) {
            //console.log(l2[j]);
            let x = l1[i] + l2[j];
            console.log(x);
        }
        //sum.push(l1[i] + l2[i])
    }
    //return sum;
}
;
addTwoNumbers([2, 3, 4], [1, 2, 3]);
