const list = new Set();
list.add('item1')
list.add('item2').add('item3');

console.log(list);
// Set(3) { 'item1', 'item2', 'item3' }

//✅ Devuelve el valor esperado

const arr = [1,1,2,2,3,3,4,4,5,5,6,6,6,]
const setarr = new Set(arr);
console.log(setarr);

// Set(6) { 1, 2, 3, 4, 5, 6 }

//✅ Devuelve el valor esperado

//Esto sucede porque Set no acepta valores repetidos