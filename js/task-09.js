function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике 
// на button.change-color и выводит значение цвета в span.color.

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector('body')
const colorSpanRef = document.querySelector(".color");

function getBackgroundColor(event) {
  colorSpanRef.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}


changeColorBtn.addEventListener("click", getBackgroundColor);

