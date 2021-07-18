const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotation = ['rotateleft', 'rotateright'];
const groupInclination = ['skewleft', 'skewright'];

let textLetter = document.getElementById('carta-texto').innerText;
function createLetter(textLetter) {/*
  for (let i = 0; i <)
  document.createElement('span'); */
}
const generateLetter = document.getElementById('criar-carta');
generateLetter.addEventListener('click', createLetter);

// Contador de palavras -> Fonte: https://stackoverflow.com/questions/18679576/counting-words-in-string
let totalStrings = 0;
function wordCounter(string) {
  for (let i = 0; i < wordCounter.length; i += 1) {
    if (string[i] === ' ') { // Caso 1 espaço for encontrado na string...
      totalStrings += 1; // Adicionar 1 ao contador totalStrings
    }
    totalStrings += 1; // Adicionar 1 ao totalStrings -> 1 espaço = 2 palavras
  }
  return totalStrings;
}
const counter = wordCounter(document.getElementById('carta-texto').innerText);
document.getElementById('carta-contador').innerText = counter;
