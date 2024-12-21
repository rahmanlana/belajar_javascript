// array


//copyy tanpa merubah data array yang asli
const arraySaya = [{ name: 'anggur', stack: 'pisang', age: 20 }, { name: 'lana', stack: 'c++', age: 19 }]


arraySaya.map((values, index) => {
    console.log(values.name, values.stack)
})

arraySaya.filter((x) => x.age < 20).map((values) => console.log(values))

