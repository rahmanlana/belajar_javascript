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

function login(username) {
    console.log('processing...memvalidasi data!')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username != "rahman_maulana")
                failed("sorry wrong data")
            success({ token })
        }, 200)
    })
}

function getUser(token) {
    console.log('procesing Apikey noww...')
    return new Promise((success, failed) => {
        if (!token) failed("sorry, no token. can not access!")
        if (token)
            setTimeout(() => {
                success({ apiKey: "xkey123" })
            }, 500)
    })
}

function getPictures(apiKey) {
    console.log('procesing pictures key noww...')
    if (apiKey)
        setTimeout(() => {
            return ({ pic: pictures })
        }, 1500)
}

const user = login("rahman_maulana")
user.then(function (response) {
    const { token } = response
    getUser(token).then(function (response) {
        console.log({ response })
        const { apiKey } = response
        console.log(apiKey)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))



