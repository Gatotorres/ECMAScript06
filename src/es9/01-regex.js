//REGEX     REG-ular Ex-pressions

// se agrego una forma de capturar en grupos los valores que estén 
// dentro de una expresion regular


//NO vamos a ir profundamente en como funciona los regex

const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec("2022-01-01");
console.table(matchers);

/*  RESPONDE:

┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘

*/

//✅ Devuelve el valor esperado

//Esto es porque estamos utilizando console.table() en vez de console.log()