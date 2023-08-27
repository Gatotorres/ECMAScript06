let numbers = [1,3,4,5,6,7,8];

console.log(numbers.includes(4));
console.log(numbers.includes(9));
// true
// false

//✅ Devuelve el valor esperado


// CON ESTO podemos validar elementos, confirmar su existencia dentro del array

const list2 = ['pepito','pepitoo','Anaa']

console.log(list2.includes('pepito'));
console.log(list2.includes('anaa')); //acá no lo detecta porque hay diferencia de MAY.&.min.

// true
// false

//✅ Devuelve el valor esperado

//el profe dice que hay formas de reparar el error de tipado, de forma automática
//para que todo lo que vayamos a buscar esté todo dentro de mayusculas o minuscula o 
// a valor numérico. dependiendo de lo que necesitemos.

"toLowerCase"

//Para que todo lo que vayamos a validar esté en minuscula

const list = ["Oscar", "Pedro", "Jose"];
const newList = list.map(item => item.toLowerCase());
console.log(newList);
console.log(newList.includes('oscar')); // ACÁ oscar ESTÁ EN MINUSCULAS PERO

// [ 'oscar', 'pedro', 'jose' ]
// true

//✅ Devuelve el valor esperado

