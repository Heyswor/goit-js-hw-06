// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

minusBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})

plusBtn.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
