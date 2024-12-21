//function
function addName(fristname, lastname) {
    console.log(fristname, lastname)
}

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

sum1(1, 1)
sum2(2, 2)
sum3(3, 3)