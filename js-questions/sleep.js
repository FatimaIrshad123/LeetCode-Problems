async function sleep(millis) {
    return await new Promise((resolve) => setTimeout(resolve,millis))
}

console.log(sleep(10000));