const input = document.getElementById('carta-texto'); // [3]
const createLetterButton = document.getElementById('criar-carta'); // [3]
const generatedLetter = document.getElementById('carta-gerada'); // [3]
function limpaSpan() {
  generatedLetter.innerHTML = '';
}
function createLetter() {
  const values = input.value.split(/\s+/);
  console.log(values, input.value);
  limpaSpan();
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] !== '') {
      const span = document.createElement('span');
      span.innerText = values[index];
      generatedLetter.appendChild(span);
    }
  }
}
createLetterButton.addEventListener('click', createLetter);
