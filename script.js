const cartaTexto = document.querySelector("#carta-texto");
const cartaGerada = document.querySelector("#carta-gerada");
const criarCarta = document.querySelector("#criar-carta");
const spanTag = document.querySelectorAll('span');
const cartaContador = document.querySelector('#carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const slope = ['skewleft', 'skewright'];

function getLetterText() {
  let getText = cartaTexto.value;
  let getTextArray = getText.split(" ");
  let paragrafo = document.querySelector("#carta-gerada")
  paragrafo.innerHTML = '';
  for (let index of getTextArray) {
    let spanText = document.createElement('span');
    spanText.innerHTML = index;
    cartaGerada.appendChild(spanText);
  }
}

criarCarta.addEventListener('click', getLetterText);

// Fonte trim(): https://www.w3schools.com/jsref/jsref_trim_string.asp /
function lookEmptySpaces() {
  let getText = cartaTexto.value;
  let emptyLetter = "Por favor, digite o conteúdo da carta.";
  if (getText === '' || getText.trim() === '') {
    cartaGerada.innerText = emptyLetter;
  }
}

criarCarta.addEventListener('click', lookEmptySpaces)

/* const style = ['newspapper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const slope = ['skewleft', 'skewright']; */

function styleClass() {
  let span = document.querySelectorAll('span');
  for (let index of span) {
    index.classList.add(style[Math.floor(Math.random() * 3)]);
  }
}

criarCarta.addEventListener('click', styleClass);

function sizeClass() {
  let span = document.querySelectorAll('span');
  for (let index of span) {
    index.classList.add(size[Math.floor(Math.random() * 3)]);
  }
}

criarCarta.addEventListener('click', sizeClass);

function rotationClass() {
  let span = document.querySelectorAll('span');
  for (let index of span) {
    index.classList.add(rotation[Math.floor(Math.random() * 2)]);
  }
}

criarCarta.addEventListener('click', rotationClass);

function slopeClass() {
  const span = document.querySelectorAll('span');
  for (let index of span) {
    index.classList.add(slope[Math.floor(Math.random() * 2)]);
  }
}

criarCarta.addEventListener('click', slopeClass);

function numberOfWords() {
  const contador = document.querySelector('#carta-contador');
  const span = document.querySelectorAll('span');
  const number = parseInt(span.length, 10);
  contador.innerHTML = number;
  return contador;
}

criarCarta.addEventListener('click', numberOfWords);
