const navItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", navItemEl.length);

// const navTitleEl1 = document.querySelectorAll("h2");
// console.log("Category:", navTitleEl1[0].textContent);

navItemEl.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
