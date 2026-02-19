const prompt = require("prompt-sync")();
let num1 
num1= prompt("Digite um número: ")
console.log (`O número que você escreveu foi ${num1}`)
if (num1 >10) {
    console.log(`O seu número é maior que 10`)
}else if (num1 == 10) {console.log(`O seu número é 10`)
}else{
   console.log(`O seu número é menor que 10`)
}