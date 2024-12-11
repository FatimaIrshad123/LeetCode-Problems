"use strict";
function isPalindrome(x) {
    let y = x.toString();
    let z = y.split('');
    let reverse = z.reverse();
    let joined = reverse.join('');
    let num = Number(joined);
    if (x === num) {
        return true;
    }
    return false;
}
;
console.log(isPalindrome(121));
