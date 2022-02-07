const decrementBtnEl = document.querySelector("[data-action=decrement]");
const incrementBtnEl = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onClickDecrement = (event) => {
  valueEl.textContent = counterValue -= 1;
};

const onClickIncrement = (event) => {
  valueEl.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener("click", onClickDecrement);
incrementBtnEl.addEventListener("click", onClickIncrement);
