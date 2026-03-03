const usuarios = [
  { nome: "Ana", idade: 17, temPet: true },
  { nome: "Carlos", idade: 22, temPet: true },
  { nome: "Mariana", idade: 16, temPet: false },
  { nome: "João", idade: 15, temPet: true }
];

const menoresComPet = usuarios.filter(usuario => 
  usuario.idade < 18 && usuario.temPet === true
);

menoresComPet.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos, é menor de idade e possui animal de estimação.`);
});