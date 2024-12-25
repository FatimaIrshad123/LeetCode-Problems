var sortBy = function(arr, fn) {
  return arr.sort((a,b) => fn(a) - fn(b))
};
let z = sortBy([[3, 4], [5, 2], [10, 1]],fn = (x) => x[1]);
console.log(z)