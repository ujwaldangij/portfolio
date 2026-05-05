const portfolioData = {
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
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function calculateExperienceYears(startDateString) {
  const start = new Date(`${startDateString}T00:00:00`);
  const now = new Date();
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
      <div class="timeline-card">
        <span class="period">${item.period}</span>
        <h3>${item.title}</h3>
        <h4>${item.company}</h4>
        <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  $("#projectsGrid").innerHTML = portfolioData.projects.map((project, index) => `
    <article class="project-card reveal-up" style="--project-glow:${project.glow}">
      <span class="project-number">0${index + 1}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
    </article>
  `).join("");

  $("#processGrid").innerHTML = portfolioData.process.map(item => `
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
  `).join("");
}

function setupNavigation() {
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
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];
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
