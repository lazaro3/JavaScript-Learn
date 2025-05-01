class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' ja ligado');
            return;
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' ja Desligado');
            return;
        }

        this.ligado = false
    }
}

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // pra herdar da class principal

        this.cor = cor;
        this.modelo = modelo
    }
}

const s1 = new SmartPhone('Samsung', 'preto', 's24');
s1.ligar()
console.log(s1)

// const d1 = new DispositivoEletronico('Iphone');
// d1.desligar()
// console.log(d1)