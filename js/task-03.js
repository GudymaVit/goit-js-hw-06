const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// -Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// -Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


// const list = document.querySelector('.gallery');
// 
// const element = images.map(option => {

//   const liEl = document.createElement('li');
//   const imgEl = document.createElement('img');

//   imgEl.width = 400;
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
// // console.log(imgEl);  
//   liEl.appendChild(imgEl);

//   return liEl;
// })

// list.append(...element);


// =================
const gallery = document.querySelector('.gallery');

gallery.style.cssText = `display: flex; align-items: center; justify-content: space-between; list-style: none;`;

const list = images.map(image => 
  `<li><img src=${image.url} alt=${image.alt} width = 400 height = 250></li>`
).join('');

gallery.insertAdjacentHTML('afterbegin', list)



