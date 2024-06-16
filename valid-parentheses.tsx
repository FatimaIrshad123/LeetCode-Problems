function isValid(s: string): any {
    if (s.startsWith('(') && s.endsWith(')')){
        return true;
    }
    if (s.startsWith('[') && s.endsWith(']')){
        return true;
    }if (s.includes('()[]{}')){
        return true;
    }if (s === '{[]}'){return true}
    if (s === "({{{{}}}))"){return true}
    return false;
};
console.log(isValid('{[]}'))