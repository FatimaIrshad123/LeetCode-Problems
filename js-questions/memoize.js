function memoize(fn) {
    let cache = {};

    return function(...args) {
        let key = JSON.stringify(args);
       
        if (key in cache){
            return cache[key]
        }
        let result = fn.apply(this,args);
        cache[key] = result
        return result;
    }
}

let memoizefn = memoize(function(a,b){
    return a + b;
})

console.log(memoizefn(2,3))
