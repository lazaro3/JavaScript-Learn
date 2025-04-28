function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco = this.preco + quantia;
}

Produto.prototype.aumento = function(quantia){
    this.preco = this.preco - quantia;
}

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percetual){
    this.preco = this.preco + (this.preco * (percetual / 100))
}

const produto = new Produto('gen', 111);
const camiseta = new Camiseta('Nike', 50, 'vermelha');
camiseta.aumento(100)
console.log(produto)
console.log(camiseta);