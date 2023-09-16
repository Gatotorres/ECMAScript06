//En esta clase utilizamos una función generadora asíncrona, con promesas await dentro
//luego utilizamos los metodos de los generadores, los .next
//y el metodo .then no estoy seguro, pero evidentemente ejecuta la respuesta
//del console.log, response.value

async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

/*

hello
1
2
3

*/
//✅ Devuelve el valor esperado


//En esta clase utilizamos una función asíncrona, con ciclo for await dentro


async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");

/*

After
Alexa
Oscar
David

*/
//✅ Devuelve el valor esperado