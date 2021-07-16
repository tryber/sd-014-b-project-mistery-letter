const cartaTexto = document.querySelector("#carta-texto");
const cartaGerada = document.querySelector("#carta-gerada");
const criarCarta = document.querySelector("#criar-carta");

// Fonte trim(): https://www.w3schools.com/jsref/jsref_trim_string.asp /
function lookEmptySpaces() {
  let getText = cartaTexto.value;
  let emptyLetter = "Por favor, digite o conteúdo da carta.";
  if (getText === '') {
    getText.trim();
    cartaGerada.innerText = emptyLetter;
  } else {
    cartaGerada.innerText = getText;
  }
}

criarCarta.addEventListener('click', lookEmptySpaces);
