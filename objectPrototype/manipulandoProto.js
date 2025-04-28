function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percetual) {
    this.preco = this.preco - (this.preco * (percetual / 100));
};

Produto.prototype.aumento = function(percetual) {
    this.preco = this.preco + (this.preco * (percetual / 100));
};

const p2 = {
    nome: 'caneca',
    preco: 15,
};

const p3 = Object.create(Produto.prototype);
p3.preco = 23;
p3.aumento(10);
console.log(p3)

// Object.setPrototypeOf(p2, Produto.prototype);
// p2.aumento(10);
// console.log(p2)

// const P1 = new Produto('camiseta',  150);
// P1.aumento(100);
// console.log(P1);
