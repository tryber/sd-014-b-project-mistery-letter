//Requisito 3
let button = document.querySelector('button');

function createSpan() {
    let input = document.querySelector('input');
    let inputValue = input.value;
    let arrayValue = inputValue.split(' ');
    let paragraph = document.querySelector('#carta-gerada');
    paragraph.innerHTML = ''
    for (let index = 0; index < arrayValue.length; index += 1) {
        let span = document.createElement('span');
        span.innerText = arrayValue[index];
        paragraph.appendChild(span);
    }
}
button.addEventListener('click', createSpan);


// Requisito 4
let input = document.querySelector('input');

function mensagemErro() {
    let paragraph = document.querySelector('#carta-gerada');

    if (input.value === '' || input.value.trim() == '') {
        paragraph.innerText = "Por favor, digite o conteúdo da carta.";
    }
}
button.addEventListener('click', mensagemErro)