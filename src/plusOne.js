"use strict";
function plusOne(digits) {
    let value = digits.join('');
    let num = Number(value);
    console.log(num);
    let plus = Number(value) + 1;
    let str = String(plus);
    let newArray = str.split('');
    let arr = [];
    for (let i = 0; i < newArray.length; i++) {
        arr.push(Number(newArray[i]));
    }
    return arr;
}
;
let a = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
console.log(a);
