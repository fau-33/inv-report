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
