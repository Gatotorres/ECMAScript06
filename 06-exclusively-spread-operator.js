
// |             !!!!!!!
// | resumen del video!!
// V             !!!!!!!

//spread operator -> ... <-

let person = {name:'Oscar', age:28};
let country = 'MX';

let data = { id:1 , ...person, country };
console.log(data);

// { id: 1, name: 'Oscar', age: 28, country: 'MX' }   ✅ Devuelve el valor esperado

//PARAMETROS REST OR REST PARAMETERS

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values [0];
}
sum (1, 1, 2, 3);

//[ 1, 2, 3 ]    --> ESTO es el console.log(values)                  //✅ Devuelve el valor esperado
//2  --> ESTO es la suma que se hace en console.log(num + values[0]);//✅ Devuelve el valor esperado



// |                         !!!!!!!
// | resumen del recurso del video!!
// V                         !!!!!!!


//Spread Operator

// El operador de propagación (spread operator), como su nombre lo dice, 
// consiste en propagar los elementos de un iterable, ya sea un array o string 
// utilizando tres puntos -> ... <-

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]


// TAMBIEN SE USA EN OBJETOS pero esta característica fue añadida en versiones posteriores
//  de ECMAScript y es denominada propiedades de propagación

// copiar arrays utilizando el operador de propagación
//  Los arrays se guardan en una referencia en la memoria AL CREAR UNA COPIA
// si cambias algo en la copia, TAMBIÉN lo harás en el original.

const originalArray = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

console.log(originalArray) // [0,2,3,4,5]             ✅ Devuelve el valor esperado
console.log(originalArray === copyArray)  // true     ✅ Devuelve el valor esperado

//unir arrays y añadir elementos con el operador de propagación

// Para unir dos arrays con el operador de propagación,
// simplemente debes separarlos por comas en un array.

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]
console.log(otherArray); //                           ✅ Devuelve el valor esperado

// [
//  1, 2, 3, 4,
//  5, 6, 7
// ]


// El operador de propagación sirve para producir una copia en UN SOLO nivel de profundidad

//si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel,
// tendrán la misma referencia de memoria en la copia y en el original

const originalArray = [1, [2,3] ,4,5]
const copyArray = [...originalArray]

console.log(originalArray[1] === copyArray[1]); //true ✅ Devuelve el valor esperado


// La manera de solucionar es más compleja,
// tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.

//Sin embargo, recientemente salió una forma de producir una copia profunda con StructuredClone,
// aunque es una característica muy reciente, así que revisa que navegadores tienen soporte

const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

console.log(originalArray === copyArray); // false          ✅ Devuelve el valor esperado
console.log(originalArray[1] === copyArray[1]); // false    ✅ Devuelve el valor esperado


//Parámetro rest

//El parámetro rest consiste en agrupar el residuo de elementos mediante la
// sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

//Esta característica sirve para crear funciones
// que acepten cualquier número de argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5,6]
  }

hola(1,2,3,4,5)
//1 2
//[ 3, 4, 5 ]


//También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.

const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
}
const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = array

console.log(usuario); // { nombre: 'Andres', age: 23 }    ✅ Devuelve el valor esperado
console.log(positivos); // [ 1, 2, 3, 4, 5 ]              ✅ Devuelve el valor esperado

//El parámetro rest siempre deberá estar en la última posición

//El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición,

//el operador de propagación expande los elementos de un iterable en un array
// y no importa en que lugar esté situado

const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2                    ✅ Devuelve el valor esperado
  console.log(resto) // [3,4,5, "final"]                   ✅ Devuelve el valor esperado
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
