let button = document.querySelector("#criar-carta");
let input = document.querySelector("#carta-texto");

function erro() {
  let pararafo = document.querySelector("#carta-gerada");
  let valorRecebido = input.value;
  if (valorRecebido == '' || valorRecebido.trim() == '') {
    pararafo.innerText = 'Por favor, digite o conteúdo da carta.'
  }
}

button.addEventListener("click", erro);
