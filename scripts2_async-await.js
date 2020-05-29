function doubleAndAdd(number, sum) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(number * 2 + sum)
        }, Math.floor(Math.random() * 100))
    })
}

async function showResult() {
    let result = 0

    result = await doubleAndAdd(4, result)
    result = await doubleAndAdd(8, result)
    result = await doubleAndAdd(2, result)
    result = await doubleAndAdd(30, result)
    result = await doubleAndAdd(25, result)

    console.log(result)
}

showResult()