function lengthOfLastWord(s: string): any {
    
    let newString = s.replace(/\s+/g,' ').trim();
    
    let arr = newString.split(' ');
    let lastIndex = arr.length-1
    console.log(newString)
    console.log(arr)
    return arr[lastIndex].length;
};

let x = lengthOfLastWord("   fly me   to   the moon  ")
console.log(x)