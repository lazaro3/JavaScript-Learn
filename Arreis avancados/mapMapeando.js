// const numeros = [5, 6, 7, 8, 9, 10, 12, 15, 16, 20, 25, 30];

// const dobroDeNumero = numeros.map(function(valor) {
//     return valor * 2
// });

// console.log(dobroDeNumero);

const pessoas = [
    { nome: "Luis", idade: 21 },
    { nome: "Lizefa", idade: 25 },
    { nome: "Roselene", idade: 31 },
    { nome: "Wesley", idade: 41 },
    { nome: "Chanaia", idade: 28 },
    { nome: "Leonarda", idade: 65 },
    { nome: "Hamilton", idade: 80 },
];

// const comIds = pessoas.map(function(obj, indice){
//    obj.id = indice
//    return obj
// });
// console.log(comIds);

const newObject = pessoas.map(function(obj, indice){
    const newObject = {...obj}
    newObject.id = indice 
    return newObject
});
console.log(newObject);
// console.log(pessoas)




const idades = pessoas.map(function(obj){
    // return {idades: obj.idade}
    delete obj.nome
    return obj;
});
// console.log(idades);

// const nomes = pessoas.map(function(obj){
//     return obj.nome
// });
// console.log(nomes);