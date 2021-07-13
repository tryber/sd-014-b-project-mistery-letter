// script
function generatorLetter() {
  const letter = document.querySelector('#carta-texto').value;
  /**
   * Source https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
   * Para verificar se o value de um input está vazio ou com vários espaços em branco.
   */
  if (letter === 0 || !letter.trim()) {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
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
