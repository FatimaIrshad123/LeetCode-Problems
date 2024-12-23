var chunk = function(arr, size) {
    let chunkedArray = [];
    for (let i = 0; i<arr.length; i+=size){
        console.log(i)
        chunkedArray.push(arr.slice(i,i+size))
    }
    return chunkedArray;
};

let res = chunk([1,2,3,4,5,6],2);
console.log(res)