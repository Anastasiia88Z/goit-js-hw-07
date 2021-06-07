// Напиши скрипт, который бы при потере фокуса
//  на инпуте, проверял его содержимое на правильное 
//  количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data-length.
// Если введено подходящее количество, то
//  border инпута становится зеленым, если 
//  неправильное - красным.
// Для добавления стилей, используй CSS-классы 
// valid-зеленый и invalid- красный.

const inputRef = document.querySelector("#validation-input");
const lengthRef = inputRef.dataset.length;

const onInputBlur = (event) => {
  if (event.currentTarget.value.length == lengthRef) {
    inputRef.classList.add("valid")
    inputRef.classList.remove("invalid");
  } else  if (event.currentTarget.value.length != lengthRef) {
      inputRef.classList.add("invalid");
      inputRef.classList.remove("valid")
    }
    };
  
    inputRef.addEventListener("blur", onInputBlur);
