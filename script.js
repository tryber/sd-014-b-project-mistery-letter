// função para caso o input seja vazio
const generateButton = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const generatedText = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');

function generate() {
  if (textInput.value[0] === undefined || textInput.value[0] === ' ') {
    generatedText.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  const arr = textInput.value.split(' ');
  counter.innerText = arr.length;
}

generateButton.addEventListener('click', generate);

// função para receber e tratar o input separando em uma array
