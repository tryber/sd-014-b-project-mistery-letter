const input = document.getElementById('carta-texto'); // [3]
const createLetterButton = document.getElementById('criar-carta'); // [3]
const generatedLetter = document.getElementById('carta-gerada'); // [3]
const cartaContador = document.getElementById('carta-contador'); // 18
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// 18
function contadorDeFrases() {
  const todosSpan = generatedLetter.children;
  const quantidadeSpan = todosSpan.length;
  cartaContador.innerText = quantidadeSpan;
}

// [16]
function sorteia(numero) {
  return Math.floor(Math.random() * numero);
}

function listaClasses() {
  const A = sorteia(3);
  const B = sorteia(3);
  const C = sorteia(2);
  const D = sorteia(2);

  const classes = [estilo[A], tamanho[B], rotacao[C], inclinacao[D]];
  // classes.s;
  return classes;
}

function adicionaClasse(elemento) {
  const classes = listaClasses();
  const primeiraClasse = sorteia(4);
  let segundaClasse = sorteia(4);
  while (segundaClasse === primeiraClasse) {
    segundaClasse = sorteia(4);
  }
  elemento.classList.add(classes[primeiraClasse]);
  elemento.classList.add(classes[segundaClasse]);
  console.log(listaClasses());
}

// [3]
function limpaSpan() {
  generatedLetter.innerHTML = '';
}
function createLetter() {
  let values = input.value.split(/\s+/);
  if (input.value === '' || input.value[0] === ' ') {
    values = 'Por favor, digite o conteúdo da carta.';
  }
  limpaSpan();
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] !== '') {
      const span = document.createElement('span');
      span.innerText = values[index];
      adicionaClasse(span);
      generatedLetter.appendChild(span);
      contadorDeFrases();
    }
  }
}
createLetterButton.addEventListener('click', createLetter);
