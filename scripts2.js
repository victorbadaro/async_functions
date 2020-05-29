function doubleAndAdd(number, sum) {
    setTimeout(() => {
        console.log(number * 2 + sum)
    }, Math.floor(Math.random() * 100))
}

doubleAndAdd(4, 5)
doubleAndAdd(8, 5)
doubleAndAdd(2, 5)
doubleAndAdd(30, 5)
doubleAndAdd(25, 5)