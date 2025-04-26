// Filter vai sempre retornar um Array, com a mesma quantidade de elemento ou menos

// const numeros = [1, 2, 4, 6, 8, 10, 11, 15, 22, 31, 40, 50, 62]
// //Primeira forma
// callBeckFilter = (valor, indice, arrey) => {
// return (valor > 10) 
// }
// const numerosFiltrado = numeros.filter(callBeckFilter);
// console.log(numerosFiltrado)

//Segunda forma

// const numerosFiltrado = numeros.filter(function(valor){
//     return (valor > 10) 
// });

//Terceira forma
const numerosFiltrado = numeros.filter(valor => valor > 10)
console.log(numerosFiltrado)