const projectData = {
  ecommerce: {
    title: "Application E-commerce",
    category: "Développement Web • Site E-commerce",
    description:
      "Plateforme e-commerce complète avec système de paiement intégré, gestion avancée du catalogue produits, panier intelligent avec recommandations IA, et interface d'administration complète pour la gestion des commandes et des stocks.",
    icon: "🛒",
    image:
      "assets/screencapture-meliashopp-netlify-app-2025-10-10-11_10_09.png",
    adminLogin: "admin@ecommerce.com",
    adminPassword: "Admin2025!",
    userLogin: "user@ecommerce.com",
    userPassword: "User2025!",
    tags: ["React", "Tailwind", "TypeScript"],
    dashboardUrl: "https://meliashopp.netlify.app/#/login",
    homeUrl: "https://meliashopp.netlify.app/",
  },
  fitness: {
    title: "Application Mobile Fitness",
    category: "Application Mobile • Fitness & Santé",
    description:
      "Application mobile complète de suivi d'entraînement avec plans personnalisés basés sur IA, tracking des performances en temps réel, conseils nutritionnels, et système de coaching virtuel adaptatif.",
    icon: "💪",
    image: "images/fitness.jpg",
    adminLogin: "admin@fitness.app",
    adminPassword: "AdminFit2025",
    userLogin: "user@fitness.app",
    userPassword: "UserFit2025",
    tags: ["React Native", "Firebase", "AI/ML", "TensorFlow", "Redux"],
    dashboardUrl: "#",
    homeUrl: "#",
  },
  portfolio: {
    title: "Portfolio Créatif 3D",
    category: "Site Web • Portfolio Interactif",
    description:
      "Portfolio interactif utilisant des technologies 3D avancées avec animations immersives, transitions fluides entre sections, effets de parallaxe sophistiqués, et expérience utilisateur cinématique.",
    icon: "🎨",
    image: "images/portfolio.jpg",
    adminLogin: "admin@portfolio.com",
    adminPassword: "AdminPort2025",
    userLogin: "visitor@portfolio.com",
    userPassword: "Visit2025",
    tags: ["Three.js", "GSAP", "WebGL", "React", "Blender"],
    dashboardUrl: "#",
    homeUrl: "#",
  },
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
  },
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
