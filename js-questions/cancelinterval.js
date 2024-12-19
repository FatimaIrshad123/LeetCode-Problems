var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args),t)
    let clearfn = () => clearInterval(timer);
    return clearfn;
};
