// Filter vai sempre retornar um Array, com a mesma quantidade de elemento ou menos

const pessoas = [
  { nome: "Luis", idade: 21 },
  { nome: "Lizefa", idade: 25 },
  { nome: "Roselene", idade: 31 },
  { nome: "Wesley", idade: 41 },
  { nome: "Chanaia", idade: 28 },
  { nome: "Leonarda", idade: 65 },
  { nome: "Hamilton", idade: 80 },
];

const nomeTerminaComA = pessoas.filter(function (Obj) {
  return Obj.nome.toLowerCase().endsWith("a");
});
console.log(nomeTerminaComA);

const pessoasComMaisD50 = pessoas.filter((Obj) => {
  return Obj.idade >= 50;
});
console.log(pessoasComMaisD50);

const nomeGrandes = pessoas.filter((Obj) => {
  return Obj.nome.length > 5;
});
console.log(nomeGrandes);
