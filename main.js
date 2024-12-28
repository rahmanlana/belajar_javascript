
//kemampuan closure
function createAdder(value) {
    const owner = "lana"
    function add(params) {
        console.info(owner)
        return value + params
    }

    return add
}

const addTwo = createAdder(2)
