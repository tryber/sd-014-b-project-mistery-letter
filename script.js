let button = document.querySelector("#criar-carta");
let input = document.querySelector("#carta-texto");

function erro() {
  let paragrafo = document.querySelector("#carta-gerada");
  let valorRecebido = input.value;
  if (valorRecebido == '' || valorRecebido.trim() == '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.'
  }
}

button.addEventListener("click", erro);

function criarCarta() {
  let valorRecebido = input.value;
  let palavras = valorRecebido.split(" ");
  console.log(palavras);
  for (let palavra of palavras) {
    let span = document.createElement("span");
    span.innerHTML = palavra;
    document.querySelector("#carta-gerada").appendChild(span);
  }
}

button.addEventListener("click", criarCarta);
