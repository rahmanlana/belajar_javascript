//debuger 
function creatFullName(firstName, midelName, lastName) {
    // debugger
    const fullName = `${firstName} ${midelName} ${lastName}`
    return fullName
}
const name = creatFullName(`nor`, `rahman`, `maulana`)
console.info(name)

function sum(...numbers) {
    debugger;  
    let total = 0
    for (const number of numbers) {
        total += number
    }
    return total
}
console.info(sum(1, 1, 1, 1, 1))
