// function criaPessoa (nome, sobreNome){
//     return{ nome, sobreNome}
// };
// const p1 = criaPessoa ('luis', 'cuinica')
// console.log(typeof p1);

// const p2 = {
//      nome: 'lazaro', 
//      sobreNome: 'Cuinica'
//     };
// console.log(typeof p2);


// funcao dentro da funcao
// function criaMultiplicador (multiplicador){

//     return function (n) {
//         return n * multiplicador
//     };
// }

// const duplica = criaMultiplicador( 2);
// const triplica = criaMultiplicador(3);
// const quadriplica = criaMultiplicador(4);

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));



function adiciondar(adicao) {
    return function (n) {
        return n + adicao
    };
};

const ad1 = adiciondar(2);
const ad2 = adiciondar(3);
const ad3 = adiciondar(4);

console.log(ad1(2));
console.log(ad2(2));
console.log(ad3(2));

