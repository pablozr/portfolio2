# Pablo Farina — "wired"

Tema inspirado em _Serial Experiments Lain_ e em cybersigilism: CRT, estática, postes e fios contra um céu vermelho, sombras em pontilhado vermelho e ornamentos de espinhos simétricos. Nada de SaaS genérico — minimalista na estrutura, carregado na atmosfera.

A página é organizada em **layers** (como os episódios de Lain):

| Layer | id          | Conteúdo                                                     |
| ----- | ----------- | ------------------------------------------------------------ |
| 00    | `#top`      | Hero: nome, papel, readout do sistema, canvas dos fios       |
| 01    | `#whoami`   | Quem sou, retrato tratado, citação, fatos                    |
| 02    | `#protocol` | Experiência (Bagaggio, Bessa, UNIRIO) e formação             |
| 03    | `#signals`  | Pesquisa e projetos em andamento (JevGuard, Xemnas, PRISMA…) |
| 04    | `#archive`  | Projetos entregues, em formato `ls -la` expansível           |
| 05    | `#stack`    | Ferramentas agrupadas                                        |
| 06    | `#connect`  | Próximos passos, contato, currículo                          |

Todo o texto (PT/EN) vive em `src/i18n/site-copy.ts`.

## Tokens (`src/styles.css`)

| Token        | Valor     | Uso                                                 |
| ------------ | --------- | --------------------------------------------------- |
| `--bg`       | `#07050a` | Fundo                                               |
| `--bg-2`     | `#0e0a10` | Faixa de "sinais", cartões                          |
| `--ink`      | `#ece6e8` | Texto principal                                     |
| `--dim`      | `#a1959f` | Texto secundário                                    |
| `--faint`    | `#5a4f59` | Metadados, rótulos                                  |
| `--red`      | `#ff2b4a` | Acento único: links, CTAs, glitch, pontilhado       |
| `--red-deep` | `#9e0c28` | Ornamentos, bordas                                  |
| `--phosphor` | `#b6ffd8` | Tela de boot e status "ativo" — usar com parcimônia |

Vermelho é o único acento. Verde fósforo e âmbar só aparecem como indicadores de status.

## Tipografia

- **Anton** — display: nome, títulos de experiência, stack.
- **UnifrakturMaguntia** — blackletter: nome de cada layer. Só em palavras curtas.
- **Space Grotesk** — corpo e títulos de seção.
- **JetBrains Mono** — navegação, metadados, chips, arquivo.
- **VT323** — terminal: boot, `LAYER:0X`, citações, e-mail.
- Glifos japoneses decorativos usam fontes do sistema (sem webfont, por peso) e são sempre `aria-hidden`.

## Efeitos

- `.fx-noise`, `.fx-scanlines`, `.fx-vignette` — camadas fixas de CRT sobre tudo.
- `.glitch` + `data-text` — separação RGB; contínua no hero, no hover nos demais.
- `--dots` — pontilhado vermelho (as "sombras" de Lain), sempre com máscara em gradiente.
- `WiredCanvas` — postes, fios em catenária e pulsos de sinal; parallax pelo cursor, pausa fora da tela.
- `BootSequence` — uma vez por sessão; pulável por clique/tecla.
- `Sigil` / `ThornRule` — ornamentos SVG em `currentColor`.

## Acessibilidade

- `prefers-reduced-motion` desliga boot, animações CSS e o canvas (fica um quadro estático).
- Botão de pausa no topo congela canvas e animações.
- Texto decorativo japonês e ornamentos são `aria-hidden`.
- Sem scroll horizontal até 360 px.

## Performance

- Fontes carregam sem bloquear a primeira pintura (`media="print"` + `onload`).
- Textos (PT/EN) entram no bundle principal: sem espera por um segundo chunk antes de renderizar.
- Retrato em WebP 720 px (~24 KB).
- Canvas: fundo pintado uma vez por resize, brilho dos pulsos via sprite (sem `shadowBlur`), DPR limitado a 1.5 e loop parado fora da tela ou com animação pausada.
- Sem `backdrop-filter` ou `mix-blend-mode` sobre camadas animadas.
- Revelação por `IntersectionObserver` + CSS, sem biblioteca de animação.
