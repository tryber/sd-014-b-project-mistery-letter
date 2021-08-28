const inputText = document.querySelector('#carta-texto');
const buttonCriarCarta = document.querySelector('#criar-carta');
const carta = document.querySelector('#carta-gerada');
const contadorDePalavras = document.querySelector('#carta-contador');
/* classes */
const classEstilo = ['newspaper', 'magazine1', 'magazine2'];
const classTamanho = ['medium', 'big', 'reallybig'];
const classRotacao = ['rotateleft', 'rotateright'];
const classInclinacao = ['skewleft', 'skewright'];

function gerarClasses() {
  const quantidade = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  const n1 = Math.floor(Math.random() * 3);
  const n2 = Math.floor(Math.random() * 2);
  if (quantidade === 2) return `${classEstilo[n1]} ${classTamanho[n1]}`;
  if (quantidade === 3) return `${classEstilo[n1]} ${classTamanho[n1]} ${classRotacao[n2]}`;
  if (quantidade === 4) {
    return `${classEstilo[n1]} ${classTamanho[n1]} ${classRotacao[n2]} ${classInclinacao[n2]}`;
  }
}

function criarCarta() {
  if (inputText.value.trim() !== '') {
    carta.innerHTML = '';
    const palavras = inputText.value.split(' ');
    contadorDePalavras.innerHTML = palavras.length;
    palavras.forEach((palavra) => {
      const span = document.createElement('span');
      span.innerHTML = palavra;
      span.className = gerarClasses();
      span.addEventListener('click', (e) => {
        e.target.className = gerarClasses();
      });
      carta.appendChild(span);
    });
  } else {
    carta.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

window.onload = () => {
  buttonCriarCarta.addEventListener('click', criarCarta);
};
