const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// função que soma
function somar(numero1, numero2) {
  return numero1 + numero2;
}

// perguntar primeiro número
rl.question("Digite o primeiro número: ", function(n1) {

  // perguntar segundo número
  rl.question("Digite o segundo número: ", function(n2) {

    let resultado = somar(Number(n1), Number(n2));

    console.log("Resultado:", resultado);

    rl.close();
  });

});
