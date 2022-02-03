const decrementBtnEl = document.querySelector("[data-action=decrement]");
// console.log("decrementBtnEl", decrementBtnEl);
const incrementBtnEl = document.querySelector("[data-action=increment]");
// console.log("incrementBtnEl", incrementBtnEl);
const valueEl = document.querySelector("#value");
// console.log("valueEl", valueEl);

let counterValue = 0;

const onClickDecrement = event => {
  valueEl.textContent = counterValue -= 1;
}

const onClickIncrement = (event) => {
  valueEl.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener("click", onClickDecrement);
incrementBtnEl.addEventListener("click", onClickIncrement);