const letterInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const letterGeneratorBtn = document.getElementById('criar-carta');
let typedText = '';

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
}

letterGeneratorBtn.addEventListener('click', createSpan);
letterInput.addEventListener('keyup', getInput);
