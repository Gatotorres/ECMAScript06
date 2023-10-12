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
    //speak es un método AHORA Privado
    #speak() {
        return 'Hello';
    }

    //solo puede ser accedido dentro de la misma clase

    greeting() {
        return `${this.speak()} ${this.name}`
    }

    //CON ESTO tendremos un getter privado 
    get #uAge() {
        return this.age;
    }

    //CON ESTO tendremos un setter privado 
    set #uAge(n) {
        this.age = n;
    }
}
const OtroUusarioo = new user ('Fumanchú', 43);
console.log(OtroUusarioo.uAge);
console.log(OtroUusarioo.speak);
console.log(OtroUusarioo.greeting);

//undefined
//undefined
//[Function: greeting]

//Ahora le vamos a cambiar el valor, esto es gracias al SET
//y gracias a esto, es que podemos ver el 20 de respuesta 

console.log(OtroUusarioo.uAge = 20);

//20

//✅ Devuelve el valor esperado



