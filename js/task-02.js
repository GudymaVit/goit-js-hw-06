// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul.ingredients.
// ================  I  ===============
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const list = document.querySelector('#ingredients');

// const addElement = (element) => {
//  let listItem = [];
//   for (const elem of element){
//     const liEl = document.createElement('li');
//     liEl.classList.add('item');
//     liEl.append(elem);
//     listItem.push(liEl);
//     // console.log(liEl);
//   }

//   return listItem;
// }
// list.append(...addElement(ingredients));

// =========================  II

const list = document.querySelector("#ingredients")

const li = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  
  liEl.classList.add('item');  
  liEl.append(ingredient);

  return liEl;
})

console.log(li);
list.append(...li)