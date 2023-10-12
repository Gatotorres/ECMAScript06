//[nombrearray].at
//vamos a suponer que tenemos un array muy largo
//no sabemos que longitud tiene, pero usando el -1 podemos acceder al ultimo

const array = ["one","two","three","four"];

console.log(array[array.length -1]); //four
console.log(array.at(-1)); //four

//esto nos permite manipular arrays, movernos entre elementos y seleccionarlos.