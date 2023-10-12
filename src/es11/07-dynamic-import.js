//aca como vemos utilizamos el async y await para realizar
// la importacion dentro de la llamada al evento

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./06-module.js");
    console.log(module);
    module.hello();
});