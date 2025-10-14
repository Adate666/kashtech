const projectData = {
  ecommerce: {
    title: "Application E-commerce",
    category: "Développement Web • Site E-commerce",
    description:
      "Plateforme e-commerce complète avec système de paiement intégré, gestion avancée du catalogue produits, interface d'administration complète pour la gestion des commandes et des stocks.",
    icon: "🛒",
    image: "assets/melia0.png",
    adminLogin: "admin@meliashop.com",
    adminPassword: "admin",
    userLogin: "alice.m@example.com",
    userPassword: "password123!",
    tags: ["React", "Tailwind", "TypeScript"],
    dashboardUrl: "https://meliashopp.netlify.app/#/login",
    homeUrl: "https://meliashopp.netlify.app/",
  },
  fitness: {
    title: "Application pour fast food ou mini restaurant",
    category: "Développement Web • Restauration",
    description:
      "plateforme de commande en ligne pour fast food ou mini restaurant, avec menu interactif. Accédez aux dashboards administrateur et utilisateur pour gérer les commandes et suivre les livraisons.",
    icon: "💪",
    image: "assets/miam0.png",
    adminLogin: "admin@miam.city",
    adminPassword: "admin",
    userLogin: "client@test.com",
    userPassword: "password",
    tags: ["React", "Tailwind", "TypeScript"],
    dashboardUrl: "https://miamcity.netlify.app/#/login",
    homeUrl: "https://miamcity.netlify.app/",
  },
  portfolio: {
    title: "Application d'investissement en ligne",
    category: "Site Web • investissement",
    description:
      "Site d'investissement en ligne avec dashboard admin et utilisateurs. Accédez aux tableaux de bord pour gérer les investissements, suivre les performances et analyser les données financières en temps réel.",
    icon: "🎨",
    image: "assets/quantum0.png",
    adminLogin: "xanip23786@gta5hx.com",
    adminPassword: "Admin123",
    userLogin: "canas45758@lorkex.com",
    userPassword: "User1234",
    tags: ["React", "Tailwind", "TypeScript", "Supabase"],
    dashboardUrl: "https://quantumleapinvest.netlify.app/#/login",
    homeUrl: "https://quantumleapinvest.netlify.app/",
  } /* 
  chatbot: {
    title: "Chatbot Intelligence Artificielle",
    category: "Intelligence Artificielle • Support Client",
    description:
      "Assistant conversationnel intelligent capable de comprendre le contexte, gérer des conversations complexes, s'intégrer avec les systèmes CRM, et apprendre continuellement des interactions pour améliorer ses réponses.",
    icon: "🤖",
    image: "images/chatbot.jpg",
    adminLogin: "admin@chatbot.ai",
    adminPassword: "AdminAI2025",
    userLogin: "user@chatbot.ai",
    userPassword: "UserAI2025",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI", "PostgreSQL"],
    dashboardUrl: "#",
    homeUrl: "#",
  },
  dashboard: {
    title: "Dashboard Analytics Pro",
    category: "Application Web • Business Intelligence",
    description:
      "Tableau de bord analytique professionnel avec visualisations de données en temps réel, rapports personnalisables, export multi-formats, et système d'alertes intelligent pour suivre vos KPIs critiques.",
    icon: "📊",
    image: "images/dashboard.jpg",
    adminLogin: "admin@dashboard.pro",
    adminPassword: "AdminDash2025",
    userLogin: "analyst@dashboard.pro",
    userPassword: "UserDash2025",
    tags: ["Vue.js", "D3.js", "PostgreSQL", "WebSocket", "Node.js"],
    dashboardUrl: "#",
    homeUrl: "#",
  }, */,
};

function openModal(projectId) {
  const project = projectData[projectId];
  const modal = document.getElementById("modal");

  // Gestion de l'image ou de l'icône
  const modalImage = document.getElementById("modalImage");
  modalImage.innerHTML = "";

  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    img.onerror = function () {
      modalImage.innerHTML = `<span class="modal-image-emoji">${project.icon}</span>`;
    };
    modalImage.appendChild(img);
  } else {
    modalImage.innerHTML = `<span class="modal-image-emoji">${project.icon}</span>`;
  }

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalDescription").textContent = project.description;

  // Credentials Admin
  document.getElementById("modalAdminLogin").textContent = project.adminLogin;
  document.getElementById("modalAdminPassword").textContent =
    project.adminPassword;

  // Credentials Utilisateur
  document.getElementById("modalUserLogin").textContent = project.userLogin;
  document.getElementById("modalUserPassword").textContent =
    project.userPassword;

  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "tech-tag";
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  });

  document.getElementById("dashboardBtn").href = project.dashboardUrl;
  document.getElementById("homeBtn").href = project.homeUrl;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnOverlay(event) {
  if (event.target.id === "modal") {
    closeModal();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnOverlay(event) {
  if (event.target.id === "modal") {
    closeModal();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
