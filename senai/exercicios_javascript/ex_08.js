const prompt = require("prompt-sync")();
let frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

frutas.push("Uva");
console.log("Após adicionar:");
console.log(frutas);

frutas.pop();
console.log("Após remover:");
console.log(frutas);