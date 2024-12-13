var filter = function(arr, fn) {
    let fillArr = [];
    
    for (let i = 0; i<arr.length; i++){
        if (fn(arr[i],i)) {
            fillArr.push(arr[i])
        }
    }
    return fillArr;
};

console.log(filter([10,20,30,40], function plusOne(n) { return n > 10; }))