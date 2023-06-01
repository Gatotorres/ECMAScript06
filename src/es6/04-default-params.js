// |             !!!!!!!
// | resumen del video!!
// V             !!!!!!!   

//ASÍ SE HACIA ANTES

//declaramos variables com var, las asignamos

function newUser (name, age, country){
    var name = name || 'Oscar';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name,age,country);
}
newUser();  // Oscar 23 MX ✅ Devuelve el valor esperado
newUser('David',23,'CO'); // David 23 CO ✅ Devuelve el valor esperado



// ASI SE DECLARA LUEGO DE ES6

function newAdmin(name='Oscar',age =32, country ='CL'){
    console.log(name,age,country);
}
newAdmin(); // Oscar 32 CL ✅ Devuelve el valor esperado
newAdmin('Ana',23,'PE'); //Ana 23 PE ✅ Devuelve el valor esperado





// |                         !!!!!!!
// | resumen del recurso del video!!
// V                         !!!!!!!


// aquí no hay ningun valor por defecto, por eso responde 'NaN'

function sumar(number1, number2){
    return number1 + number2
    }
    sumar(3,4) // 7        ✅
    sumar(3)   // NaN      ❌
    sumar()    // NaN      ❌

//si no se ponen todos los parámetros, pues que el programa no funcionará❌.


//antes de ES6 se debía establecer una variable y utilizar el operador OR || 

function sumar(number1, number2){
    var _number1 = number1 || 0;
    var _number2 = number2 || 0;
    return _number1 + _number2
}
  sumar(3,4); // 7
  sumar(3);  // 3
  sumar();    // 0

//❌ Esta función no funciona según el resumen del curso.

// Como utilizar los parámetros por defecto

// Eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código

function sumar(number1, number2 = 0){
    return number1 + number2
}

sumar(3,4); // 7
sumar(3);   // 3
sumar();

//❌ Esta función no funciona según el resumen del curso.



//los parámetros por defecto siempre deben estar en las posiciones finales

// ❌ Mal
function sumar(number1 = 0, number2) { ... }
sumar(3)   // number1 = 3 y number2 = undefined 

// ✅ Bien
function sumar(number1, number2 = 0) { ... }
sumar(3)   // number1 = 3 y number2 = 0






// |                               !!!!!!!
// | sacado de los comentarios del video!!
// V                               !!!!!!!  