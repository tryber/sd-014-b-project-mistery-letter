const headerSelect = document.querySelector('#header');
const selectionSelect = document.querySelector('#content');

const inputCreate = document.createElement('input');
inputCreate.setAttribute('id', 'carta-texto');
headerSelect.appendChild(inputCreate);

const paragraphCreate = document.createElement('p');
paragraphCreate.setAttribute('id', 'carta-gerada');
selectionSelect.appendChild(paragraphCreate);
