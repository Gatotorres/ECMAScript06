//Map si mal no recuerdo nos menciona los elementos dentro del objeto

// LE DECIMOS QUE EJECUTE LA VARIABLE/ARGUMENTO ENTRIES

// Y LUEGO LO DECLARAMOS DENTRO DE bject.fromEntries(entries)
const entries = new Map ([["name", "oscar",["age", 34]]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/*

Map(1) { 'name' => 'oscar' }
{ name: 'oscar' }


*/
//✅ Devuelve el valor esperado
