class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const campoValidos = this.campoSaoValidos()
        const senhasValida = this.senhasValida()

        if(campoValidos && senhasValida) {
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    }

    senhasValida() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais ');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais ');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro('Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid;
    }

    campoSaoValidos(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll('.error-text')) {
            erroText.remove();
        }

        for(let campos of this.formulario.querySelectorAll('.validar')) {
            const label = campos.previousElementSibling.innerHTML;

            if(!campos.value) {
                this.criaErro(campos, `Campo "${label}" nao pode estar branco.`);
                this.valid = false;
            }

            if(campos.classList.contains('usuario')) {
                if(!this.validarUsuario(campos)) valid = false;
            }
            
        };
        
        return valid;
    }

    validarUsuario(campos) {
        const usuario = campos.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campos, 'Usuario precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campos, 'Nome de usuario precisa conter apenas letras e numeros');
            valid = false;
        }

        return valid;
    }

    criaErro(campos, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campos.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();