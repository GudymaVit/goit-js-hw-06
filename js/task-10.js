function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
console.log(createBtn);

const destroyBtn = document.querySelector('#controls button[data-destroy]');
console.log(destroyBtn);

const boxesEl = document.querySelector('#boxes');
console.log(boxesEl);

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  
  let boxSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1){
    const sizeEl = boxSize + i * 10;
    const div = document.createElement('div');
    div.style = `width: ${sizeEl}px; height: ${sizeEl}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxesEl.appendChild(fragment);
  controls.firstElementChild.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = "";
}