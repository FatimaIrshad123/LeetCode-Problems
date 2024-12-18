var cancellable = function(fn, args, t) {
    cleartime = (() => {
        clearTimeout(timer)
    })
    timer = setTimeout(() => {
        fn(...args)
    },t)
    return cleartime
};