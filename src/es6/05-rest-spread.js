// |             !!!!!!!
// | resumen del video!!
// V             !!!!!!!


//ASIGNACIÓN DE DESTRUCTURACIÓN
//existen 2 tipos de asignacion de desestructuración

//ARRAYS DESTRUCTURING

let fruits = ['Apple','Banana'];
let [a,b] = fruits;
console.log(a,b);// Apple Banana  //✅ Devuelve el valor esperado


//ANTES SE PODRIA HABER REFERENCIADO A LOS ELEMENTOS DE LA SIGUENTE MANERA:
console.log(fruits[0], fruits[1]);


//OBJECT DESTRUCTURING

let user = { username: 'Oscar', age:34};
let {username, age} = user;
console.log(username,age); // Oscar 34 //✅ Devuelve el valor esperado


// |                         !!!!!!!
// | resumen del recurso del video!!
// V                         !!!!!!!


//ASIGNACIÓN DE DESTRUCTURACIÓN
// consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

const objeto = { 
    prop1: "valor1",
    prop2: "valor2",
} 

// Desestructuración
const { prop1, prop2 } = objeto

console.log(objeto);                    //✅ Devuelve el valor esperado
console.log(prop1);                     //✅ Devuelve el valor esperado



//ANTES de ES6

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres'            ✅ Devuelve el valor esperado
console.log(edad)  // 23                    ✅ Devuelve el valor esperado
console.log(plataforma)  // 'Platzi'        ✅ Devuelve el valor esperado

// Con la desestructuración puedes realizar lo mismo, pero en una sola línea

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres'            ✅ Devuelve el valor esperado
console.log(edad)  // 23                    ✅ Devuelve el valor esperado
console.log(plataforma)  // 'Platzi'        ✅ Devuelve el valor esperado




//Cambiar el nombre de las variables con desestructuración

const objeto = { prop1: "valor1", prop2: "valor2"} ;

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto;
console.log(objeto);

//❌ Esta función no funciona según el resumen del curso.



const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
const { nombre: name, edad: age, plataforma:platform} = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'
console.log(nombre)   // Uncaught ReferenceError: nombre is not defined

//❌ Esta función no funciona según el resumen del curso.



//Desestructuración en parámetros de una función

//Si envías un objeto como argumento en la invocación a la declaración de una función, 
//puedes utilizar la desestructuración en los parámetros para obtener los valores directamente.
//Ten en cuenta que el nombre debe ser igual a la propiedad del objeto

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi' ✅ Devuelve el valor esperado




//Desestructuración de arrays

//La desestructuración de arrays consiste en extraer los valores de un array en variables, 
//utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.

const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1  ✅ Devuelve el valor esperado
console.log(dos) // 2  ✅ Devuelve el valor esperado
console.log(tres) // 3 ✅ Devuelve el valor esperado


// Desestructuración para valores retornados de una función

function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)

//❌ Esta función no funciona según el resumen del curso.


//Lo que puedes hacer con desestructuración, pero no es recomendable

//Si necesitas un elemento en cierta posición, 
//puedes utilizar la separación por comas para identificar la variable que necesitas

const array = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5      ✅ Devuelve el valor esperado

//Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de
// objetos mediante el índice y utilizando un nombre para la variable.

const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5       ✅ Devuelve el valor esperado


// |                               !!!!!!!
// | sacado de los comentarios del video!!
// V                               !!!!!!!