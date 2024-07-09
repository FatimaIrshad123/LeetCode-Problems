function reverse(x: number): any {
   let str = x.toString();
   let arr = str.split('');
   let reverseArr = arr.reverse();
   let newArr = reverseArr.join('');
    let result = Number(newArr);
    console.log(result)
};
reverse(-123)