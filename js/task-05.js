let inputEl = document.getElementById("name-input");

let outputEl = document.getElementById("name-output");

inputEl.oninput = () => {
  if (inputEl.value === "") {
    outputEl.innerHTML = "незнакомец";
  } else {
    outputEl.innerHTML = inputEl.value;
  }
};


