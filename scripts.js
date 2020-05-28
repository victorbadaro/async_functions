function double(number, time) {
    setTimeout(function() {
        console.log(number * 2)
    }, Math.floor(Math.random() * 100))
}

double(4)
double(8)
double(2)
double(30)