const buttonCarta = document.getElementById('#criar-carta');
const inputText = document.getElementById('#carta-texto').value;
const cartaGerada = document.querySelector('#carta-gerada, span');
const contador = document.querySelector('#carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function geradordeCarta() {
  cartaGerada.innerText = '';
  const splInput = inputText.split(' ');
  contador.innerText = splInput.lenght;
  if (splInput[0] === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < splInput.length; i += 1) {
      const span = document.createElement('span');
      cartaGerada.appendChild(span);
      span.innerText = splInput[i];
      span.classList.add(style[Math.floor(Math.random() * 3)]);
      span.classList.add(size[Math.floor(Math.random() * 3)]);
      span.classList.add(rotate[Math.floor(Math.random() * 2)]);
      span.classList.add(skew[Math.floor(Math.random() * 2)]);
    }
  }
}
buttonCarta.addEventListener('click', geradordeCarta);
