// Напиши скрипт, який реагує на зміну значення
//  input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text,
//     оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок,
//     буде змінюватися розмір тексту.

const inputRange = document.getElementById('font-size-control');

const abracaText = document.getElementById('text');
abracaText.style.fontSize = inputRange.value + "px";

inputRange.addEventListener('input', reng => abracaText.style.fontSize = reng.target.value +'px')
