var map = function(arr, fn) {
    let transformedArr = [];
    console.log(arr)
    for (let i = 0; i<arr.length; i++){
        transformedArr[i] = fn(arr[i],i)
    }
    
    return transformedArr;
};
console.log(map([1,2,3,4], function plusOne(n,i) { return n + i; }))