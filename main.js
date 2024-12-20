//DOM

//untuk merubah html tanpa di tag htmlnya

document.title = 'maulana'

console.log(document.body)

const body = document.body
body.append('hello world')

const h1 = document.createElement('h1')
h1.textContent = "ini h1"
body.append(h1)