var createCounter = function(init) {
    let val = init;

    return {
        increment: () => ++val,
        reset: () => init,
        decrement: () => --val
    }
};

let counter = createCounter(0);
console.log('abcd',counter.decrement());
console.log('abcd',counter.decrement());
console.log('abcd',counter.increment());
