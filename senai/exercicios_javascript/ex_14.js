const prompt = require("prompt-sync")();
let numeros = [10, 25, 30, 5, 18, 22, 40, 15];

const maioresQue20 = numeros.filter(numero => numero > 20);
console.log(maioresQue20);