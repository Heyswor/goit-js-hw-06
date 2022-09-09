function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет
// их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDivRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

input.addEventListener("input", (event) => {
 event.currentTarget.value;
});

const divArray = [];
let sum = 0;

function createBoxes(amount) {
  amount = input.value;  
  for (let i = 1; i <= amount; i += 1) {
    sum += i
    const divElement = `<div style = "background-color: ${getRandomHexColor()}; width: ${
      30 + sum * 10
    }px; height: ${30 + sum * 10}px"></div>`;
    divArray.push(divElement);
    console.log(divArray);   
  }
  boxesDivRef.innerHTML = divArray.join("");
}

function destroyBoxes() {
  boxesDivRef.innerHTML = '';
}

