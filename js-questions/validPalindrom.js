

var isPalindrome = function(s) {
    let string;
    let a;
    let b;
    let str;
    let rever;

    if (s.includes(' ') || s.includes(',') || s.includes(':')){
        string = s.replaceAll(" ","");
        a = string.replaceAll(',','')
        b = a.replaceAll(':','').toLowerCase();
        str = b.split(",");
        rever = str.reverse();
    } else {
        str = s.split(",");
        rever = str.reverse();
    }
    if (str == rever){
        return true;
    }
        return false;    
};


console.log(isPalindrome("race a car"));
console.log(isPalindrome('A man, a plan, a canal: Panama'))