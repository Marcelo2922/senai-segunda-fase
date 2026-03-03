const usuarios = [
  { nome: "João", sobrenome: "Silva" },
  { nome: "Maria", sobrenome: "Souza" },
  { nome: "Carlos", sobrenome: "Oliveira" }
];

const listaNomes = usuarios.map(usuario => 
  `${usuario.nome} ${usuario.sobrenome}`
);

console.log(listaNomes);