const pontuacaoUsuario = 1000;
const nivelPontuacao = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';
console.log(nivelPontuacao);


const corPadrao = 'Pink';
const corUsuario = corPadrao || 'preta';
console.log(corUsuario);