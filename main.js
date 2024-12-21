// array

const arraySaya = ['mangga', 'nanas', 'alpukat', 'semangka', 'pisang']

const semangka = arraySaya.includes('semangka')
const posisiSemangka = arraySaya.indexOf('semangka')

if (semangka) {
    const indexBefore = posisiSemangka - 1
    const indexAfeter = posisiSemangka + 1
    const before = arraySaya[indexBefore]
    const after = arraySaya[indexAfeter]
    console.log(`buah semangka terletak di antara buah ${before} dan buah ${after}`)
    console.log(`posisi Semangka ada dan berada diposisi ke ${posisiSemangka}`)
} else {
    console.log('saya tidak tau dimana posisi semngka')
}
