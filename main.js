// array


//copyy tanpa merubah data array yang asli
const arraySaya = ['alpukat', 'jeruk', 'semangka']
const newArray = [...arraySaya]

newArray[0] = 'sayur'

console.log({ arraySaya })
console.log({ newArray })
