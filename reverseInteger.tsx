function reverse(x: number): any {
    //let a = Number(x.toString().split('').reverse().join(''));
    //console.log(a);
    let num = 0;
   if (x < 0)num = - Number(x.toString().split('').slice(1).reverse().join(''));
   else if (x >= 1534236469) return 0;
   else num = Number(x.toString().split('').reverse().join(''));
   if (x < -2147483648 || x > 2147483648)return 0;
    else return num;
};
console.log(reverse(-2147483648));