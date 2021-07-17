// script
/*
const arrayGroupStyle = ['newspaper', 'magazine1', 'magazine2'];
const arrayGroupSize = ['medium', 'big', 'reallybig'];
const arrayGroupRotation = ['rotateleft', 'rotateright'];
const arrayGroupSlope = ['skewleft', 'skewright']; */
const arrayClasses = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright']];

function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomClass() {
  const numberClass = numberRandom(1, 4);
  const newClass = [];
  for (let index = 0; index <= numberClass; index += 1) {
    newClass[index] = arrayClasses[numberRandom(0, 3)];
  }
  return newClass;
}

function mountClass() {
  const classes = randomClass();
  const newClass = classes.filter((i, value) => classes.indexOf(i) === value);
  let stringClass = '';
  for (let index = 0; index < (newClass.length); index += 1) {
    stringClass += `${newClass[index][numberRandom(0, newClass[index].length)]} `;
  }
  /**
   * Source:https://qastack.com.br/programming/17720264/remove-last-comma-from-a-string
   *
   * Utilizei a ideia que passaram nesse fórum para remover o
   * espaço vazio no fim da string que estava ocasionando o
   * erro no requisito 16.
   */
  const lastCaracter = stringClass.lastIndexOf(' ');
  return stringClass.substring(0, lastCaracter);
}

function generatorSpan(letter) {
  const arrayLetter = letter.split(' ');
  document.querySelector('#carta-contador').innerText = arrayLetter.length;
  const lettesPrevious = document.querySelectorAll('span');

  lettesPrevious.forEach((spans) => {
    spans.parentElement.removeChild(spans);
  });
  arrayLetter.forEach((word) => {
    const spanLetter = document.createElement('span');
    spanLetter.innerText = word;
    spanLetter.className = mountClass();
    document.querySelector('#carta-gerada').appendChild(spanLetter);
  });
}

function generatorLetter() {
  const letter = document.querySelector('#carta-texto').value;
  /**
   * Source https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
   * Para verificar se o value de um input está vazio ou com vários espaços em branco.
   */
  if (letter === 0 || !letter.trim()) {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
  generatorSpan(letter);
}

const buttonGeneratorLetter = document.querySelector('#criar-carta');

buttonGeneratorLetter.addEventListener('click', generatorLetter);
