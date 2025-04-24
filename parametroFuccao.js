const conta = function ( operador, acumulador, ...numeros) {
    // console.log(arguments);

    for(let numero of numeros) {
        if(operador === '+') acumulador = acumulador + numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);


//Argumentos
// const conte = (...args) => {
//     console.log(args);
// };
// conte('+', 0, 10, 20, 30);