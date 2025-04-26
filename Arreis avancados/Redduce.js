const numeros = [ 1, 5, 55, 80, 30, 65, 78, 23, 10, 25, 79]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor
    // console.log(acumulador, valor)
    return acumulador;
}, 0);
console.log('Total:', total)