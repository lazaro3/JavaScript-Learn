 //              -5       -4      -3      -2       -1 negativo
//                0        1       2       3        4
const nomes = ['lazaro', 'Joel', 'Luis', 'Dina', 'Cuinica'];

//nome.splice(indice, Delete, element1, element2, element3, element4)
//pop

const removido = nomes.splice(4, 1);
console.log(nomes, removido);