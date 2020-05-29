function doubleAndAdd(number, sum) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(number * 2 + sum)
        }, Math.floor(Math.random() * 100))
    })
}

let result = 0

doubleAndAdd(4, result)
    .then(function(number) {
        result = number // 8
        return doubleAndAdd(8, result)
    })
    .then(function(number) {
        result = number // 24
        return doubleAndAdd(2, result)
    })
    .then(function(number) {
        result = number // 28
        return doubleAndAdd(30, result)
    })
    .then(function(number) {
        result = number // 88
        return doubleAndAdd(25, result)
    })
    .then(function(number) {
        result = number // 138
        console.log(result)
    })