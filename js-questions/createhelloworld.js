
var createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello world'
    }
};

console.log(createHelloWorld());