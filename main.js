//global_scope_scope

let counter = 0

function hitMe() {
    console.log(`nama saya lana `)
    counter++
}
function orther() {
    hitMe()
}
orther()
hitMe()

console.info(counter)

function first() {
    let firstVariable = "first"
}
function second() {
    let secondVariable = "second"
}

first()
second()

//erorrnyadalah first variable tidak di definisikan, karena variable berda di local scope, sehingga harus di akses di dalam 
// local area scop tersebut
//antara local scope tidak bisa di aksess
console.info(firstVariable)
console.info(secondVariable)