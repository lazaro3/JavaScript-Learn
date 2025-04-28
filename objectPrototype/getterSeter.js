function produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

      
        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            if(typeof valor !== 'number'){
                console.log('Bad value');
                return
            }

            estoquePrivado = valor;
        }
    })
}

const p1 = new produto('Camisa', 20, 3);
// console.log(p1);
p1.estoque = 300;
console.log(p1.estoque)

//87 31 27 286