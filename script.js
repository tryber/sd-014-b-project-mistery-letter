const generateButton = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');

function generate() {
  console.log(textInput.value);
  if (textInput.value === ' ' || textInput.value === '') {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

generateButton.addEventListener('click', generate);
