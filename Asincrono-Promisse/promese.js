const myPromess = new Promise((resolve, reject)=> {
    nome = 'Lazaro'

    if(nome === 'Lazaro') {
        resolve(`O usuario ${nome} encotrado`);
    } else {
        reject(`O usuario ${nome} nao encotrado`)
    }

});

myPromess.then((dados) => {
    console.log(dados);
});


const myPromess2 = new Promise((resolve, reject)=> {
    nome = 'Magul'

    if(nome === 'Magul') {
        resolve(`O usuario ${nome} encotrado`);
    } else {
        reject(`O usuario ${nome} nao encotrado`)
    }

});

myPromess2.then((dados) => {
    return dados.toLowerCase();
})

.then((stringModificada) => {
    console.log(stringModificada);
});


const myPromess3 = new Promise((resolve, reject)=> {
    nome = 'Nene'

    if(nome === 'Magul') {
        resolve(`O usuario ${nome} encotrado`);
    } else {
        reject(`O usuario ${nome} nao encotrado`)
    }

});

myPromess3.then((dados) => {
    return dados.toLowerCase();
})

.catch((err) => {
    console.log('aconteceu um erro ' + err);
})




  const minhaPromessa = new Promise((resolve, reject) => {
    nome = 'Lui'

    if(nome === 'Luis'){
        resolve(`O usuario ${nome} encotrado com sucesso`);
    } else {
        reject(`o usuario ${nome} nao encotrado`);
    }
  });

  minhaPromessa.then((data) =>{
    console.log(data);

  }).catch((err) => {
    console.log(`erro na conexao` + err)
  })


//Imprimindo varias promessas

const p1 = new Promise((resolve, reject) => {
    resolve('p1 ok')
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok')
})

const resolveAll = Promise.all([p1, p2, p3])
.then((data) => {
    console.log(data);
});



const p4 = new Promise((resolve, reject) => {
  resolve('p4')
});

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok')
});

const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok')
});

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
console.log(data);
});

  