// Напиши скрипт, який:

// 1.Порахує і виведе в консоль кількість
// категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// -В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// ===============  I  =====================//
// const categorElem = document.querySelector("#categories");
// console.log(`Number of categories: ${categorElem.children.length}`);

// const element = document.querySelectorAll('.item>ul')
// const category = document.querySelectorAll('.item>h2')

// console.log(`Category: ${category[0].textContent}`);
// console.log(`Elements: ${element[0].children.length}`);
// console.log(`Category: ${category[1].textContent}`);
// console.log(`Elements: ${element[1].children.length}`);
// console.log(`Category: ${category[2].textContent}`);
// console.log(`Elements: ${element[2].children.length}`);



// =====================II============================///
// const categorElem = document.querySelector("#categories");
// const titles = document.querySelectorAll('.item>h2');
// const elements = document.querySelectorAll('.item>ul');


// const getCategories = (titleIndex, elementIndex) => {
//     console.log(`Category: ${titles[titleIndex].textContent}`);
//     console.log(`Elements: ${elements[elementIndex].children.length}`);
// }
// console.log(`Number of categories: ${categorElem.children.length}`);
// getCategories(0, 0);
// getCategories(1, 1);
// getCategories(2, 2);



// ================ III ==================//

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})