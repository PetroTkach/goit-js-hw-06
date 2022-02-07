const navItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", navItemEl.length);

navItemEl.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
