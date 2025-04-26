const numeros = [1, 5, 55, 80, 30, 65, 78, 23, 10, 25, 79];
const nunerosPares = numeros
  .filter(function (valor) {
    return valor % 2 === 0;
  })
  .map(function (valor) {
    return valor * 2;
  })
  .reduce(function (ac, valor) {
    return ac + valor;
  });
console.log(nunerosPares);
