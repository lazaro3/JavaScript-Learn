const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li')
  return li;
}

function limparInput () {
  inputTarefa.value = '';
  inputTarefa.focus();
}

inputTarefa.addEventListener('keypress',  function(e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
})

function criaBotaoApgar(lista) {
  lista.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'apagar';
  //botaoApagar.classList.add('apagar') adicionar class html no js
  botaoApagar.setAttribute('class',  'apagar');
  lista.appendChild(botaoApagar);
}

function criarTarefa (texto) {
  const lista = criaLi();
  lista.innerHTML = texto;
  tarefas.appendChild(lista)
  limparInput ();
  criaBotaoApgar(lista);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

addEventListener('click', function(e) {
  const el = e.target
  
  if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim(); //remove espacao n texo
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  console.log(tarefasJSON);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefaSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  console.log(listaDeTarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
};

adicionaTarefaSalvas() 