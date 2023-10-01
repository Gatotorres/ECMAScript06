//nosotros podemos tener un objeto, que dentro tenga la representacion de "llave"-"valor"
//esa llave-valor tambien puede ser un objeto, y cuando quieramos acceder a esos elementos
//podemos tener errores, particularmente si estmaos trabajando con frameworks o libreriras

//con esta caracteristica vamos a poder validar sin romper el flujo de nuestra aplicación

const ciudades = {
    llaveKey: {
        country:'URY'
    },
    valorValue: {
        country:"Uruguay"
    }
}

console.log(ciudades.llaveKey.country); // URY
console.log(ciudades.valorValue.otraCiudad); // <-- acá devuelve undefined

// devuelve undefined porque encuentra toda la ruta, 
//pero el último elemento .otraCiudad no existe, por lo que es undefined.


//SIN EL OPTIONAL CHAINING:

//*LE CAMBIE EL ORDEN DE LAS VARIABLES PARA DEMOSTRAR COMO FUNCIONA

console.log(ciudades.otraCiudad.valorValue);

/*
URY 
undefined
console.log(ciudades.otraCiudad.valorValue);
                                ^

TypeError: Cannot read properties of undefined (reading 'valorValue')
*/

// CON EL OPTIONAL CHAINING

console.log(ciudades?.otraCiudad?.valorValue); // <-- acá devuelve undefined

//Y no devuelve el error anteriormente visto.

//es como si con el signo ? le preguntaramos "SI EXISTE" tal elemento, 
//para poder preveer el error


//un comentario del curso recomienda no usar el optional chaining de forma abusiva:
//usuario?.redes?.facebook

//y usarlo mas ocacionalmente:
//usuario.redes?.facebook

//porque hay errores de objeto que el programa los camufla/oculta como "undefined"