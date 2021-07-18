let button = document.querySelector("#criar-carta");
let input = document.querySelector("#carta-texto");
let styles = ['newspaper','magazine1','magazine2','medium','big','reallybig','rotateleft','rotateright', 'skewleft','skewright'];
let lengthStyles = styles.length;

function erro() {
  let paragrafo = document.querySelector("#carta-gerada");
  let valorRecebido = input.value;
  if (valorRecebido == '' || valorRecebido.trim() == '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.'
  }
}

button.addEventListener("click", erro);

function criarCarta() {
  document.querySelector("#carta-gerada").innerHTML = '';
  let valorRecebido = input.value;
  let palavras = valorRecebido.split(" ");
  console.log(palavras);
  for (let palavra of palavras) {
    let span = document.createElement("span");
    let randomIndex = Math.floor(Math.random() * lengthStyles) // (max - min) + min = lengthStyles - 0 + 0 = lengthStyles;
    span.innerHTML = palavra;
    span.classList.add(styles[randomIndex]);
    document.querySelector("#carta-gerada").appendChild(span);
  }
}

button.addEventListener("click", criarCarta);



