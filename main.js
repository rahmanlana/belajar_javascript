// //function
// function addName(fristname, lastname) {
//     console.log(fristname, lastname)
// }

// // console.log(data)
// // var data = 1

// // sum1(1, 1)

// //hoisting
// sum2(2, 2)


// //cara 1 new
// const sum1 = new Function('x', 'y', 'console.log(x+y)')

// //cara 2 standart function
// function sum2(x, y) {
//     console.log(x + y)
//     if (x + y == 4) {
//         console.log('berhasil')
//     }
// }

// //cara 3 arrow function
// const sum3 = (x, y) => {
//     console.log(x + y)
// }

// sum3(3, 3)

// function random() {
//     const randomNumber = ~~(Math.random() + 300)
//     if (randomNumber > 200) {
//         console.log('wow lebih dari 200 nilai anda =', randomNumber)
//     } else {
//         console.log(randomNumber)
//     }
// }

// random()


//tugas 1
//1. perhitungan matematika
//2. luas lingkaran
//3. luas segetiga
//4. luas persegi panjang
//5. luas jajar genjang

// tugas 2
//menghitung total gaji karyawan di dapat dalam 1 bulan dengan input sebagai berikut
//nama karyawan
//gaji perhari
//jumlah hari masuk kerja


//jawaban tugas 1
function hitungLuasLingkaran(x) {
    const rumus = 3.14 * x * x
    console.log(rumus)
}
hitungLuasLingkaran(20)

function hitungLuasSegitiga(a, t) {
    const rumus = 0.5 * a * t
    console.log(rumus)
}
hitungLuasSegitiga(3, 5)

function hitungLuasPersegiPanjang(p, l) {
    const rumus = 2 * p * l
    console.log(rumus)
}
hitungLuasPersegiPanjang(3, 4)

function luasJajargenjang(a, t) {
    const rumus = a * t
    console.log(rumus)
}
luasJajargenjang(4, 5)

//jawaban tugas nomor 2
function dataKaryawan(nama, gajiPerhari, jumlahHari) {

    if (jumlahHari > 30 || jumlahHari == 30) {
        if (jumlahHari > 30) {
            const hariLebih = jumlahHari - 30
            const gajiHariLebih = hariLebih * gajiPerhari
            const gajiPerbulan = gajiPerhari * jumlahHari + gajiHariLebih
            alert(`total gaji perbulan dari ${nama} adalah ${gajiPerbulan}`)
            console.log(`total gaji perbulan ${nama} adalah ${gajiPerbulan} dengan rincian gaji perhari ${gajiPerhari} x jumlah Hari ${jumlahHari}, 30 hari lebih ${hariLebih}`)
        } else {
            const gajiPerbulan = gajiPerhari * jumlahHari
            alert(`total gaji perbulan dari ${nama} adalah ${gajiPerbulan}`)
            console.log(`total gaji perbulan ${nama} adalah ${gajiPerbulan} dengan rincian gaji perhari ${gajiPerhari} x jumlah Hari ${jumlahHari} `)
        }
    } else {
        alert('anda harus bekerja selama 30 hari baru anda menerima gaji perbulan')
    }
}

const masukanNama = prompt('masukan Nama: ')
const masukanGajiPerhari = prompt('Masukan Gaji Perhari: ')
const masukanJumlahHari = prompt('Masukan jumlah hari: ')

dataKaryawan(masukanNama, masukanGajiPerhari, masukanJumlahHari)



