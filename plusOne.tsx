function plusOne(digits: number[]): Number[] {
    let value = digits.join('');
    let plus = Number(value) + 1;
    let str = String(plus)
    let newArray = str.split('');
    let arr = [];
    for (let i=0; i<newArray.length; i++){
        arr.push(Number(newArray[i]))
    }
    return arr;
};

plusOne([1,2,3])