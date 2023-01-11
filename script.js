const paletaDeCores = document.getElementById('color-palette');

for (let i = 0; i < 4; i += 1) {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'color selected';
  if (i === 0) {
    elementDiv.className = 'color selected';
  } else {
    elementDiv.className = 'color';
  }
  elementDiv.style.height = '40px';
  elementDiv.style.width = '40px';
  elementDiv.style.border = '1px solid black';
  elementDiv.style.display = 'inline-block';
  paletaDeCores.appendChild(elementDiv);
}
const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'rgb(0, 0, 0)';
colors[1].style.backgroundColor = 'green';
colors[2].style.backgroundColor = 'orange';
colors[3].style.backgroundColor = 'blue';
const generateColors = () => {
  const corA = Math.floor(Math.random() * 256);
  const corB = Math.floor(Math.random() * 256);
  const corC = Math.floor(Math.random() * 256);
  return `rgb(${corA}, ${corB}, ${corC})`;
};
function colorir() {
  colors[1].style.backgroundColor = generateColors();
  colors[2].style.backgroundColor = generateColors();
  colors[3].style.backgroundColor = generateColors();
}
const buttao = document.getElementById('button-random-color');
buttao.addEventListener('click', colorir);

function colorChanged() {
  const corKlique = document.getElementsByClassName('selected')[0];
  const corSelecionada = corKlique.style.backgroundColor;
  window.event.target.style.backgroundColor = corSelecionada;
}

const divPai = document.getElementById('pixel-board');
divPai.style.backgroundColor = '5px solid black';
divPai.style.width = '250px';
for (let index = 0; index < 25; index += 1) {
  const divFilho = document.createElement('div');
  divFilho.style.backgroundColor = 'white';
  divFilho.style.height = '40px';
  divFilho.style.width = '40px';
  divFilho.style.border = '1px solid black';
  divFilho.className = 'pixel';
  divFilho.addEventListener('click', colorChanged);
  divPai.appendChild(divFilho);
  divFilho.style.display = 'inline-block';
  divFilho.style.margin = '3px';
}

const selectedUm = document.getElementsByClassName('selected');
const palettaDeCores = document.getElementById('color-palette');
paletaDeCores.addEventListener('click', mover);
function mover() {
  if (window.event.target.classList.contains('color')) {
    const preveSelecionada = document.getElementsByClassName('selected')[0];
    preveSelecionada.classList.remove('selected');
    window.event.target.classList.add('selected'); // anotar esse evento
  }
}
function salvarandoPaleta() {
  localStorage.setItem('colorPalette', paletaDeCores.innerHTML);
}
function savede() {
  if (localStorage.getItem('colorPalette')) {
    paletaDeCores.innerHTML = localStorage.getItem('colorPalette');
  }
}
window.addEventListener('onload', savede());
