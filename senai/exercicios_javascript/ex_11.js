const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a marca do carro: ", function(marca) {

  rl.question("Digite o modelo do carro: ", function(modelo) {

    rl.question("Digite o ano do carro: ", function(ano) {

      let carro = {
        marca: marca,
        modelo: modelo,
        ano: Number(ano)
      };

      console.log("\nPropriedades do carro:");
      console.log("Marca:", carro.marca);
      console.log("Modelo:", carro.modelo);
      console.log("Ano:", carro.ano);

      rl.question("Digite a cor do carro: ", function(cor) {

        carro.cor = cor;

        console.log("\nObjeto após adicionar cor:");
        console.log(carro);

        delete carro.ano;

        console.log("\nObjeto após remover ano:");
        console.log(carro);

        rl.close();
      });

    });

  });

});