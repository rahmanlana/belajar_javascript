let nama = 'maulana'
let usia = 30
let tinggiBadan = 172.5
let beratBadan
let pacar = 1

beratBadan = 50

if (pacar == null) {
    pacar = 'belum punya'
} else {
    pacar = 'punya'
}

alert(
    `nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} saya ${pacar}`,
)

let saldoAwal = 50000
let saldoTambahan = 30000
const utang = 30000

const x = 5
const y = 7
const z = x * y

const nilaiSaldoAkhir = saldoAwal + saldoTambahan - utang

alert(`saldo awal saya ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar ${saldoTambahan} jadi total saldo yang saya miliki sebnyak ${nilaiSaldoAkhir}`)

alert(`hasil dari ${x} x ${y} = ${z}`)