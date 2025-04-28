function Produtos (nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true //configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
    
}

const p1 = new Produtos('camiseta', 20, 3);
console.log(p1)

for(let chave in p1){
    console.log(chave)
}