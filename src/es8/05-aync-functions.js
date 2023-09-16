const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anotherFn();
console.log("After");

/*
before
After
AsynC!!
Hello
*/

//✅ Devuelve el valor esperado

//EXPLICACION BREVE:

/*

+- PRIMERO javascript pasa, ve que esta declarada
fnAsync, ve que esta declarada la funcion asíncrona arrow anotherFn
SIGUE E IMPRIME console.log("before");

+- SEGUNDO: vuelve a donde se quedó y continua leyendo y ejecuta anotherFn();
dicha es una función asíncrona asi que se comienza de dicha manera.

+- TERCERO: continúa, no espera que se ejecute por ser Asíncrona y continua leyendo
e imprime console.log("After");

+- CUARTO: luego, vuelve a entrar a anotherFn, continúa con la sgeunda línea
y ejecuta la funcion fnAsync, dicha demora 2 segundos en resolverse debido al 
setTimeout.

+- QUINTO: javascrit vuelve a entrar a anotherFn, y vuelve a donde se quedó,
imprime la sigueinte línea  console.log(somethig); Por lo que se imprime "AsynC!!"

+- SEXTO: javascript vuelve a donde se quedó e imprime el último console.log("Hello");

*/