// Percebendo o assincronismo
function double(number) {
    setTimeout(function() {
        console.log(number * 2)
    }, Math.floor(Math.random() * 100))
}

double(4) // 8
double(8) // 16
double(2) // 4
double(30) // 60
double(25) // 50