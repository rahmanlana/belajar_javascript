
//global scope
let i = 20

for (let i = 0; i < 10; i++) {
    //local scope
    console.info(`local ${i}`)
}

console.info(`global ${i}`)


//var
//jika membuat sebuah global scope maka variable nya akan berubah , karena seakan akan akan mengubah 
// local merubah global nya dan ini sedikit aneg dan tidak terdefinisi

var j = 20;

for (var j = 0; j < 10; j++) {
    // local scope
    console.info(`Local ${j}`);
}

console.info(`Global ${j}`);