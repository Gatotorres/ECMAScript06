// Playground: Combina objetos JSON con el Spread Operator
//En este deafío recibirás dos objetos JSON por parámetros.

//Usando el spread operator, deberás combinar ambos objetos en uno solo. 
//Es posible que no se te envíe alguno de los dos objetos o ninguno, 
//por lo que deberás usar estos por defecto, en su respectivo orden:

json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}

json2 = {
    age: 12,
    color: "Blanco"
}

//La solución deberá tener un input y output como la siguiente,
// recuerda que se te pueden o no envíar los parámetros.

//Input:

// solution({
//    name: "Bigotes",
//    food: "Pollito"
//}),

//Output:

//{
//    name: "Bigotes",
//    food: "Pollito",
//    age: 12,
//    color: "Blanco"
//}

json1 = {"name":"Atena","food":"Leche"}

json2 = {"age":2,"color":"Café"}


export function solution(json1, json2) {
    // Tu código aquí 👈
   }


//ESTA ES MI PRIMERA SOLUCION:

function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
    }, json2 = {
    age: 12,
    color: "Blanco"}) {
    //destructuring
    let {name, food} = json1;
    let {age, color} = json2;
    let aiuda = { ...json1, ...json2};
    console.log(aiuda);
};

// ❌❌ MAL, COMPLETAR IDEA.


// POSIBLE solucion sacada de compentarios:

function solution(json1 = {name: "Mr. Michi", food: "Pescado" }, 
json2 = { age: 12, color: "Blanco"}) {
    let todoJunt = Object.assign({}, json1, json2);
    console.log(todoJunt);
    return todoJunt;
};

solution({name: "Bigotes", food: "Pollito"});
solution({},{age:82, color:"Café"}); // responde : { age: 82, color: 'Café' }
solution({name: "Bigotes", food: "Pollito"},{age:82, color:"Café"});

// ✅ Devuelve el valor esperado
// { name: 'Bigotes', food: 'Pollito', age: 12, color: 'Blanco' }
// { name: 'Bigotes', food: 'Pollito', age: 82, color: 'Café' }

//Logré resolver el problema añadiendo dos objetos individuales dentro de la solucion
// --> solution({name: "Bigotes", food: "Pollito"},{age:82, color:"Café"});