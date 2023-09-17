//si por alguna razon tenemos strings con muchos espacios al principio y al final
//con estos metodos podemos modificarlos para quitarle dichos espacios

const hello = '    Hello World   '
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());
/*

Hello World   //CON ESPACIOS AL FINAL
    Hello World//CON ESPACIOS AL PRINCIPIO
Hello World//SIN ESPACIOS AT ALL.


*/
//✅ Devuelve el valor esperado