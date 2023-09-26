const string = 'Hello';
console.log(string.padStart(10, 'hi'));

//responde hihihHello


//o podemos poner

const laugh = "";
console.log(laugh.padStart(3,"ja"));

// jaj
//✅ Devuelve el valor esperado

//podemos modificar un string con un elemento antes del inicio

console.log(string.padStart(6,'_'));
// _Hello
//✅ Devuelve el valor esperado

//padEnd hace exactamente lo contrario y modificarlo al final

console.log(string.padEnd(6,'_'));
//Hello_
//✅ Devuelve el valor esperado





const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey");
        } else {
            reject("Whooops!");
        }
    })
}

anotherFunction()
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));