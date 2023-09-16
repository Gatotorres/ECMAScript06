const array = [14, 34, 25, 24];

console.log(array);
console.log(array.length);

// [ 14, 34, 25, 24 ]
// 4

//✅ Devuelve el valor esperado

// y de lo que trata esta actualizacion 
// es de los empty items que se crean , , , , , , ,
// al utilizar los trailing commas para definir dichos elementos.

const array1 = [14, 34, 25, 24 , , , , , , , , ,];

console.log(array1);
console.log(array1.length);

// [ 14, 34, 25, 24, <8 empty items> ]
// 12

//✅ Devuelve el valor esperado


// son como elementos KEY-VALUE
// Tienen KEY pero no value (o creo que tienen llave/key)

console.log(array1.keys());

//Object [Array Iterator] {}

//... ❓ pues no sé si Devuelve el valor esperado

//yo esperaba que me devuelva los keys de los elementos a pesar de que hay empty values