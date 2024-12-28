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