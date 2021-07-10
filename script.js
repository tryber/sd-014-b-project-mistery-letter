const input = document.querySelector('#carta-texto');
const carta = document.querySelector('#carta-gerada');
const botao = document.querySelector('#criar-carta');

// Requisito #3


// Requisito #4

// Requisito #5
function checkTexto() {
  if (input.value === '' || input.value === ' ') {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}
checkTexto();
