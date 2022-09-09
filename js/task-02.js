const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredientsRef = document.querySelector("#ingredients");
const createLiArray = [];
ingredients.forEach((element) => {
  const itemRef = document.createElement("li");
  itemRef.classList = "item";
  itemRef.textContent = element;
  createLiArray.push(itemRef);
});
ingredientsRef.append(...createLiArray);
