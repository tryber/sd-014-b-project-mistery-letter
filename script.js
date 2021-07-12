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

function addSpan() {
  if (inputSelect.value.length > 1) {
    const stringLetter = inputSelect.value;
    const objectLetter = stringLetter.split(' ');
    for (let index = 0; index < objectLetter.length; index += 1) {
      const spanCreate = document.createElement('span');
      spanCreate.innerText = objectLetter[index];
      paragraphSelect.appendChild(spanCreate);
    }
  }
}

buttonSelect.addEventListener('click', addSpan);
