const translations = {
    "en": {
        "nav_about": "The Engine",
        "nav_deep_dive": "Architecture",
        "nav_tech": "Tech Stack",
        "nav_cta": "Explore API Docs",
        "hero_badge": "v3.1.1 — Universal Resolver + OpenAPI",
        "hero_title": "The enterprise backbone for <span>SaaS builders.</span>",
        "hero_desc": "A highly scalable, multi-tenant B2B backend architecture built with FastAPI, PostgreSQL, and deployed on AWS ECS Fargate.",
        "code_comment": "# Create a new isolated tenant schema & setup billing",
        "code_res_1": "✔ Tenant 'Acme Corp' provisioned successfully.",
        "code_res_2": "✔ PostgreSQL schema 'tenant_acme' created.",
        "code_res_3": "✔ Stripe Customer & Billing initialized.",
        
        "about_title": "More than an API. An Engine.",
        "about_subtitle": "NexCore is not a simple CRUD application. It is a full-blown Multi-Tenant architecture designed to host thousands of independent businesses under a single codebase, guaranteeing absolute data isolation and zero downtime.",
        "stat_1": "Physical Isolation",
        "stat_2": "Global Latency",
        "stat_3": "Duplicate Charges",

        "deep_dive_title": "Engineering Deep Dive",
        "feat_1_title": "Multi-Dimensional Database",
        "feat_1_desc": "NexCore replaces standard row-level security with physical schema isolation. Global entities live in the `public` schema, while each client receives an isolated PostgreSQL schema generated dynamically via Alembic. Zero risk of data leakage.",
        "feat_2_title": "Event-Driven Billing",
        "feat_2_desc": "Fully asynchronous webhook architecture using Stripe. When an invoice fails or succeeds, NexCore updates tenant states instantly across global schemas and triggers Business Intelligence (BI) alerts via Discord.",
        "feat_3_title": "Serverless Cloud Architecture",
        "feat_3_desc": "Deployed natively on AWS ECS Fargate for infinite horizontal scaling. Fronted by an Application Load Balancer and Cloudflare DNS/WAF for DDos protection, edge caching, and strict SSL/TLS encryption.",
        "feat_4_title": "Real-Time Observability",
        "feat_4_desc": "Embedded Prometheus APM instrumentator exposing the `/metrics` endpoint. We track Python Garbage Collection, HTTP method distributions, and microsecond latencies to guarantee SLA compliances.",
        "feat_5_title": "Network Resilience & Idempotency",
        "feat_5_desc": "Financial operations are strictly idempotent. We implemented a custom FastAPI APIRoute middleware backed by Redis distributed locks. If a client retries a checkout due to network lag, Redis intercepts and serves the cached response in <5ms, preventing double charges.",
        "feat_6_title": "Dedicated Background Workers",
        "feat_6_desc": "Heavy workloads (like S3 asset cleanup, Discord BI alerts, and Stripe billing events) are offloaded to a dedicated ECS Fargate Worker Service via CloudAMQP (RabbitMQ), ensuring the primary API never blocks.",
        "feat_7_title": "Universal Resolver Pattern",
        "feat_7_desc": "Clean Code architecture eliminates endpoint redundancy. A dynamic query routing strategy allows precise, collision-free resource lookups via UUID, numerical auto-increments, or exact SKUs dynamically.",
        "feat_8_title": "Enterprise OpenAPI Swagger",
        "feat_8_desc": "Strict schema validations using Pydantic V2. Every API endpoint features exact HTTP status code mappings, precise error descriptions, and rich JSON payloads for seamless frontend integration.",
        
        "stack_title": "Powered by Modern Tech",
        "cta_title": "Ready to see the code?",
        "cta_desc": "Test the live Swagger UI or review the architecture documentation on GitHub.",
        "cta_github": "View Source Code",
        
        "footer_text": "Architected and Developed by Caio Cerqueira. 2026."
    },
    "pt": {
        "nav_about": "O Motor",
        "nav_deep_dive": "Arquitetura",
        "nav_tech": "Stack de Tech",
        "nav_cta": "Explorar API Docs",
        "hero_badge": "v3.1.1 — Universal Resolver + OpenAPI",
        "hero_title": "A espinha dorsal corporativa para <span>criadores de SaaS.</span>",
        "hero_desc": "Uma arquitetura backend B2B multi-tenant e altamente escalável, construída com FastAPI, PostgreSQL e implantada no AWS ECS Fargate.",
        "code_comment": "# Cria um novo schema isolado para o tenant & configura billing",
        "code_res_1": "✔ Tenant 'Acme Corp' provisionado com sucesso.",
        "code_res_2": "✔ Schema PostgreSQL 'tenant_acme' criado.",
        "code_res_3": "✔ Cliente Stripe & Faturamento inicializados.",
        
        "about_title": "Mais que uma API. Um Motor.",
        "about_subtitle": "O NexCore não é uma aplicação CRUD simples. É uma arquitetura Multi-Tenant completa projetada para hospedar milhares de empresas independentes sob o mesmo código, garantindo isolamento absoluto de dados e zero downtime.",
        "stat_1": "Isolamento Físico",
        "stat_2": "Latência Global",
        "stat_3": "Cobranças Duplicadas",

        "deep_dive_title": "Deep Dive de Engenharia",
        "feat_1_title": "Banco de Dados Multidimensional",
        "feat_1_desc": "O NexCore substitui a segurança de nível de linha padrão pelo isolamento físico de schemas. Entidades globais viveem no schema `public`, enquanto cada cliente recebe um schema PostgreSQL isolado gerado dinamicamente via Alembic. Risco zero de vazamento de dados.",
        "feat_2_title": "Faturamento Orientado a Eventos",
        "feat_2_desc": "Arquitetura de webhooks totalmente assíncrona usando Stripe. Quando uma fatura falha ou tem sucesso, o NexCore atualiza os estados dos tenants instantaneamente e aciona alertas de Business Intelligence (BI) via Discord.",
        "feat_3_title": "Arquitetura Cloud Serverless",
        "feat_3_desc": "Implantado nativamente no AWS ECS Fargate para escalonamento horizontal infinito. Protegido por um Application Load Balancer e Cloudflare DNS/WAF contra DDoS, caching de borda e criptografia SSL/TLS estrita.",
        "feat_4_title": "Observabilidade em Tempo Real",
        "feat_4_desc": "Instrumentador APM do Prometheus embutido expondo o endpoint `/metrics`. Rastreamos Garbage Collection do Python, distribuições de métodos HTTP e latências em microssegundos para garantir conformidade de SLA.",
        "feat_5_title": "Resiliência de Rede & Idempotência",
        "feat_5_desc": "Operações financeiras são estritamente idempotentes. Implementamos um middleware customizado no FastAPI (APIRoute) com travas no Redis. Se um cliente tenta reenviar um checkout devido à rede lenta, o Redis barra e entrega o cache em <5ms, prevenindo cobranças duplas.",
        "feat_6_title": "Worker Dedicado em Background",
        "feat_6_desc": "Cargas de trabalho pesadas (como limpeza de assets no S3, alertas BI no Discord e eventos de billing do Stripe) são delegadas a um Serviço Worker dedicado no ECS Fargate via CloudAMQP (RabbitMQ), garantindo que a API principal nunca seja bloqueada.",
        "feat_7_title": "Universal Resolver Pattern",
        "feat_7_desc": "Arquitetura Clean Code que elimina redundância de endpoints. Uma estratégia de roteamento dinâmico permite buscas precisas via UUID, auto-incrementos numéricos ou SKUs sem colisões.",
        "feat_8_title": "OpenAPI Swagger Corporativo",
        "feat_8_desc": "Validações estritas de schema com Pydantic V2. Cada endpoint possui mapeamento exato de status HTTP, descrições precisas de erros e payloads ricos em JSON para integração fluida no Front-end.",
        
        "stack_title": "Desenvolvido com Alta Tecnologia",
        "cta_title": "Pronto para ver o código?",
        "cta_desc": "Teste o Swagger UI ao vivo ou revise a documentação da arquitetura no GitHub.",
        "cta_github": "Ver Código Fonte",
        
        "footer_text": "Arquitetado e Desenvolvido por Caio Cerqueira. 2026."
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
const animateElements = document.querySelectorAll('.card, .stat-card, .stack-item, .section-title, .section-subtitle');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => {
    el.style.opacity = 0;
    if (el.classList.contains('stack-item')) {
        el.style.transform = 'scale(0.8)';
    } else {
        el.style.transform = 'translateY(30px)';
    }
    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});
