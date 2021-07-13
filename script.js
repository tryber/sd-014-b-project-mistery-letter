// CONSTANTS

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const letterInput = query('#carta-texto'); // input
const finalizedLetter = query('#carta-gerada'); // texto gerado
const letterButton = query('#criar-carta'); // botão
const numberCount = query('#word-number'); // h4

// FUNCTIONS

// Counts number of words inside input
// Allocates number of words to a span inside a p and prints it
function countInput(input) {
  let count = 0;
  input.forEach(() => { count++; });
  console.log(count);
  let countSpan = document.createElement('span');
  countSpan.innerText = count;
  numberCount.appendChild(countSpan);
  return count
}

// Puts each word inside a span, and that span inside a paragraph
function inputInSpan(input) {
  for (let i = 0; i < input.length; i++){
    let createSpan = document.createElement('span');
    let spanText = document.createTextNode(`${input[i]}`+' ');
    createSpan.appendChild(spanText);
    createSpan.classList.add('style-this');
    finalizedLetter.appendChild(createSpan);
  }
}

// Stylizes spans
function stylizeSpans() {
  let allSpans = queryAll('.style-this');
  for (let i = 0; i < input.length; i++){
    // alocar um estilo a cada span aleatoriamente
  }
}

// EVENTLISTENERS

letterButton.addEventListener ('click', (event)=>{
  // Alert if nothing is typed
  if (letterInput.value === '' || letterInput.value[0] === ' '){
    window.alert('Por favor, digite o conteúdo da carta.');
  } else {
  let splittedInput = letterInput.value.split(' ');
  countInput(splittedInput);
  inputInSpan(splittedInput);
  stylizeSpans(splittedInput);
  }
});