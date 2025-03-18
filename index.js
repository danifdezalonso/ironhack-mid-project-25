const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const navBarButton = document.querySelector(".cta-button");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    navBar.style.flexDirection = "row";
    navBarButton.style.display ="none";

  } else {
    navMenu.style.display = "block";
    navBar.style.flexDirection = "column";
    navBarButton.style.display ="block";
  }
});

//let's do some logic here.
//import projects from "./projects.js";
//send form to db
// enviar los datos del formulario a la base de datos y enseñar un alert o un modal

const projectsUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

// Contenedor donde se agregarán los proyectos
const projectsContainer = document.getElementById("projects");

// Función para cargar y renderizar proyectos
async function loadProjects() {
  try {
    // Hacer la petición a la URL
    const response = await fetch(projectsUrl);


    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error fetching projects: " + response.statusText);
    }

    // Parsear la respuesta como JSON
    const projects = await response.json();

    // Limitar a los primeros 3 proyectos
    const reversedProjects = projects.reverse();
    const limitedProjects = reversedProjects.slice(0, 3);

    // Recorrer los proyectos limitados y añadirlos al DOM
    limitedProjects.forEach(project => {
      // Crear un contenedor para cada proyecto
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      // Añadir contenido dinámico
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.name}" />
        <div class="title-subtitle">
          <h3 class="body-intro-medium">${project.name}</h3>
          <p class="headline-regular"><strong>Description:</strong> ${project.description}</p>
        </div>
        <a href="/pages/project-detail/projectDetail.html?projectId=${project.uuid}" class="button-secondary headline-regular">Learn more</a>
      `;

      // Añadir la tarjeta al contenedor principal
      projectsContainer.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
    projectsContainer.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
  }
}

// Llamar a la función para cargar los proyectos
loadProjects();





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
// URL del API