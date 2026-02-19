const prompt = require("prompt-sync")();
let num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))
soma1=num1+num2
soma2=num1-num2
soma3=num1*num2
soma4=num1/num2
console.log(`O resultado de ${num1}+${num2} é ${soma1}`)
console.log(`O resultado de ${num1}-${num2} é ${soma2}`)
console.log(`O resultado de ${num1}*${num2} é ${soma3}`)
console.log(`O resultado de ${num1}/${num2} é ${soma4}`)