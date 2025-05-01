class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    falar() {
        console.log(`${this.nome} Esta falando.`);
    }

    // comer() {
    //     console.log(`${this.nome} Esta comendo.`);
    // }

    // beber() {
    //     console.log(`${this.nome} Esta bebendo.`);
    // }
}

const p1 = new Pessoa('Lazaro', 'Cuinia');
const p2 = new Pessoa('Luis', 'Cuinia');
const p3 = new Pessoa('Vitor', 'Cuinia');
const p4 = new Pessoa('Inacio', 'Cuinia');

p1.falar();
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
