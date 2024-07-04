"use strict";
function validWord(word) {
    if (word.length < 3)
        return false;
    const setVowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const setNumbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    const aryWord = word.split("");
    //console.log(aryWord.some(val => setVowels.has(val)))
    if (!aryWord.some(val => setVowels.has(val))) {
        return false;
    }
    if (!aryWord.some(val => (!setVowels.has(val) && isNaN(+val)))) {
        return false;
    }
    if (isContainsSpecialChars(aryWord))
        return false;
    return true;
}
;
console.log(validWord('a3$e'));
//console.log(result1)
function isContainsSpecialChars(aryList) {
    for (let indexI = 0; indexI < aryList.length; indexI++) {
        const ch = aryList[indexI].charCodeAt(0);
        if (!(ch >= 65 && ch <= 90) && // A-Z
            !(ch >= 97 && ch <= 122) && // a-z
            !(ch >= 48 && ch <= 57) // 0-9
        ) {
            return true;
        }
    }
}
