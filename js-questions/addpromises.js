var addTwoPromises = async function(promise1, promise2) {
    let [val1, val2] = await Promise.all([promise1,promise2])
    console.log(val1+val2)
    return val1+val2
};

addTwoPromises(new Promise(resolve => setTimeout(() => resolve(3), 20)),new Promise(resolve => setTimeout(() => resolve(5), 60)))

//console.log(res())