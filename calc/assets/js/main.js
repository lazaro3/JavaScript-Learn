//Metodo e uma fucao dentro de Objecto

function criaCalcudora() {

  return {
    display: document.querySelector('.display'),
    
    inicia() {
      this.cliqueBotoes();
      this.precionaEnter();
    },


    clearDisplay() {
      this.display.value = ''
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    }, 

    precionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;
      this.display.focus();

      try{
        conta = eval(conta);

        if(!conta) {
          alert('Conta invalida');
          return
        }

        this.display.value = String(conta);

      } catch(e) {
        alert('Conta Invalida')
        return
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains(('btn-num')) ){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });

    },
    btnParaDisplay(valor){
      this.display.value += valor  //+=
    }
  };
}

const calculadora = criaCalcudora();
calculadora.inicia();
