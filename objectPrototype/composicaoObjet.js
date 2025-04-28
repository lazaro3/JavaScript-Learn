const falar = {
    falar(){
        console.log(`${this.nome} Eata falndo`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} Eata comendo`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} Eata bebendo`)
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobreNome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}
    });
}

const p1 = criaPessoa('Luis', 'Cuinics');
console.log(p1);