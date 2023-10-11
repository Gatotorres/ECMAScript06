//globalthis es una forma de acceder al objeto global
//dentro del navegador, node y el webworker, 
//todo integrado en un solo llamado

console.log(window); // navegador
console.log(global);  // node
console.log(self);// webworker

console.log(globalThis); // global, en node, navegador o webworker