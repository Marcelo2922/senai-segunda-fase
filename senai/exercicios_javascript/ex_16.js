const usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Mariana", idade: 18 },
  { nome: "João", idade: 15 }
];

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);

maioresDeIdade.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos e é maior de 18 anos.`);
});