const anotherFunction = () => {
    return new Promise ((resolve,reject) => {
        if (true) {
        resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch (err => console.log(err));
// responde :  Hey!!
// ✅ Devuelve el valor esperado 

//ahora hacemos lo mismo pero para mostrar el catch
const anotherFunction = () => {
    return new Promise ((resolve,reject) => {
        if (false) {
        resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch (err => console.log(err));
// responde :  Whooops!
// ✅ Devuelve el valor esperado 

// ASÍ SE UTILIZAN LAS PROMESAS SEGUN UNA EXPLICACION DE MICROSOFT EDGE

//Cuando ejecutes este código en tu navegador, deberías ver el mensaje 
// “¡La promesa se resolvió con éxito!” impreso en la consola después de dos segundos.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('¡La promesa se resolvió con éxito!');
    }, 2000);
});
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

//¡La promesa se resolvió con éxito!
// ✅ Devuelve el valor esperado 