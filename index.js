const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    navBar.style.flexDirection = "row";
  } else {
    navMenu.style.display = "block";
    navBar.style.flexDirection = "column";
  }
});

//let's do some logic here.

//import projects from "./projects.js";
//send form to db