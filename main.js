//with statment 

const arrayData = {
    firstName: "nor",
    middleName: "rahman",
    lastName: "maulana"
}

with (arrayData) {
    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}