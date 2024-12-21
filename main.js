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

    const buahAwal = arraySaya[0]
    console.log(`buah awal adalah ${buahAwal}`)
    const buahAkhir = arraySaya[arraySaya.length - 1]
    console.log(`buah Terakhir adalah ${buahAkhir}`)

} else {
    console.log('saya tidak tau dimana posisi semngka')
}
