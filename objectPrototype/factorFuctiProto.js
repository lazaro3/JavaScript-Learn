function criaPessoa(nome, sobreNome) {

    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} Esta falando.`);
        },

        comer() {
            console.log(`${this.nome} Esta comendo.`);
        },

        beber() {
            console.log(`${this.nome} Esta bebend.`);
        },
    };
   
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}
    });
}
const p1 = criaPessoa('Luis', 'Zitha');
console.log(p1)