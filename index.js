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
// enviar los datos del formulario a la base de datos y enseñar un alert o un modal

//hacer presentacion personal
//que he hecho en el proyecto
//ramas de github
// que he aprendido
// que me gustaria aprender
// que me gustaria hacer
// que me gustaria mejorar
// demo desktop + mobile visual
// funcionalidade de JS
// añadir el readme