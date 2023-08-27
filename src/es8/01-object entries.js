const countries = {MX:'mexico',UY:'Uruguay',PE:'Peru',CL:'Chile'}
console.log(Object.entries(countries));

[
    [ 'MX', 'mexico' ],
    [ 'UY', 'Uruguay' ],
    [ 'PE', 'Peru' ],
    [ 'CL', 'Chile' ]
]

//✅ Devuelve el valor esperado

// En definitiva aquí estamos transmutando la información
// Teníamos un objeto pero el metodo de entries devuelve una matriz
// con los pares propios de la propiedad ennumerada.

