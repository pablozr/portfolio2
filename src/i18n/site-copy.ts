export type Locale = "pt-BR" | "en";

export const DEFAULT_LOCALE: Locale = "pt-BR";

type SiteCopy = {
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
    ctaWork: string;
  };
  services: {
    title: string;
    itemsLabel: string;
    items: Array<{
      code: string;
      title: string;
      body: string;
      bullets: string[];
      prices: string[];
    }>;
  };
  work: {
    title: string;
    itemsLabel: string;
    projects: Array<{
      index: string;
      tag: string;
      title: string;
      year: string;
      body: string;
      alt: string;
    }>;
  };
  testimonials: {
    title: string;
    itemsLabel: string;
    quotes: Array<{ body: string; name: string; role: string; company: string }>;
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
    stats: Array<{ k: string; v: string }>;
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
    status: string;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  "pt-BR": {
    nav: {
      work: "projetos",
      services: "servicos",
      process: "processo",
      about: "sobre",
      faq: "faq",
      ping: "contato",
      languageLabel: "Idioma",
    },
    hero: {
      availability: "",
      titleLine1: "Desenvolvimento fullstack",
      titleLine2: "para times que precisam de tudo",
      titleAccent: "bem feito.",
      body: "Sou desenvolvedor freelancer e entrego landing pages, sistemas sob medida, ferramentas internas e automacoes com cuidado e prazo respeitado.",
      ctaStart: "Iniciar projeto",
      ctaWork: "Ver projetos selecionados",
    },
    services: {
      title: "O que eu construo",
      itemsLabel: "[ 04 / SERVICOS ]",
      items: [
        {
          code: "01 / LP",
          title: "Landing Pages",
          body: "Superficies de marketing para alta conversao. Design customizado, motion e estrutura pensada para copy. Feitas para performance e Lighthouse 95+.",
          bullets: ["Design + dev custom", "Com CMS ou estatico", "Pronto para A/B"],
          prices: [
            "Simples: a partir de R$600",
            "Personalizada: a partir de R$1.000",
          ],
        },
        {
          code: "02 / SYS",
          title: "Sistemas Sob Medida",
          body: "Aplicacoes fullstack ponta a ponta. Auth, pagamentos, dashboards e jobs. Arquitetura limpa para sua equipe manter sem caos.",
          bullets: ["Auth + perfis", "Stripe / cobranca", "APIs tipadas"],
          prices: ["A partir de R$2.000"],
        },
        {
          code: "03 / INT",
          title: "Ferramentas Internas",
          body: "Painel admin e dashboards operacionais no lugar da planilha fragil. Rapidos para evoluir, dificeis de quebrar.",
          bullets: ["UI por permissao", "CRUD + relatorios", "Logs de auditoria"],
          prices: ["A partir de R$1.500"],
        },
        {
          code: "04 / AUTO",
          title: "Automacao e Integracoes",
          body: "Webhooks, filas e colagem de API entre ferramentas que voce ja usa. Menos trabalho manual, mais alavancagem.",
          bullets: ["n8n / Make", "Workers custom", "CRM / Stripe / GPT"],
          prices: ["A partir de R$1.500"],
        },
      ],
    },
    work: {
      title: "Entregas recentes",
      itemsLabel: "[ 03 / CASE_STUDIES ]",
      projects: [
        {
          index: "01",
          tag: "LOGISTICA / SISTEMA",
          title: "Vanguard Logistics Engine",
          year: "2025",
          body: "Sistema de rastreamento em tempo real para frota com mais de 200 veiculos. Mapa ao vivo, despacho e cobranca — reduziu o tempo manual de despacho em 40%.",
          alt: "Dashboard de plataforma logistica com graficos e mapa ao vivo",
        },
        {
          index: "02",
          tag: "IA / FERRAMENTA INTERNA",
          title: "Nexus Intelligence Hub",
          year: "2025",
          body: "Dashboard interno para time de pesquisa em IA monitorar custo de tokens, pipelines e incidentes em tres regioes.",
          alt: "Visualizacao abstrata de rede neural em verde neon",
        },
        {
          index: "03",
          tag: "AUTOMACAO / INTEGRACOES",
          title: "Flux Ops Pipeline",
          year: "2024",
          body: "Workflow engine custom conectando CRM, Stripe e GPT. Roteia leads automaticamente, cria respostas e atualiza cobranca sem trabalho manual.",
          alt: "Diagrama de fluxo de automacao conectando nos de API",
        },
      ],
    },
    testimonials: {
      title: "O que clientes dizem",
      itemsLabel: "[ 05 / DEPOIMENTOS ]",
      quotes: [
        {
          body: "Entregou nosso dashboard interno de operacoes em tres semanas. Substituiu uma planilha fragil que consumia horas por dia. Comunicacao assincrona, objetiva, zero drama.",
          name: "Marina Costa",
          role: "Head de Operacoes",
          company: "Vanguard Logistics",
        },
        {
          body: "Combinacao rara de bom gosto e rigor de engenharia. A landing page converteu 3,2x mais que a anterior e o codigo ficou realmente manutencivel.",
          name: "Daniel Reis",
          role: "Founder",
          company: "Nexus AI",
        },
        {
          body: "Pegou uma ideia de automacao confusa e transformou em pipeline limpo entre Stripe, nosso CRM e GPT. Economizamos cerca de 15 horas por semana.",
          name: "Julia Mendes",
          role: "COO",
          company: "Flux Studio",
        },
      ],
    },
    process: {
      titleLine1: "Da primeira call ate",
      titleAccent: "producao",
      titleLine2: "em quatro etapas honestas.",
      body: "Um desenvolvedor. Sem camada de agencia, sem repasse para junior, sem surpresa em fatura. Voce sempre sabe o que esta sendo construido, por que, e quando entrega.",
      meta: ["media de 3-6 semanas", "preco fechado", "async por padrao"],
      steps: [
        {
          k: "01",
          t: "Descoberta",
          d: "Uma call de 30 minutos para mapear o problema real, nao apenas o pedido superficial. Voce sai com clareza mesmo que nao fechemos.",
          meta: "30 min · gratis",
          deliver: ["Resumo do problema", "Direcao tecnica", "Estimativa inicial"],
        },
        {
          k: "02",
          t: "Escopo",
          d: "Proposta de preco fixo com marcos, entregaveis e cronograma fechado. Sem surpresas de cobranca por hora.",
          meta: "retorno em 48h",
          deliver: ["Marcos", "Orcamento fixo", "Data de inicio"],
        },
        {
          k: "03",
          t: "Construcao",
          d: "Demos semanais, updates async e ambiente de staging desde o primeiro dia. Nada de semanas em silencio em caixa-preta.",
          meta: "demos semanais",
          deliver: ["URL de staging", "Loom semanal", "Canal no Slack"],
        },
        {
          k: "04",
          t: "Entrega",
          d: "Deploy, monitoramento e documentacao. Voce recebe as chaves, o codigo e o runbook sem dependencia de mim.",
          meta: "handover incluso",
          deliver: ["Deploy em producao", "Docs + runbook", "Suporte de 30 dias"],
        },
      ],
    },
    about: {
      titleLine1: "Um desenvolvedor.",
      titleLine2: "Seis anos entregando.",
      p1: "Sou freelancer fullstack e trabalho com fundadores, times de produto e liderancas de operacoes que precisam de software entregue de verdade.",
      p2: "Antes de atuar solo, liderei engenharia em duas startups early-stage e entreguei sistemas usados por dezenas de milhares de usuarios diariamente.",
      p3: "Sem camadas de agencia. Sem repasse para junior. Voce fala com quem escreve o codigo.",
      stats: [
        { k: "Anos", v: "6+" },
        { k: "Projetos", v: "40+" },
        { k: "NPS Medio", v: "9.4" },
        { k: "No prazo", v: "100%" },
      ],
    },
    faq: {
      titleLine1: "Perguntas",
      titleLine2: "frequentes.",
      preContact: "Faltou algo?",
      contactLink: "Me manda uma mensagem",
      postContact: "— respondo em ate 24 horas.",
      items: [
        {
          q: "Quanto custa um projeto?",
          a: "Trabalho com valores base para dar previsibilidade desde o inicio. Landing page simples comeca em R$600 e personalizada em R$1.000; sistemas sob medida em R$2.000; ferramentas internas e automacoes em R$1.500. O valor final varia conforme escopo, prazo e integracoes.",
        },
        {
          q: "Em quanto tempo vejo resultado?",
          a: "Landing pages normalmente saem em 1 a 2 semanas. Sistemas e dashboards em 3 a 6 semanas. Voce recebe staging desde a primeira semana e demos recorrentes.",
        },
        {
          q: "O codigo fica comigo?",
          a: "Sim, 100%. Codigo, arquivos de design, acesso a infra e documentacao sao entregues no encerramento. Zero lock-in.",
        },
        {
          q: "Qual stack voce usa?",
          a: "TypeScript ponta a ponta. React/Next.js ou TanStack Start no frontend, Node ou Python no backend, Postgres para dados, Stripe para pagamentos e Supabase ou self-hosted conforme o projeto.",
        },
        {
          q: "Voce oferece suporte depois do lancamento?",
          a: "Todo projeto inclui 30 dias de suporte gratuito pos-lancamento para correcao de bugs. Depois disso, posso atuar em retainer mensal opcional.",
        },
        {
          q: "Voce trabalha junto com meu time atual?",
          a: "Sim. Integro com Slack, Linear/Jira, GitHub e rituais do time quando necessario. Async por padrao, sync quando faz diferenca.",
        },
      ],
    },
    contact: {
      titleLine1: "Tem um projeto",
      titleLine2: "em mente?",
      body: "Me conta sobre ele, mesmo que ainda esteja embrionario. Eu respondo em ate 24h com feedback honesto de escopo, prazo e investimento.",
      details: [
        { k: "Email", v: "hello@pablofarina.dev" },
        { k: "Resposta", v: "Em ate 24h" },
        { k: "Status", v: "Aceitando projetos para Q3" },
      ],
      labels: {
        name: "Nome",
        email: "Email",
        budget: "Orcamento",
        project: "Projeto",
      },
      placeholders: {
        name: "Seu nome",
        email: "voce@empresa.com",
        budget: "ex.: 5k — 10k (opcional)",
        project: "O que voce quer construir?",
      },
      statusIdle: "Abre seu cliente de email com tudo preenchido.",
      statusSent: "✓ Cliente de email aberto — nos falamos em breve.",
      submitIdle: "Enviar mensagem",
      submitSending: "Enviando...",
      errors: {
        nameRequired: "Nome e obrigatorio",
        invalidEmail: "Email invalido",
        messageMin: "Conte um pouco mais (10+ caracteres)",
      },
      mail: {
        subjectPrefix: "Novo projeto",
        fieldName: "Nome",
        fieldEmail: "Email",
        fieldBudget: "Orcamento",
        budgetFallback: "-",
      },
    },
    footer: {
      rights: "todos os sistemas nominais",
      status: "Status: aceitando clientes",
    },
    meta: {
      title: "Pablo Farina — Desenvolvedor Fullstack Freelancer",
      description:
        "Desenvolvedor fullstack freelancer criando landing pages, sistemas sob medida, ferramentas internas e automacoes.",
      ogTitle: "Pablo Farina — Desenvolvedor Fullstack Freelancer",
      ogDescription:
        "Landing pages, sistemas sob medida, ferramentas internas e automacoes.",
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
      titleLine1: "Fullstack development",
      titleLine2: "for teams that need it",
      titleAccent: "built right.",
      body: "I am a freelance developer designing and shipping landing pages, custom systems, internal tools and automation flows with care and on-time delivery.",
      ctaStart: "Start a project",
      ctaWork: "View selected work",
    },
    services: {
      title: "What I build",
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
          bullets: ["n8n / Make", "Custom workers", "CRM / Stripe / GPT"],
          prices: ["From US$400"],
        },
      ],
    },
    work: {
      title: "Recent shipments",
      itemsLabel: "[ 03 / CASE_STUDIES ]",
      projects: [
        {
          index: "01",
          tag: "LOGISTICS / SYSTEM",
          title: "Vanguard Logistics Engine",
          year: "2025",
          body: "Real-time tracking system for a 200+ vehicle fleet. Live map, dispatch, billing — reduced manual dispatch time by 40%.",
          alt: "Dashboard for a logistics platform with charts and a live map",
        },
        {
          index: "02",
          tag: "AI / INTERNAL TOOL",
          title: "Nexus Intelligence Hub",
          year: "2025",
          body: "Internal dashboard for an AI research team to monitor LLM token spend, pipelines and incidents across three regions.",
          alt: "Abstract neural network visualization in neon green",
        },
        {
          index: "03",
          tag: "AUTOMATION / INTEGRATIONS",
          title: "Flux Ops Pipeline",
          year: "2024",
          body: "Custom workflow engine connecting CRM, Stripe and GPT. Auto-routes leads, drafts replies and updates billing without humans in the loop.",
          alt: "Diagram of automation workflow connecting API nodes",
        },
      ],
    },
    testimonials: {
      title: "What clients say",
      itemsLabel: "[ 05 / TESTIMONIALS ]",
      quotes: [
        {
          body: "Shipped our internal ops dashboard in three weeks. Replaced a fragile spreadsheet that was costing us hours every day. Communication was async, sharp, zero drama.",
          name: "Marina Costa",
          role: "Head of Ops",
          company: "Vanguard Logistics",
        },
        {
          body: "Rare combo of taste and engineering rigor. The landing page he built converted 3.2x better than our previous one, and the codebase is something we can actually maintain.",
          name: "Daniel Reis",
          role: "Founder",
          company: "Nexus AI",
        },
        {
          body: "Took a messy automation idea and turned it into a clean pipeline between Stripe, our CRM and GPT. Saved us roughly 15 hours a week. Worth every penny.",
          name: "Júlia Mendes",
          role: "COO",
          company: "Flux Studio",
        },
      ],
    },
    process: {
      titleLine1: "From first call to",
      titleAccent: "production",
      titleLine2: "in four honest steps.",
      body: "One developer. No agency overhead, no junior hand-offs, no surprise invoices. You always know what is being built, why, and when it ships.",
      meta: ["avg. 3-6 weeks", "fixed price", "async by default"],
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
          d: "Weekly demos, async updates, shared staging from day one. You watch it come together with no black-box weeks of silence.",
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
      titleLine1: "One developer.",
      titleLine2: "Six years of shipping.",
      p1: "I am a freelance fullstack developer working with founders, product teams and ops leads who need software that actually ships.",
      p2: "Before going solo I led engineering at two early-stage startups and shipped systems used by tens of thousands of users daily.",
      p3: "No agency layers. No junior hand-offs. You talk to the person writing the code.",
      stats: [
        { k: "Years", v: "6+" },
        { k: "Projects", v: "40+" },
        { k: "Avg NPS", v: "9.4" },
        { k: "On-time", v: "100%" },
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
          a: "TypeScript end to end. React/Next.js or TanStack Start on the frontend, Node or Python on the backend, Postgres for data, Stripe for payments, Supabase or self-hosted depending on the project.",
        },
        {
          q: "Do you offer support after launch?",
          a: "Every project includes 30 days of free post-launch support for bug fixes. After that, optional monthly retainers are available.",
        },
        {
          q: "Can you work with my existing team?",
          a: "Absolutely. I integrate into your Slack, Linear/Jira, GitHub and stand-ups as needed. Async by default, sync when it matters.",
        },
      ],
    },
    contact: {
      titleLine1: "Have a project",
      titleLine2: "in mind?",
      body: "Tell me about it, even if it is still rough. I reply within 24h with honest feedback on scope, timeline and price.",
      details: [
        { k: "Email", v: "hello@pablofarina.dev" },
        { k: "Response", v: "Under 24h" },
        { k: "Status", v: "Accepting Q3 projects" },
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
      status: "Status: accepting clients",
    },
    meta: {
      title: "Pablo Farina — Freelance Fullstack Developer",
      description:
        "Freelance fullstack developer building landing pages, custom systems, internal tools and automation.",
      ogTitle: "Pablo Farina — Freelance Fullstack Developer",
      ogDescription:
        "Landing pages, custom systems, internal tools and automation.",
    },
  },
};
