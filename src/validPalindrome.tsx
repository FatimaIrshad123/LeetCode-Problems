function isPalindrome(s: string): boolean {
    let e = s.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase()
    return e == e.split('').reverse().join('');
};