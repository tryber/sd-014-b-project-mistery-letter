const buttonCarta = document.getElementById('#criar-carta');
const inputText = document.getElementById('#carta-texto').value;
const cartaGerada = document.querySelector('#carta-gerada, span');
const contador = document.querySelector('#carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2', 'skewleft', 'skewright'];
const size = ['medium', 'big', 'reallybig', 'rotateleft', 'rotateright'];

function geradordeCarta() {
  cartaGerada.innerText = '';
  const splInput = inputText.split(' ');
  contador.innerText = splInput.lenght;
  cartaGerada.value = 'Por favor, digite o conteúdo da carta.';
  for (let i = 0; i < splInput.length; i += 1) {
    const span = document.createElement('div');
    cartaGerada.appendChild(span);
    span.innerText = splInput[i];
    span.classList.createElement(style[Math.floor(Math.random() * 3)]);
    span.classList.createElement(size[Math.floor(Math.random() * 3)]);
  }
}

buttonCarta.addEventListener('click', geradordeCarta);
