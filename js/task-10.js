const createEl = document.querySelector("[data-create]");
// console.log("createEl", createEl)
const destroyEl = document.querySelector("[data-destroy]");
// console.log("destroyEl", destroyEl)
const boxesEl = document.querySelector("#boxes");
// console.log("boxesEl", boxesEl)
const inputEL = document.querySelector("input");
// console.log("inputEL", inputEL)
console.log(createEl);
createEl.addEventListener("click", onGetAmount);
destroyEl.addEventListener("click", onDestroyBoxes);

let basicSize = 30;

function onGetAmount(elem) {
  const amount = inputEL.value;
  console.log(inputEL);
  onCreateBoxes(amount);
}

function onCreateBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    console.log("я працюю");
    const divItem = document.createElement("div");
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.width = `${basicSize}px`;
    divItem.style.height = `${basicSize}px`;
    basicSize += 10;
    console.log(divItem);
    boxesEl.appendChild(divItem);
  }
}

function onDestroyBoxes() {
  boxesEl.innerHTML = "";
  basicSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}