/* ============================================================
   PORTFOLIO — script.js
   Complete bilingual JS: i18n · typewriter · particles · scroll
   ============================================================ */

// ──────────────────────────────────────────────
// 1. TRANSLATIONS (i18n)
// ──────────────────────────────────────────────
const translations = {
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_greeting: "Hi, I'm",
    hero_desc: 'Technology professional driven by solving complex problems and building scalable systems. Turning ideas into robust and elegant solutions.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Get in Touch',
    stat_repos: 'Public Repos',
    stat_tech: 'Technologies',
    stat_commit: '% Commitment',
    hero_badge: 'Open to opportunities',
    scroll: 'Scroll to explore',
    about_title: 'About Me',
    about_p1: 'I\'m a <strong>Software Engineer</strong> passionate about technology and innovation. My programming journey is driven by the constant pursuit of solutions that combine <span class="highlight">performance</span>, <span class="highlight">scalability</span>, and <span class="highlight">clean code</span>.',
    about_p2: 'With solid experience in complex system integrations, high-concurrency e-commerce operations, and infrastructure monitoring, I currently focus on <strong>Backend development and architecture</strong>, building and consuming RESTful APIs.',
    about_p3: 'I hold a <strong>Bachelor\'s in Information Systems</strong> and I\'m currently pursuing a <strong>Post-graduate degree in AI, Machine Learning & Data Science</strong>. Always evolving.',
    about_h1: 'Results-Driven',
    about_h1_desc: 'I deliver solutions that create real impact',
    about_h2: 'Continuous Learning',
    about_h2_desc: 'Always evolving with new technologies',
    about_h3: 'Team Player',
    about_h3_desc: 'Collaboration and communication are priorities',
    skills_title: 'Skills & Tech Stack',
    skills_languages: 'Languages',
    skills_frameworks: 'Frameworks & Libs',
    skills_infra: 'Infrastructure & DevOps',
    level_advanced: 'Advanced',
    level_intermediate: 'Intermediate',
    level_basic: 'Basic',
    skills_also: 'I also work with',
    tag_micro: 'Microservices',
    tag_tests: 'Automated Testing',
    projects_title: 'Featured Projects',
    project_featured: '⭐ Crown Jewel Project',
    project1_desc: '🚀 Enterprise Multi-Tenant SaaS Backend (FastAPI, PostgreSQL, Redis, RabbitMQ). Features physical database isolation (schemas), full Stripe billing lifecycle via Webhooks, Universal Resolver Pattern, dedicated async Fargate Worker, cloud-native deployment to AWS (S3, ECS Fargate), and automated CI/CD via GitHub Actions.',
    project2_title: 'Financial ETL Pipeline',
    project2_desc: '📊 End-to-end data pipeline for financial markets. Data extraction and transformation from multiple assets using Python, storage with Supabase, and interactive visualizations via Streamlit.',
    project3_title: 'E-commerce Full-Stack API',
    project3_desc: '🛒 Complete API and Frontend architecture for sales and product management. International payment flows with Stripe and PayPal. Secure credential isolation and authenticated routes.',
    projects_cta: 'View all projects on GitHub',
    exp_title: 'Experience & Education',
    exp_current: 'Current',
    exp1_role: 'Implementation Analyst (Plugg.to)',
    exp1_company: 'Linx Totvs, São Paulo',
    exp1_period: 'Jan 2025 — Present',
    exp1_desc: 'Technical mapping and configuration of complex integrations between ERP systems and major marketplaces. Data flow architecture for real-time catalog, orders, stock, and pricing synchronization. Infrastructure and observability tools (AWS, Elastic, Grafana, Jenkins, Swagger).',
    exp2_role: 'Analyst II - Support (Linx Commerce)',
    exp2_company: 'Linx Totvs, São Paulo',
    exp2_period: 'Dec 2021 — Jan 2025',
    exp2_desc: 'Development and maintenance of service integrations using Node.js and JavaScript. Technical analysis and consumption of complex APIs from major players (Mercado Livre, Amazon, Magalu). Data management with AWS (CloudWatch, DynamoDB), MySQL, Apache Solr, and Elastic.',
    exp3_role: 'Customer Support Analyst',
    exp3_company: 'HP / Simpress, São Paulo',
    exp3_period: 'Apr 2017 — Nov 2021',
    exp3_desc: 'Development of SQL Queries (MySQL) for failure identification and database inconsistency correction. Technical management of corporate applications and operational reporting.',
    exp4_role: 'Customer Support Analyst',
    exp4_company: 'Stefanini Consultoria, São Paulo',
    exp4_period: 'Oct 2014 — Feb 2017',
    exp4_desc: 'Database administration for user access management. Level 2 technical support in high-criticality environment (Braskem). Data recovery and preventive IT asset maintenance.',
    edu1_role: 'Post-graduate — AI, ML & Data Science',
    edu1_company: 'Faculdade Facint, Maringá',
    edu1_period: 'Apr 2026 — Ongoing',
    edu2_role: "Bachelor's — Information Systems",
    edu2_company: 'USCS - São Caetano do Sul',
    edu2_period: 'Completed Aug 2021',
    contact_title: "Let's Talk?",
    contact_heading: 'Open to new opportunities',
    contact_desc: "I'm looking for interesting challenges in Software Engineering. If you have an innovative project or a role that fits my profile, I'd love to chat!",
    contact_email_value: 'ccerqueira64@gmail.com',
    footer_designed: 'Designed & Developed by',
    footer_tech: 'Made with ❤️ using HTML, CSS & JavaScript'
  },
  pt: {
    nav_about: 'Sobre',
    nav_skills: 'Skills',
    nav_projects: 'Projetos',
    nav_experience: 'Experiência',
    nav_contact: 'Contato',
    hero_greeting: 'Olá, eu sou',
    hero_desc: 'Profissional de tecnologia movido por resolver problemas complexos e construir sistemas escaláveis. Transformando ideias em soluções robustas e elegantes.',
    hero_cta_projects: 'Ver Projetos',
    hero_cta_contact: 'Fale Comigo',
    stat_repos: 'Repositórios Públicos',
    stat_tech: 'Tecnologias',
    stat_commit: '% Comprometimento',
    hero_badge: 'Disponível para oportunidades',
    scroll: 'Scroll para explorar',
    about_title: 'Sobre Mim',
    about_p1: 'Sou um <strong>Engenheiro de Software</strong> apaixonado por tecnologia e inovação. Minha jornada na programação é guiada pela busca constante de soluções que combinam <span class="highlight">performance</span>, <span class="highlight">escalabilidade</span> e <span class="highlight">código limpo</span>.',
    about_p2: 'Com sólida experiência em integrações de sistemas complexos, operações de e-commerce de alta concorrência e monitoramento de infraestrutura, atualmente foco minha carreira no <strong>desenvolvimento e arquitetura Backend</strong>, construindo e consumindo APIs RESTful.',
    about_p3: 'Sou <strong>Bacharel em Sistemas de Informação</strong> e atualmente curso <strong>Pós-graduação em IA, Machine Learning e Data Science</strong>. Sempre evoluindo.',
    about_h1: 'Foco em Resultados',
    about_h1_desc: 'Entrego soluções que geram impacto real',
    about_h2: 'Aprendizado Contínuo',
    about_h2_desc: 'Sempre evoluindo com novas tecnologias',
    about_h3: 'Trabalho em Equipe',
    about_h3_desc: 'Colaboração e comunicação são prioridades',
    skills_title: 'Habilidades & Tech Stack',
    skills_languages: 'Linguagens',
    skills_frameworks: 'Frameworks & Libs',
    skills_infra: 'Infraestrutura & DevOps',
    level_advanced: 'Avançado',
    level_intermediate: 'Intermediário',
    level_basic: 'Básico',
    skills_also: 'Também trabalho com',
    tag_micro: 'Microsserviços',
    tag_tests: 'Testes Automatizados',
    projects_title: 'Projetos em Destaque',
    project_featured: '⭐ Joia da Coroa',
    project1_desc: '🚀 Backend SaaS Multi-Tenant corporativo (FastAPI, PostgreSQL, Redis, RabbitMQ). Contém isolamento físico de schemas no banco, ciclo completo de faturamento Stripe via Webhooks, Universal Resolver Pattern, Worker Fargate assíncrono, implantação cloud-native na AWS (S3, ECS Fargate) e CI/CD automatizado via GitHub Actions.',
    project2_title: 'Pipeline ETL Financeiro',
    project2_desc: '📊 Pipeline de dados ponta a ponta focado no mercado financeiro. Extração e transformação de dados de múltiplos ativos com Python, armazenamento no Supabase e visualizações interativas via Streamlit.',
    project3_title: 'API Full-Stack E-commerce',
    project3_desc: '🛒 Arquitetura completa de API e Frontend para gestão de vendas e produtos. Fluxos de pagamento internacionais com Stripe e PayPal. Isolamento seguro de credenciais e rotas autenticadas.',
    projects_cta: 'Ver todos os projetos no GitHub',
    exp_title: 'Experiência & Formação',
    exp_current: 'Atual',
    exp1_role: 'Analista de Implantação (Plugg.to)',
    exp1_company: 'Linx Totvs, São Paulo',
    exp1_period: 'Jan 2025 — Presente',
    exp1_desc: 'Mapeamento técnico e configuração de integrações complexas entre ERPs e os principais marketplaces do mercado. Arquitetura de fluxos de dados para sincronização em tempo real de catálogo, pedidos, estoque e precificação. Ferramentas de infraestrutura e observabilidade (AWS, Elastic, Grafana, Jenkins, Swagger).',
    exp2_role: 'Analista II - Suporte (Linx Commerce)',
    exp2_company: 'Linx Totvs, São Paulo',
    exp2_period: 'Dez 2021 — Jan 2025',
    exp2_desc: 'Desenvolvimento e manutenção de integrações de serviços com Node.js e JavaScript. Análise técnica e consumo de APIs complexas de grandes players (Mercado Livre, Amazon, Magalu). Gerenciamento de dados com AWS (CloudWatch, DynamoDB), MySQL, Apache Solr e Elastic.',
    exp3_role: 'Analista de Suporte ao Cliente',
    exp3_company: 'HP / Simpress, São Paulo',
    exp3_period: 'Abr 2017 — Nov 2021',
    exp3_desc: 'Desenvolvimento de Queries SQL (MySQL) para identificação de falhas e correção de inconsistências no banco de dados. Gestão técnica de aplicações corporativas e relatórios operacionais.',
    exp4_role: 'Analista de Suporte ao Cliente',
    exp4_company: 'Stefanini Consultoria, São Paulo',
    exp4_period: 'Out 2014 — Fev 2017',
    exp4_desc: 'Administração de banco de dados para gerenciamento de acessos. Suporte técnico de segundo nível em ambiente de alta criticidade (Braskem). Recuperação de dados e manutenção preventiva de TI.',
    edu1_role: 'Pós-graduação — IA, ML e Data Science',
    edu1_company: 'Faculdade Facint, Maringá',
    edu1_period: 'Abr 2026 — Em andamento',
    edu2_role: 'Bacharelado — Sistemas de Informação',
    edu2_company: 'USCS - São Caetano do Sul',
    edu2_period: 'Concluído Ago 2021',
    contact_title: 'Vamos Conversar?',
    contact_heading: 'Aberto a novas oportunidades',
    contact_desc: 'Estou em busca de desafios interessantes na área de Engenharia de Software. Se você tem um projeto inovador ou uma vaga que combine com meu perfil, ficarei feliz em conversar!',
    contact_email_value: 'ccerqueira64@gmail.com',
    footer_designed: 'Desenhado & Desenvolvido por',
    footer_tech: 'Feito com ❤️ usando HTML, CSS & JavaScript'
  }
};

// ──────────────────────────────────────────────
// 2. LANGUAGE TOGGLE
// ──────────────────────────────────────────────
let currentLang = 'en';

const rolesMap = {
  en: ['Software Engineer', 'Backend Developer', 'API Architect', 'Problem Solver', 'Tech Enthusiast'],
  pt: ['Engenheiro de Software', 'Desenvolvedor Backend', 'Arquiteto de APIs', 'Problem Solver', 'Tech Enthusiast']
};

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update every element carrying a data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update toggle button appearance
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const flagSpan = langToggle.querySelector('.lang-flag');
    const labelSpan = langToggle.querySelector('.lang-label');
    if (lang === 'en') {
      if (flagSpan) flagSpan.textContent = '🇧🇷';
      if (labelSpan) labelSpan.textContent = 'PT';
    } else {
      if (flagSpan) flagSpan.textContent = '🇺🇸';
      if (labelSpan) labelSpan.textContent = 'EN';
    }
  }

  // Persist preference
  localStorage.setItem('portfolio-lang', lang);

  // Restart typewriter with the correct roles
  restartTypewriter();
}

function initLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) return;

  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'pt' : 'en';
    setLanguage(nextLang);
  });

  // Load saved preference (or default to 'en')
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && (saved === 'en' || saved === 'pt')) {
    setLanguage(saved);
  } else {
    setLanguage('en');
  }
}

// ──────────────────────────────────────────────
// 3. TYPEWRITER EFFECT
// ──────────────────────────────────────────────
let typewriterTimeout = null;
let typewriterRoleIndex = 0;
let typewriterCharIndex = 0;
let typewriterIsDeleting = false;

function restartTypewriter() {
  // Clear any running timeouts
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }
  typewriterRoleIndex = 0;
  typewriterCharIndex = 0;
  typewriterIsDeleting = false;

  const el = document.getElementById('typewriter');
  if (el) el.textContent = '';

  typewriterTick();
}

function typewriterTick() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = rolesMap[currentLang] || rolesMap.en;
  const currentRole = roles[typewriterRoleIndex % roles.length];

  if (!typewriterIsDeleting) {
    // Typing forward
    typewriterCharIndex++;
    el.textContent = currentRole.substring(0, typewriterCharIndex);

    if (typewriterCharIndex === currentRole.length) {
      // Finished typing — pause then start deleting
      typewriterIsDeleting = true;
      typewriterTimeout = setTimeout(typewriterTick, 2000);
    } else {
      typewriterTimeout = setTimeout(typewriterTick, 80);
    }
  } else {
    // Deleting backward
    typewriterCharIndex--;
    el.textContent = currentRole.substring(0, typewriterCharIndex);

    if (typewriterCharIndex === 0) {
      // Finished deleting — move to next role
      typewriterIsDeleting = false;
      typewriterRoleIndex = (typewriterRoleIndex + 1) % roles.length;
      typewriterTimeout = setTimeout(typewriterTick, 500);
    } else {
      typewriterTimeout = setTimeout(typewriterTick, 40);
    }
  }
}

// ──────────────────────────────────────────────
// 4. PARTICLE BACKGROUND
// ──────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 80;
  const CONNECTION_DISTANCE = 120;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 1,              // 1 – 2.5
        opacity: Math.random() * 0.4 + 0.1,            // 0.1 – 0.5
        vx: (Math.random() - 0.5) * 0.6,               // -0.3 – 0.3
        vy: (Math.random() - 0.5) * 0.6
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const lineOpacity = (1 - dist / CONNECTION_DISTANCE) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
      ctx.fill();
    }
  }

  function updateParticles() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    }
  }

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  // Init
  resize();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

// ──────────────────────────────────────────────
// 5. NAVBAR
// ──────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Scroll class
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // Active link highlighting via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('#nav-links a[href^="#"]');

  if (sections.length && navAnchors.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}

// ──────────────────────────────────────────────
// 6. SMOOTH SCROLL
// ──────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
}

// ──────────────────────────────────────────────
// 7. SCROLL REVEAL ANIMATIONS
// ──────────────────────────────────────────────
function initScrollReveal() {
  const revealSelectors = [
    '.section-title',
    '.skill-category',
    '.project-card',
    '.timeline-item',
    '.contact-card',
    '.about-text',
    '.about-image',
    '.hero-text',
    '.hero-visual',
    '.tech-cloud',
    '.contact-text'
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(', '));

  // Add .reveal class
  revealElements.forEach(el => el.classList.add('reveal'));

  // Stagger grid children
  const gridContainers = document.querySelectorAll('.skills-grid, .projects-grid, .timeline');
  gridContainers.forEach(container => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ──────────────────────────────────────────────
// 8. SKILL BARS ANIMATION
// ──────────────────────────────────────────────
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  if (!skillBars.length) return;

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
          bar.style.width = targetWidth + '%';
        }
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });

  skillBars.forEach(bar => {
    bar.style.width = '0%';
    barObserver.observe(bar);
  });
}

// ──────────────────────────────────────────────
// 9. COUNTER ANIMATION
// ──────────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  let countersAnimated = false;

  const heroSection = document.getElementById('hero') || document.querySelector('.hero');
  if (!heroSection) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => animateCounter(counter));
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counterObserver.observe(heroSection);
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  if (isNaN(target)) return;

  const duration = 2000; // ms
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(easedProgress * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(tick);
}

// ──────────────────────────────────────────────
// 10. DOM CONTENT LOADED — BOOTSTRAP EVERYTHING
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Particles
  initParticles();

  // Navbar (scroll class, mobile toggle, active links)
  initNavbar();

  // Smooth scroll for anchor links
  initSmoothScroll();

  // Scroll-reveal animations
  initScrollReveal();

  // Skill-bar width animations
  initSkillBars();

  // Stat counter animations
  initCounters();

  // Language toggle (also loads saved pref & sets initial language)
  initLanguageToggle();
});
