// ESTA ES LA FORMA EN LA QUE NO SE DEBE HACER

let hello = "hello";
let world = "world";
let epicPharase = hello + ' ' + world + '!';


// TEMPLATE LITERALS

let epicPharase2 = `${'hello'} ${'world'}!`;
console.log (epicPharase2);
//hello world!
//✅ Devuelve el valor esperado

//USAMOS LAS COMILLAS FRANCESAS -> `` PARA PONER DENTRO NUESTRO CODIGO
//LUEGO DECLARAR LAS VARIABLES CON $ y LLAVES, ESTO NOS PERMITE ESPACIAR CARÁCTERES AUTOMÁTICAMENTE.
