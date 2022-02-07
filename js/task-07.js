const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onSizeControl);

 textEl.style.fontSize = inputEl.value + "px";

function onSizeControl() {
  textEl.style.fontSize = inputEl.value + 'px';
}