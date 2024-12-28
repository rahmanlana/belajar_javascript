//method arrow function

const person = {
    name: "Eko",
    sayHello: (name) => {
        console.info(this);
        console.info(`Hello ${name}, My Name is ${this.name}`)
    }
}

person.sayHello("Budi")