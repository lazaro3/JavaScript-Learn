// function relogio() {
//   function criaHoraDosSegundos(segundos) {
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//       hour12: false,
//       timeZone: 'UTC'
//     });
//   }

//   const relogio = document.querySelector('.relogio');
//   let segundos = 0;
//   let timer;

//   function iniciaRelogio() {
//     timer = setInterval(function() {
//       segundos++;
//       relogio.innerHTML = criaHoraDosSegundos(segundos);
//     }, 1000);
//   }

//   document.addEventListener('click', function(e) {
//     const el = e.target;

//     if (el.classList.contains('zerar')) {
//       clearInterval(timer);
//       relogio.innerHTML = '00:00:00';
//       relogio.classList.remove('pausado');
//       segundos = 0;
//     }

//     if (el.classList.contains('iniciar')) {
//       relogio.classList.remove('pausado');
//       clearInterval(timer);
//       iniciaRelogio();
//     }

//     if (el.classList.contains('pausar')) {
//       clearInterval(timer);
//       relogio.classList.add('pausado');
//     }
//   });
// }
// relogio();

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
  relogio.innerHTML = 'Botao iniciado'
});

pausar.addEventListener('click', function(event) {
  relogio.innerHTML = 'Botao iniciado'
});

pausar.addEventListener('click', function(event) {
  relogio.innerHTML = 'Botao iniciado'
});





