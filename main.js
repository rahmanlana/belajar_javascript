//DOM

//untuk merubah html tanpa di tag htmlnya

document.title = 'maulana'
const body = document.body

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

btn2.style.border = 'none'
btn2.style.padding = '8px'
btn2.style.fontSize = '15px'
btn2.style.background = 'green'
btn2.style.color = 'white'

const newText = document.createElement('p')

//function button 1
// function clickButton() {
//     btn1.style.background = 'aqua'
//     const newText = document.createElement('p')
//     newText.textContent = "hallo lana"
//     body.append(newText)

// }

// function ubahText() {
//     btn1.textContent = 'text'
// }

// function oriText() {
//     btn1.textContent = 'Klik saya 1'
// }

//function button 2

function clicbutton2() {
    btn2.style.background = 'aqua'
}

function munculText() {
    newText.textContent = "Hallo Nor Rahman Maulana"
    body.append(newText)
}

function ubahWarnaText() {
    newText.style.color = 'aqua'
}