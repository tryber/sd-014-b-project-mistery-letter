const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];
function criarCarta() {
  cartaGerada.innerText = '';
  const input = document.getElementById('carta-texto').value;
  const splited = input.split(' ');
  cartaContador.innerText = splited.length;
  if (splited[0] === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < splited.length; i += 1) {
      const span = document.createElement('span');
      cartaGerada.appendChild(span);
      span.innerText = splited[i];
      span.classList.add(style[Math.floor(Math.random() * 3)]);
      span.classList.add(size[Math.floor(Math.random() * 3)]);
      span.classList.add(rotate[Math.floor(Math.random() * 2)]);
      span.classList.add(skew[Math.floor(Math.random() * 2)]);
    }
  }
}

const buttonCriarCarta = document.getElementById('criar-carta');
buttonCriarCarta.addEventListener('click', criarCarta);
