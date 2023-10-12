
//Promise.any([arrayCon, ElelementosSeparados, PorComas]) .then(...)

//Esta nueva actualizacion nos permite devolver una lista de promesas seleccionadas,
//y devolver LA PRIMERA que se ejecute correctamente, sin importa
//si hay otras por ejecutar.

const promise1 = new Promise ((resolve, reject) => reject("Reject"));
const promise2 = new Promise ((resolve, reject) => resolve("APUESTO QUE ESTA ES LA QUE SE VA A VERRRRRRRRRRRR"));
const promise3 = new Promise ((resolve, reject) => resolve("Reject"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//APUESTO QUE ESTA ES LA QUE SE VA A VERRRRRRRRRRRR
//✅ Devuelve el valor esperado