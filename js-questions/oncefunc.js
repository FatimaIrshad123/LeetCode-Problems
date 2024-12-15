var once = function(fn) {
    let flag = true;
    let result;

    return function(...args){
        if (flag === true){
            result = fn(...args);
            flag = false;
            return result
        }else {
            return undefined;
        }
    }
};