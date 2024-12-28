// function di dalam function
function outer() {
    function inner() {

    }
    inner()
    inner()//maka harus seperti ini
}

outer()
inner()//ini maka akan erorr

//untuk mengakses function di dalam function harus di akses di dalam function tersebut