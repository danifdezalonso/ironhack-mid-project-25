// var testeosifunciona = document.querySelector("#project-detail");
// testeosifunciona.innerHTML = "<h1>hola???</h1>"


const projectsUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

// Contenedor donde se agregarán los proyectos
const projectsContainer = document.getElementById("project-detail");

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

    const limitedProjects = projects.slice(0, 1);


    // Recorrer los proyectos limitados y añadirlos al DOM
    limitedProjects.forEach(project => {
      // Crear un contenedor para cada proyecto
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card-detail");

      // Añadir contenido dinámico
      projectCard.innerHTML = `
        <h1 class="heading-h1">${project.name}</h1>
        <div class="subtitle-date">
            <p class="body-intro-medium" style="color:var(--neutral-medium)">${project.description}</p>
            <p class="body-intro-regular" style="color:var(--neutral-medium)">${project.completed_on}</p>
        </div>
        <div class="project-body">
            <div class="image-img">
            <img src="${project.image}" alt="${project.name}" />
        </div>
        <p class="body-intro-regular">${project.content}</p>
        </div>
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

// Contenedor donde se agregarán los servicios
const servicesContainer = document.getElementById("services");

// Función para cargar y renderizar servicios en una fila
async function loadProjectsRow() {
  try {
    // Hacer la petición a la URL
    const response = await fetch(servicesUrl);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error fetching services: " + response.statusText);
    }

    // Parsear la respuesta como JSON
    const services = await response.json();

    // Limitar a los primeros 3 servicios
    const limitedServices = services.slice(3, 6);

    // Recorrer los servicios limitados y añadirlos al DOM
    limitedServices.forEach(service => {
      // Crear un contenedor para cada servicio
      const serviceCard = document.createElement("div");
      serviceCard.classList.add("service-card");

      // Añadir contenido dinámico
      serviceCard.innerHTML = `
        <img src="${service.image}" alt="${service.name}" />
        <div class="title-subtitle">
          <h3 class="body-intro-medium">${service.name}</h3>
          <p class="headline-regular"><strong>Description:</strong> ${service.description}</p>
        </div>
        <a href="/pages/service-detail/serviceDetail.html" class="button-secondary headline-regular">Learn more</a>
      `;

      // Añadir la tarjeta al contenedor principal
      servicesContainer.appendChild(serviceCard);
    });
  } catch (error) {
    console.error("Error loading services:", error);
    servicesContainer.innerHTML = `<p>Error loading services. Please try again later.</p>`;
  }
}

// Llamar a la función para cargar los servicios en fila
loadProjectsRow();
loadProjects();