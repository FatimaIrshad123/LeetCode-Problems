"use strict";
function isPalindrome1(s) {
    let e = s.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return e == e.split('').reverse().join('');
}
;
