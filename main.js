// forloop

// const namaGuru = ['dea', 'fikri', 'retno', 'bunga']

// for (let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }

//tugas kecil

//promt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
//menentukan hari dari tanggal yang ada saat ini yang ada di komputer
// let saldoInput = prompt(`masukan saldo anda : `)
// console.log(saldoInput);
// let saldoUtang = prompt(`masukan hutang anda: `)
// console.log(saldoUtang)
// let hasilAkhir = saldoInput - saldoUtang
// alert(`saldo akhir anda sebesar: ${hasilAkhir}`)

let hari = new Date().getDay()
if (hari == 1) {
    hari = 'senin'
} else if (hari == 2) {
    hari = 'selasa'
} else if (hari == 3) {
    hari = 'rabu'
} else if (hari == 4) {
    hari = 'kamis'
} else if (hari == 5) {
    hari = 'jumat'
} else if (hari == 6) {
    hari = 'sabtu'
} else if (hari == 7) {
    hari = 'minggu'
}
alert(`hari ini adalah hari ${hari}`)



