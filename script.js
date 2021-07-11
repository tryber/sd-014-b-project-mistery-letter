const cartaGerada = document.getElementById('carta-gerada');
function criarCarta() {
  cartaGerada.innerText = '';
  const input = document.getElementById('carta-texto').value;
  const splited = input.split(' ');
  console.log(splited);
  if (splited[0] === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < splited.length; i += 1) {
      const span = document.createElement('span');
      cartaGerada.appendChild(span);
      span.innerText = splited[i];
    }
  }
}

let buttonCriarCarta = document.getElementById('criar-carta');
buttonCriarCarta.addEventListener('click', criarCarta);
