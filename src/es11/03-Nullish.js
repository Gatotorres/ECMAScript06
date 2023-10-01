//Nullish
//que pasa cuando tenemos un numero y queremos trabajar con estos valores numericos
//para regresar un valor por defecto en dado caso, cuando este pueda llegar a ser nulo
// o téngamos el valor y pueda regresar un valor

const anothernumber= 1;
const anothernumber2= null;
const validate = anothernumber ?? 5;
console.log(validate); //1
console.log(anothernumber2 ?? 5); // 5

//acá lo que hicimos es preguntarle si el valor es nulish, entonces mostrará 5
