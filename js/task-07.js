const inputEl = document.querySelector("#font-size-control");
// console.log("inputEl", inputEl);
const textEl = document.querySelector("#text");
// console.log("textEl", textEl);

inputEl.addEventListener("input", onSizeControl);

function onSizeControl() {
  textEl.style.fontSize = inputEl.value + 'px';
}