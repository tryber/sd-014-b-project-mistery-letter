const carta = document.querySelector('#carta-gerada');
const botao = document.querySelector('#criar-carta');
const cartaContador = document.querySelector('#carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function criarCarta() {
  const input = document.querySelector('#carta-texto').value;
  // Source: https://www.w3schools.com/jsref/jsref_split.asp
  const splitInput = input.split(' ');
  carta.innerText = '';
  cartaContador.innerText = splitInput.length;
  if (splitInput[0] === '') {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < splitInput.length; index += 1) {
      const criaSpan = document.createElement('span');
      carta.appendChild(criaSpan);
      criaSpan.innerText = splitInput[index];
      // Source: https://www.w3schools.com/jsref/jsref_floor.asp
      // Source: https://www.w3schools.com/jsref/jsref_random.asp
      criaSpan.classList.add(style[Math.floor(Math.random() * 3)]);
      criaSpan.classList.add(size[Math.floor(Math.random() * 3)]);
      criaSpan.classList.add(rotate[Math.floor(Math.random() * 2)]);
      criaSpan.classList.add(skew[Math.floor(Math.random() * 2)]);
    }
  }
}
botao.addEventListener('click', criarCarta);
