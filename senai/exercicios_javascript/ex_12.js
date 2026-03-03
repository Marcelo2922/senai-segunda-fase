function imprimirAnoAtual() {
  const dataAtual = new Date();      
  const anoAtual = dataAtual.getFullYear(); 

  console.log("Ano atual:", anoAtual);
}

imprimirAnoAtual();