// script
function generatorLetter() {
  const letter = document.querySelector('#carta-texto').value;
  const arrayLetter = letter.split(' ');
  const lettesPrevious = document.querySelectorAll('span');
  lettesPrevious.forEach((spans) => {
    spans.parentElement.removeChild(spans);
  });
  arrayLetter.forEach((word) => {
    const spanLetter = document.createElement('span');
    spanLetter.innerText = word;
    document.querySelector('#carta-gerada').appendChild(spanLetter);
  });
}

const buttonGeneratorLetter = document.querySelector('#criar-carta');

buttonGeneratorLetter.addEventListener('click', generatorLetter);
