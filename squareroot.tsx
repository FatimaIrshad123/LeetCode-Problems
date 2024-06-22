function mySqrt(x: number): number {
    if (x < 2) return x;
  
    let result = 1;
    let sqrt = 1;
  
    while (sqrt < x) {
        sqrt = ++result * result
    }
  
    return x === sqrt ? result : result - 1;
  }
  console.log(mySqrt(4))