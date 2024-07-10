function reverse(x: number): any {
    //let a = Number(x.toString().split('').reverse().join(''));
    //console.log(a);
   if (x < 0){
    return - Number(x.toString().split('').slice(1).reverse().join(''));
   }else {
    return Number(x.toString().split('').reverse().join(''))
   }
};
console.log(reverse(-123));