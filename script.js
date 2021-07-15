// função para caso o input seja vazio
const generateButton = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const generatedText = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');

// função para criar spans
function generate() {
  const arr = textInput.value.split(' ');
  counter.innerText = arr.length;
  function spanCreator() {
    generatedText.innerHTML = '';
    for (let index = 0; index <= arr.length - 1; index += 1) {
      const lineSpan = document.createElement('span');
      generatedText.appendChild(lineSpan);
      lineSpan.innerText = arr[index];
    }
  }
  spanCreator();
}

generateButton.addEventListener('click', generate);
