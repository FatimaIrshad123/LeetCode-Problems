"use strict";
function strStr(haystack, needle) {
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }
    else {
        return -1;
    }
}
;
let y = strStr('sadbutsad', 'ya');
console.log(y);
