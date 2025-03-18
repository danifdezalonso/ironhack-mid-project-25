// var testeosifunciona = document.querySelector("#project-detail");
// testeosifunciona.innerHTML = "<h1>hola???</h1>"

const loaddAllProjects = async () => {
  try {
    // const projectsUrl = "https://mid-project-nacho.netlify.app/api/projects";
    // const response = await fetch(projectsUrl);
    // const projects = await response.json();
    // return projects;
    return JSON.parse(JSON.stringify([
      {
        "uuid": "6",
        "name": "Project #6",
        "description": "Project #6",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/6.jpg?raw=true",
        "completed_on": "June 10, 2021",
        "related_projects": [3, 3, 3]
      },
      {
        "uuid": "5",
        "name": "Project #5",
        "description": "Project #5",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/5.jpg?raw=true",
        "completed_on": "June 10, 2021",
        "related_projects": [2, 2, 2]
      },
      {
        "uuid": "4",
        "name": "Project #4",
        "description": "Project #4",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/4.jpg?raw=true",
        "completed_on": "June 10, 2021",
        "related_projects": [1, 1, 1]
      },
      {
        "uuid": "3",
        "name": "Vectorify",
        "description": "User Experience Design",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true",
        "completed_on": "June 10, 2021",
        "related_projects": [5, 5, 5]
      },
      {
        "uuid": "2",
        "name": "Dashcoin",
        "description": "Web Development",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/2.jpg?raw=true",
        "completed_on": "June 10, 2021",
        "related_projects": [4, 4, 4]
      },
      {
        "uuid": "1",
        "name": "Simplify",
        "description": "UI Design & App Development",
        "content": "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et! Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quix duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.<br><br>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim.",
        "image": "https://github.com/ironhack-jc/mid-term-api/blob/main/1.jpg?raw=true",
        "completed_on": "June 22, 2021",
        "related_projects": [6, 6, 6]
      }
    ]));
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

const loadRelatedProjects = (projects) => {
  const relatedProjectsContainer = document.querySelector(".section-projects .projects");

  projects.forEach(project => {
    const productCard = document.createElement("div");
    productCard.classList.add("project-card");

    productCard.innerHTML = `
      <img src="${project.image}" alt="${project.name}" />
      <div class="title-subtitle">
        <h3 class="body-intro-medium">${project.name}</h3>
        <p class="headline-regular"><strong>Description:</strong> ${project.description}</p>
      </div>
      <a href="/pages/project-detail/projectDetail.html?projectId=${project.uuid}" class="button-secondary headline-regular">Learn more</a>
    `;

   relatedProjectsContainer.appendChild(productCard);
  });
}

window.onload = async () => {
  const projectsContainer = document.getElementById("project-detail");

  const projectID = new URLSearchParams(window.location.search).get("projectId") || 1;
  const allProjects = await loaddAllProjects();
  const actualProject = allProjects.find(project => parseInt(project.uuid) === parseInt(projectID));

  if (!actualProject) {
    document.getElementById("project-detail").innerHTML = "<h1>Project not found</h1>";
    return;
  }
  console.log(actualProject);

  // Actualiza el HTML con la info del projecto
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card-detail");

  projectCard.innerHTML = `
    <h1 class="heading-h1">${actualProject.name}</h1>
    <div class="subtitle-date">
        <p class="body-intro-medium" style="color:var(--neutral-medium)">${actualProject.description}</p>
        <p class="body-intro-regular" style="color:var(--neutral-medium)">${actualProject.completed_on}</p>
    </div>
    <div class="project-body">
        <div class="image-img">
        <img src="${actualProject.image}" alt="${actualProject.name}" />
    </div>
    <p class="body-intro-regular">${actualProject.content}</p>
    </div>
  `;
  projectsContainer.appendChild(projectCard);

  const relatedProjects = actualProject.related_projects.map(relatedProjectId => allProjects.find(project => parseInt(project.uuid) === parseInt(relatedProjectId)));
  loadRelatedProjects(relatedProjects);
}


// const projectsUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

// const projectsContainer = document.getElementById("project-detail");

// async function loadProjects() {
//   try {
//     const response = await fetch(projectsUrl);

//     if (!response.ok) {
//       throw new Error("Error fetching projects: " + response.statusText);
//     }

//     const projects = await response.json();
//     const limitedProjects = projects.slice(0, 1);

//     limitedProjects.forEach(project => {
//       const projectCard = document.createElement("div");
//       projectCard.classList.add("project-card-detail");

//       projectCard.innerHTML = `
//         <h1 class="heading-h1">${project.name}</h1>
//         <div class="subtitle-date">
//             <p class="body-intro-medium" style="color:var(--neutral-medium)">${project.description}</p>
//             <p class="body-intro-regular" style="color:var(--neutral-medium)">${project.completed_on}</p>
//         </div>
//         <div class="project-body">
//             <div class="image-img">
//             <img src="${project.image}" alt="${project.name}" />
//         </div>
//         <p class="body-intro-regular">${project.content}</p>
//         </div>
//       `;
//       projectsContainer.appendChild(projectCard);
//     });
//   } catch (error) {
//     console.error("Error loading projects:", error);
//     projectsContainer.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
//   }
// }


// //funcion para cargar los recent projects
// const servicesContainer = document.getElementById("services");

// async function loadProjectsRow() {
//   try {
//     const response = await fetch(servicesUrl);

//     if (!response.ok) {
//       throw new Error("Error fetching services: " + response.statusText);
//     }

//     const services = await response.json();

//     const limitedServices = services.slice(3, 6);

//     limitedServices.forEach(service => {
//       const serviceCard = document.createElement("div");
//       serviceCard.classList.add("service-card");

//       serviceCard.innerHTML = `
//         <img src="${service.image}" alt="${service.name}" />
//         <div class="title-subtitle">
//           <h3 class="body-intro-medium">${service.name}</h3>
//           <p class="headline-regular"><strong>Description:</strong> ${service.description}</p>
//         </div>
//         <a href="/pages/project-detail/projectDetail.html?projectId=${service.uuid}" class="button-secondary headline-regular">Learn more</a>
//       `;

//       servicesContainer.appendChild(serviceCard);
//     });
//   } catch (error) {
//     console.error("Error loading services:", error);
//     servicesContainer.innerHTML = `<p>Error loading services. Please try again later.</p>`;
//   }
// }

// loadProjectsRow();
// loadProjects();