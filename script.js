function addLetter() {
  const delLetter = document.getElementById('carta-gerada');
  while (delLetter.firstChild) { delLetter.removeChild(delLetter.firstChild); }
  const letter = document.getElementById('carta-texto').value.split(' ');
  letter.forEach((element) => {
    const span = document.createElement('span');
    span.innerText = element;
    const p = document.getElementById('carta-gerada');
    p.appendChild(span);
  });
}
const createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', addLetter);
