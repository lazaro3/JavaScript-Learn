// function primeraFuncao(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve()
//             console.log('esperou isto aqui')
//         }, 1000);
//     })
// }

//  async function segundaFuncao() {
//     console.log('iniciou');

//     await primeraFuncao();

//     console.log('Terminou aqui');
//  }
//  segundaFuncao();


 function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)

    .then((resolve) => resolve.json())
    .catch((err ) => console.log(err))
 }

 async function showUserName(id) {

    try {   
    const user = await  getUser(id)
    console.log(`O nome do usuario e: ${user.resolve.first_name}`)
        
    } catch (error) {
        console.log(error, 'erro no servidor')
    }

 }

 showUserName(3);