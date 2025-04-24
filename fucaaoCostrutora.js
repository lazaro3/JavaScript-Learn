function Pessoa (nome, apelido) {
    this.nome = nome;
    this.apelido = apelido;

    this.metodo = function() {
        console.log(this.nome + ' Sou o Metodo');
    }
}
const p1 = new Pessoa('Luis', 'Otavio');
const p2 = new Pessoa('Otavio', 'Luis');
console.log(p2.apelido, p1.nome)
p1.metodo();

//868103969
