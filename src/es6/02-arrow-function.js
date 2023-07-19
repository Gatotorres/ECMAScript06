
//ESTA ES LA FORMA "NORMAL" QUE APRENDIMOS

function square(num) {
    return num * num ;
}
console.log(square(2)); // 4

// FUNCION DE TIPO ARROW FUNCTION 

const square = (num) => {
    return num * num ;
}
console.log(square(2)); // 4

// MISMA FUNCION DE TIPO ARROW FUNCTION PERO SIN PARENTESIS 
// EN SU PARÁMETRO NI LLAVES, NI RETURN (ESTÁ IMPLÍCITO)  

const square = num => num * num ;
console.log(square(2)); // 4