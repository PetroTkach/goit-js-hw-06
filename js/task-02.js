const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("ul#ingredients");

const newIngredients = ingredients.map((element) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = element;
  console.log(navItemEl);
  return navItemEl;
});
navEl.append(...newIngredients);
