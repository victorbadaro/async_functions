function doubleAndAdd(number, sum, callback) {
    setTimeout(() => {
        return callback(number * 2 + sum)
    }, Math.floor(Math.random() * 100))
}

let result = 0

doubleAndAdd(4, result, function(number) {
    result = number // 8
    doubleAndAdd(8, result, function(number){
        result = number // 24
        doubleAndAdd(2, result, function(number) {
            result = number // 28
            doubleAndAdd(30, result, function(number) {
                result = number // 88
                doubleAndAdd(25, result, function(number) {
                    result = number // 138
                    console.log(result)
                })
            })
        })
    })
})