const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarTamanho(texto) {
  let tamanho = texto.length;
  let classificacao;

  if (tamanho <= 5) {
    classificacao = "pequena";
  } else if (tamanho <= 10) {
    classificacao = "média";
  } else {
    classificacao = "grande";
  }

  console.log(`A string '${texto}' é ${classificacao}.`);
}
rl.question("Digite uma palavra: ", function(resposta) {
  verificarTamanho(resposta);
  rl.close();
});
