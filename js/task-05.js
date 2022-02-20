const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

console.log(inputEl);
console.log(outputEl);

inputEl.addEventListener('keyup', (input) => {
    if (input.target.value.length !== 0) {
        outputEl.textContent = input.target.value;
    }
    else ( outputEl.textContent = 'Anonymous');
})
console.log(inputEl);