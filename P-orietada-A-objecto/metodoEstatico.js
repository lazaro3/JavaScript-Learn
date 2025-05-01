class ControloRemoto {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0
    }

    //Metodo de instancia
    aumentarVolume() {
        this.volume = this.volume + 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    //Metodo estatico
    static trocarPilha() {
        console.log('Okey vou trocar')
    }
}

const contro1 = new ControloRemoto('Lg');
contro1.aumentarVolume()
contro1.aumentarVolume()
contro1.aumentarVolume()

console.log(contro1);
ControloRemoto.trocarPilha();