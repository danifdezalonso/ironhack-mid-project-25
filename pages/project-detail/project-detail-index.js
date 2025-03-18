// var testeosifunciona = document.querySelector("#project-detail");
// testeosifunciona.innerHTML = "<h1>hola???</h1>"


const projectsUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

const projectsContainer = document.getElementById("project-detail");

async function loadProjects() {
  try {
    const response = await fetch(projectsUrl);

    if (!response.ok) {
      throw new Error("Error fetching projects: " + response.statusText);
    }

    const projects = await response.json();
    const limitedProjects = projects.slice(0, 1);

    limitedProjects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card-detail");

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
      projectsContainer.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
    projectsContainer.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
  }
}


//funcion para cargar los recent projects
const servicesContainer = document.getElementById("services");

async function loadProjectsRow() {
  try {
    const response = await fetch(servicesUrl);

    if (!response.ok) {
      throw new Error("Error fetching services: " + response.statusText);
    }

    const services = await response.json();

    const limitedServices = services.slice(3, 6);

    limitedServices.forEach(service => {
      const serviceCard = document.createElement("div");
      serviceCard.classList.add("service-card");

      serviceCard.innerHTML = `
        <img src="${service.image}" alt="${service.name}" />
        <div class="title-subtitle">
          <h3 class="body-intro-medium">${service.name}</h3>
          <p class="headline-regular"><strong>Description:</strong> ${service.description}</p>
        </div>
        <a href="/pages/service-detail/serviceDetail.html" class="button-secondary headline-regular">Learn more</a>
      `;

      servicesContainer.appendChild(serviceCard);
    });
  } catch (error) {
    console.error("Error loading services:", error);
    servicesContainer.innerHTML = `<p>Error loading services. Please try again later.</p>`;
  }
}

loadProjectsRow();
loadProjects();