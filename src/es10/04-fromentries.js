//Map es una función que se utiliza en arrays para crear un nuevo array con los resultados
// de aplicar una función a cada elemento del array original.

// LE DECIMOS QUE EJECUTE entries COMO VARIABLE 
// Y LUEGO LO DECLARAMOS COMO DENTRO DE Oject.fromEntries(entries)

const entries = new Map ([["name", "oscar"],["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/*

Map(2) { 'name' => 'oscar', 'age' => 34 }
{ name: 'oscar', age: 34 }

*/
//✅ Devuelve el valor esperado

//ESTÁ DEVOLVIENDO DOS OBJETOS CUANDO SE LE INTRODUJERON DOS ARRAYS


//tuve unas confusiones con .map y Map([...])
//por lo que aqui van aclaraciones:

// Crear un array original

var numbers = [1, 5, 10, 15];

// Usar el método map() para aplicar una función a cada elemento del array

var doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(doubles);

//[ 2, 10, 20, 30 ]

//✅ Devuelve el valor esperado

//Map([...]) es una estructura que esta diseñada para guardar pares clave-valor
//no acepta repetidos, y hasta ahora conozco 2 metodos

//nombreVariable.set: para agregar o actualizar elementos a la tabla

//nombreVariable.get(nombreClave/key)


const miMapa = new Map(); //Creamos dicho elemento
miMapa.set("clave1", "valor1");
miMapa.set("clave2", "valor2");
miMapa.set("clave3", "valor1");
miMapa.set("clave3", "valor6");
miMapa.set("clave4", "valor2");
console.log(miMapa);
console.log(miMapa.get("clave3"));

/*

Map(4) {
  'clave1' => 'valor1',
  'clave2' => 'valor2',
  'clave3' => 'valor6',
  'clave4' => 'valor2'
}
valor6


//✅ Devuelve el valor esperado
*/



const miMapa2 = new Map();
miMapa2.set("clave1", "valor1"); // Agrega una clave-valor
miMapa2.set("clave2", "valor2"); // Agrega otra clave-valor
miMapa2.set("clave1", "nuevoValor"); // Actualiza el valor asociado a "clave1"

console.log(miMapa2.get("clave1")); // Muestra "nuevoValor"