
let cartaGerada = document.getElementById('carta-gerada');
function criarCarta() {
  cartaGerada.innerText = "";
  let input = document.getElementById('carta-texto').value;
  let splited = input.split(' ');
  for (let i = 0; i < splited.length; i += 1) {
    let span = document.createElement('span');
    cartaGerada.appendChild(span);
    span.innerText = splited[i];
  }


}

let buttonCriarCarta = document.getElementById('criar-carta');
buttonCriarCarta.addEventListener('click', criarCarta);
