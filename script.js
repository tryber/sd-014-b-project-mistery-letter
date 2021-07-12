const letterInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const letterGeneratorBtn = document.getElementById('criar-carta');
let typedText = '';
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function getInput(event) {
  if (event.target.value === '' || event.target.value === ' ') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generatedLetter.innerText = '';
    typedText = event.target.value;
  }
}

function createSpan() {
  const stringArr = typedText.split(' ');
  for (let index = 0; index < stringArr.length; index += 1) {
    const createdSpan = document.createElement('span');
    createdSpan.innerText = stringArr[index];
    generatedLetter.appendChild(createdSpan);
  }
  decorateStyleSize();
  decorateRotationInclination();
}

function decorateStyleSize() {
  for (let index = 0; index < generatedLetter.children.length; index += 1) {
    const randomNumber = Math.floor(Math.random() * 3);
    generatedLetter.children[index].classList.add(styleGroup[randomNumber]);
    generatedLetter.children[index].classList.add(sizeGroup[randomNumber]);
  }
}

function decorateRotationInclination() {
  const randomNumber = Math.floor(Math.random() * 2);
  for (let index = 0; index < generatedLetter.children.length; index += 1) {
    const randomNumber = Math.floor(Math.random() * 2);
    generatedLetter.children[index].classList.add(rotationGroup[randomNumber]);
    generatedLetter.children[index].classList.add(inclinationGroup[randomNumber]);
  }
}

letterGeneratorBtn.addEventListener('click', createSpan);
letterInput.addEventListener('keyup', getInput);
