const numeros = [ 1, 5, 55, 80, 30, 65, 78, 23, 10, 25, 79]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []);
console.log(total);


// const pessoas = [
//     { nome: "Luis", idade: 21 },
//     { nome: "Lizefa", idade: 25 },
//     { nome: "Roselene", idade: 31 },
//     { nome: "Wesley", idade: 41 },
//     { nome: "Chanaia", idade: 28 },
//     { nome: "Leonarda", idade: 65 },
//     { nome: "Hamilton", idade: 80 },
//   ];

//   const maisVelha = pessoas.reduce(function(acumulador, valor){
//     console.log(acumulador, valor )
//   },0 )