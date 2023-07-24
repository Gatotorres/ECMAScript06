//EJERCICIO PRUEBA

//En este desafío tendrás un archivo llamado api.js 
// que estará al mismo nivel que tu archivo exercise.js.

//Este archivo tendrá una función asíncrona getData() 
// que te retornará una lista de resultados misteriosa.

//Tu función solution() deberá retornar la misma lista de resultados
// que te brinda la función getData().

//INPUT:

solution();

//OUTPUT

const api = [{
    movie: "El despertar de los michis",
    year: 2021,
    protagonist: "Mr. Michi"
}, {
    movie: "101 Michis",
    year: 2019,
    protagonist: "Tommy Michiguire"
}];

//ahora vamos a poner este pedazo de codigo en un archivo .mjs
//para que javascript entienda que es un módulo y lo llamare de nuevo

import { getData } from "./13-api.mjs";

async function solution() {
    const results = await getData();
    return results;
}

  // Ejemplo de uso

solution().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

// FUNCIONOOOO!!!!! 

/*

[
    {
    movie: 'El despertar de los michis',
    year: 2021,
    protagonist: 'Mr. Michi'
    },
    { movie: '101 Michis', year: 2019, protagonist: 'Tommy Michiguire' }
]

*/

//✅ Devuelve el valor esperado


//AHORA INTENTEMOS LO MISMO PERO CON EL EL THEN-CATCH DENTRO DE LA FUNCION
//AUNQUE UTILIZAREMOS EL METODO TRY-CATCH

import { getData } from "./13-api.mjs";

async function solution() {
  try {
    const results = await getData();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

solution();
/*
[
    {
      movie: 'El despertar de los michis',
      year: 2021,
      protagonist: 'Mr. Michi'
    },
    { movie: '101 Michis', year: 2019, protagonist: 'Tommy Michiguire' }
  ]
  */


//✅ Devuelve el valor esperado