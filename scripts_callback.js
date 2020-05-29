// Tratando o assincronismo com callback
function double(number, callback) {
    setTimeout(function() {
        return callback(number * 2)
    }, Math.floor(Math.random() * 100))
}

double(4, function(numberDouble) {
    console.log(numberDouble) // 8

    double(8, function(numberDouble) {
        console.log(numberDouble) // 16

        double(2, function(numberDouble) {
            console.log(numberDouble) // 4

            double(30, function(numberDouble) {
                console.log(numberDouble) // 60
                
                double(25, function(numberDouble) {
                    console.log(numberDouble) // 50
                })
            })
        })
    })
})