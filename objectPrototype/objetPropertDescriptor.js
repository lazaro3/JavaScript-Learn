const produto = {nome: 'adidas', preco: 23 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.preco = 'Outra coisa';
delete produto.preco
console.log(produto)