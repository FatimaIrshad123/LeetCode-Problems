function reverseWords(s: string): string {
    let newString1 = s.replace(/ +/g,' ').trim(); 
    let spl = newString1.split(' ');
    let rev = spl.reverse();
    return rev.join(' ')
};

reverseWords("  hello world  ")