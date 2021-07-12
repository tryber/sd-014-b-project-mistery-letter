function criarCarta() {
  
  const inputText = document.getElementById('carta-texto').value;
  const text = inputText + ' ';
  let palavra = '';
  let palavras = [];
  let continuarCriacao = false;

  /* verificando se so tem espaços em branco */
  for (let i = 0; i < inputText.length; i += 1) {
    if (inputText[i] != ' ') {
      continuarCriacao = true;
    }
  }

  if (inputText != null && continuarCriacao === true) {

    for (let i = 0; i < text.length; i += 1) {

      if (text[i] !== ' ') {
        palavra += text[i];
      } else {
        palavras.push('<span>' + palavra + '</span>');
        palavra = '';
      }
      
    }
  
    /* Colocando na carta */
    let paragrafo = document.getElementById('carta-gerada');
    paragrafo.innerHTML = '';
    for (let i = 0; i < palavras.length; i += 1) {
      paragrafo.innerHTML += palavras[i];
    }

  } else {

    let paragrafo = document.getElementById('carta-gerada');
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';

  }

  console.log(document.getElementById('carta-gerada'));

}

window.onload = function () {

  const botaoCriarCarta = document.getElementById('criar-carta');

  botaoCriarCarta.addEventListener('click', criarCarta);

}