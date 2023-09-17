// para el manejo de errores hemos visto el metodo try-catch.
// si intentamos este try-catch el programa reconocera la funcion 
// y devolverá un error en consola

try {
    hello();
} catch(error) {
    console.log(error);
};

/*
ReferenceError: hello is not defined
    at file:///c:/Users/Nahuel%20Escrit.Nuev/OneDrive/Documentos/GitHub/ECMAScript06/src/es10/tempCodeRunnerFile.js:2:5
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:528:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)
*/
//✅ Devuelve el valor esperado, simplemente no encuentra la funcion. no la hemos declarado.

//En cambio, aunque se ven muy parecidos,  esta no se interpreta igual
//ya que no obligamos  los argumentos del (error), y el cópdigo una vez que no encuentra dicha
//funcion en el codigo, ejecuta la siguiente linea, la del console.log

try {
    hello();
} catch {
    console.log('esto es un error');
};

// esto es un error

//✅ Devuelve el valor esperado