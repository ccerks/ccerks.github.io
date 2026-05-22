const translations = {
    "en": {
        "nav_features": "Features",
        "nav_architecture": "Architecture",
        "nav_cta": "Explore API Docs",
        "hero_badge": "v2.2.0 — Cloud Native API",
        "hero_title": "The enterprise backbone for <span>SaaS builders.</span>",
        "hero_desc": "A highly scalable, multi-tenant B2B backend architecture built with FastAPI, PostgreSQL, and deployed on AWS ECS Fargate.",
        "code_comment": "# Create a new isolated tenant schema & setup billing",
        "code_res_1": "✔ Tenant 'Acme Corp' provisioned successfully.",
        "code_res_2": "✔ PostgreSQL schema 'tenant_acme' created.",
        "code_res_3": "✔ Stripe Customer & Billing initialized.",
        "features_title": "Architected for Scale.",
        "feat_1_title": "Physical Data Isolation",
        "feat_1_desc": "True multi-tenancy. Every client gets their own dedicated PostgreSQL schema dynamically routed via middleware.",
        "feat_2_title": "Stripe Billing Lifecycle",
        "feat_2_desc": "Fully automated webhook integrations handling subscriptions, renewals, and automated tenant suspensions.",
        "feat_3_title": "Edge Security",
        "feat_3_desc": "Deployed on AWS Fargate with an Application Load Balancer, SSL certificates, and Cloudflare DNS protection.",
        "feat_4_title": "Observability & APM",
        "feat_4_desc": "Real-time Prometheus metrics exposition tracking request latency, status codes, and HTTP method distributions.",
        "feat_5_title": "Network Resilience",
        "feat_5_desc": "IdempotentRoute middleware backed by Redis caching guarantees financial operations are never duplicated during network retries.",
        "footer_text": "Engineered for high availability. NexCore SaaS Architecture."
    },
    "pt": {
        "nav_features": "Funcionalidades",
        "nav_architecture": "Arquitetura",
        "nav_cta": "Explorar API Docs",
        "hero_badge": "v2.2.0 — Cloud Native API",
        "hero_title": "A espinha dorsal corporativa para <span>criadores de SaaS.</span>",
        "hero_desc": "Uma arquitetura backend B2B multi-tenant e altamente escalável, construída com FastAPI, PostgreSQL e implantada no AWS ECS Fargate.",
        "code_comment": "# Cria um novo schema isolado para o tenant & configura billing",
        "code_res_1": "✔ Tenant 'Acme Corp' provisionado com sucesso.",
        "code_res_2": "✔ Schema PostgreSQL 'tenant_acme' criado.",
        "code_res_3": "✔ Cliente Stripe & Faturamento inicializados.",
        "features_title": "Arquitetado para Escalar.",
        "feat_1_title": "Isolamento Físico de Dados",
        "feat_1_desc": "Verdadeiro multi-tenancy. Cada cliente recebe seu próprio schema PostgreSQL dedicado, roteado dinamicamente via middleware.",
        "feat_2_title": "Ciclo de Vida de Faturamento (Stripe)",
        "feat_2_desc": "Integrações de webhook totalmente automatizadas gerenciando assinaturas, renovações e suspensões automáticas de tenants.",
        "feat_3_title": "Segurança de Borda (Edge)",
        "feat_3_desc": "Implantado no AWS Fargate com um Application Load Balancer, certificados SSL e proteção DNS do Cloudflare.",
        "feat_4_title": "Observabilidade & APM",
        "feat_4_desc": "Exposição de métricas do Prometheus em tempo real rastreando latência, códigos de status e métodos HTTP.",
        "feat_5_title": "Resiliência de Rede",
        "feat_5_desc": "Middleware IdempotentRoute apoiado por cache Redis garante que operações financeiras nunca sejam duplicadas em retentativas.",
        "footer_text": "Projetado para alta disponibilidade. NexCore SaaS Architecture."
    }
};

// Language Toggle Logic
let currentLang = "en";
const langBtn = document.getElementById("lang-toggle");
const root = document.getElementById("html-root");

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    
    // Update button text
    langBtn.textContent = currentLang === "en" ? "PT-BR" : "EN";
    root.setAttribute("lang", currentLang);

    // Update translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
});

// Micro-animations for scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
