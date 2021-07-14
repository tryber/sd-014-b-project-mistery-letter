// CONSTANTS

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const letterInput = query('#carta-texto'); // input
const letterButton = query('#criar-carta'); // botão
const numberCount = query('#word-number'); // h4
const styleGroup = ['newspaper', 'magazine1', 'magazine2']; // classes tipo 1
const sizeGroup = ['medium', 'big', 'reallybig']; // classes tipo 2
const rotationGroup = ['rotateleft', 'rotateright']; // classes tipo 3
const inclinationGroup = ['skewleft', 'skewright']; // classes tipo 4
console.log('TESTE COMMIT');
// FUNCTIONS

function stylizeSpans() {

  // Get all span elements (class style-this only)
  let spans = queryAll('.style-this');
  // Attribute rotation OR inclination to each span
  for (let i=0; i < spans.length; i++){
    let spanNow = spans[i];
    // Remove previously added classes
    spanNow.className = '';
    // Add original class
    spanNow.classList.add('style-this');
    let randomNumber2 = Math.floor(Math.random() * 2);
      if (i % 2 === 0){
        let rotation = rotationGroup[randomNumber2];   
        spanNow.classList.add(rotation);
      }
      else {
        let inclination = inclinationGroup[randomNumber2];
        spanNow.classList.add(inclination);
      }  
   }

  // Attribute style AND size to each span
  for (let i=0; i < spans.length; i++){
    let randomNumberStyle = Math.floor(Math.random() * 3);
    let randomNumberSize = Math.floor(Math.random() * 3);
    let style = styleGroup[randomNumberStyle];
    let size = sizeGroup[randomNumberSize]; 
    let currentSpan = spans[i];
    currentSpan.classList.add(style, size);
  }  
}

// Counts number of words inside input
// Allocates number of words to #carta-contador
function countInput(input) {
  let count = 0;
  input.forEach(() => { count++; });
  let countParagraph = query('#carta-contador');
  countParagraph.innerText = count;
  numberCount.innerHTML = '';
  numberCount.appendChild(countParagraph);
  return count
}

// Puts each word inside a span, and that span inside a paragraph
function inputInSpan(input) {
  let paragraph = query('#carta-gerada');
  for (let i = 0; i < input.length; i++){
    let createSpan = document.createElement('span');
    let spanText = document.createTextNode(`${input[i]}`);
    createSpan.appendChild(spanText);
    createSpan.classList.add('style-this');
    paragraph.appendChild(createSpan);
  }
}

// EVENTLISTENERS

// Button to generate 'letter'
letterButton.addEventListener ('click', (event)=>{
  // Alert if nothing is typed
  let oldLetter = query('#carta-gerada');
  oldLetter.innerHTML = '';
  if (letterInput.value === '' || (letterInput.value[0] === ' ')){
    oldLetter.innerText = "Por favor, digite o conteúdo da carta.";
  } else {
  let splittedInput = letterInput.value.split(' ');
  countInput(splittedInput);
  inputInSpan(splittedInput);
  stylizeSpans();
  }
});