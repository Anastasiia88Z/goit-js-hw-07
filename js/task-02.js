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

const potatoEl = document.createElement('li');
potatoEl.textContent = "Картошка";
// console.log(potatoEl);

const mushroomsEl = document.createElement('li');
mushroomsEl.textContent = "Грибы";
// console.log(mushroomsEl);

const garlicEl = document.createElement('li');
garlicEl.textContent = "Чеснок";
// console.log(garlicEl);

const tomatoEl = document.createElement('li');
tomatoEl.textContent = "Помидоры";
// console.log(tomatoEl);

const greensEl = document.createElement('li');
greensEl.textContent = "Зелень";
// console.log(greensEl);

const condimentsEl = document.createElement('li');
condimentsEl.textContent = "Приправы";
// console.log(condimentsEl);


ingredientsEl.append(potatoEl, mushroomsEl, garlicEl, tomatoEl, greensEl, condimentsEl);
