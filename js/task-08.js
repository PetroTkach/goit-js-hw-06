const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };
  if (email && password) {
    console.log(formData);
  } else {
    return alert("Please fill in all the fields!");
  }
  event.currentTarget.reset();
}