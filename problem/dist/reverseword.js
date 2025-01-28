"use strict";
function reverseWords(s) {
    let newString1 = s.replace(/ +/g, ' ').trim();
    let spl = newString1.split(' ');
    let rev = spl.reverse();
    console.log(newString1);
    console.log(rev.join(' '));
    return rev.join(' ');
}
;
reverseWords("  hello world  ");
