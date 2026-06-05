const portfolioData = {
<<<<<<< HEAD
  name: "Ujwal Umesh Dangi",
  shortName: "Ujwal Dangi",
  role: "Senior Software Engineer",
  email: "ujwaldangi335789@gmail.com",
  phone: "+91 7738605499",
  github: "https://github.com/ujwaldangij",
  linkedin: "https://www.linkedin.com/in/ujwal-dangi-38b33319b/",
  resume: "resume/Ujwal_Dangi_Resume.pdf",
  experienceStartDate: "2021-08-16",

  heroSummary:
    "I build secure, scalable and production-ready backend systems using Java, Spring Boot, Microservices, Spring Security, Redis, SQL and asynchronous processing patterns.",

  focus: [
    "Java Spring Boot",
    "Microservices Architecture",
    "Spring Security + OAuth2/JWT",
    "Redis Caching",
    "AWS SQS + Async Jobs",
    "SQL Optimization",
    "Distributed Backend Systems",
    "Production Debugging"
  ],

  heroTags: [
    "Java", "Spring Boot", "Microservices", "Spring Security", "OAuth2/JWT", "Redis", "SQL", "AWS SQS", "System Design"
  ],

  stats: [
    { type: "experience", suffix: "+", label: "Years Engineering" },
    { value: 400, suffix: "+", label: "Backend APIs" },
    { value: 90, suffix: "+", label: "Enterprise Integrations" },
    { value: 8, suffix: "+", label: "Core Backend Domains" }
  ],

  metrics: [
    { value: "400+", label: "APIs owned" },
    { value: "90+", label: "Integrations" },
    { value: "Java", label: "Primary stack" },
    { value: "24/7", label: "Production mindset" }
  ],

  about: {
    primary:
      "Senior Software Engineer with 5 years of backend engineering experience across enterprise systems, secure API platforms, integration workflows, reporting modules, file-processing systems and high-load production support.",
    secondary:
      "My current focus is Java Spring Boot backend engineering: clean service layers, REST API contracts, Spring Security, OAuth2/JWT, JPA/Hibernate, Redis caching, queue-based processing, SQL-heavy workflows, observability and system design for maintainable enterprise products.",
    chips: [
      "Backend Ownership", "Secure APIs", "Microservices", "OAuth2/JWT", "High Load Systems", "Production Debugging", "System Design", "Modernization"
    ]
  },

  skills: [
    { icon: "☕", title: "Java Backend", text: "Java 8+, OOP, collections, streams, exception handling, clean services and reusable backend modules." },
    { icon: "🍃", title: "Spring Boot", text: "Spring MVC, REST APIs, controller-service-repository layers, DTOs, validation and global exceptions." },
    { icon: "🔐", title: "Security", text: "Spring Security concepts, OAuth2/JWT, RBAC, token validation, rate limiting and secure API flows." },
    { icon: "🧩", title: "Microservices", text: "Service-oriented modules, clean API contracts, async communication, retries and maintainable boundaries." },
    { icon: "🗄️", title: "Database", text: "Spring Data JPA, Hibernate, SQL, stored procedures, joins, transactions and query optimization." },
    { icon: "⚡", title: "Performance", text: "Redis caching, queue processing, AWS SQS, async jobs, non-blocking flows and high-load support." },
    { icon: "📈", title: "Observability", text: "Structured logs, API tracing, Swagger/OpenAPI, Postman, monitoring and production debugging." },
    { icon: "🏗️", title: "System Design", text: "Scalable backend design, audit logs, reconciliation-style reports, failure handling and reliability thinking." }
  ],

  experience: [
    {
      period: "Jun 2022 - Present",
      title: "Senior Software Engineer",
      company: "TechExcel Software Solutions Pvt. Ltd. • Mumbai",
      bullets: [
        "Own backend API development, enterprise integrations, high-load workflows and production support for business-critical backend systems.",
        "Delivered and maintained 400+ REST APIs across 90+ enterprise integrations involving onboarding, authentication, authorization, reporting, file processing, admin operations and audit-friendly workflows.",
        "Designed clean backend modules using Java Spring Boot style architecture: controller-service-repository separation, DTO contracts, validation, transactional service logic, standardized responses and global exception handling.",
        "Worked on secure API flows using Spring Security concepts, OAuth2/JWT-style authentication, role-based access control, token validation, IP restrictions, rate limiting and structured API logs.",
        "Implemented scalable backend processing with Redis caching, queue-based workflows, AWS SQS, retry handling, async/background jobs and non-blocking response patterns.",
        "Handled database-heavy modules with SQL queries, stored procedures, joins, indexing awareness, transaction handling, reporting data models and reconciliation-style outputs.",
        "Debugged production issues using logs, request lifecycle tracing, slow query analysis, exception tracking, deployment checks and performance troubleshooting.",
        "Contributed to backend modernization by converting legacy enterprise workflows into clean, service-oriented Java Spring Boot backend patterns."
      ]
    },
    {
      period: "Aug 2021 - May 2022",
      title: "Junior Web Developer",
      company: "Exicon Group • Mumbai",
      bullets: [
        "Built healthcare and pharma web platforms for live doctor sessions, product branding, CMS workflows and online engagement modules.",
        "Developed admin panels, reporting flows, billing modules, user interaction features and backend workflow integrations.",
        "Integrated Zoom and Vimeo streaming workflows through APIs and supported stable event delivery for healthcare audiences."
      ]
    }
  ],

  projects: [
    {
      title: "Enterprise Backend API Platform",
      description:
        "Large-scale backend ecosystem with 400+ APIs, 90+ integrations, secure access, reporting, file processing, audit logs, queue processing and production monitoring.",
      tech: ["Java Spring Boot", "REST APIs", "Security", "Redis", "SQL", "AWS SQS"]
    },
    {
      title: "Backend Modernization Program",
      description:
        "Modernized enterprise workflows into service-oriented backend modules with DTOs, validation, transactional services, repository layers and standardized API responses.",
      tech: ["Spring MVC", "JPA/Hibernate", "DTOs", "Transactions", "Exception Handling"]
    },
    {
      title: "Broker Risk & Market Data Processing",
      description:
        "Backend workflows for market data imports, risk dashboards, reports, portfolio views, scheduled processing, exception handling and operational visibility.",
      tech: ["Backend APIs", "SQL", "Batch Jobs", "Reports", "Dashboards"]
    },
    {
      title: "Smart Cache & Queue Framework",
      description:
        "Reusable backend patterns for Redis caching, queue-backed processing, retry workflows, async jobs, structured logs and high-load reliability.",
      tech: ["Redis", "Queues", "AWS SQS", "Retries", "Async Processing"]
    },
    {
      title: "Notification & Chatbot Integration",
      description:
        "Asynchronous notification flows, webhook-style request handling, background processing, retry visibility and enterprise communication workflows.",
      tech: ["Webhooks", "Queues", "SQS", "API Integration", "Logs"]
    },
    {
      title: "Healthcare Workflow Platform",
      description:
        "Healthcare backend modules covering appointments, reports, reminders, admin operations, user roles, data workflows and integration support.",
      tech: ["REST APIs", "Admin Modules", "Reports", "RBAC", "Workflow Design"]
    }
  ],

  process: [
    { step: "01", title: "Design API Contracts", text: "Convert business workflows into clean request/response contracts, status flows and validation rules." },
    { step: "02", title: "Build Service Layer", text: "Keep controllers thin, move business logic into services and use repositories for clean persistence." },
    { step: "03", title: "Secure + Scale", text: "Add auth, authorization, rate limits, caching, queues, retries and failure-safe processing." },
    { step: "04", title: "Debug Production", text: "Use logs, traces, slow-query checks and monitoring to find root cause quickly and safely." }
  ],

  contactText:
    "Open for Senior Software Engineer / Java Backend Engineer roles focused on Spring Boot, microservices, secure APIs and scalable backend systems."
=======
  name: "UJWAL UMESH DANGI",
  role: "Senior PHP Laravel Developer | API Architect",
  email: "ujwaldangi335789@gmail.com",
  github: "https://github.com/ujwaldangij",
  linkedin: "https://in.linkedin.com/in/ujwal-dangi-38b33319b",

  // Experience is now dynamic.
  // Change this date to your actual career start date.
  // Website will automatically calculate live years every time it opens.
  experienceStartDate: "2021-08-16",

  heroTags: ["Laravel", "API Architecture", "Fintech", "Redis", "AWS SQS", "SQL Optimization"],
  typingRoles: ["Laravel APIs", "Fintech Integrations", "High Load Backends", "Redis Caching", "AWS SQS Queues", "Secure API Auth"],
  stats: [
    { key: "experience", suffix: "+", label: "Years Experience" },
    { value: 400, suffix: "+", label: "APIs Delivered" },
    { value: 90, suffix: "+", label: "Clients Supported" },
    { value: 1000, suffix: "+", label: "Requests / Sec" }
  ],
  chips: ["Secure APIs", "Queue Workers", "Payment Integrations", "Enterprise Backend", "High Load Systems"],
  skills: [
    { icon: "⚙️", title: "Laravel / PHP", text: "Clean backend modules, service layers, queues, events and maintainable architecture." },
    { icon: "🔐", title: "API Security", text: "JWT, Sanctum, token lifecycle, RBAC and secure third-party integrations." },
    { icon: "⚡", title: "Performance", text: "Redis caching, SQL optimization, indexing and response time improvements." },
    { icon: "☁️", title: "Cloud Queues", text: "AWS SQS, background jobs, retry logic and scalable async workflows." },
    { icon: "💳", title: "Fintech APIs", text: "Payment gateway integrations, risk systems and enterprise transaction flows." },
    { icon: "🧠", title: "System Design", text: "Reliable API contracts, clean data flow, logging and failure handling." },
    { icon: "🗄️", title: "Databases", text: "MySQL schema design, query tuning, reporting and data-heavy operations." },
    { icon: "🚀", title: "Delivery", text: "Production-ready code, debugging, release support and ownership mindset." }
  ],
  experience: [
    {
      period: "Current / Senior Role",
      company: "Techexcel",
      title: "Senior Developer",
      bullets: [
        "Built API platforms for 90+ enterprise clients including fintech integrations.",
        "Delivered high-load backend systems handling up to 1000 requests per second.",
        "Worked with Redis, AWS SQS, Laravel queues, API auth and SQL optimization."
      ]
    },
    {
      period: "Earlier Role",
      company: "Exicon",
      title: "Junior Developer",
      bullets: [
        "Built healthcare backend systems for brands like Mankind and Dr. Reddy's.",
        "Implemented reporting flows, backend modules and data workflows.",
        "Improved coding discipline across PHP, Laravel, database and API development."
      ]
    }
  ],
  projects: [
    {
      title: "Techborest",
      description: "Enterprise API platform designed for client integrations, secure access, scalable workflows and production reliability.",
      tech: ["Laravel", "REST APIs", "Redis", "MySQL"],
      glow: "rgba(251,191,36,.18)"
    },
    {
      title: "Techrisk",
      description: "Fintech risk management system with transaction workflows, backend logic and data-driven risk operations.",
      tech: ["PHP", "Fintech", "SQL", "API Security"],
      glow: "rgba(52,211,153,.17)"
    },
    {
      title: "WhatsApp Chatbot",
      description: "Automated communication system for WhatsApp flows, customer support, notifications and backend automation.",
      tech: ["Webhook", "Queue", "API", "Automation"],
      glow: "rgba(34,211,238,.16)"
    },
    {
      title: "DoctorHealthChecker",
      description: "Healthcare-focused backend platform supporting doctor workflows, records, reports and systemized data processing.",
      tech: ["Healthcare", "Laravel", "Reports", "MySQL"],
      glow: "rgba(139,92,246,.18)"
    }
  ],
  process: [
    { title: "Understand", text: "Convert business needs into clear API contracts and backend flow.", step: "01" },
    { title: "Architect", text: "Plan database, auth, queues, caching, logging and failure handling.", step: "02" },
    { title: "Build", text: "Write clean Laravel code with scalable services and reusable modules.", step: "03" },
    { title: "Optimize", text: "Tune SQL, cache intelligently and prepare the system for production load.", step: "04" }
  ]
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function calculateExperienceYears(startDateString) {
  const start = new Date(`${startDateString}T00:00:00`);
  const now = new Date();
<<<<<<< HEAD
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.2425);
  return Math.max(0, Math.floor(years * 10) / 10);
}

function renderPortfolio() {
  const years = calculateExperienceYears(portfolioData.experienceStartDate);
  const currentYear = new Date().getFullYear();
  const updated = new Date().toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

  document.title = `${portfolioData.shortName} | ${portfolioData.role}`;
  $("#brandName").textContent = portfolioData.shortName;
  $("#profileName").textContent = portfolioData.name.toUpperCase();
  $("#footerName").textContent = portfolioData.shortName;
  $("#year").textContent = currentYear;
  $("#lastUpdated").textContent = updated;
  $("#heroSummary").textContent = portfolioData.heroSummary;
  $("#aboutPrimary").textContent = portfolioData.about.primary;
  $("#aboutSecondary").textContent = portfolioData.about.secondary;
  $("#contactText").textContent = portfolioData.contactText;

  ["#navResume", "#heroResume", "#contactResume"].forEach(id => $(id).href = portfolioData.resume);
  $("#emailLink").href = `mailto:${portfolioData.email}`;
  $("#githubLink").href = portfolioData.github;
  $("#linkedinLink").href = portfolioData.linkedin;

  $("#heroTags").innerHTML = portfolioData.heroTags.map(tag => `<span>${tag}</span>`).join("");
  $("#aboutChips").innerHTML = portfolioData.about.chips.map(chip => `<span>${chip}</span>`).join("");
  $("#heroMetrics").innerHTML = portfolioData.metrics.map(item => `
    <div class="metric"><strong>${item.value}</strong><span>${item.label}</span></div>
  `).join("");

  $("#statsGrid").innerHTML = portfolioData.stats.map(stat => {
    const value = stat.type === "experience" ? years : stat.value;
    return `<article class="stat-card"><div class="stat-value">${value}${stat.suffix}</div><div class="stat-label">${stat.label}</div></article>`;
  }).join("");

  $("#skillsGrid").innerHTML = portfolioData.skills.map(skill => `
    <article class="skill-card reveal"><div class="skill-icon">${skill.icon}</div><h3>${skill.title}</h3><p>${skill.text}</p></article>
  `).join("");

  $("#timeline").innerHTML = portfolioData.experience.map(item => `
    <article class="timeline-item reveal">
=======
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.2425;
  const years = (now - start) / millisecondsPerYear;
  return Math.max(0, Math.floor(years * 10) / 10);
}

document.addEventListener("DOMContentLoaded", () => {
  renderData();
  createDataRain();
  setupNavigation();
  setupBackToTop();
  setupCursor();
  setupMagneticButtons();
  setupTiltCards();
  setupSkillMouseGlow();
  setupTypingText();
  setupAnimations();
  setupProgressBar();
});

window.addEventListener("load", () => {
  const preloader = $("#preloader");
  if (!preloader) return;
  gsap.to(preloader, {
    autoAlpha: 0,
    duration: 0.65,
    delay: 0.25,
    ease: "power3.out",
    onComplete: () => preloader.remove()
  });
});

function renderData() {
  const liveExperience = calculateExperienceYears(portfolioData.experienceStartDate);
  $("#year").textContent = new Date().getFullYear();
  $("#experienceText").textContent = `${liveExperience}+`;

  $("#heroTags").innerHTML = portfolioData.heroTags.map(tag => `<span class="tag">${tag}</span>`).join("");
  $("#aboutChips").innerHTML = portfolioData.chips.map(chip => `<span class="about-chip">${chip}</span>`).join("");

  $("#statsGrid").innerHTML = portfolioData.stats.map(stat => {
    const value = stat.key === "experience" ? liveExperience : stat.value;
    return `
      <article class="stat-card">
        <div class="stat-value"><span class="counter" data-target="${value}">0</span>${stat.suffix}</div>
        <div class="stat-label">${stat.label}</div>
      </article>
    `;
  }).join("");

  $("#skillsGrid").innerHTML = portfolioData.skills.map(skill => `
    <article class="skill-card reveal-up">
      <div class="skill-icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.text}</p>
    </article>
  `).join("");

  $("#timeline").innerHTML = portfolioData.experience.map(item => `
    <article class="timeline-item reveal-up">
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
      <div class="timeline-card">
        <span class="period">${item.period}</span>
        <h3>${item.title}</h3>
        <h4>${item.company}</h4>
        <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  $("#projectsGrid").innerHTML = portfolioData.projects.map((project, index) => `
<<<<<<< HEAD
    <article class="project-card reveal">
=======
    <article class="project-card reveal-up" style="--project-glow:${project.glow}">
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
      <span class="project-number">0${index + 1}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
    </article>
  `).join("");

  $("#processGrid").innerHTML = portfolioData.process.map(item => `
<<<<<<< HEAD
    <article class="process-card reveal"><span>${item.step}</span><h3>${item.title}</h3><p>${item.text}</p></article>
=======
    <article class="process-card reveal-up">
      <span>${item.step}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");

  $("#emailLink").href = `mailto:${portfolioData.email}`;
  $("#githubLink").href = portfolioData.github;
  $("#linkedinLink").href = portfolioData.linkedin;
}

function createDataRain() {
  const wrapper = $("#dataRain");
  if (!wrapper) return;
  const labels = ["API", "JWT", "SQS", "SQL", "REDIS", "PHP", "REST", "JSON", "QUEUE", "CACHE"];
  wrapper.innerHTML = Array.from({ length: 26 }, (_, index) => `
    <span style="--x:${Math.random() * 100}%; --d:${3 + Math.random() * 4}s; --delay:${Math.random() * 4}s; --size:${11 + Math.random() * 10}px;">
      ${labels[index % labels.length]}
    </span>
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
  `).join("");
}

function setupNavigation() {
<<<<<<< HEAD
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
=======
  const toggle = $(".nav-toggle");
  const menu = $("#navMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];
<<<<<<< HEAD
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$(".nav-links a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { threshold: 0.35 });
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function setupTypingText() {
  const target = $("#typingText");
  let index = 0;
  setInterval(() => {
    index = (index + 1) % portfolioData.focus.length;
    target.textContent = portfolioData.focus[index];
  }, 1700);
}

function setupScrollUI() {
  const progress = $("#scrollProgress");
  const backTop = $("#backTop");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${pct}%`;
    backTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", update, { passive: true });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  setupNavigation();
  setupRevealAnimation();
  setupTypingText();
  setupScrollUI();
});
=======
  sections.forEach(id => {
    ScrollTrigger.create({
      trigger: `#${id}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveNav(id),
      onEnterBack: () => setActiveNav(id)
    });
  });
}

function setActiveNav(id) {
  $$("#navMenu a").forEach(link => {
    const href = link.getAttribute("href") || "";
    const isActive = href === `#${id}`;
    if (!link.classList.contains("nav-cta")) link.classList.toggle("active", isActive);
  });
}

function setupBackToTop() {
  const button = $("#backToTop");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  button.addEventListener("click", scrollTop);
  $$(".js-scroll-top").forEach(item => item.addEventListener("click", event => {
    event.preventDefault();
    scrollTop();
  }));

  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
}

function setupCursor() {
  const dot = $(".cursor-dot");
  const ring = $(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  });

  $$("a, button, .skill-card, .project-card").forEach(element => {
    element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

function setupMagneticButtons() {
  $$(".magnetic").forEach(button => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.22, y: y * 0.28, duration: 0.35, ease: "power3.out" });
    });
    button.addEventListener("mouseleave", () => gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, .35)" }));
  });
}

function setupTiltCards() {
  $$(".tilt-card, .project-card, .process-card, .skill-card").forEach(card => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((y / rect.height) - 0.5) * -10;
      gsap.to(card, { rotateX, rotateY, transformPerspective: 900, duration: 0.4, ease: "power3.out" });
    });
    card.addEventListener("mouseleave", () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" }));
  });
}

function setupSkillMouseGlow() {
  $$(".skill-card, .project-card, .process-card").forEach(card => {
    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

function setupTypingText() {
  const element = $("#typingText");
  if (!element) return;
  let roleIndex = 0;
  let charIndex = 1;
  let deleting = false;

  function type() {
    const word = portfolioData.typingRoles[roleIndex];
    element.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
      setTimeout(type, 55);
      return;
    }

    if (!deleting && charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1150);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 28);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % portfolioData.typingRoles.length;
    setTimeout(type, 250);
  }

  type();
}

function setupAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".brand, .nav-menu a, .nav-toggle", {
    y: -24,
    opacity: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "power3.out"
  });

  gsap.from(".title-line", {
    yPercent: 110,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power4.out",
    delay: 0.18
  });

  gsap.fromTo(".reveal-scale", { opacity: 0, scale: 0.88, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.25 });

  $$(".reveal-up").forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: 46 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      }
    );
  });

  gsap.fromTo(".tag", { y: 18, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.55,
    stagger: 0.07,
    ease: "back.out(1.8)",
    delay: 0.55
  });

  gsap.to(".code-card", { y: -28, x: 10, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".secure-card", { y: 28, x: -10, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".profile-card", { y: -14, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });

  gsap.to(".hero-bg", {
    y: 140,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.fromTo(".timeline::before", { scaleY: 0 }, { scaleY: 1 });

  setupCounters();
}

function setupCounters() {
  $$(".counter").forEach(counter => {
    const target = Number(counter.dataset.target);
    gsap.to(counter, {
      innerText: target,
      duration: 2.2,
      snap: target % 1 === 0 ? { innerText: 1 } : { innerText: 0.1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        once: true
      },
      onUpdate: function () {
        const value = Number(counter.innerText);
        counter.innerText = target % 1 === 0 ? Math.round(value) : value.toFixed(1);
      }
    });
  });
}

function setupProgressBar() {
  const progressBar = $(".page-progress");
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}
>>>>>>> d63e27491ba1b24257f9f1acdce50b037c046a55
