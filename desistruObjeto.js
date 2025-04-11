const pessoa = {
    nome: 'Lazaro',
    sobreNome: 'Cuinica',

    endereco: {
        rua: 'Av.Brazil',
        numero: 322,
    }
};

// const {  endereco: {rua, numero}, endereco, nome, sobreNome, } = pessoa
// console.log(nome, sobreNome, rua, numero, endereco);


//Restante do Objecto:
const {nome, ...resto} = pessoa;
console.log(nome, resto)