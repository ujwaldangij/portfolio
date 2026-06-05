const portfolioData = {
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
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function calculateExperienceYears(startDateString) {
  const start = new Date(`${startDateString}T00:00:00`);
  const now = new Date();
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
      <div class="timeline-card">
        <span class="period">${item.period}</span>
        <h3>${item.title}</h3>
        <h4>${item.company}</h4>
        <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  $("#projectsGrid").innerHTML = portfolioData.projects.map((project, index) => `
    <article class="project-card reveal">
      <span class="project-number">0${index + 1}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
    </article>
  `).join("");

  $("#processGrid").innerHTML = portfolioData.process.map(item => `
    <article class="process-card reveal"><span>${item.step}</span><h3>${item.title}</h3><p>${item.text}</p></article>
  `).join("");
}

function setupNavigation() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];
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
