const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  return itemEl;
}
);


ingredientsEl.append(...elements);
