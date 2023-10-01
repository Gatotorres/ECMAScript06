
// El profe dice que este constructor nos permite el
// manejo del volumenes altos de números dentro de javascript. 


const aBigNumber = 890724592074209321323131847n
const anotherBigNumber = BigInt(847);
console.log(aBigNumber); //8907245920742093847n
console.log(anotherBigNumber); //847n


//no solo eso, colocar una n al final de una cadena de numeros hace
//que javascript interpreta No como numero, sino como BigInit a los numeros con n AL FINAL

const aBigNumber2 = 8907245920742093213121331231323131847n
const anotherBigNumber2 = BigInt(8473213331231312131213131231312312321312321313131);
console.log(aBigNumber2); //8907245920742093213121331231323131847n
console.log(anotherBigNumber2); //8473213331231312693871983351494766255258071990272n


const aBigNumber3 = 8907245920742093847n;
const anotherBigNumber3 = BigInt(8907245920742093847);
console.log(aBigNumber3); //8907245920742093847n
console.log(anotherBigNumber3); // 8907245920742093824n    //<-- ? no entiendo porque 
                                                           //le cambia los dos caracteres
                                                         // al final de la respuesta
// LA IA DICE 
//En JavaScript, cuando declaras un BigInt como "aBigNumber," 
//el número se interpreta directamente como un BigInt. Sin embargo, al utilizar
// la función "BigInt(8907245920742093847)," JavaScript primero lo interpreta como
// un número normal de 64 bits y luego lo convierte en un BigInt, lo que podría causar
// una pérdida de precisión en casos extremos.




