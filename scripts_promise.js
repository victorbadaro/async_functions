// Tratando o assincronismo com Promise
function double(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(number * 2)
        }, Math.floor(Math.random() * 100))
    })
}

double(4)
    .then(numberDouble => {
        console.log(numberDouble) // 8
        return double(8)
    })
    .then(numberDouble => {
        console.log(numberDouble) // 16
        return double(2)
    })
    .then(numberDouble => {
        console.log(numberDouble) // 4
        return double(30)
    })
    .then(numberDouble => {
        console.log(numberDouble) // 60
        return double(25)
    })
    .then(numberDouble => {
        console.log(numberDouble) // 50
    })