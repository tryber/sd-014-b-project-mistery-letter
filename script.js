let input = document.getElementById('carta-texto');
let btnCriarCarta = document.getElementById('criar-carta');
let p = document.getElementById('carta-gerada');
let pContador = document.getElementById('carta-contador');
let carta = document.getElementById('carta');

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
  pContador = document.createElement('p');
  pContador.innerHTML = contador;
  carta.appendChild(pContador);
}
// Adiciona classe as palavras
function addClass() {
  let span = document.querySelectorAll('#span');
  console.log(span);
}
btnCriarCarta.addEventListener('click', limparCarta);