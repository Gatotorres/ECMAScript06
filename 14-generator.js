//Generator nos permite tener una función especial, que nos va a retornar 
//una serie de valores según el algoritmo dado
//recordando su scope, dónde se quedaron y seguir retornando valores.

//Los generadores permiten definir un algoritmo iterativo al escribir una sola
//funcion que puede mantener su propio estado.


function* iterate(arr) {
    //el arr es de array o arreglo, que aparentemente es lo mismo.
    for (let value of arr){
        yield value;
    }
}
const it = iterate(['Oscar','Piter','Parker']);
console.log(it.next().value);

//Oscar
//✅ Devuelve el valor esperado
//Y si ponemos más

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//Responde

/*
Oscar
Piter
Parker
undefined
undefined
*/

//✅ Devuelve el valor esperado

//ese seria el final de la explicacion del curso PLATZI sobre generators
//PERO
//ECNONTRÉ INFO EXTERNA INTERESANTE QUE ME GUSTARIA DEJAR ESCRITA


//VIDEO YOUTUBE: Que son los generadores en Javascript JUAN JOSE ORTIZ

for (let i = 0; i < 5; i +=1){
    console.log(i);
}

//RETORNA

/*
0
1
2
3
4
*/

//✅ Devuelve el valor esperado

//anteriormente le pedimos, con el iterable for, que imprima
//cada una de las iteraciones, en este caso de 0 a 4 porque el limite es 5.

//Ahora para una funcion generadora

function* generatorFunction(num){
    for(let i = 0; i<num; i+=1){
        yield console.log(i);
    }
}
const generator = generatorFunction(3);
generator.next();
generator.next();
generator.next();

//Responde

/*
0
1
2
*/

//✅ Devuelve el valor esperado

//Provemos la funcion del video de youtube de juan jose ortiz

function * whitYield(a){
    let b = 5;
    yield a + b;
    b = 6;
    yield a*b; 
}
const calcSix = whitYield(6);

//ACÁ SI NO HUBIERA PUESTO CONSOLE.LOG() MI FUNCION NO SE IMPRIMÍA NUNCA EN PANTALLA

console.log(calcSix.next().value); // Devuelve 11
console.log(calcSix.next().value); // Devuelve 36 

//✅ Devuelve el valor esperado

function* generatorFunction (i) {
    const j = 5 *(yield(i*10));
    const k = yield (2*j/4);
    return(i+j+k);
}
const generator1 = generatorFunction(10);
console.log(generator1.next(/*Acá da igual lo que pongamos porque ya lo hemos puesto antes en generatorFunction 10 */));
//igual, tamopoco es que "Dá igual". HE INTENTADO PONERLE EL VALOR 10 DENTRO DEL NEXT y no funciona correctamente.
console.log(generator1.next(10));
console.log(generator1.next(5));