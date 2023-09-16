const objectSpread = {username:'objeto1',age:'objeto2',country:'objeto3',othercamp:'objeto4',oth3rcamp:'objeto5',};
const { username, ...values } = objectSpread;
console.log(username);
console.log(values);

//responde-> 
/*

PRIMERO RESPONDE:
objeto1

LUEGO RESPONDE: 
{
age: 'objeto2',
country: 'objeto3',
othercamp: 'objeto4',
oth3rcamp: 'objeto5'
}

*/

//✅ Devuelve el valor esperado

