function imprimirAnoAtual() {
  const dataAtual = new Date();      // pega a data atual do sistema
  const anoAtual = dataAtual.getFullYear();  // extrai o ano

  console.log("Ano atual:", anoAtual);
}

// chamando a função
imprimirAnoAtual();