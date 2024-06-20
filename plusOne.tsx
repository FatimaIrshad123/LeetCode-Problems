/*function plusOne(digits: number[]): Number[] {
    let value = digits.join('');
    let num = Number(value)

    let plus = Number(value) + 1;
    let str = String(plus)
    let newArray = str.split('');
    let arr = [];
    for (let i=0; i<newArray.length; i++){
        arr.push(Number(newArray[i]))
    }
    return arr;
};

let a = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])*/

function plusOne(digits: number[]): any {
    for (let i=digits.length-1; i >= 0; --i){
        console.log(digits[i])
        if (digits[i] == 9){
            digits[i] = 0;
        }else {
            digits[i]++;
            return digits;
        }
    }
    digits.push(0);
    digits[0] = 1;
    return digits;
}

let a = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4])
console.log(a);