// array

const arraySaya = ['mangga', 'nanas', 'alpukat', 'semangka']

const semangka = arraySaya.includes('semangka')
const posisiSemangka = arraySaya.indexOf('semangka')

if (semangka) {
    console.log(`posisi Semangka ada dan berada diposisi ke ${posisiSemangka}`)
} else {
    console.log('saya tidak tau dimana posisi semngka')
}
