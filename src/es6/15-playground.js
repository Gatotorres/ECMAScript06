//Generador de identificadores para michis

Export function* getId(){
    //tu código aquí
}
// En la guardería de michis "Michilango", están registrando nuevos michis, 
//pero necesitan una forma de identificarlos

// tu tareas será proveer de una función getId() que se encargue de generar dichos
// identificadores y, que a travez de un método .next() se pueda pasar al siguiente 
// identificador, y a travéz de la propiedad .value se pueda obtener el valor
//del nuevo identificador.

//cada vez que se llame a la funcion de la siguiente forma debería retornarme
// un identificador nuevo y completamente diferente

const id = getId();

id.next().value;

// el identificador puede ser de cualquier tipo (numeros o cadenas de texto)
//la unica condicion es que cada nuevo identificador que se retorne debe ser completamente
// diferente a los retornados anteriormente

//DEBES USAR LOS GENERADORES DE JAVASCRIPT PARA RESOLVER ESTE EJERCICIO

//la solución deberá tener un input y un output como los siguientes:

//EJEMPLO 1

// input:

const id = getId();
id.next().value;
id.next().value;
id.next().value;

//output
1
2
3

//EJEMPLO 2

const id= getId()
id.next().value;
id.next().value;
id.next().value;

//output

AX6SF5S
G7QNW01
KH3BR02

// MI TURNO:

