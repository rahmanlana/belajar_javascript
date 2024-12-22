// function satu() {
//     console.log('satu')
// }
// function dua() {
//     console.log('function 2 mau di esekusi')
//     setTimeout(() => {
//         console.log('dua')
//     }, 0)
// }
// function tiga() {
//     console.log('tiga')
// }
// satu()
// dua()
// tiga()
const pictures = ["1.jpg", "2.jpg", "3.jpg"]
const token = ~~[Math.random() * 12345678]

function login(username, callback) {
    console.log('processing...memvalidasi data!')
    setTimeout(() => {
        callback({ token, username })
    }, 200)
}

function getUser(token, callback) {
    console.log('procesing Apikey noww...')
    if (token)
        setTimeout(() => {
            callback({ apiKey: "xkey123" })
        }, 500)
}

function getPictures(apiKey, callback) {
    console.log('procesing pictures key noww...')
    if (apiKey)
        setTimeout(() => {
            callback({ pic: pictures })
        }, 1500)
}

login("maua_lana", function (response) {
    const { token } = response
    getUser(token, function (response) {
        const { apiKey } = response
        getPictures(apiKey, function (response) {
            const { pic } = response
            console.log(pic)
        })
    })
})


