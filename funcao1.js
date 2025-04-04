function criaPessoa (nome, sobreNome, idade) {
    return { nome, sobreNome, idade };

}

const pessoa1 = criaPessoa ('Lazaro', 'Cuinica', 28)
const pessoa2 = criaPessoa ('Laura', 'nica', 23)
// const pessoa3 = criaPessoa ('Luisa', 'uini', 54)
// const pessoa4 = criaPessoa ('Larcia', 'Cuca', 18)

console.log(pessoa1.nome, pessoa1.sobreNome, pessoa2.nome);

