function addLetter() {
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
      span = document.createElement('span');
      span.innerText = element;
      p.appendChild(span);
    });
  }
}
const createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', addLetter);
