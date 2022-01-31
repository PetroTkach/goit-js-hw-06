const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("ul#ingredients");
console.log(navEl);

// const navItem = document.createElement("li");
ingredients.forEach((element) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = element;
  console.log(navItemEl);
  navEl.append(navItemEl)
});
