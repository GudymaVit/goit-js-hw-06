const inputEl = document.querySelector('input');
const inptValueLength = inputEl.getAttribute("data-length");

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inptValueLength)) {
        inputEl.setAttribute("class", "valid");
        console.log('ok!');
    }
    else (inputEl.setAttribute("class", "invalid"),
    console.log(':('));
})