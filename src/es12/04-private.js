//copié textual la clase 10-clases.js
//para explicar estas nuevas modificaciones

//Agregando # los métodos se vuelven privados
// y solo pueden ser accedidos dentro de la misma clase.

//dato:NO se puede poner: #constructor. 

class user {
    constructor(name,age) {
        this.name =name;
        this.age = age;
    }
    //Métodos AHORA Privado
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    //CON ESTO LEEREMOS UN VALOR 
    get #uAge() {
        return this.age;
    }

    //CON ESTO MODIFICAREMOS UN VALOR
    set #uAge(n) {
        this.age = n;
    }
}
const OtroUusarioo = new user ('Fumanchú', 43);
console.log(OtroUusarioo.uAge);
//Ahora le vamos a cambiar el valor, esto es gracias al SET
console.log(OtroUusarioo.uAge = 20);

//undefined

//20

//✅ Devuelve el valor esperado



