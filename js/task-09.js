const bodyEl = document.querySelector("body");
// console.log("bodyEl", bodyEl);
const btnEl = document.querySelector(".change-color");
// console.log("btnEl", btnEl);
const spanEl = document.querySelector(".color");
// console.log("spanEl", spanEl);

btnEl.addEventListener("click", onBodyColor);

function onBodyColor(elem) {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
