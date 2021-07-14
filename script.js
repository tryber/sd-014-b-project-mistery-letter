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

    document.getElementById('carta-contador').innerHTML = palavras.length;

    let botaoSpans = document.querySelectorAll('span');
    for (let i = 0; i < botaoSpans.length; i += 1) {
      botaoSpans[i].addEventListener('click', mudarEstilo);
    }
    
    gerarClassAleatoria(document.querySelectorAll('span'));

  } else {

    let paragrafo = document.getElementById('carta-gerada');
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';

  }

}

function mudarEstilo(event) {
  
  let classEstilo = ['newspaper', 'magazine1', 'magazine2'];
  let classTamanho = ['medium', 'big', 'reallybig'];
  let classRotacao = ['rotateleft', 'rotateright'];
  let classInclinacao = ['skewleft', 'skewright'];

  let numberAleatorio = parseInt(Math.random() * 3) + 2;

  event.target.className = '';

  if (numberAleatorio === 2) {
    
      event.target.classList.add(classEstilo[parseInt(Math.random() * 3)]);
      event.target.classList.add(classTamanho[parseInt(Math.random() * 3)]);
    
  } else if (numberAleatorio === 3) {

    event.target.classList.add(classEstilo[parseInt(Math.random() * 3)]);
    event.target.classList.add(classTamanho[parseInt(Math.random() * 3)]);
    event.target.classList.add(classRotacao[parseInt(Math.random() * 2)]);

  } else {

    event.target.classList.add(classEstilo[parseInt(Math.random() * 3)]);
    event.target.classList.add(classTamanho[parseInt(Math.random() * 3)]);
    event.target.classList.add(classRotacao[parseInt(Math.random() * 2)]);
    event.target.classList.add(classInclinacao[parseInt(Math.random() * 2)]);

  }

}

function gerarClassAleatoria(spans) {

  let classEstilo = ['newspaper', 'magazine1', 'magazine2'];
  let classTamanho = ['medium', 'big', 'reallybig'];
  let classRotacao = ['rotateleft', 'rotateright'];
  let classInclinacao = ['skewleft', 'skewright'];

  for (let i = 0; i < spans.length; i += 1) {

    let numberAleatorio = parseInt(Math.random() * 3) + 2;

    if (numberAleatorio === 2) {
    
      spans[i].classList.add(classEstilo[parseInt(Math.random() * 3)]);
      spans[i].classList.add(classTamanho[parseInt(Math.random() * 3)]);
    
    } else if (numberAleatorio === 3) {

      spans[i].classList.add(classEstilo[parseInt(Math.random() * 3)]);
      spans[i].classList.add(classTamanho[parseInt(Math.random() * 3)]);
      spans[i].classList.add(classRotacao[parseInt(Math.random() * 2)]);

    } else {

      spans[i].classList.add(classEstilo[parseInt(Math.random() * 3)]);
      spans[i].classList.add(classTamanho[parseInt(Math.random() * 3)]);
      spans[i].classList.add(classRotacao[parseInt(Math.random() * 2)]);
      spans[i].classList.add(classInclinacao[parseInt(Math.random() * 2)]);

    }
    
  }

}

window.onload = function () {

  const botaoCriarCarta = document.getElementById('criar-carta');

  botaoCriarCarta.addEventListener('click', criarCarta);

}