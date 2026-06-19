import type { Locale } from "./locales";

export type SiteCopy = {
  nav: {
    work: string;
    services: string;
    process: string;
    about: string;
    faq: string;
    ping: string;
    languageLabel: string;
  };
  hero: {
    availability: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    body: string;
    ctaStart: string;
    ctaServices: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    badge: string;
    fitTitle: string;
    fitIntro: string;
    fitItems: string[];
    itemsLabel: string;
    items: Array<{
      code: string;
      title: string;
      body: string;
      bullets: string[];
      prices: string[];
    }>;
  };
  process: {
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    body: string;
    meta: string[];
    steps: Array<{
      k: string;
      t: string;
      d: string;
      meta: string;
      deliver: string[];
    }>;
  };
  about: {
    titleLine1: string;
    titleLine2: string;
    p1: string;
    p2: string;
    p3: string;
    p4?: string;
    stats: Array<{ k: string; v: string }>;
  };
  work: {
    title: string;
    intro: string;
    modalStackLabel: string;
    modalHighlightsLabel: string;
    modalRepoLabel: string;
    modalLiveLabel: string;
    projects: Array<{
      title: string;
      year: string;
      body: string;
      highlights: string[];
      stack: string[];
      repoUrl: string;
      liveUrl?: string;
    }>;
  };
  faq: {
    titleLine1: string;
    titleLine2: string;
    preContact: string;
    contactLink: string;
    postContact: string;
    items: Array<{ q: string; a: string }>;
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    details: Array<{ k: string; v: string }>;
    labels: {
      name: string;
      email: string;
      budget: string;
      project: string;
    };
    placeholders: {
      name: string;
      email: string;
      budget: string;
      project: string;
    };
    statusIdle: string;
    statusSent: string;
    submitIdle: string;
    submitSending: string;
    errors: {
      nameRequired: string;
      invalidEmail: string;
      messageMin: string;
    };
    mail: {
      subjectPrefix: string;
      fieldName: string;
      fieldEmail: string;
      fieldBudget: string;
      budgetFallback: string;
    };
  };
  footer: {
    rights: string;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  "pt-BR": {
    nav: {
      work: "projetos",
      services: "serviços",
      process: "processo",
      about: "sobre",
      faq: "faq",
      ping: "contato",
      languageLabel: "Idioma",
    },
    hero: {
      availability: "",
      titleLine1: "Sites que passam confiança",
      titleLine2: "e vendem antes do",
      titleAccent: "primeiro contato.",
      body: "Sites profissionais para negócios locais que precisam parecer confiáveis, explicar seus serviços e transformar visitantes em conversas pelo WhatsApp.",
      ctaStart: "Quero um site assim",
      ctaServices: "Ver projetos",
    },
    services: {
      eyebrow: "serviços",
      title: "O que eu construo",
      intro:
        "Desenvolvimento de landing pages, sistemas, dashboards e integrações com foco em confiabilidade, boa experiência de uso e manutenção no longo prazo.",
      badge: "serviço",
      fitTitle: "Quando faz sentido me chamar",
      fitIntro:
        "Trabalho bem em cenários onde você precisa transformar uma necessidade operacional em software utilizável.",
      fitItems: [
        "validar uma ideia com landing page ou MVP simples",
        "trocar planilhas e processos manuais por painel interno",
        "criar dashboard administrativo para acompanhar operação",
        "integrar usuários, pagamentos, dados ou ferramentas externas",
        "organizar um backend que consiga crescer sem virar remendo",
      ],
      itemsLabel: "[ 04 / SERVIÇOS ]",
      items: [
        {
          code: "01 / LP",
          title: "Landing Pages",
          body: "Superfícies de marketing para alta conversão. Design customizado, motion e estrutura pensada para copy. Feitas para performance e Lighthouse 95+.",
          bullets: ["Design + dev custom", "Com CMS ou estático", "Pronto para A/B"],
          prices: ["Simples: a partir de R$600", "Personalizada: a partir de R$1.000"],
        },
        {
          code: "02 / SYS",
          title: "Sistemas Sob Medida",
          body: "Aplicações fullstack ponta a ponta. Auth, pagamentos, dashboards e jobs. Arquitetura limpa para sua equipe manter sem caos.",
          bullets: ["Auth + perfis", "Stripe / cobrança", "APIs tipadas"],
          prices: ["A partir de R$2.000"],
        },
        {
          code: "03 / INT",
          title: "Ferramentas Internas",
          body: "Painel admin e dashboards operacionais no lugar da planilha frágil. Rápidos para evoluir, difíceis de quebrar.",
          bullets: ["UI por permissão", "CRUD + relatórios", "Logs de auditoria"],
          prices: ["A partir de R$1.500"],
        },
        {
          code: "04 / AUTO",
          title: "Automação e Integrações",
          body: "Webhooks, filas e colagem de API entre ferramentas que você já usa. Menos trabalho manual, mais alavancagem.",
          bullets: ["Make / Zapier", "Workers custom", "CRM / Stripe"],
          prices: ["A partir de R$1.500"],
        },
      ],
    },
    work: {
      title: "Experiência em projetos",
      intro:
        "Ao longo da minha trajetória, desenvolvi projetos completos com backend, frontend, autenticação, integrações externas, mensageria, cache, pagamentos, dashboards e arquitetura modular. Foco em resolver problemas reais com soluções organizadas, seguras e preparadas para evolução.",
      modalStackLabel: "Stack",
      modalHighlightsLabel: "Destaques técnicos",
      modalRepoLabel: "Abrir no GitHub",
      modalLiveLabel: "Abrir demo",
      projects: [
        {
          title: "Self Checkout Monolith",
          year: "2025",
          body: "Sistema para restaurante vender pelo próprio menu digital, receber pagamentos online e acompanhar pedidos em tempo real no painel administrativo.",
          highlights: [
            "Checkout com Stripe e reconciliação segura de pagamento",
            "Carrinho por mesa para reduzir fricção no pedido",
            "Atualização em tempo real para operação acompanhar vendas",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "RabbitMQ"],
          repoUrl: "https://github.com/pablozr/self-checkout-monolith",
        },
        {
          title: "PRISMA",
          year: "2025",
          body: "Plataforma institucional para publicar projetos universitários, organizar permissões e dar autonomia para equipes administrarem conteúdo sem depender de alterações manuais.",
          highlights: [
            "Catálogo público com base administrativa",
            "Login e permissões por perfil para proteger áreas internas",
            "Estrutura modular preparada para evolução do produto",
          ],
          stack: ["FastAPI", "Angular", "PostgreSQL", "Redis", "RabbitMQ", "JWT"],
          repoUrl: "https://github.com/pablozr/PRISMA",
          liveUrl: "https://github.com/pablozr/siepa-front",
        },
        {
          title: "WiredApply",
          year: "2025",
          body: "Ferramenta para organizar a busca de vagas, priorizar oportunidades por aderência e transformar candidaturas em um fluxo acompanhável no dia a dia.",
          highlights: [
            "Ranking de oportunidades para reduzir decisão manual",
            "Acompanhamento de candidaturas e feedback do usuário",
            "Resumo diário para manter rotina de busca ativa",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
          repoUrl: "https://github.com/pablozr/wired-apply",
        },
        {
          title: "Subscription Monolith",
          year: "2025",
          body: "Sistema para acompanhar assinaturas, evitar renovações esquecidas e dar visibilidade sobre custos recorrentes antes que eles virem desperdício.",
          highlights: [
            "Controle centralizado de custos recorrentes",
            "Lembretes automáticos antes da renovação",
            "Base organizada para relatórios e evolução futura",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "SMTP"],
          repoUrl: "https://github.com/pablozr/subscription-monolith",
        },
        {
          title: "FastAPI Template / Angular Template",
          year: "2025",
          body: "Bases reutilizáveis para começar novos produtos com estrutura, autenticação, organização por módulos e convenções claras desde o primeiro commit.",
          highlights: [
            "Menos tempo gasto em setup repetitivo",
            "Organização inicial para backend e frontend crescerem sem bagunça",
            "Ponto de partida para MVPs, dashboards e sistemas internos",
          ],
          stack: ["FastAPI", "Angular", "TypeScript", "Docker"],
          repoUrl: "https://github.com/pablozr/fastapi-template",
          liveUrl: "https://github.com/pablozr/angular-template",
        },
      ],
    },
    process: {
      titleLine1: "Da primeira call até",
      titleAccent: "produção",
      titleLine2: "em quatro etapas honestas.",
      body: "Um fluxo simples para sair de uma necessidade solta e chegar em uma entrega validável. Você entende o escopo, acompanha versões em staging e recebe o código pronto para continuar.",
      meta: ["média de 3-6 semanas", "preço fechado", "escopo claro"],
      steps: [
        {
          k: "01",
          t: "Descoberta",
          d: "Uma call de 30 minutos para mapear o problema real, não apenas o pedido superficial. Você sai com clareza mesmo que não fechemos.",
          meta: "30 min · grátis",
          deliver: ["Resumo do problema", "Direção técnica", "Estimativa inicial"],
        },
        {
          k: "02",
          t: "Escopo",
          d: "Proposta de preço fixo com marcos, entregáveis e cronograma fechado. Sem surpresas de cobrança por hora.",
          meta: "retorno em 48h",
          deliver: ["Marcos", "Orçamento fixo", "Data de início"],
        },
        {
          k: "03",
          t: "Construção",
          d: "Demos semanais, ambiente de staging desde o primeiro dia e acompanhamento contínuo da evolução. Nada de semanas em silêncio em caixa-preta.",
          meta: "demos semanais",
          deliver: ["URL de staging", "Loom semanal", "Canal no Slack"],
        },
        {
          k: "04",
          t: "Entrega",
          d: "Deploy, monitoramento e documentação. Você recebe as chaves, o código e o runbook sem dependência de mim.",
          meta: "handover incluso",
          deliver: ["Deploy em produção", "Docs + runbook", "Suporte de 30 dias"],
        },
      ],
    },
    about: {
      titleLine1: "Sites e sistemas para pequenos negócios",
      titleLine2: "que querem parecer profissionais online.",
      p1: "Ajudo pequenas empresas, profissionais autônomos e negócios locais a transformarem uma presença digital improvisada em algo mais claro, bonito e confiável.",
      p2: "Crio sites, landing pages e soluções web para apresentar serviços, facilitar o contato pelo WhatsApp e melhorar a forma como o cliente encontra e entende o seu negócio.",
      p3: "Meu foco é entregar algo simples de usar, bem estruturado e pronto para gerar mais confiança desde o primeiro acesso.",
      p4: "Por trás dos projetos, posso incluir sites responsivos, formulários, botão de WhatsApp, integração com Instagram, SEO local básico, painéis internos, automações e sistemas sob medida.",
      stats: [
        { k: "Sites responsivos", v: "boa navegação no celular e computador" },
        { k: "WhatsApp e contato", v: "caminhos claros para receber mensagens" },
        { k: "SEO local básico", v: "estrutura para ser encontrado com mais facilidade" },
        { k: "Sistemas simples", v: "painéis, formulários e automações sob medida" },
      ],
    },
    faq: {
      titleLine1: "Perguntas",
      titleLine2: "frequentes.",
      preContact: "Faltou algo?",
      contactLink: "Me manda uma mensagem",
      postContact: "— respondo em até 24 horas.",
      items: [
        {
          q: "Quanto custa um projeto?",
          a: "Trabalho com valores base para dar previsibilidade desde o início. Landing page simples começa em R$600 e personalizada em R$1.000; sistemas sob medida em R$2.000; ferramentas internas e automações em R$1.500. O valor final varia conforme escopo, prazo e integrações.",
        },
        {
          q: "Em quanto tempo vejo resultado?",
          a: "Landing pages normalmente saem em 1 a 2 semanas. Sistemas e dashboards em 3 a 6 semanas. Você recebe staging desde a primeira semana e demos recorrentes.",
        },
        {
          q: "O código fica comigo?",
          a: "Sim, 100%. Código, arquivos de design, acesso à infra e documentação são entregues no encerramento. Zero lock-in.",
        },
        {
          q: "Qual stack você usa?",
          a: "Uso FastAPI e Spring Boot para APIs e regras de negócio, PostgreSQL e Redis para dados e performance, RabbitMQ para filas e processamento assíncrono, Docker para ambientes previsíveis e Angular para dashboards e interfaces web.",
        },
        {
          q: "Você oferece suporte depois do lançamento?",
          a: "Todo projeto inclui 30 dias de suporte gratuito pós-lançamento para correção de bugs. Depois disso, posso atuar em retainer mensal opcional.",
        },
        {
          q: "Você trabalha junto com meu time atual?",
          a: "Sim. Integro com Slack, Linear/Jira, GitHub e rituais do time quando necessário, mantendo comunicação clara e alinhamento contínuo.",
        },
      ],
    },
    contact: {
      titleLine1: "Tem um projeto",
      titleLine2: "em mente?",
      body: "Me conta sobre ele, mesmo que ainda esteja embrionário. Eu respondo em até 24h com feedback honesto de escopo, prazo e investimento.",
      details: [
        { k: "E-mail", v: "pablo.farina28@outlook.com" },
        { k: "Resposta", v: "Em até 24h" },
      ],
      labels: {
        name: "Nome",
        email: "E-mail",
        budget: "Orçamento",
        project: "Projeto",
      },
      placeholders: {
        name: "Seu nome",
        email: "você@empresa.com",
        budget: "ex.: 5k — 10k (opcional)",
        project: "O que você quer construir?",
      },
      statusIdle: "Abre seu cliente de e-mail com tudo preenchido.",
      statusSent: "✓ Cliente de e-mail aberto — nos falamos em breve.",
      submitIdle: "Enviar mensagem",
      submitSending: "Enviando...",
      errors: {
        nameRequired: "Nome é obrigatório",
        invalidEmail: "E-mail inválido",
        messageMin: "Conte um pouco mais (10+ caracteres)",
      },
      mail: {
        subjectPrefix: "Novo projeto",
        fieldName: "Nome",
        fieldEmail: "E-mail",
        fieldBudget: "Orçamento",
        budgetFallback: "-",
      },
    },
    footer: {
      rights: "todos os sistemas operacionais",
    },
    meta: {
      title: "Pablo Farina — Desenvolvedor Fullstack Freelancer",
      description:
        "Desenvolvedor fullstack freelancer criando landing pages, sistemas sob medida, ferramentas internas e automações.",
      ogTitle: "Pablo Farina — Desenvolvedor Fullstack Freelancer",
      ogDescription: "Landing pages, sistemas sob medida, ferramentas internas e automações.",
      ogImageAlt: "Preview do portfolio de Pablo Farina",
    },
  },
  en: {
    nav: {
      work: "work",
      services: "services",
      process: "process",
      about: "about",
      faq: "faq",
      ping: "ping",
      languageLabel: "Language",
    },
    hero: {
      availability: "",
      titleLine1: "Websites that build trust",
      titleLine2: "and sell before the",
      titleAccent: "first contact.",
      body: "Professional websites for local businesses that need to look credible, explain their services, and turn visitors into WhatsApp conversations.",
      ctaStart: "I want a site like this",
      ctaServices: "View projects",
    },
    services: {
      eyebrow: "services",
      title: "What I build",
      intro:
        "I build landing pages, systems, dashboards, and integrations with focus on reliability, strong UX, and long-term maintainability.",
      badge: "service",
      fitTitle: "When it makes sense to call me",
      fitIntro:
        "I am most useful when an operational need has to become production-ready software.",
      fitItems: [
        "validate an idea with a landing page or a simple MVP",
        "replace spreadsheets and manual routines with an internal panel",
        "build an admin dashboard to track operations",
        "integrate users, payments, data, or external tools",
        "organize a backend that can grow without turning into patchwork",
      ],
      itemsLabel: "[ 04 / SERVICES ]",
      items: [
        {
          code: "01 / LP",
          title: "Landing Pages",
          body: "High-conversion marketing surfaces. Custom design, motion, and copy-aware structure. Built for speed and Lighthouse 95+.",
          bullets: ["Custom design + dev", "CMS or static", "A/B ready"],
          prices: ["Simple: from US$200", "Custom: from US$400"],
        },
        {
          code: "02 / SYS",
          title: "Custom Systems",
          body: "End-to-end fullstack apps. Auth, payments, dashboards, jobs. Clean architecture you can hand off without panic.",
          bullets: ["Auth + roles", "Stripe / billing", "Typed APIs"],
          prices: ["From US$600"],
        },
        {
          code: "03 / INT",
          title: "Internal Tools",
          body: "Admin panels and ops dashboards that replace your fragile spreadsheet. Fast to iterate, hard to break.",
          bullets: ["Role-based UI", "CRUD + reports", "Audit logs"],
          prices: ["From US$400"],
        },
        {
          code: "04 / AUTO",
          title: "Automation & Integrations",
          body: "Webhooks, queues and API glue between the tools you already use. Less manual work, more leverage.",
          bullets: ["Make / Zapier", "Custom workers", "CRM / Stripe"],
          prices: ["From US$400"],
        },
      ],
    },
    work: {
      title: "Real projects",
      intro:
        "Public repositories with clear technical scope. No inflated metrics and no claims of finished products when they are still a prototype or technical base.",
      modalStackLabel: "Stack",
      modalHighlightsLabel: "Highlights",
      modalRepoLabel: "Open on GitHub",
      modalLiveLabel: "Open demo",
      projects: [
        {
          title: "PRISMA (UNIRIO)",
          year: "2025",
          body: "Institutional platform for publishing academic projects, organizing access permissions, and giving teams a structured admin area instead of manual content updates.",
          highlights: [
            "Public catalog backed by admin workflows",
            "Role-based access for protected internal areas",
            "Modular base prepared for product evolution",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ"],
          repoUrl: "https://github.com/pablozr/PRISMA",
        },
        {
          title: "SIEPA Front",
          year: "2025",
          body: "Frontend foundation for a project-management ecosystem, with protected areas, session continuity, and reusable structure for catalog and admin screens.",
          highlights: [
            "Feature-based Angular module organization",
            "Protected routes with session rehydration",
            "Foundations for catalog and admin areas",
          ],
          stack: ["Angular 19", "TypeScript", "PrimeNG"],
          repoUrl: "https://github.com/pablozr/siepa-front",
        },
        {
          title: "WiredApply",
          year: "2025",
          body: "Tool to organize job-search routines, prioritize better-fit opportunities, and turn applications into a trackable daily workflow.",
          highlights: [
            "Opportunity ranking to reduce manual filtering",
            "Application tracking with user feedback",
            "Daily digest to keep the routine moving",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
          repoUrl: "https://github.com/pablozr/wired-apply",
        },
        {
          title: "Self Checkout Monolith",
          year: "2025",
          body: "Restaurant self-checkout system for digital menus, online payment, and real-time operational visibility from the admin panel.",
          highlights: [
            "Stripe checkout with safer payment reconciliation",
            "Table-based carts to reduce order friction",
            "Real-time updates for admin monitoring",
          ],
          stack: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "RabbitMQ"],
          repoUrl: "https://github.com/pablozr/self-checkout-monolith",
        },
        {
          title: "Qual é o Segredo?",
          year: "2024",
          body: "Logic game in JavaScript where players infer a secret number from clues, with Supabase persistence for clues, stats, and game time.",
          highlights: [
            "Live deployment for public access",
            "Supabase persistence for game data",
            "Stat tracking and timed sessions",
          ],
          stack: ["JavaScript", "Supabase", "Vercel"],
          repoUrl: "https://github.com/pablozr/qual-e-o-segredo",
          liveUrl: "https://qual-e-o-segredo.vercel.app",
        },
      ],
    },
    process: {
      titleLine1: "From first call to",
      titleAccent: "production",
      titleLine2: "in four honest steps.",
      body: "A simple flow to turn a loose need into a validated delivery. You understand the scope, review staging builds, and receive code that can keep evolving.",
      meta: ["avg. 3-6 weeks", "fixed price", "clear scope"],
      steps: [
        {
          k: "01",
          t: "Discovery",
          d: "A 30-minute call to map the real problem, not the surface ask. You leave with clarity, even if we never work together.",
          meta: "30 min · free",
          deliver: ["Problem brief", "Tech direction", "Rough estimate"],
        },
        {
          k: "02",
          t: "Scope",
          d: "Fixed-price proposal with milestones, deliverables and a hard timeline. No hourly billing surprises.",
          meta: "48h turnaround",
          deliver: ["Milestones", "Fixed quote", "Start date"],
        },
        {
          k: "03",
          t: "Build",
          d: "Weekly demos, shared staging from day one, and continuous visibility into progress. No black-box weeks of silence.",
          meta: "weekly demos",
          deliver: ["Staging URL", "Weekly Loom", "Slack channel"],
        },
        {
          k: "04",
          t: "Ship",
          d: "Deploy, monitor, document. You get the keys, the code and the runbook with zero dependency on me.",
          meta: "handover included",
          deliver: ["Production deploy", "Docs + runbook", "30-day support"],
        },
      ],
    },
    about: {
      titleLine1: "Websites and systems for small businesses",
      titleLine2: "that want to look professional online.",
      p1: "I help small companies, independent professionals, and local businesses turn an improvised digital presence into something clearer, better-looking, and more trustworthy.",
      p2: "I build websites, landing pages, and web solutions to present services, make WhatsApp contact easier, and improve how customers find and understand the business.",
      p3: "My focus is delivering something easy to use, well structured, and ready to build confidence from the first visit.",
      p4: "Behind the scenes, projects can include responsive pages, forms, WhatsApp buttons, Instagram integration, basic local SEO, internal panels, automation, and custom systems.",
      stats: [
        { k: "Responsive websites", v: "good navigation on mobile and desktop" },
        { k: "WhatsApp and contact", v: "clear paths to receive messages" },
        { k: "Basic local SEO", v: "structure to be found more easily" },
        { k: "Simple systems", v: "panels, forms, and custom automation" },
      ],
    },
    faq: {
      titleLine1: "Frequently",
      titleLine2: "asked.",
      preContact: "Something not covered here?",
      contactLink: "Send a message",
      postContact: "— I reply within 24 hours.",
      items: [
        {
          q: "How much does a project cost?",
          a: "I use base prices to set expectations early. Simple landing pages start at US$200 and custom ones at US$400; custom systems start at US$600; internal tools and automation start at US$400. Final pricing depends on scope, timeline and integrations.",
        },
        {
          q: "How long until I see results?",
          a: "Landing pages ship in 1-2 weeks. Custom systems and dashboards take 3-6 weeks depending on scope. You see a staging URL from week one and weekly demos throughout.",
        },
        {
          q: "Do I own the code?",
          a: "Yes, 100%. Code, design files, infrastructure access and documentation are handed over on completion. Zero lock-in.",
        },
        {
          q: "What is your stack?",
          a: "I use FastAPI and Spring Boot for APIs and business rules, PostgreSQL and Redis for data and performance, RabbitMQ for queues and async processing, Docker for predictable environments, and Angular for dashboards and web interfaces.",
        },
        {
          q: "Do you offer support after launch?",
          a: "Every project includes 30 days of free post-launch support for bug fixes. After that, optional monthly retainers are available.",
        },
        {
          q: "Can you work with my existing team?",
          a: "Absolutely. I integrate into your Slack, Linear/Jira, GitHub, and team rituals as needed, with clear communication and consistent alignment.",
        },
      ],
    },
    contact: {
      titleLine1: "Have a project",
      titleLine2: "in mind?",
      body: "Tell me about it, even if it is still rough. I reply within 24h with honest feedback on scope, timeline and price.",
      details: [
        { k: "Email", v: "pablo.farina28@outlook.com" },
        { k: "Response", v: "Under 24h" },
      ],
      labels: {
        name: "Name",
        email: "Email",
        budget: "Budget",
        project: "Project",
      },
      placeholders: {
        name: "Your name",
        email: "you@company.com",
        budget: "e.g. 5k - 10k (optional)",
        project: "What are you trying to build?",
      },
      statusIdle: "Opens your mail client with everything filled in.",
      statusSent: "✓ Opened your mail client — see you on the other side.",
      submitIdle: "Send message",
      submitSending: "Sending...",
      errors: {
        nameRequired: "Name is required",
        invalidEmail: "Invalid email",
        messageMin: "Tell me a bit more (10+ chars)",
      },
      mail: {
        subjectPrefix: "New project",
        fieldName: "Name",
        fieldEmail: "Email",
        fieldBudget: "Budget",
        budgetFallback: "-",
      },
    },
    footer: {
      rights: "all systems nominal",
    },
    meta: {
      title: "Pablo Farina — Freelance Fullstack Developer",
      description:
        "Freelance fullstack developer building landing pages, custom systems, internal tools and automation.",
      ogTitle: "Pablo Farina — Freelance Fullstack Developer",
      ogDescription: "Landing pages, custom systems, internal tools and automation.",
      ogImageAlt: "Pablo Farina portfolio preview",
    },
  },
};
