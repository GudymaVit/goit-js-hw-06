// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// =====================//

const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action ="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action ="increment"]');

console.log(decrementBtn);
// console.log(counterValue);
console.log(incrementBtn);

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    }
};

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
    // console.log('click decrement');
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
    // console.log('click increment');
})