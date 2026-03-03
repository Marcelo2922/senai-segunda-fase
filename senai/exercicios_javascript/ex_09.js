const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function somar(numero1, numero2) {
  return numero1 + numero2;
}

rl.question("Digite o primeiro número: ", function(n1) {

  rl.question("Digite o segundo número: ", function(n2) {

    let resultado = somar(Number(n1), Number(n2));

    console.log("Resultado:", resultado);

    rl.close();
  });

});
