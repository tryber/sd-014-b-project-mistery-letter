const headerSelect = document.querySelector('#header');
const selectionSelect = document.querySelector('#content');

// Cria o input na página HTML;
const inputCreate = document.createElement('input');
inputCreate.setAttribute('id', 'carta-texto');
headerSelect.appendChild(inputCreate);
const inputSelect = document.querySelector('#carta-texto');

// Cria o paragráfo na página HTML;
const paragraphCreate = document.createElement('p');
paragraphCreate.setAttribute('id', 'carta-gerada');
selectionSelect.appendChild(paragraphCreate);
const paragraphSelect = document.querySelector('#carta-gerada');

// Adiciona o botão gerar carta ao lado do input na página HTML;
const buttonInputCreate = document.createElement('button');
buttonInputCreate.setAttribute('id', 'criar-carta');
buttonInputCreate.innerText = 'Gerar Carta';
headerSelect.appendChild(buttonInputCreate);
const buttonSelect = document.querySelector('#criar-carta');

/* Adicona evento ao clicar no botão gerar carta;
# Cada palavra deve aparecer dentro de uma tag `span`.
# As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.
*/
function adicionaSpan() {
  const stringLetter = inputSelect.value;
  const objectLetter = stringLetter.split(' ');
  for (let index = 0; index < objectLetter.length; index += 1) {
    const spanCreate = document.createElement('span');
    spanCreate.innerText = objectLetter[index];
    spanCreate.classList = generationClass();
    paragraphSelect.appendChild(spanCreate);
  }
}

function addSpan() {
  if (inputSelect.value.length > 1 && paragraphSelect.children.length === 0) {
    adicionaSpan();
  } else {
    paragraphSelect.innerText = '';
    adicionaSpan();
  }
}

function generationClass() {
  const number1 = Math.floor(Math.random() * 3);
  const number2 = Math.floor(Math.random() * 2);
  let classString = '';
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  classString += ' ' + estilo[number1];
  classString += ' ' + tamanho[number1];
  const rotacao = ['rotateleft', 'rotateright'];
  const inclinacao = ['skewleft', 'skewright'];
  classString += ' ' + rotacao[number2];
  classString += ' ' + inclinacao[number2];
  return classString.trim();
}

console.log(generationClass());
// const spanSelect = document.querySelectorAll('span');

// function addClass() {
//   for (let index = 0; index < spanSelect.length; index += 1) {
//     if (spanSelect.length > 0) {
//       const newClass = generationClass();
//       const span = spanSelect[index];
//       span.classList = newClass;
//     }
//   }
// }

buttonSelect.addEventListener('click', addSpan);
// buttonSelect.addEventListener('click', addClass);
