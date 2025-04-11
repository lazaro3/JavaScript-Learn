const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  // console.log(numero);
  if (numero === 2) {
    console.log("numero 2 encotrado");
    continue;
  }
  console.log(numero);

  if(numero === 7) {
    console.log('numero 7 encotrado');   
    break; 
    }
  }

