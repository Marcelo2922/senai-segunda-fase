const prompt = require("prompt-sync")();
let numero 
numero = Number(prompt ("Digite o o numero: "))
if (numero%2 == 0 ){
    console.log(`O número ${numero} é par`)
}else{
    console.log(`O número ${numero} é impar`)
}