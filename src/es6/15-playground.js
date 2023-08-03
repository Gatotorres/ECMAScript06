//Generador de identificadores para michis

Export function* getId(){
    //tu código aquí
}
// En la guardería de michis "Michilango", están registrando nuevos michis, 
//pero necesitan una forma de identificarlos

// tu tareas será proveer de una función getId() que se encargue de generar dichos
// identificadores y, que a travez de un método .next() se pueda pasar al siguiente 
// identificador, y a travéz de la propiedad .value se pueda obtener el valor
//del nuevo identificador.

//cada vez que se llame a la funcion de la siguiente forma debería retornarme
// un identificador nuevo y completamente diferente

const id = getId();

id.next().value;

// el identificador puede ser de cualquier tipo (numeros o cadenas de texto)
//la unica condicion es que cada nuevo identificador que se retorne debe ser completamente
// diferente a los retornados anteriormente

//DEBES USAR LOS GENERADORES DE JAVASCRIPT PARA RESOLVER ESTE EJERCICIO

//la solución deberá tener un input y un output como los siguientes:

//EJEMPLO 1

// input:

const id = getId();
id.next().value;
id.next().value;
id.next().value;

//output
1
2
3

//EJEMPLO 2

const id= getId()
id.next().value;
id.next().value;
id.next().value;

//output

AX6SF5S
G7QNW01
KH3BR02

// MI TURNO :

function* getIdGato(nombreGato){
    let nGato = nombreGato;
    let countRandom = nGato.lenght(value);
    let idGato = Math.random(countRandom)*10;
    yield nombreGato + idGato ;
}
function getId() {
    getIdGato.next().value
}
getId();








///////////////////////////////////////////////////
CON AIUDA DE LA IA open.IA
///////////////////////////////////////////////////
function* getIdGato(nombreGato) {
    let count = 1;
    while (true) {
        let randomPart = Math.random().toString(36).substr(2, 8).toUpperCase();
        yield nombreGato + count.toString().padStart(2, '0') + randomPart;
        count++;
    }
}

function* getId() {
    while (true) {
        yield* getIdGato('G');
    }
}

// Ejemplo de uso:

const idGenerator = getId();

console.log(idGenerator.next().value); // G01H2UQ8
console.log(idGenerator.next().value); // G02S5RT3
console.log(idGenerator.next().value); // G03A9XC5

//✅ Devuelve el valor esperado  



//AHORA LA IA ME DE UNA FORMA UN POCO BASTANTE MAS FACIL DE COMPRENDER

// Generador de identificadores para michis
function* getId() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

// Ejemplo de uso
const idGenerator = getId();

console.log(idGenerator.next()); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next()); // 3

// Reiniciar el contador para obtener nuevos identificadores
const idGenerator2 = getId();
console.log(idGenerator2.next().value); // 1
console.log(idGenerator2.next().value); // 2..


//✅ Devuelve el valor esperado  

//SI CAMBIAMOS UN POQUITO EL CODIGO Y MODIFICAMOS
// el cómo llamamos a la función, se vé claramente el objeto Json
//que nos devuelven los generadores:


console.log(idGenerator.next()); // { value: 1, done: false }
console.log(idGenerator.next().value);// 2
console.log(idGenerator.next()); // { value: 3, done: false }

//✅ Devuelve el valor esperado 



//UNA SOLUCION COMPLEJA PARA ASEGURARNOS QUE 
// EL IDENTIFICADOR ES UNICO Y NO SE REPITE



const crypto = require('crypto');

class UniqueIdGenerator {
    constructor() {
        this.generatedIds = new Set();
    }

    generateUniqueId(prefix) {
        while (true) {
            const randomBytes = crypto.randomBytes(8).toString('hex').toUpperCase();
            const newId = prefix + randomBytes;
            if (!this.generatedIds.has(newId)) {
                this.generatedIds.add(newId);
                return newId;
            }
        }
    }
}

const idGenerator = new UniqueIdGenerator();

console.log(idGenerator.generateUniqueId('G')); // G01CKVP535X
console.log(idGenerator.generateUniqueId('G')); // G02ZKGWLUAI
console.log(idGenerator.generateUniqueId('G'));

ReferenceError
//: require is not defined in ES module scope, you can use import instead
// This file is being treated as an ES module because it has a '.js' file extension and
// 'c:\Users\Nahuel Escrit.Nuev\OneDrive\Documentos\GitHub\ECMAScript06\package.json' contains
// "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.