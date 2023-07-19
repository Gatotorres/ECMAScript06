//va a agregar una mejora sintática para hacer mas amigable
//el trabajo con una particularidad la heraencia en las clases

//Declarando

class User{};


// Instancia de una clase
const newUser = new User();


//

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

//ahora haremos una instancia y un llamado de este objeto

const nahuel = new user();
console.log(nahuel.greeting());

// Hello
//✅ Devuelve el valor esperado

//ahora aplicaremos la herencia
//simplemente es crear mas variables y hacer mas referencias a la clase creada

const pibecantina = new user();
console.log(pibecantina.greeting());


// Hello
// Hello
//✅ Devuelve el valor esperado

//ahora utilizaremos un constructor que es un método de las clases

class user {
    //constructor
    constructor() {
    console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

//ahora creamos una constante para generar un valor asignado a esta clase

const Pibardo = new user();

//Nuevo Usuario
//✅ Devuelve el valor esperado

//devuelve Nuevo Usuario porque al llamar una clase con new, automaticamente se
//ejecuta lo que está dentro del constructor

//ahora vamos a trabajar con this y como va a ayudarnos

//this hace referencia al elemento padre que lo contiene

class user {
    constructor(name){
        this.name = name;
    }
    //Métodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const Ana = new user ('Ana');
console.log(Ana.greeting())

//Responde -> Hello Ana
//✅ Devuelve el valor esperado


//AHORA veremos 
              //Setters 
                    //AND 
                        //Getters

class user {
    constructor(name,age) {
        this.name =name;
        this.age = age;
    }
    //Métodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    //CON ESTO LEEREMOS UN VALOR 
    get uAge() {
        return this.age;
    }

    //CON ESTO MODIFICAREMOS UN VALOR
    set uAge(n) {
        this.age = n;
    }
}
const OtroUusarioo = new user ('Fumanchú', 43);
console.log(OtroUusarioo.uAge);
//Ahora le vamos a cambiar el valor, esto es gracias al SET
console.log(OtroUusarioo.uAge = 20);

//43
//20
//✅ Devuelve el valor esperado
//✅ Devuelve el valor esperado


