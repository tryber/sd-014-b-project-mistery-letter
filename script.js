const generateButton = document.querySelector('#carta-texto');
const textInput = document.querySelector('#carta-texto').innerText;

function generate() {
  if (textInput === '') {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

generateButton.addEventListener('click', generate);
