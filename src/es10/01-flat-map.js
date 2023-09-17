//flatMap nos devuelveu una matríz de cualquier submatríz
const array = [1,1,2,3,2,3,4,4,4,[1,3,5,6],[1,2,4,[1,2,3,4,[1,2,3,4]]]];
console.log(array.flat(6));
console.log('finish6');
console.log(array.flat(5));
console.log('finish5');
console.log(array.flat(3));
console.log('finish3');
console.log(array.flat(2));
console.log('finish2');
console.log(array.flat(1));
console.log('finish1');

//EL RESULTADO ES INTERESANTE POR LO QUE DEJO LA RESPUESTA

/*

[
  1, 1, 2, 3, 2, 3, 4, 4,
  4, 1, 3, 5, 6, 1, 2, 4,
  1, 2, 3, 4, 1, 2, 3, 4
]
finish6
[
  1, 1, 2, 3, 2, 3, 4, 4,
  4, 1, 3, 5, 6, 1, 2, 4,
  1, 2, 3, 4, 1, 2, 3, 4
]
finish5
[
  1, 1, 2, 3, 2, 3, 4, 4,
  4, 1, 3, 5, 6, 1, 2, 4,
  1, 2, 3, 4, 1, 2, 3, 4
]
finish3
[
  1,
  1,
  2,
  3,
  2,
  3,
  4,
  4,
  4,
  1,
  3,
  5,
  6,
  1,
  2,
  4,
  1,
  2,
  3,
  4,
  [ 1, 2, 3, 4 ]
]
finish2
[
  1,
  1,
  2,
  3,
  2,
  3,
  4,
  4,
  4,
  1,
  3,
  5,
  6,
  1,
  2,
  4,
  [ 1, 2, 3, 4, [ 1, 2, 3, 4 ] ]
]
finish1

*/

//SE SUPONE QUE FLAT APLANA O QUITA NIVELES, AUN NO ENTIENDO BIEN COMO


//Con
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v=>[v,v*2]));

/*

[
    1, 2, 2, 4,  3,
    6, 4, 8, 5, 10
]

[
    1,   2,   20,   40,
  300, 600, 4000, 8000,
    5,  10
]

*/

//✅ Devuelve el valor esperado

//Acá le dimos una logica donde cuando el console.log responde lo hace devolviendo
// un array con primero el valor del array2, e inmmediatamente el valor multiplicado por 2.

//se ve mas claro con numeros mas grandes

const array3 = [1,20,300,4000,5];
console.log(array3.flatMap(v=>[v,v*2]));

/*

[
    1,   2,   20,   40,
  300, 600, 4000, 8000,
    5,  10
]

*/

//✅ Devuelve el valor esperado