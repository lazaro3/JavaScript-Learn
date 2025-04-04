const pessoa1 = {
    nome: 'Luis',
    sobreNome: 'Zitha',
    idade: 23,


    fala() {
        console.log(`A minha idade atual e ${this.idade} e meu nome e ${this.nome}`)
    }
}

pessoa1.fala()