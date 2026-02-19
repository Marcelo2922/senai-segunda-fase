const prompt = require("prompt-sync")();
let idade 
idade = prompt("Digite sua idade: ")
console.log (`Sua idade é ${idade}`)
if (idade >= 18) {
    console.log("Você é maior de idade ")
}else{
    console.log("Você é menor de idade")
}