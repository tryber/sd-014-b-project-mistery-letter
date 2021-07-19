/* eslint-disable max-len */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
let input = document.getElementById('carta-texto');
let btnCriarCarta = document.getElementById('criar-carta');
let p = document.getElementById('carta-gerada');
let pContador = document.getElementById('carta-contador');

// Limpa os campos span e contador para gerar uma nova frase
function limparCarta () {
  p.innerHTML = '';
  pContador.innerHTML = '';
  inputVazio();
}

// Verifica se algo foi digitado no campo input e chama a função gerar carta
function inputVazio() {
  let frase = input.value;
  frase = frase.trim();
  input.value = frase;
  if (frase === '') {
    let addWord = document.createElement('span');
    addWord.innerHTML = 'Por favor, digite o conteúdo da carta.';
    p.appendChild(addWord);
  } else {
    gerarCarta();
  }
}

// Colocar cada palavra da frase escrita em uma tag span
function gerarCarta() {
  let frase = input.value;
  let tamanhoFrase = frase.length;
  let palavra = '';
  let addWord;
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] !== ' ') {
      palavra += frase[i];
    } else {
      addWord = document.createElement('span');
      addWord.innerHTML = palavra;
      addWord.id = 'span';
      p.appendChild(addWord);
      palavra = '';
    }
  }
  addWord = document.createElement('span');
  addWord.innerHTML = palavra;
  addWord.id = 'span';
  p.appendChild(addWord);
  addClass();
  contadorPalavras();
}

// Contador de palavras
function contadorPalavras() {
  let span = document.querySelectorAll('#span');
  let contador = span.length;
  pContador.innerHTML = contador;
}
// Adiciona classe as palavras aleatoriamente
function addClass() {
  let span = document.querySelectorAll('#span');
  let arrayClass = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

  for (let i = 0; i < span.length; i += 1) {
    let randomNumber1 = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 10);
    let randomNumber3 = Math.floor(Math.random() * 10);
    span[i].className = `${arrayClass[randomNumber1]} ${arrayClass[randomNumber2]} ${arrayClass[randomNumber3]}`;
  }
}
btnCriarCarta.addEventListener('click', limparCarta);
p.addEventListener('click', addClass);
