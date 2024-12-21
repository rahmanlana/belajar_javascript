//function
function addName(fristname, lastname) {
    console.log(fristname, lastname)
}

// console.log(data)
// var data = 1

// sum1(1, 1)

//hoisting
sum2(2, 2)


//cara 1 new
const sum1 = new Function('x', 'y', 'console.log(x+y)')

//cara 2 standart function
function sum2(x, y) {
    console.log(x + y)
    if (x + y == 4) {
        console.log('berhasil')
    }
}

//cara 3 arrow function
const sum3 = (x, y) => {
    console.log(x + y)
}

sum3(3, 3)

function random() {
    const randomNumber = ~~(Math.random() + 300)
    if (randomNumber > 200) {
        console.log('wow lebih dari 200 nilai anda =', randomNumber)
    } else {
        console.log(randomNumber)
    }
}

random()
