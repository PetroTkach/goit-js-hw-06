const input = document.querySelector("#name-input");
console.log("input", input);
const output = document.querySelector("#name-output");
console.log("output", output);

const onTextForm = (event) => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", onTextForm);
