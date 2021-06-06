
const inputRef = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

inputRef.addEventListener("input", function()  {
  const size = inputRef.value;
  textSize.style.fontSize = size + "px";
}
);