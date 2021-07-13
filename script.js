// CONSTANTS

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const letterInput = query('#carta-texto'); // input
const finalizedLetter = query('#carta-gerada'); // texto gerado
const letterButton = query('#criar-carta'); // botão
const numberCount = query('#word-number'); // h4
const styleGroup = ['newspaper', 'magazine1', 'magazine2']; // classes tipo 1
const sizeGroup = ['medium', 'big', 'reallybig']; // classes tipo 2
const rotationGroup = ['rotateleft', 'rotateright']; // classes tipo 3
const inclinationGroup = ['skewleft', 'skewright']; // classes tipo 4

// FUNCTIONS

// Counts number of words inside input
// Allocates number of words to a span inside a p and prints it
function countInput(input) {
  let count = 0;
  input.forEach(() => { count++; });
  let countSpan = document.createElement('span');
  countSpan.innerText = count;
  numberCount.innerHTML = '';
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

function stylizeSpans() {
  let spans = queryAll('.style-this');
  for (let i=0; i < spans.length; i++){
    let randomNumber3 = Math.floor(Math.random() * 3);
    let style = styleGroup[randomNumber3];
    let size = sizeGroup[randomNumber3]; 
    let randomNumber2 = Math.floor(Math.random() * 2);
    let rotation = inclinationGroup[randomNumber2];
    let inclination = rotationGroup[randomNumber2]; 
    let currentSpan = spans[i];
    currentSpan.classList.add(style, size, rotation, inclination);
  }
}

// EVENTLISTENERS

letterButton.addEventListener ('click', (event)=>{
  // Alert if nothing is typed
  let oldLetter = query('#carta-gerada');
  oldLetter.innerHTML = '';
  if (letterInput.value === '' || letterInput.value[0] === ' '){
    window.alert('Por favor, digite o conteúdo da carta.');
  } else {
  let splittedInput = letterInput.value.split(' ');
  countInput(splittedInput);
  inputInSpan(splittedInput);
  stylizeSpans();
  }
});