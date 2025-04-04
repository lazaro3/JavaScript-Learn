function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
   
//    let contador = 1

//     form.onsubmit = function (evento) {
//         evento.preventDefault()
//         console.log('enviado com sucesso' , contador++)
//     };

const pessoas= []

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

           

        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            peso: peso.value,
            altura: altura.value,
        });
                //86 94 39 093

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}, ${sobreNome.value}, 
        ${peso.value}, ${altura.value}</p>`

        

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()