const navEl = document.querySelectorAll(".item");
console.log(`В списке ${navEl.length} категории.`);


navEl.forEach((element) => {

  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(`Количество элементов:${element.querySelectorAll("li").length}`)
});
