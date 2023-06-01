var varName = "ALGO"; // ACA DECLARAMOS E INICIALIZAMOS CON VAR
lastName = "OTRO" ; // ACA RE DECLARAMOS LA VARIABLE VAR
console.log(varName); // ACA CON EL COMANDO RUN CODE DEL CLICK DERECHO,
// EJECUTAMOS, Y VEMOS EL CÓDIGO EN SALIDA (no se porqué ahí)

let letName = "ALGO";  // ACÁ DECLARAMOS E INICIALIZAMOS CON LET
letName = "OTRO" ;  //  ACA RE-ASIGNAMOS LA VARIABLE LET
console.log(letName);  // EJECUTAMOS RUN CODE, TAMBIÉN VEMOS EL CÓDIGO EN SALIDA DE
// QUE LET ES MODIFICADO DE ESTA FORMA.

const constName = "ALGO" ; // ACÁ DECLARAMOS E INICIALIZAMOS CON CONST
constName = "OTRO"; //  ACA RE-ASIGNAMOS LA VARIABLE CONST
console.log(constName); // VEMOS EN SALIDA TypeError: Assignment to constant variable.

// NO PODEMOS RE ASIGNAR CONSTANTES CONST
//LET TIENE ALNCANCE DE BLOQUE
//VAR ES GLOBAL

// ACA VEMOS COMO  AL INTENTAR LLAMAR A LET FUERA DE LA FUNCIÓN IF{} 
//DEVUELVE: ReferenceError: nameLet is not defined

const fruits = () => {
if (true) {
    var nameVar = "NameVar";  // FUNCTION SCOPE 
    let nameLet = "NameLet";  // BLOCK SCOPE
    const nameConst = "NameConst"; //BLOCK SCOPE
}
console.log(nameVar);
console.log(nameLet);
console.log(nameConst);
}
fruits();
