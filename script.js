// função para caso o input seja vazio
const generateButton = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const generatedText = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');

// função para criar spans
function generate() {
  const arr = textInput.value.split(' ');
  counter.innerText = arr.length;
  function spanCreator() {
    generatedText.innerHTML = '';
    for (let index = 0; index <= arr.length - 1; index += 1) {
      const lineSpan = document.createElement('span');
      generatedText.appendChild(lineSpan);
      lineSpan.innerText = arr[index];
    }
  }
  spanCreator();
  if (arr[0] === '' || arr[0] === undefined) {
    generatedText.innerText = 'Por favor, digite o conteúdo da carta.';
    console.log('oi');
  }
}

generateButton.addEventListener('click', generate);

// função para style group

function styleclass(event) {
  const styleGroup = ['', 'newspaper', 'magazine1', 'magazine2'];
  const eventStyle = event.target;
  let styleNumber = Math.random() * 3 + 1;
  styleNumber = Math.round(styleNumber);
  console.log(styleNumber);
  eventStyle.classList.add(styleGroup[styleNumber]);
}

// função para size group

function sizeClass(event) {
  const sizeGroup = ['', 'medium', 'big', 'reallybig'];
  const sizeStyle = event.target;
  let sizeNumber = Math.random() * 3 + 1;
  sizeNumber = Math.round(sizeNumber);
  console.log(sizeNumber);
  sizeStyle.classList.add(sizeGroup[sizeNumber]);
}

// função para rotation group

function rotationClass(event) {
  const rotationGroup = ['', 'rotateleft', 'rotateright'];
  const rotationStyle = event.target;
  let rotationNumber = Math.random() * 3 + 1;
  rotationNumber = Math.round(rotationNumber);
  console.log(rotationNumber);
  rotationStyle.classList.add(rotationGroup[rotationNumber]);
}

// Função para inclinação

function inclinationClass(event) {
  const inclinationGroup = ['', 'skewleft', 'skewright'];
  const inclinationStyle = event.target;
  let inclinationNumber = Math.random() * 3 + 1;
  inclinationNumber = Math.round(inclinationNumber);
  console.log(inclinationNumber);
  inclinationStyle.classList.add(inclinationGroup[inclinationNumber]);
}

function styleSet(event) {
  styleclass(event);
  sizeClass(event);
  rotationClass(event);
  inclinationClass(event);
}
generatedText.addEventListener('click', styleSet);
