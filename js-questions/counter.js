var createCounter = function(n) {
//console.log(n)
let count = n
    return function() {
        
        console.log(count)
        return count ++
        
    };
};


  const counter = createCounter(10)
 //console.log(counter)
  counter() // 10
  counter() // 11
  counter() // 12
 