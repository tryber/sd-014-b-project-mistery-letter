const cartaTexto = document.querySelector("#carta-texto");
const cartaGerada = document.querySelector("#carta-gerada");
const criarCarta = document.querySelector("#criar-carta");

function getLetterText() {
  let getText = cartaTexto.value;
  let getTextArray = getText.split(" ");
  let paragrafo = document.querySelector("#carta-gerada")
  paragrafo.innerHTML = '';
  for (let index of getTextArray) {
    let spanText = document.createElement('span');
    spanText.innerHTML = index;
    cartaGerada.appendChild(spanText);
  }
}

criarCarta.addEventListener('click', getLetterText);

// Fonte trim(): https://www.w3schools.com/jsref/jsref_trim_string.asp /
function lookEmptySpaces() {
  let getText = cartaTexto.value;
  let emptyLetter = "Por favor, digite o conteúdo da carta.";
  if (getText === '' || getText.trim() === '') {
    cartaGerada.innerText = emptyLetter;
  }
}

criarCarta.addEventListener('click', lookEmptySpaces)
