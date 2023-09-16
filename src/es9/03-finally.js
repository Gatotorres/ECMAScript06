// el finally sirve para saber cuando una promesa termina
//en este caso tenemos una funcion flecha, que dentro devuelve una promesa con dos
//argumentos, y dentro un condicional if else.

//ya sea que se ejecute el if o el else, luego de ser ejecutado, se resuelve .finally
const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("finally"));

//responde:

// whooooops!
// finally

//✅ Devuelve el valor esperado