function useStrictMode() {
    'use strict'
    const person = {
        firstName: "Eko"
    };

    // error
    with (person) {
        console.info(firstName);
    }

}
useStrictMode();

//strict mode memberikan fungsi untuk mengetahui pada code pemrograman yang salah 
