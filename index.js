function criarPessoa(nome, apelido, idade) {
   return {
    nome: nome,
    apelido: apelido,
    idade: idade
   }
}

const pessoa1 = criarPessoa('Lazaro', 'Luis', 'Cuinica');
const pessoa2 = criarPessoa('Luis', 'Joel', 'Cuinica');
const pessoa3 = criarPessoa('Dino', 'Ito', 'Cuinica');

console.log(pessoa1.nome, pessoa3.nome, pessoa2.nome);