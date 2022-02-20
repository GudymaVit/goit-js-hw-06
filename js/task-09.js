function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  
  const bodyColor = document.body.style.background = getRandomHexColor();
  colorText.textContent = bodyColor; 
})



