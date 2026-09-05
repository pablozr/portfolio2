# Pablo Farina — Editorial / Generative

O portfólio conecta precisão técnica a sensibilidade artística. A linguagem é editorial: títulos grandes, respiro, divisórias finas e arte geométrica autoral. A conversão segue uma sequência clara: apresentação → projetos → pessoa → serviços → processo → dúvidas → contato.

## Referências e interpretação

- [Davide Perozzi, por Norman Dubois](https://norman.perozzi.studio/projects/davideperozzi/): hierarquia tipográfica, composição limpa e interação como expressão da personalidade de um desenvolvedor.
- [Awwwards — grid inspirado nos primeiros computadores](https://www.awwwards.com/inspiration/font-sized-grid-inspired-by-the-first-computers-with-primitive-software): pequenas anotações técnicas e organização de informações.

São referências de princípios; a identidade, a composição e os SVGs foram criados para este portfólio. As capas dos projetos são explorações visuais, identificadas como tal, e não capturas das interfaces dos sistemas.

## Tokens

Os tokens executáveis estão em `src/editorial.css`, carregados pelo ponto de entrada `src/styles.css`. `src/refinements.css` define a identidade ampliada, a cena 3D, a faixa cinética e as transições de idioma.

| Token             | Valor                       | Aplicação                                      |
| ----------------- | --------------------------- | ---------------------------------------------- |
| `--paper`         | `#F3F2EC`                   | Fundo principal, texto nas áreas escuras       |
| `--ink`           | `#24251F`                   | Texto, botão principal, seções sobre e contato |
| `--lime`          | `#D5FA42`                   | Faixa cinética, CTA de contato, arte e acentos |
| `--muted-ink`     | `#686960`                   | Texto secundário no fundo claro                |
| `--line`          | `#D1D1C7`                   | Divisórias e bordas sutis                      |
| `--space-section` | `clamp(72px,9vw,140px)`     | Ritmo vertical entre capítulos                 |
| `--ease`          | `cubic-bezier(.22,1,.36,1)` | Desaceleração das entradas e interações        |

Usar o verde ácido como destaque, com texto escuro. Não usar como texto pequeno sobre marfim. Em seções escuras, texto secundário usa `#B1B3A8`.

## Tipografia

- **Inter**: navegação, conteúdo e títulos. Títulos com peso 400–500 e espaçamento negativo; evitar caixa alta em textos longos.
- **Instrument Serif italic**: segunda voz, aplicada a uma frase ou palavra de destaque. Não usar em formulários ou parágrafos.
- **JetBrains Mono**: índices, metadados e pequenas legendas técnicas. Não usar para o corpo principal.
- Títulos de seção: 40–68 px; hero: escala fluida, com ajustes em telas estreitas. Textos corridos: entrelinha de 1.65–1.9.
- As fontes usam Google Fonts com `display=swap` e alternativas locais de sistema.

## Layout

- Container máximo: 1440 px; margens laterais fluidas entre 24 e 80 px.
- Hero desktop: duas colunas; texto à esquerda e escultura à direita. Abaixo de 760 px, empilhar.
- Projetos: primeiro em largura total, dois secundários lado a lado, quatro adicionais em linhas. Abaixo de 420 px, todos os cartões em uma coluna.
- Processo: quatro colunas no desktop, duas em telas menores.
- Formulário: duas colunas no desktop, uma no mobile. Labels sempre visíveis.
- Cantos retos em grandes superfícies; formas circulares e cápsulas reservadas a ações.

## Componentes e comportamento

- `Portfolio`: composição da página, navegação desktop/mobile, conteúdo PT/EN, serviços, FAQ e contato.
- `Project` / `ProjectDialog`: capas autorais e detalhes reais dos sete projetos existentes. Radix Dialog gerencia foco, Escape e retorno ao gatilho. Links GitHub continuam apontando aos repositórios originais.
- `ProjectModel`: capas WebGL com cartões metálicos (Self Checkout), prismas em camadas (PRISMA) e elos (WiredApply). Composições estáticas, carregadas ao se aproximarem da viewport. O ponteiro inclina o modelo; ao sair, ele retorna à composição inicial e encerra os frames. Em touch e com movimento reduzido, ficam estáticas. Pixel ratio limitado a 1.5; geometrias, materiais e contextos são liberados na desmontagem.
- `Sculpture3D`: nó sólido modelado com geometria paramétrica no Three.js, renderizado em WebGL/canvas. Material metálico, iluminação de estúdio e refletor verde. O motor é carregado sob demanda; não há SVG na escultura nem assets 3D remotos.
- `CreativeRibbon`: duas cópias idênticas, cada uma com seis palavras e largura mínima de uma viewport. Grupos sem encolhimento garantem continuidade ao deslocar a faixa em exatamente 50%.
- `contour-field.svg`: textura estática de contornos nos fundos da hero, sobre e contato.
- Identidade: nome completo na navbar em 22–36 px; apresentação pessoal na seção Sobre mim. O texto sobre o profissional foi mantido.
- `Reveal`: entrada única por seção ao entrar na viewport.
- `ContactForm`: validação nativa, mensagem com ao menos 10 caracteres, orçamento opcional. Prepara `mailto:`; o visitante conclui o envio no aplicativo de e-mail. Não existe envio por servidor.
- Ações primárias: cápsula escura em fundo claro e cápsula verde no contato. Ações secundárias: texto e seta.

## Movimento e acessibilidade

- Entradas: 750 ms, deslocamento vertical de 28 px, uma vez por seção.
- Faixa: loop linear de 38 s; destaque do título: 30 s. Os fundos SVG são estáticos.
- WebGL: renderização limitada a aproximadamente 30 fps e pixel ratio máximo de 1.65. Suspende renderização fora da viewport, com a aba oculta ou ao pausar. Libera geometria, material, environment map, renderer e observers na desmontagem. Sem suporte a WebGL, exibe um monograma tipográfico.
- Idioma: View Transitions aplica dissolução com deslocamento e desfoque de até 480 ms, preservando formulário, foco, scroll e canvas. Sem essa API, usa uma entrada leve via Web Animations. O seletor usa uma cápsula móvel; preferência por movimento reduzido desliga a transição da página.
- O botão de pausa interrompe a escultura e os loops decorativos. Entradas de conteúdo continuam, para que abrir serviços nunca oculte informações.
- `prefers-reduced-motion` desliga loops, entradas e rolagem suave; a arte permanece estática.
- Link para pular conteúdo, foco visível, botões com nomes acessíveis, campos associados aos labels e acordeões nativos.
- A navegação mobile fecha ao escolher uma seção; Escape funciona quando o foco está no menu.

## Conteúdo e manutenção

Projetos, serviços, processo e FAQ usam os dados em `src/i18n/site-copy.ts`. O texto editorial de apresentação está em `Portfolio.tsx`, com variantes PT/EN. Valores de serviços foram retirados, incluindo a resposta da FAQ: direcionar o visitante ao contato para orçamento personalizado. Não adicionar métricas, clientes, avaliações ou imagens de produtos sem evidência real.

Para incluir um projeto, manter o título, contexto, tecnologias, destaques e URL verificáveis; a capa deve ser claramente ilustrativa quando não for uma captura real. Para acrescentar seções, usar os tokens, o container e a mesma escala tipográfica.

## Verificação

Executar `npx tsc --noEmit`, ESLint nos arquivos alterados e `npm run build:pages`. Conferir hero, navegação, projetos, acordeões e contato no desktop e no mobile. O preview padrão é iniciado por `npm run dev`.
