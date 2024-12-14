var compose = function(functions) {
    if (functions.length == 0){
        return function(x) {
            return x;
        }
    }
    return functions.reduceRight(function(prev,next){
        return function(x) {
            console.log(x)
            return next(prev(x))
        }
    })
};

compose([x => x + 1, x => x * x, x => 2 * x])