var timeLimit = function(fn, t) {
    return async function(...args) {
        const originalTimeoutRace = fn(...args);
        const timeout = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            },t)
        })    
        return Promise.race([originalTimeoutRace,timeout])
    }
};