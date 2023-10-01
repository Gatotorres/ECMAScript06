//promise allsettled sirve para saber cuando las promesas que seleccionamos 
//se han ejecutado en su totalidad, sin importar sifueron rejected, or fullfilled

const promise1 = new Promise((resolve,reject)=> reject (console.log("Rejected perro")));
const promise2 = new Promise((resolve,reject)=> resolve (console.log("Resolved")));
const promise3 = new Promise((resolve,reject)=> reject (console.log("Resolved tambien te zarpaste")));
Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response));

/*
Rejected perro
Resolved
Resolved tambien te zarpaste
[
  { status: 'rejected', reason: undefined },
  {  status: 'fulfilled', value: undefined },
  { status: 'rejected', reason: undefined }
]
*/


//Como se vé, el Promise.allSettled nos devuelve una matriz
//con UN ARRAY DE OBJETOS con los resultados de las promesas seleccionadas

//"resolve" y "reject" no son palabras reservadas 
// pero sí comúnmente usadas en la sintaxis de una promesa. 
//Se puede usar cualquier nombre como:

new Promise((simon, nel ) => (true) 
? simon(console.log("jamon")) : nel(console.log("queso")));

// jamon

//dice que tambien existe Promise.all([,,,])
//pero que este, solo se ejecuta si todas las promesas se ejecutaron correctamente