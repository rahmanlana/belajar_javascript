/*
perulangan java script
*/
// let x = 1

// for (x = 5; x >= 1; x--) {
//     console.log('data ke- ' + [x]);
// }

// while (x < 5) {
//     console.log('data ke- ' + [x]);
//     x++
// }

// do {
//     console.log('data ke- :' + [x]);
//     x++
// } while (x < 5);


/*
tugas looping
*/
// const array = [3, 5, 12]
// let hasil = 0
// for (let i = 0; i < array.length; i++) {
//     console.log(`data ke- ${i} : ` + array[i]);
//     hasil = hasil + array[i]

// }
// console.log('jumlah semua data : ' + hasil);

const saudaraSaya = ['tomi', 'wahyu', 'nafila', 'lana']
for (let saudara of saudaraSaya) {
    console.log(saudara)
}
saudaraSaya.map((saudara, index) => {
    console.log(saudara, index++)
});