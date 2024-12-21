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
}

//cara 3 arrow function
const sum3 = (x, y) => {
    console.log(x + y)
}
sum3(3, 3)
