// Tratando o assincronismo com async/await
function double(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 2)
        }, Math.floor(Math.random() * 100))
    })
}

async function showDoubles() {
    let numberDouble = await double(4)
    console.log(numberDouble) // 8

    numberDouble = await double(8)
    console.log(numberDouble) // 16

    numberDouble = await double(2)
    console.log(numberDouble) // 4

    numberDouble = await double(30)
    console.log(numberDouble) // 60

    numberDouble = await double(25)
    console.log(numberDouble) // 50
}

showDoubles()