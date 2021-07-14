function wordCount(count) {
  const words = document.getElementById('carta-contador')
  words.innerText = count;
}
// grupo estilo
function styleGroup(number) {
  let style;
  switch (number) {
  case '1':
    style = 'newspaper';
    break;
  case '2':
    style = 'magazine1';
    break;
  case '3':
    style = 'magazine2';
    break;
  default:
    style = 'newspaper';
    break;
  }
  return style;
}
// Grupo tamanho
function sizeGroup(number) {
  switch (number) {
  case '1':
    return 'medium';
  case '2':
    return 'big';
  case '3':
    return 'reallybig';
  default:
    return 'medium';
  }
}
// Grupo rotação
function rotateGroup(number) {
  switch (number) {
  case '1':
    return 'rotateleft';
  case '2':
    return 'rotateright';
  default:
    return 'rotateleft';
  }
}
// Grupo inclinação
function slopeGroup(number) {
  switch (number) {
  case '1':
    return 'skewleft';
  case '2':
    return 'skewright';
  default:
    return 'skewleft';
  }
}
function randomClass() {
  let class1 = (Math.random() * (3 - 1) + 1).toFixed();
  class1 = styleGroup(class1);
  let class2 = (Math.random() * (3 - 1) + 1);
  class2 = sizeGroup(class2.toFixed());
  let class3 = (Math.random() * (2 - 1) + 1);
  class3 = rotateGroup(class3.toFixed());
  let class4 = (Math.random() * (2 - 1) + 1);
  class4 = slopeGroup(class4.toFixed());
  return [class1, class2, class3, class4];
}

// const getId = document.getElementById.bind();
// eslint-disable-next-line max-lines-per-function
function addLetter() {
  let count = 0;
  const delLetter = document.getElementById('carta-gerada');
  const p = document.getElementById('carta-gerada');
  let span = document.createElement('span');
  if (document.getElementById('carta-texto').value.trim() === '') {
    span = document.createElement('span');
    span.innerText = 'Por favor, digite o conteúdo da carta.';
    p.appendChild(span);
  } else {
    while (delLetter.firstChild) { delLetter.removeChild(delLetter.firstChild); }
    const letter = document.getElementById('carta-texto').value.split(' ');
    letter.forEach((element) => {
      count += 1;
      span = document.createElement('span');
      // eslint-disable-next-line prefer-spread
      span.classList.add.apply(span.classList, randomClass());
      span.innerText = element;
      p.appendChild(span);
    });
    wordCount(count);
  }
}
const createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', addLetter);
