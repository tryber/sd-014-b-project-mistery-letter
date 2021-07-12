const letterInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const letterGeneratorBtn = document.getElementById('criar-carta');
let typedText = '';
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];
const wordsCounter = document.getElementById('carta-contador');

function getInput(event) {
  if (event.target.value === '' || event.target.value === ' ') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generatedLetter.innerText = '';
    typedText = event.target.value;
  }
}

function decorateStyleSize() {
  for (let index = 0; index < generatedLetter.children.length; index += 1) {
    const randomNumber = Math.floor(Math.random() * 3);
    generatedLetter.children[index].classList.add(styleGroup[randomNumber]);
    generatedLetter.children[index].classList.add(sizeGroup[randomNumber]);
  }
}

function decorateRotationInclination() {
  for (let index = 0; index < generatedLetter.children.length; index += 1) {
    const randomNumber = Math.floor(Math.random() * 2);
    generatedLetter.children[index].classList.add(rotationGroup[randomNumber]);
    generatedLetter.children[index].classList.add(inclinationGroup[randomNumber]);
  }
}

function createSpan() {
  const stringArr = typedText.split(' ');
  let numberOfWords = 0;
  for (let index = 0; index < stringArr.length; index += 1) {
    const createdSpan = document.createElement('span');
    createdSpan.innerText = stringArr[index];
    generatedLetter.appendChild(createdSpan);
    numberOfWords += 1;
  }
  wordsCounter.innerText = numberOfWords;
  decorateStyleSize();
  decorateRotationInclination();
}

letterGeneratorBtn.addEventListener('click', createSpan);
letterInput.addEventListener('keyup', getInput);
