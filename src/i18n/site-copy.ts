import type { Locale } from "./locales";

export type Status = "active" | "research" | "paused" | "shipped" | "ongoing";

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  ui: {
    skip: string;
    nav: Array<{ href: string; label: string }>;
    connect: string;
    boot: string[];
    bootSkip: string;
    statusLabels: Record<Status, string>;
    repo: string;
    live: string;
    motionOn: string;
    motionOff: string;
    backToTop: string;
  };
  hero: {
    kicker: string;
    role: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    readout: Array<{ k: string; v: string }>;
  };
  whoami: {
    layer: string;
    title: string;
    paragraphs: string[];
    quote: string;
    facts: Array<{ k: string; v: string }>;
    photoAlt: string;
  };
  protocol: {
    layer: string;
    title: string;
    intro: string;
    jobs: Array<{
      org: string;
      role: string;
      period: string;
      place: string;
      bullets: string[];
      stack: string[];
    }>;
    education: { label: string; school: string; degree: string; period: string };
  };
  signals: {
    layer: string;
    title: string;
    intro: string;
    items: Array<{
      code: string;
      name: string;
      status: Status;
      body: string;
      tags: string[];
      repoUrl?: string;
    }>;
    reading: { label: string; items: string[] };
  };
  archive: {
    layer: string;
    title: string;
    intro: string;
    projects: Array<{
      name: string;
      year: string;
      kind: string;
      body: string;
      stack: string[];
      repoUrl: string;
      liveUrl?: string;
      liveLabel?: string;
    }>;
    more: string;
  };
  stack: {
    layer: string;
    title: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  offline: {
    layer: string;
    title: string;
    body: string;
    items: string[];
  };
  connect: {
    layer: string;
    title: string;
    next: string;
    body: string;
    cta: string;
    cv: string;
    copy: string;
    copied: string;
    quote: string;
  };
};

const links = {
  prisma: "https://github.com/pablozr/PRISMA",
};

const shared = {
  stackGroups: {
    backend: ["Python", "FastAPI", "Java", "Spring Boot", "REST"],
    data: ["PostgreSQL", "Redis", "RabbitMQ", "MongoDB"],
    ai: ["RAG", "Embeddings", "BM25", "LLMs locais", "Agents"],
    front: ["TypeScript", "React 19", "Next.js 15", "Angular", "Phaser"],
    infra: ["Docker", "ERP integrations", "SSO", "WebRTC", "Bun test"],
    exploring: ["Rust", "GPUI", "Transformers", "OpenCode"],
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  "pt-BR": {
    meta: {
      title: "Pablo Farina — backend, arquitetura & IA aplicada",
      description:
        "Pablo Farina: desenvolvedor na Bagaggio e graduando da UNIRIO. Backend, arquitetura de software, RAG, agentes e ferramentas para desenvolvedores.",
      ogTitle: "Pablo Farina — present day, present time",
      ogDescription:
        "Backend, arquitetura, IA aplicada e ferramentas que ainda não existem direito.",
      ogImageAlt: "Pablo Farina — capa do portfólio",
    },
    ui: {
      skip: "Pular para o conteúdo",
      nav: [
        { href: "#whoami", label: "whoami" },
        { href: "#protocol", label: "protocolo" },
        { href: "#signals", label: "sinais" },
        { href: "#archive", label: "arquivo" },
      ],
      connect: "conectar",
      boot: [
        "NAVI BIOS v0.98 ........................ OK",
        "detectando nó local: rio de janeiro, br",
        "montando /dev/curiosidade .............. OK",
        "carregando backend.ko arquitetura.ko ia.ko",
        "handshake com a wired ....... ESTABELECIDO",
        "PRESENT DAY. PRESENT TIME.",
      ],
      bootSkip: "clique ou pressione qualquer tecla",
      statusLabels: {
        active: "ativo",
        research: "pesquisa",
        paused: "pausado",
        shipped: "entregue",
        ongoing: "contínuo",
      },
      repo: "código",
      live: "online",
      motionOn: "pausar animações",
      motionOff: "retomar animações",
      backToTop: "voltar ao topo",
    },
    hero: {
      kicker: "PRESENT DAY · PRESENT TIME",
      role: "backend · arquitetura de software · IA aplicada",
      body: "Eu construo para entender. Sistemas distribuídos, agentes, RAG e ferramentas para quem desenvolve — de preferência as que ainda não existem direito.",
      ctaPrimary: "entrar na wired",
      ctaSecondary: "abrir conexão",
      readout: [
        { k: "NODE", v: "Rio de Janeiro, BR" },
        { k: "LINK", v: "Bagaggio — estágio full stack" },
        { k: "UPLINK", v: "UNIRIO — Sistemas de Informação" },
        { k: "SEEKING", v: "posição júnior" },
      ],
    },
    whoami: {
      layer: "whoami",
      title:
        "De “quero ser um bom programador” para “quero entender como se constroem sistemas bons”.",
      paragraphs: [
        "Sou o Pablo, graduando em Sistemas de Informação na UNIRIO e estagiário full stack na Bagaggio. Comecei como dev web, mas hoje passo a maior parte do tempo em backend, arquitetura de software e IA aplicada — RAG, agentes, embeddings, sistemas distribuídos e ferramentas para desenvolvedores.",
        "Meu jeito de aprender é exploratório: começo com “não sei direito o que é isso” e pouco depois estou perguntando sobre detalhes de implementação. Entro em Rust, GPUI, LLMs locais ou BM25 sem dominar tudo antes, porque quero ver as peças funcionando por baixo — não só fazer rodar.",
        "Costumo transformar incômodos do dia a dia em hipóteses mais gerais. Quando agentes começaram a escrever código demais, a pergunta deixou de ser “como escrever código?” e virou “como manter compreensão, decisões e controle arquitetural?”. É desse tipo de problema — novo, ainda meio sem nome — que eu gosto.",
      ],
      quote:
        "curiosidade técnica + vontade de construir. entender a ideia não basta: preciso implementar para descobrir se ela funciona.",
      facts: [
        { k: "projetos internos entregues", v: "10+" },
        { k: "lojas usando o que construí", v: "200+" },
        { k: "idiomas", v: "PT nativo · EN C1" },
        { k: "cidadania", v: "BR · ES (UE)" },
      ],
      photoAlt: "Retrato de Pablo Farina com tratamento visual em tons de vermelho",
    },
    protocol: {
      layer: "protocolo",
      title: "Onde eu rodo em produção.",
      intro:
        "Experiência real, com usuários reais: automação de processos, integrações entre sistemas e entregas de ponta a ponta.",
      jobs: [
        {
          org: "Bagaggio",
          role: "Estagiário de Desenvolvimento Full Stack",
          period: "set 2025 — atual",
          place: "Rio de Janeiro",
          bullets: [
            "Mais de 10 projetos internos estratégicos, usados por 200+ lojas e por todos os setores da empresa — trocando processos manuais por aplicações simples e reduzindo a dependência de soluções terceirizadas.",
            "Integrações REST entre serviços externos, ERP e APIs internas, centralizando a troca de dados entre sistemas corporativos.",
            "Entregas de ponta a ponta: reuniões e levantamento de requisitos, definição, execução, deploy e monitoramento da saúde das APIs.",
            "Um dos projetos melhorou tempo de resposta, nota e posição da empresa em indicadores de reputação — e apoiou a conquista de uma premiação.",
            "Manutenção de legado em Java/Spring Boot e implementação de login único (SSO) em um portal interno.",
          ],
          stack: ["Python", "FastAPI", "Java", "Spring Boot", "ERP", "Docker"],
        },
        {
          org: "Bessa",
          role: "Desenvolvedor Full Stack · freelance",
          period: "mar — jun 2025",
          place: "remoto",
          bullets: [
            "Evolução de uma plataforma contábil em Next.js 15 e React 19, com módulos de comunicação, automação de processos e gestão de dados.",
            "Arquitetura modular e componentes reutilizáveis em TypeScript para manter consistência entre módulos.",
            "Testes unitários com Bun e migração de arquivos para a nuvem.",
          ],
          stack: ["Next.js 15", "React 19", "TypeScript", "Bun"],
        },
        {
          org: "UNIRIO",
          role: "Desenvolvedor de Jogos Educativos",
          period: "ago 2024 — atual",
          place: "Rio de Janeiro",
          bullets: [
            "Jogos de tabuleiro digitais em JavaScript e Phaser que transformam conceitos matemáticos em experiências interativas.",
            "Documentação técnica, manutenção evolutiva e melhorias de usabilidade e desempenho.",
          ],
          stack: ["JavaScript", "Phaser"],
        },
        {
          org: "UNIRIO · Clube de Xadrez",
          role: "Bolsista de Extensão",
          period: "nov 2023 — ago 2024",
          place: "Rio de Janeiro",
          bullets: [
            "Estruturei um grupo de estudos de xadrez, liderei os encontros presenciais e organizei campeonatos internos.",
          ],
          stack: ["liderança", "ensino"],
        },
      ],
      education: {
        label: "formação",
        school: "UNIRIO",
        degree: "Bacharelado em Sistemas de Informação",
        period: "2023 — 2027",
      },
    },
    signals: {
      layer: "sinais",
      title: "Problemas que ainda não têm nome direito.",
      intro:
        "O que estou pesquisando e construindo agora. Algumas coisas são produto; outras ainda são hipótese.",
      items: [
        {
          code: "JVG",
          name: "JevGuard",
          status: "research",
          body: "Nasceu de um problema concreto: agentes de código que alteram muito além do necessário. Virou a ideia de um semantic linter / review gate — algo que entende a intenção de uma mudança e barra o que sai do escopo antes do merge.",
          tags: ["agents", "code review", "LLM", "análise semântica"],
        },
        {
          code: "MEM",
          name: "Memória decisional",
          status: "research",
          body: "Se agentes produzem cada vez mais código, o gargalo passa a ser compreensão. Exploro formas de registrar e recuperar decisões arquiteturais — o porquê, não só o quê — para que pessoas e agentes mantenham controle sobre sistemas que crescem rápido.",
          tags: ["RAG", "embeddings", "BM25", "arquitetura"],
        },
        {
          code: "PRS",
          name: "PRISMA · TCC",
          status: "active",
          body: "Nasceu do SABE e se conecta ao FLOW: facilitar o acesso a oportunidades acadêmicas da UNIRIO. Por cima do produto, uma camada de recomendação semântica — embeddings, similaridade e avaliação com precisão e recall.",
          tags: ["FastAPI", "Angular", "PostgreSQL", "embeddings"],
          repoUrl: links.prisma,
        },
        {
          code: "DRV",
          name: "Dirigindo sistemas que programam",
          status: "ongoing",
          body: "Uma segunda disciplina ao lado da programação: qual modelo é bom para pensar e qual é bom para implementar, como separar tarefas, dar contexto, impor políticas e impedir que o agente saia do escopo.",
          tags: ["OpenCode", "LLMs locais", "políticas", "contexto"],
        },
        {
          code: "CRC",
          name: "Crucible",
          status: "paused",
          body: "Pausado de propósito para concentrar energia em outro projeto. Perseguir dez ideias ao mesmo tempo é o meu risco favorito — estou aprendendo a escolher.",
          tags: ["foco"],
        },
      ],
      reading: {
        label: "na fila de estudo",
        items: [
          "Transformers a partir dos princípios",
          "trade-offs de arquitetura de software",
          "sistemas distribuídos",
          "Rust + GPUI",
        ],
      },
    },
    archive: {
      layer: "arquivo",
      title: "Coisas que já saíram do papel.",
      intro: "Projetos completos, com backend, filas, cache, autenticação e integrações.",
      projects: [
        {
          name: "Self Checkout Monolith",
          year: "2025",
          kind: "commerce / pagamentos",
          body: "Restaurante vendendo pelo próprio menu digital: carrinho por mesa, pagamento online com Stripe e reconciliação segura, pedidos acompanhados em tempo real no painel.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Stripe"],
          repoUrl: "https://github.com/pablozr/self-checkout-monolith",
        },
        {
          name: "WiredApply",
          year: "2025",
          kind: "carreira / automação",
          body: "Organiza a busca de vagas: ranking de oportunidades por aderência, acompanhamento de candidaturas e resumo diário para manter a rotina ativa.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
          repoUrl: "https://github.com/pablozr/wired-apply",
        },
        {
          name: "Subscription Monolith",
          year: "2025",
          kind: "finanças / controle",
          body: "Acompanha assinaturas, dispara lembretes antes da renovação e dá visibilidade sobre custos recorrentes antes que virem desperdício.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "SMTP"],
          repoUrl: "https://github.com/pablozr/subscription-monolith",
        },
        {
          name: "FastAPI / Angular Templates",
          year: "2025",
          kind: "developer tools",
          body: "Bases reutilizáveis com autenticação, organização por módulos e convenções claras desde o primeiro commit — menos setup repetitivo, menos bagunça depois.",
          stack: ["FastAPI", "Angular", "TypeScript", "Docker"],
          repoUrl: "https://github.com/pablozr/fastapi-template",
          liveUrl: "https://github.com/pablozr/angular-template",
          liveLabel: "angular",
        },
        {
          name: "SIEPA Front",
          year: "2025",
          kind: "arquitetura frontend",
          body: "Frontend de gestão de projetos com rotas protegidas, recuperação de sessão e módulos Angular organizados por funcionalidade.",
          stack: ["Angular 19", "TypeScript", "PrimeNG"],
          repoUrl: "https://github.com/pablozr/siepa-front",
        },
        {
          name: "Qual é o Segredo?",
          year: "2024",
          kind: "experiência interativa",
          body: "Jogo de lógica para descobrir um número secreto a partir de pistas, com estatísticas e sessões cronometradas persistidas no Supabase.",
          stack: ["JavaScript", "Supabase", "Vercel"],
          repoUrl: "https://github.com/pablozr/qual-e-o-segredo",
          liveUrl: "https://qual-e-o-segredo.vercel.app",
        },
      ],
      more: "mais código no github",
    },
    stack: {
      layer: "stack",
      title: "Ferramentas. Não identidade.",
      groups: [
        { label: "backend", items: shared.stackGroups.backend },
        { label: "dados & mensageria", items: shared.stackGroups.data },
        { label: "ia aplicada", items: shared.stackGroups.ai },
        { label: "frontend", items: shared.stackGroups.front },
        { label: "infra & integração", items: shared.stackGroups.infra },
        { label: "explorando", items: shared.stackGroups.exploring },
      ],
    },
    offline: {
      layer: "offline",
      title: "Fora da wired.",
      body: "Não existe muita separação entre o meu gosto técnico e o visual. Prefiro coisas minimalistas, confortáveis e bem distantes do SaaS genérico — este site incluso.",
      items: ["hard techno", "emo", "anime", "cybersigilism", "tatuagens", "xadrez"],
    },
    connect: {
      layer: "conectar",
      title: "Próximo nó.",
      next: "Procuro uma posição júnior para ganhar muita experiência prática em backend e sistemas. Depois da graduação, Europa — Suíça no topo da lista, com cidadania espanhola.",
      body: "Se você está construindo algo difícil e interessante, me chama.",
      cta: "enviar e-mail",
      cv: "baixar currículo",
      copy: "copiar e-mail",
      copied: "copiado",
      quote: "No matter where you go, everyone's connected.",
    },
  },
  en: {
    meta: {
      title: "Pablo Farina — backend, architecture & applied AI",
      description:
        "Pablo Farina: developer at Bagaggio and Information Systems student at UNIRIO. Backend, software architecture, RAG, agents and developer tools.",
      ogTitle: "Pablo Farina — present day, present time",
      ogDescription: "Backend, architecture, applied AI and tools that don't quite exist yet.",
      ogImageAlt: "Pablo Farina — portfolio cover",
    },
    ui: {
      skip: "Skip to content",
      nav: [
        { href: "#whoami", label: "whoami" },
        { href: "#protocol", label: "protocol" },
        { href: "#signals", label: "signals" },
        { href: "#archive", label: "archive" },
      ],
      connect: "connect",
      boot: [
        "NAVI BIOS v0.98 ........................ OK",
        "resolving local node: rio de janeiro, br",
        "mounting /dev/curiosity ................ OK",
        "loading backend.ko architecture.ko ai.ko",
        "handshake with the wired ....... ESTABLISHED",
        "PRESENT DAY. PRESENT TIME.",
      ],
      bootSkip: "click or press any key",
      statusLabels: {
        active: "active",
        research: "research",
        paused: "paused",
        shipped: "shipped",
        ongoing: "ongoing",
      },
      repo: "source",
      live: "live",
      motionOn: "pause motion",
      motionOff: "resume motion",
      backToTop: "back to top",
    },
    hero: {
      kicker: "PRESENT DAY · PRESENT TIME",
      role: "backend · software architecture · applied AI",
      body: "I build to understand. Distributed systems, agents, RAG and developer tools — preferably the ones that don't quite exist yet.",
      ctaPrimary: "enter the wired",
      ctaSecondary: "open a connection",
      readout: [
        { k: "NODE", v: "Rio de Janeiro, BR" },
        { k: "LINK", v: "Bagaggio — full stack intern" },
        { k: "UPLINK", v: "UNIRIO — Information Systems" },
        { k: "SEEKING", v: "junior role" },
      ],
    },
    whoami: {
      layer: "whoami",
      title:
        "From “I want to be a good programmer” to “I want to understand how good systems get built”.",
      paragraphs: [
        "I'm Pablo, an Information Systems student at UNIRIO and a full stack intern at Bagaggio. I started out as a web developer, but these days I spend most of my time on backend, software architecture and applied AI — RAG, agents, embeddings, distributed systems and developer tools.",
        "I learn by exploring: I start with “I don't really know what this is” and shortly after I'm asking about implementation details. I dive into Rust, GPUI, local LLMs or BM25 without mastering them first, because I want to see the parts working underneath — not just get it running.",
        "I tend to turn everyday friction into broader hypotheses. When agents started writing too much code, the question stopped being “how do we write code?” and became “how do we keep understanding, decisions and architectural control?”. That kind of problem — new, not quite named yet — is what I'm drawn to.",
      ],
      quote:
        "technical curiosity + the urge to build. understanding an idea isn't enough: I need to implement it to find out if it works.",
      facts: [
        { k: "internal projects shipped", v: "10+" },
        { k: "stores using what I built", v: "200+" },
        { k: "languages", v: "PT native · EN C1" },
        { k: "citizenship", v: "BR · ES (EU)" },
      ],
      photoAlt: "Portrait of Pablo Farina with a red-toned visual treatment",
    },
    protocol: {
      layer: "protocol",
      title: "Where I run in production.",
      intro:
        "Real experience with real users: process automation, integrations between systems and end-to-end delivery.",
      jobs: [
        {
          org: "Bagaggio",
          role: "Full Stack Development Intern",
          period: "sep 2025 — now",
          place: "Rio de Janeiro",
          bullets: [
            "10+ strategic internal projects used by 200+ stores and every department — replacing manual processes with simple applications and reducing reliance on third-party solutions.",
            "REST integrations between external services, ERP systems and internal APIs, centralizing data exchange across corporate systems.",
            "End-to-end delivery: meetings and requirements gathering, definition, execution, deployment and API health monitoring.",
            "One project improved response time, rating and the company's position in reputation rankings — and helped win an award.",
            "Maintaining legacy Java/Spring Boot applications and implementing single sign-on (SSO) for an internal portal.",
          ],
          stack: ["Python", "FastAPI", "Java", "Spring Boot", "ERP", "Docker"],
        },
        {
          org: "Bessa",
          role: "Full Stack Developer · freelance",
          period: "mar — jun 2025",
          place: "remote",
          bullets: [
            "Evolved an accounting platform in Next.js 15 and React 19, with communication, process automation and data management modules.",
            "Modular architecture and reusable TypeScript components to keep modules consistent.",
            "Unit tests with Bun and migration of files to the cloud.",
          ],
          stack: ["Next.js 15", "React 19", "TypeScript", "Bun"],
        },
        {
          org: "UNIRIO",
          role: "Educational Game Developer",
          period: "aug 2024 — now",
          place: "Rio de Janeiro",
          bullets: [
            "Digital board games in JavaScript and Phaser that turn math concepts into interactive experiences.",
            "Technical documentation, ongoing maintenance and usability and performance improvements.",
          ],
          stack: ["JavaScript", "Phaser"],
        },
        {
          org: "UNIRIO · Chess Club",
          role: "Outreach Scholarship Holder",
          period: "nov 2023 — aug 2024",
          place: "Rio de Janeiro",
          bullets: [
            "Set up a chess study group, led the in-person meetings and organized internal tournaments.",
          ],
          stack: ["leadership", "teaching"],
        },
      ],
      education: {
        label: "education",
        school: "UNIRIO",
        degree: "B.Sc. in Information Systems",
        period: "2023 — 2027",
      },
    },
    signals: {
      layer: "signals",
      title: "Problems that don't quite have a name yet.",
      intro:
        "What I'm researching and building right now. Some of it is product; some of it is still a hypothesis.",
      items: [
        {
          code: "JVG",
          name: "JevGuard",
          status: "research",
          body: "Born from a concrete problem: coding agents that change far more than they need to. It grew into a semantic linter / review gate — something that understands the intent of a change and blocks what falls outside its scope before merge.",
          tags: ["agents", "code review", "LLM", "semantic analysis"],
        },
        {
          code: "MEM",
          name: "Decision memory",
          status: "research",
          body: "If agents produce more and more code, the bottleneck becomes understanding. I'm exploring ways to record and retrieve architectural decisions — the why, not just the what — so people and agents stay in control of fast-growing systems.",
          tags: ["RAG", "embeddings", "BM25", "architecture"],
        },
        {
          code: "PRS",
          name: "PRISMA · thesis",
          status: "active",
          body: "Grew out of SABE and connects to FLOW: making UNIRIO's academic opportunities easier to find. On top of the product, a semantic recommendation layer — embeddings, similarity and evaluation with precision and recall.",
          tags: ["FastAPI", "Angular", "PostgreSQL", "embeddings"],
          repoUrl: links.prisma,
        },
        {
          code: "DRV",
          name: "Steering systems that code",
          status: "ongoing",
          body: "A second discipline next to programming: which model is good at thinking and which is good at implementing, how to split tasks, give context, enforce policies and keep the agent from leaving scope.",
          tags: ["OpenCode", "local LLMs", "policies", "context"],
        },
        {
          code: "CRC",
          name: "Crucible",
          status: "paused",
          body: "Paused on purpose to focus energy on another project. Chasing ten ideas at once is my favorite risk — I'm learning to choose.",
          tags: ["focus"],
        },
      ],
      reading: {
        label: "study queue",
        items: [
          "Transformers from first principles",
          "software architecture trade-offs",
          "distributed systems",
          "Rust + GPUI",
        ],
      },
    },
    archive: {
      layer: "archive",
      title: "Things that made it off paper.",
      intro: "Complete projects with backend, queues, caching, authentication and integrations.",
      projects: [
        {
          name: "Self Checkout Monolith",
          year: "2025",
          kind: "commerce / payments",
          body: "A restaurant selling through its own digital menu: per-table carts, online payment with Stripe and safe reconciliation, orders tracked in real time on the dashboard.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Stripe"],
          repoUrl: "https://github.com/pablozr/self-checkout-monolith",
        },
        {
          name: "WiredApply",
          year: "2025",
          kind: "career / automation",
          body: "Organizes the job hunt: opportunities ranked by fit, application tracking and a daily digest to keep the routine going.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
          repoUrl: "https://github.com/pablozr/wired-apply",
        },
        {
          name: "Subscription Monolith",
          year: "2025",
          kind: "finance / control",
          body: "Tracks subscriptions, sends reminders before renewals and gives visibility into recurring costs before they turn into waste.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "SMTP"],
          repoUrl: "https://github.com/pablozr/subscription-monolith",
        },
        {
          name: "FastAPI / Angular Templates",
          year: "2025",
          kind: "developer tools",
          body: "Reusable foundations with authentication, module-based structure and clear conventions from the first commit — less repetitive setup, less mess later.",
          stack: ["FastAPI", "Angular", "TypeScript", "Docker"],
          repoUrl: "https://github.com/pablozr/fastapi-template",
          liveUrl: "https://github.com/pablozr/angular-template",
          liveLabel: "angular",
        },
        {
          name: "SIEPA Front",
          year: "2025",
          kind: "frontend architecture",
          body: "Project management frontend with protected routes, session recovery and Angular modules organized by feature.",
          stack: ["Angular 19", "TypeScript", "PrimeNG"],
          repoUrl: "https://github.com/pablozr/siepa-front",
        },
        {
          name: "Qual é o Segredo?",
          year: "2024",
          kind: "interactive experience",
          body: "A logic game about finding a secret number from clues, with stats and timed sessions persisted in Supabase.",
          stack: ["JavaScript", "Supabase", "Vercel"],
          repoUrl: "https://github.com/pablozr/qual-e-o-segredo",
          liveUrl: "https://qual-e-o-segredo.vercel.app",
        },
      ],
      more: "more code on github",
    },
    stack: {
      layer: "stack",
      title: "Tools. Not identity.",
      groups: [
        { label: "backend", items: shared.stackGroups.backend },
        { label: "data & messaging", items: shared.stackGroups.data },
        {
          label: "applied ai",
          items: shared.stackGroups.ai.map((i) => (i === "LLMs locais" ? "local LLMs" : i)),
        },
        { label: "frontend", items: shared.stackGroups.front },
        { label: "infra & integration", items: shared.stackGroups.infra },
        { label: "exploring", items: shared.stackGroups.exploring },
      ],
    },
    offline: {
      layer: "offline",
      title: "Outside the wired.",
      body: "There isn't much separation between my technical taste and my visual one. I like things minimal, comfortable and far from generic SaaS — this site included.",
      items: ["hard techno", "emo", "anime", "cybersigilism", "tattoos", "chess"],
    },
    connect: {
      layer: "connect",
      title: "Next node.",
      next: "I'm looking for a junior role to gain a lot of hands-on experience in backend and systems. After graduating, Europe — Switzerland at the top of the list, with Spanish (EU) citizenship.",
      body: "If you're building something hard and interesting, reach out.",
      cta: "send an email",
      cv: "download résumé",
      copy: "copy email",
      copied: "copied",
      quote: "No matter where you go, everyone's connected.",
    },
  },
};
