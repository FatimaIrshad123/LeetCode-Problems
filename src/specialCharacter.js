"use strict";
function numberOfSpecialChars(word) {
    let newWord = new Set();
    let checked = new Set();
    let ans = 0;
    for (let i = 0; i < word.length; i++) {
        newWord.add(word[i]);
        if (newWord.has(word[i].toLowerCase()) && newWord.has(word[i].toUpperCase())) {
            if (!checked.has(word[i].toLowerCase())) {
                ans++;
                //console.log(ans);
            }
            checked.add(word[i].toLowerCase());
        }
    }
}
;
numberOfSpecialChars('abcdeAB');
