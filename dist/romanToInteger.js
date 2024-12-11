"use strict";
function romanToInt(s) {
    let roman = [{ 'I': 1 }, { "V": 5 }, { 'X': 10 }, { 'L': 50 }, { 'C': 100 }, { 'D': 500 }, { 'M': 1000 }];
    for (let j = 0; j < roman.length; j++) {
        let x = roman[j];
        //console.log(x.C)
        if (s === x.I || x.C || x.D || x.V) {
            console.log(s);
        }
    }
    /*for(let i = 0; i< s.length; i){
        if (s[i] === 'I' && s[i + 1] === 'V'){
            return
        }
    }*/
}
;
romanToInt('V');
