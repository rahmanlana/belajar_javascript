//kata kunci this

function sample() {
    console.info(this)

    function inner() {
        console.info(this)
    }

    inner()
}

sample()


const person = {
    name: "Eko",
    sayHello: function (value) {
        console.info(`Hello ${value} My Name is ${this.name}`)
    }
};

person.sayHello("Budi")
person.sayHello("Joko")