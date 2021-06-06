

const refs = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter'),
};

let counterValue = 0;

const increment = () => {
  counterValue +=1;
  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -=1;
  document.getElementById("value").textContent = counterValue;
};

refs.sub.addEventListener("click", increment);
refs.add.addEventListener("click", decrement);

 console.log(increment);
 console.log(decrement);
 console.log(refs);