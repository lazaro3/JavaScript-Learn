const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p')


const estilosBody = getComputedStyle(document.body);
const backgroundEstiloBody = estilosBody.backgroundColor;
console.log(backgroundEstiloBody);

for(let p of ps) {
  p.style.backgroundColor = backgroundEstiloBody;
  p.style.color = '#ffffff'
  // console.log(p);
}