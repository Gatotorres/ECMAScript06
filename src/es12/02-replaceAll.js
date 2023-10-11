
//con esta nueva actualizacion del lenguaje, podemos modificar el texto de un string
//StringName.replace("","");
//StringName.replaceAll("","");

const string = "Javascript es un maravilloso lenguaje de programacion";
const replacedString = string.replace("Javascript","PumCosoPereZcAstellanosColorPamva");
console.log(replacedString);
// PumCosoPereZcAstellanosColorPamva es un maravilloso lenguaje de programacion
//✅ Devuelve el valor esperado

//utilicemos el mismo string pero cambiemos algo mas curioso

const replacedCuriousString = string.replaceAll("a", ".");
console.log(replacedCuriousString);

//J.v.script es un m.r.villoso lengu.je de progr.m.cion
//✅ Devuelve el valor esperado