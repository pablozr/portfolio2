import type { Locale } from "./locales";

export type Status = "active" | "research" | "paused" | "shipped" | "ongoing" | "live" | "proposal";

export type WorkImage = "cloudrs" | "suisse" | "lifelaser" | "conexao";

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
  work: {
    layer: string;
    title: string;
    intro: string;
    visit: string;
    proposal: string;
    shots: string;
    items: Array<{
      name: string;
      year: string;
      kind: string;
      status: Status;
      image: WorkImage;
      domain: string;
      body: string;
      highlights: string[];
      stack: string[];
      url?: string;
      pdfUrl?: string;
      repoUrl?: string;
    }>;
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
        { href: "#work", label: "trabalhos" },
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
        live: "no ar",
        proposal: "proposta",
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
        { k: "formação prevista", v: "UNIRIO · 2027" },
      ],
      photoAlt: "Retrato de Pablo Farina",
    },
    work: {
      layer: "trabalhos",
      title: "Coisas que já estão no ar.",
      intro:
        "Produtos próprios e sites para clientes. As duas últimas são propostas para negócios locais: pesquisa, ideia e protótipo prontos antes da primeira conversa.",
      visit: "visitar site",
      proposal: "ver proposta (pdf)",
      shots: "imagem",
      items: [
        {
          name: "cloudrs",
          year: "2026",
          kind: "app desktop + site",
          status: "live",
          image: "cloudrs",
          domain: "cloudrs.dev",
          body: "Cliente nativo e open source do SoundCloud para desktop, sem Electron: a interface é desenhada na GPU com GPUI, o framework do editor Zed, e o áudio é decodificado em Rust. Abre rápido, gasta pouca memória e tem Jam, para ouvir a mesma faixa no mesmo instante que os amigos a partir de um link.",
          highlights: [
            "fila de verdade e autoplay",
            "waveform como barra de busca",
            "Windows · Linux · macOS",
          ],
          stack: ["Rust", "GPUI", "Astro", "GitHub Actions"],
          url: "https://cloudrs.dev",
          repoUrl: "https://github.com/pablozr/cloudrs",
        },
        {
          name: "Suisse Débarras",
          year: "2026",
          kind: "site para cliente",
          status: "live",
          image: "suisse",
          domain: "suisse-debarras.ch",
          body: "Site da Suisse Débarras, empresa com 10 anos de débarras e limpeza na Suíça romanda, de Genebra a Berna, que atende mais de 500 imóveis por ano: apartamentos, casas, chalés, fazendas e empresas. Logo de cara aparecem os serviços e os números, e o orçamento online, o telefone e o WhatsApp ficam sempre à mão.",
          highlights: [
            "francês, inglês e italiano",
            "orçamento online",
            "WhatsApp e telefone sempre visíveis",
          ],
          stack: ["web design", "multilíngue", "responsivo"],
          url: "https://suisse-debarras.ch/",
        },
        {
          name: "LifeLaser Clinic",
          year: "2026",
          kind: "site · protótipo",
          status: "proposal",
          image: "lifelaser",
          domain: "lifelaser · vila prudente, sp",
          body: "Clínica de depilação a laser com 4,7 no Google em 207 avaliações, mas quem chegava pelo Google encontrava só um Linktree. A proposta é uma página feita primeiro para o celular: a nota em destaque, as áreas atendidas, laser comparado com lâmina e cera, dúvidas, endereço e WhatsApp a um toque, com a flor da logo virando arte.",
          highlights: [
            "WhatsApp com mensagem pronta",
            "nota do Google na primeira tela",
            "versão mobile e desktop",
          ],
          stack: ["pesquisa", "UX mobile", "protótipo"],
          pdfUrl: "/work/proposta-lifelaser.pdf",
        },
        {
          name: "Clínica Conexão Mental",
          year: "2026",
          kind: "site · protótipo",
          status: "proposal",
          image: "conexao",
          domain: "conexão mental · parque são jorge, sp",
          body: "Clínica de psiquiatria, psicologia e neuropsicologia com nota 5,0 no Google e 73 opiniões no Doctoralia, mas sem um site próprio. A proposta mantém a identidade da clínica (o lótus e o tom pêssego), organiza especialidades e equipe e leva direto ao WhatsApp, com páginas por bairro para aparecer em buscas como “psiquiatra Tatuapé”.",
          highlights: [
            "identidade da clínica preservada",
            "agendamento em 1 toque",
            "SEO local por bairro",
          ],
          stack: ["pesquisa", "UX mobile", "SEO local"],
          pdfUrl: "/work/proposta-conexao-mental.pdf",
        },
      ],
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
          code: "XMN",
          name: "Xemnas",
          status: "active",
          body: "Agentes de código tomam dezenas de decisões por sessão, e quase todas se perdem no histórico do chat. O Xemnas acompanha esse trabalho, propõe as decisões que apareceram com a evidência que as sustenta e guarda as que você confirmar — uma memória versionada e pesquisável do projeto que volta ao agente como contexto, via Context Pack e um servidor MCP somente leitura. App desktop nativo em Rust + GPUI, local-first, com SQLite e extração sem rede.",
          tags: ["Rust", "GPUI", "SQLite + FTS5", "MCP", "OpenCode"],
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
      ],
      reading: {
        label: "na fila de estudo",
        items: [
          "Transformers a partir dos princípios",
          "trade-offs de arquitetura de software",
          "sistemas distribuídos",
          "recuperação híbrida e avaliação de RAG",
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
          name: "PRISMA Front",
          year: "2026",
          kind: "plataforma acadêmica",
          body: "Interface do PRISMA, sistema da UNIRIO para consulta pública e gestão de projetos acadêmicos importados do SIE: catálogo com busca e filtros, login institucional via Google, área de professores para editar os próprios projetos e painel administrativo com métricas e sincronizações.",
          stack: ["Angular 19", "TypeScript", "PrimeNG", "RxJS", "Playwright"],
          repoUrl: "https://github.com/pablozr/prisma-front",
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
    connect: {
      layer: "conectar",
      title: "Próximo nó.",
      next: "Procuro uma posição júnior para ganhar muita experiência prática em backend e sistemas.",
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
        { href: "#work", label: "work" },
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
        live: "live",
        proposal: "proposal",
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
        { k: "expected graduation", v: "UNIRIO · 2027" },
      ],
      photoAlt: "Portrait of Pablo Farina",
    },
    work: {
      layer: "work",
      title: "Things that are already live.",
      intro:
        "My own products and client sites. The last two are proposals for local businesses: research, idea and prototype ready before the first conversation.",
      visit: "visit site",
      proposal: "view proposal (pdf)",
      shots: "image",
      items: [
        {
          name: "cloudrs",
          year: "2026",
          kind: "desktop app + site",
          status: "live",
          image: "cloudrs",
          domain: "cloudrs.dev",
          body: "A native, open source SoundCloud client for the desktop, with no Electron: the interface is drawn on the GPU with GPUI, the framework behind the Zed editor, and the audio is decoded in Rust. It opens fast, stays light on memory and has Jam, so friends hear the same track at the same moment from a shared link.",
          highlights: [
            "a real queue and autoplay",
            "the waveform is the seek bar",
            "Windows · Linux · macOS",
          ],
          stack: ["Rust", "GPUI", "Astro", "GitHub Actions"],
          url: "https://cloudrs.dev",
          repoUrl: "https://github.com/pablozr/cloudrs",
        },
        {
          name: "Suisse Débarras",
          year: "2026",
          kind: "client site",
          status: "live",
          image: "suisse",
          domain: "suisse-debarras.ch",
          body: "The site for Suisse Débarras, a clearance and cleaning company with 10 years across French-speaking Switzerland, from Geneva to Bern, handling more than 500 properties a year: flats, houses, chalets, farms and businesses. Services and numbers show up front, and the online quote, phone and WhatsApp are always at hand.",
          highlights: [
            "French, English and Italian",
            "online quote",
            "WhatsApp and phone always visible",
          ],
          stack: ["web design", "multilingual", "responsive"],
          url: "https://suisse-debarras.ch/",
        },
        {
          name: "LifeLaser Clinic",
          year: "2026",
          kind: "site · prototype",
          status: "proposal",
          image: "lifelaser",
          domain: "lifelaser · vila prudente, são paulo",
          body: "A laser hair removal clinic rated 4.7 on Google across 207 reviews, yet people arriving from Google only found a Linktree. The proposal is a mobile-first page: the rating up front, treatment areas, laser compared with razor and wax, FAQs, the address and WhatsApp one tap away, with the flower from the logo turned into art.",
          highlights: [
            "WhatsApp with a ready message",
            "Google rating on the first screen",
            "mobile and desktop versions",
          ],
          stack: ["research", "mobile UX", "prototype"],
          pdfUrl: "/work/proposta-lifelaser.pdf",
        },
        {
          name: "Clínica Conexão Mental",
          year: "2026",
          kind: "site · prototype",
          status: "proposal",
          image: "conexao",
          domain: "conexão mental · parque são jorge, são paulo",
          body: "A psychiatry, psychology and neuropsychology clinic rated 5.0 on Google with 73 reviews on Doctoralia, but no site of its own. The proposal keeps the clinic's identity (the lotus and the peach tone), organises specialties and team and leads straight to WhatsApp, with neighbourhood pages so it shows up in local searches.",
          highlights: [
            "the clinic's identity kept",
            "booking in one tap",
            "local SEO by neighbourhood",
          ],
          stack: ["research", "mobile UX", "local SEO"],
          pdfUrl: "/work/proposta-conexao-mental.pdf",
        },
      ],
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
          code: "XMN",
          name: "Xemnas",
          status: "active",
          body: "Coding agents make dozens of decisions per session, and almost all of them get lost in chat history. Xemnas follows that work, proposes the decisions that showed up along with the evidence behind them, and keeps the ones you confirm — a versioned, searchable project memory that flows back to the agent as context through a Context Pack and a read-only MCP server. Native desktop app in Rust + GPUI, local-first, with SQLite and on-device extraction.",
          tags: ["Rust", "GPUI", "SQLite + FTS5", "MCP", "OpenCode"],
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
      ],
      reading: {
        label: "study queue",
        items: [
          "Transformers from first principles",
          "software architecture trade-offs",
          "distributed systems",
          "hybrid retrieval and RAG evaluation",
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
          name: "PRISMA Front",
          year: "2026",
          kind: "academic platform",
          body: "The interface for PRISMA, UNIRIO's system for publicly browsing and managing academic projects imported from SIE: a catalog with search and filters, institutional Google sign-in, a faculty area to edit their own projects, and an admin panel with metrics and syncs.",
          stack: ["Angular 19", "TypeScript", "PrimeNG", "RxJS", "Playwright"],
          repoUrl: "https://github.com/pablozr/prisma-front",
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
    connect: {
      layer: "connect",
      title: "Next node.",
      next: "I'm looking for a junior role to gain a lot of hands-on experience in backend and systems.",
      body: "If you're building something hard and interesting, reach out.",
      cta: "send an email",
      cv: "download résumé",
      copy: "copy email",
      copied: "copied",
      quote: "No matter where you go, everyone's connected.",
    },
  },
};
