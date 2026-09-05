import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowUp,
  Plus,
  Minus,
  Menu,
  X,
  Pause,
  Play,
  Github,
  Check,
  Copy,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLanguage } from "@/i18n/language";
import { Sculpture3D } from "./Sculpture3D";
import { CreativeRibbon } from "./CreativeRibbon";
import { ProjectModel } from "./ProjectModel";

const email = "pablo.farina28@outlook.com";
const phone = "+5521991767182";
const whatsappUrl = "https://wa.me/5521991767182";
const projectNames = [
  "Self Checkout",
  "PRISMA",
  "WiredApply",
  "Subscriptions",
  "The foundations",
  "SIEPA Front",
  "Qual é o Segredo?",
];
const categories = [
  "Commerce & payments",
  "Education platform",
  "Career & automation",
  "Finance & control",
  "Developer tools",
  "Frontend architecture",
  "Interactive experience",
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Project({ index }: { index: number }) {
  const { copy, locale } = useLanguage();
  const project = copy.work.projects[index];
  const pt = locale === "pt-BR";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`project-card project-${index}`}>
          <div className="project-image">
            <div className="project-topline">
              <span className="micro">{categories[index]}</span>
              <span className="micro">{project.year}</span>
            </div>
            <ProjectModel index={index} />
            <span className="project-wordmark">
              {index === 0 ? "checkout®" : index === 1 ? "PRISMA" : "wired/apply"}
            </span>
            <span className="project-caption micro">
              {pt ? "EXPLORAÇÃO VISUAL DO PROJETO" : "PROJECT VISUAL EXPLORATION"}
            </span>
            <span className="project-open">
              <ArrowUpRight size={23} />
            </span>
          </div>
          <div className="project-info">
            <div>
              <span className="micro project-number">0{index + 1} /</span>
              <h3>{projectNames[index]}</h3>
            </div>
            <span className="project-stack">{project.stack.slice(0, 2).join(" / ")}</span>
          </div>
        </button>
      </Dialog.Trigger>
      <ProjectDialog index={index} />
    </Dialog.Root>
  );
}

function ProjectDialog({ index }: { index: number }) {
  const { copy, locale } = useLanguage();
  const p = copy.work.projects[index];
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="modal-overlay" />
      <Dialog.Content className="project-modal">
        <Dialog.Close
          className="icon-button modal-close"
          aria-label={locale === "pt-BR" ? "Fechar projeto" : "Close project"}
        >
          <X />
        </Dialog.Close>
        <p className="micro">
          {p.year} / {categories[index]}
        </p>
        <Dialog.Title>{p.title}</Dialog.Title>
        <Dialog.Description>{p.body}</Dialog.Description>
        <h3 className="micro">{copy.work.modalHighlightsLabel}</h3>
        <ul className="project-highlights">
          {p.highlights.map((h) => (
            <li key={h}>
              <ArrowUpRight size={16} />
              {h}
            </li>
          ))}
        </ul>
        <h3 className="micro">{copy.work.modalStackLabel}</h3>
        <div className="tags">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="modal-actions">
          <a className="pill pill-dark" href={p.repoUrl} target="_blank" rel="noreferrer">
            {copy.work.modalRepoLabel}
            <Github size={17} />
          </a>
          {p.liveUrl && (
            <a className="text-link" href={p.liveUrl} target="_blank" rel="noreferrer">
              {p.liveUrl.includes("github.com")
                ? locale === "pt-BR"
                  ? "Repositório frontend"
                  : "Frontend repository"
                : copy.work.modalLiveLabel}
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function ContactForm() {
  const { copy, locale } = useLanguage();
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const pt = locale === "pt-BR";
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = String(data.get("message") || "").trim();
    if (message.length < 10) {
      messageRef.current?.setCustomValidity(copy.contact.errors.messageMin);
      messageRef.current?.reportValidity();
      return;
    }
    const body = `${copy.contact.mail.fieldName}: ${data.get("name")}\nEmail: ${data.get("email")}\n${copy.contact.mail.fieldBudget}: ${data.get("budget") || "—"}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${copy.contact.mail.subjectPrefix}: ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <div className="contact-grid">
      <div>
        <p className="contact-intro">
          {pt
            ? "Um bom projeto começa com uma boa conversa. Me conte o que você tem em mente."
            : "A great project starts with a good conversation. Tell me what you have in mind."}
        </p>
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
          <ArrowUpRight size={18} />
        </a>
        <button className="copy-email micro" onClick={copyEmail}>
          {copied ? <Check size={13} /> : <Copy size={13} />}{" "}
          {copied ? (pt ? "E-mail copiado" : "Email copied") : pt ? "Copiar e-mail" : "Copy email"}
        </button>
        {copyError && (
          <p role="status">
            {pt ? "Selecione e copie o e-mail acima." : "Select and copy the email above."}
          </p>
        )}
        <div className="contact-phone">
          <span className="micro">{pt ? "TELEFONE / WHATSAPP" : "PHONE / WHATSAPP"}</span>
          <a href={`tel:${phone}`}>
            +55 (21) 99176-7182 <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {pt ? "Conversar pelo WhatsApp" : "Chat on WhatsApp"}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="contact-note micro">
          <span className="status-dot" />
          {pt ? "CONTATO DIRETO, SEM INTERMEDIÁRIOS." : "DIRECT CONTACT. NO MIDDLEMEN."}
        </div>
      </div>
      <form onSubmit={submit} className="contact-form">
        <div className="form-row">
          <label>
            {copy.contact.labels.name}
            <input
              required
              name="name"
              autoComplete="name"
              maxLength={100}
              placeholder={copy.contact.placeholders.name}
            />
          </label>
          <label>
            {copy.contact.labels.email}
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              maxLength={200}
              placeholder={copy.contact.placeholders.email}
            />
          </label>
        </div>
        <label>
          {copy.contact.labels.budget}
          <input name="budget" maxLength={100} placeholder={copy.contact.placeholders.budget} />
        </label>
        <label>
          {copy.contact.labels.project}
          <textarea
            ref={messageRef}
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={3}
            placeholder={copy.contact.placeholders.project}
            onInput={() => messageRef.current?.setCustomValidity("")}
          />
        </label>
        <div className="form-bottom">
          <p aria-live="polite">
            {prepared
              ? pt
                ? "Mensagem preparada. Conclua o envio no seu aplicativo de e-mail."
                : "Message prepared. Complete sending in your email app."
              : copy.contact.statusIdle}
          </p>
          <button type="submit" className="pill pill-lime">
            {pt ? "Vamos conversar" : "Let's talk"}
            <ArrowUpRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

export function Portfolio() {
  const { copy, locale, setLocale } = useLanguage();
  const pt = locale === "pt-BR";
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const links = [
    { href: "#work", text: pt ? "Projetos" : "Work" },
    { href: "#about", text: pt ? "Sobre" : "About" },
    { href: "#services", text: pt ? "Serviços" : "Services" },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <div className={`portfolio ${paused ? "motion-paused" : ""}`}>
        <motion.div className="reading-progress" style={{ scaleX: progress }} />
        <a className="skip-link" href="#main">
          {pt ? "Pular para o conteúdo" : "Skip to content"}
        </a>
        <header className="site-header">
          <a href="#top" className="name-brand" aria-label="Pablo Farina — home">
            <img className="brand-mark" src="/logo-pf.svg" width="46" height="46" alt="" />
            <span className="brand-wordmark">
              <span className="name-brand-title">
                Pablo Farina<span className="name-brand-dot">.</span>
              </span>
              <span className="name-brand-role micro">
                {pt ? "DESENVOLVEDOR & CRIATIVO" : "DEVELOPER & CREATIVE"}
              </span>
            </span>
          </a>
          <nav aria-label={pt ? "Navegação principal" : "Main navigation"} className="desktop-nav">
            {links.map((l) => (
              <a href={l.href} key={l.href}>
                {l.text}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="language-switch">
              <motion.span
                className="language-active"
                animate={{ x: pt ? 0 : 36 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                aria-hidden="true"
              />
              <button aria-pressed={pt} onClick={() => setLocale("pt-BR")} aria-label="Português">
                PT
              </button>
              <button aria-pressed={!pt} onClick={() => setLocale("en")} aria-label="English">
                EN
              </button>
            </div>
            <a href="#contact" className="header-contact">
              {pt ? "Vamos conversar" : "Let's talk"}
              <ArrowUpRight size={16} />
            </a>
            <button
              className="icon-button menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={
                pt
                  ? menuOpen
                    ? "Fechar menu"
                    : "Abrir menu"
                  : menuOpen
                    ? "Close menu"
                    : "Open menu"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <nav
              id="mobile-menu"
              className="mobile-menu"
              aria-label={pt ? "Navegação móvel" : "Mobile navigation"}
              onKeyDown={(e) => {
                if (e.key === "Escape") setMenuOpen(false);
              }}
            >
              {[...links, { href: "#contact", text: pt ? "Contato" : "Contact" }].map((l, i) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                  <span className="micro">0{i + 1}</span>
                  {l.text}
                  <ArrowUpRight />
                </a>
              ))}
            </nav>
          )}
        </header>
        <main id="main">
          <section id="top" className="hero section-shell">
            <div className="hero-eyebrow micro">
              <span>{pt ? "BRASIL · PARA O MUNDO" : "BRAZIL · WORLDWIDE"}</span>
            </div>
            <div className="hero-layout">
              <div className="hero-copy">
                <h1>
                  <span className="hero-line">{pt ? "Código preciso." : "Precise code."}</span>
                  <span className="hero-line">{pt ? "Design que" : "Design that"}</span>
                  <span className="hero-line serif">
                    {pt ? "marca." : "stays."}
                    <span className="heading-spark" aria-hidden="true">
                      ✳
                    </span>
                  </span>
                </h1>
                <p>
                  {pt
                    ? "Transformo ideias em sites e sistemas com personalidade. Feitos para funcionar. Pensados para impressionar."
                    : "I turn ideas into websites and systems with personality. Built to work. Designed to leave an impression."}
                </p>
                <div className="hero-buttons">
                  <a className="pill pill-dark" href="#work">
                    {pt ? "Explore meus projetos" : "Explore my work"}
                    <ArrowDown size={17} />
                  </a>
                  <a href="#contact" className="text-link">
                    {pt ? "Tem uma ideia?" : "Have an idea?"}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
              <div className="hero-art hero-art-solid">
                <div className="art-cross cross-top" />
                <div className="art-cross cross-bottom" />
                <Sculpture3D paused={paused} />
                <div className="art-meta micro">
                  <span>{pt ? "FORMA LIVRE / ESTUDO 001" : "FREE FORM / STUDY 001"}</span>
                  <button
                    className="motion-toggle"
                    onClick={() => setPaused(!paused)}
                    disabled={!!reduced}
                    aria-label={
                      pt
                        ? paused
                          ? "Retomar animação"
                          : "Pausar animação"
                        : paused
                          ? "Resume animation"
                          : "Pause animation"
                    }
                    aria-pressed={paused || !!reduced}
                  >
                    {paused || reduced ? <Play size={12} /> : <Pause size={12} />}
                  </button>
                </div>
                <span className="art-side micro">
                  {pt
                    ? "MOVA O CURSOR. MUDE O PONTO DE VISTA."
                    : "MOVE YOUR CURSOR. CHANGE YOUR PERSPECTIVE."}
                </span>
              </div>
            </div>
            <div className="hero-bottom micro">
              <span>FULLSTACK DEVELOPMENT & CREATIVE THINKING</span>
              <a href="#work">
                {pt ? "ROLE PARA DESCOBRIR" : "SCROLL TO DISCOVER"}
                <ArrowDown size={13} />
              </a>
              <span>PORTFOLIO — 2026</span>
            </div>
          </section>
          <CreativeRibbon />
          <section id="work" className="work-section section-shell section-space">
            <Reveal>
              <div className="section-kicker micro">
                <span>01 / {pt ? "PROJETOS SELECIONADOS" : "SELECTED WORK"}</span>
                <span>2025 — 2026</span>
              </div>
              <div className="section-heading">
                <h2>
                  {pt ? "Menos promessa." : "Less promise."}
                  <br />
                  <span className="serif">{pt ? "Mais projeto." : "More proof."}</span>
                </h2>
                <p>
                  {pt
                    ? "Da interface à arquitetura: uma seleção de ideias que saíram do papel e viraram software."
                    : "From interface to architecture: a selection of ideas that became working software."}
                </p>
              </div>
            </Reveal>
            <div className="project-grid">
              {[0, 1, 2].map((i) => (
                <Reveal key={i} className={i === 0 ? "project-featured" : ""}>
                  <Project index={i} />
                </Reveal>
              ))}
            </div>
            <div className="more-projects">
              {copy.work.projects.slice(3).map((_, offset) => {
                const i = offset + 3;
                return (
                  <Dialog.Root key={i}>
                    <Dialog.Trigger className="project-row">
                      <span className="micro">0{i + 1}</span>
                      <h3>{projectNames[i]}</h3>
                      <span className="micro">{categories[i]}</span>
                      <ArrowUpRight />
                    </Dialog.Trigger>
                    <ProjectDialog index={i} />
                  </Dialog.Root>
                );
              })}
            </div>
            <a
              className="text-link github-link"
              href="https://github.com/pablozr"
              target="_blank"
              rel="noreferrer"
            >
              {pt ? "Mais código, no GitHub" : "More code on GitHub"}
              <ArrowUpRight size={16} />
            </a>
          </section>
          <section id="about" className="about-section section-space">
            <div className="section-shell">
              <div className="section-kicker micro">
                <span>02 / {pt ? "SOBRE MIM" : "ABOUT ME"}</span>
                <span>
                  {pt ? "A PESSOA POR TRÁS DOS PROJETOS" : "THE PERSON BEHIND THE PROJECTS"}
                </span>
              </div>
              <Reveal className="about-grid">
                <div className="about-identity">
                  <span className="micro about-label">
                    {pt ? "PRAZER, ESSE SOU EU." : "HEY, THIS IS ME."}
                  </span>
                  <h2 className="about-name">
                    Pablo
                    <br />
                    <span className="serif">Farina.</span>
                  </h2>
                  <span className="about-role">
                    {pt ? "Desenvolvedor fullstack." : "Fullstack developer."}
                    <br />
                    {pt ? "Curioso por natureza." : "Curious by nature."}
                  </span>
                  <span className="about-signature serif" aria-hidden="true">
                    pf.
                  </span>
                </div>
                <div>
                  <h3 className="about-statement">
                    {pt ? "Olhar criativo." : "Creative eye."}
                    <br />
                    <span className="serif">{pt ? "Cabeça de dev." : "Developer mind."}</span>
                  </h3>
                  <p className="about-lead">
                    {pt
                      ? "Sou Pablo. Conecto design e desenvolvimento para criar experiências digitais que fazem sentido — para o seu negócio e para quem usa."
                      : "I'm Pablo. I connect design and development to create digital experiences that make sense — for your business and the people using them."}
                  </p>
                  <p>
                    {copy.about.p1} {copy.about.p3}
                  </p>
                  <a href="#contact" className="text-link">
                    {pt ? "Vamos construir algo juntos" : "Let's build something together"}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </Reveal>
              <div className="tech-strip micro">
                {["FASTAPI", "ANGULAR", "TYPESCRIPT", "POSTGRESQL", "REDIS", "DOCKER"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>
          <section id="services" className="section-shell section-space">
            <Reveal>
              <div className="section-kicker micro">
                <span>03 / {pt ? "O QUE PODEMOS CRIAR" : "WHAT WE CAN BUILD"}</span>
                <span>{pt ? "DA IDEIA AO DEPLOY" : "FROM IDEA TO DEPLOY"}</span>
              </div>
              <div className="section-heading">
                <h2>
                  {pt ? "Bonito por fora." : "Beautiful outside."}
                  <br />
                  <span className="serif">
                    {pt ? "Bem feito por dentro." : "Well built inside."}
                  </span>
                </h2>
                <p>
                  {pt
                    ? "Soluções sob medida, com atenção aos detalhes que você vê. E aos que fazem tudo funcionar."
                    : "Bespoke solutions, with attention to the details you see. And those that make everything work."}
                </p>
              </div>
            </Reveal>
            <div className="services-list">
              {copy.services.items.map((s, i) => (
                <details key={s.code} className="service-item">
                  <summary>
                    <span className="micro">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <span className="service-teaser">{s.bullets[0]}</span>
                    <span className="expand-icon">
                      <Plus className="plus" size={20} />
                      <Minus className="minus" size={20} />
                    </span>
                  </summary>
                  <div className="service-detail">
                    <p>{s.body}</p>
                    <div className="tags">
                      {s.bullets.map((b) => (
                        <span key={b}>{b}</span>
                      ))}
                    </div>
                    <div className="service-pricing">
                      <a className="text-link" href="#contact">
                        {pt ? "Entre em contato para um orçamento" : "Get in touch for a quote"}
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>
          <section id="process" className="process-section section-shell">
            <div className="section-kicker micro">
              <span>04 / {pt ? "COMO ACONTECE" : "HOW IT HAPPENS"}</span>
            </div>
            <Reveal>
              <h2>
                {pt ? "Uma boa parceria." : "A good partnership."}{" "}
                <span className="serif">{pt ? "Do início ao fim." : "Start to finish."}</span>
              </h2>
            </Reveal>
            <div className="process-grid">
              {copy.process.steps.map((s) => (
                <Reveal key={s.k}>
                  <span className="process-number serif">{s.k}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="micro">{s.meta}</span>
                </Reveal>
              ))}
            </div>
          </section>
          <section id="faq" className="faq-section section-shell section-space">
            <div>
              <p className="micro">05 / FAQ</p>
              <h2>
                {pt ? "Antes do" : "Before our"}
                <br />
                <span className="serif">{pt ? "primeiro oi." : "first hello."}</span>
              </h2>
            </div>
            <div>
              {copy.faq.items.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    {f.q}
                    <Plus size={17} />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
          <section id="contact" className="contact-section section-space">
            <div className="section-shell">
              <div className="section-kicker micro">
                <span>06 / {pt ? "O PRÓXIMO PROJETO" : "THE NEXT PROJECT"}</span>
                <span>{pt ? "PODE SER O SEU" : "COULD BE YOURS"}</span>
              </div>
              <Reveal>
                <a href={`mailto:${email}`} className="contact-title">
                  <h2>
                    {pt ? "Vamos criar" : "Let's create"}
                    <br />
                    <span className="serif">{pt ? "algo marcante." : "something lasting."}</span>
                  </h2>
                  <ArrowUpRight strokeWidth={0.8} />
                </a>
              </Reveal>
              <ContactForm />
              <footer className="site-footer">
                <a href="#top" className="brand" aria-label="Pablo Farina — home">
                  <img src="/logo-pf.svg" width="46" height="46" alt="" />
                </a>
                <span className="micro">© {new Date().getFullYear()} PABLO FARINA</span>
                <a
                  href="https://github.com/pablozr"
                  target="_blank"
                  rel="noreferrer"
                  className="micro"
                >
                  GITHUB <ArrowUpRight size={12} />
                </a>
                <a href="#top" className="micro">
                  {pt ? "DE VOLTA AO TOPO" : "BACK TO TOP"}
                  <ArrowUp size={13} />
                </a>
              </footer>
            </div>
          </section>
        </main>
        <a
          className="whatsapp-fab"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={pt ? "Conversar com Pablo pelo WhatsApp" : "Chat with Pablo on WhatsApp"}
        >
          <span className="whatsapp-tooltip">{pt ? "Vamos conversar?" : "Let's talk?"}</span>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.94 11.94 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.82h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.89 9.89 0 0 1-1.52-5.27c0-5.48 4.45-9.93 9.94-9.93a9.86 9.86 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.97 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
          </svg>
        </a>
      </div>
    </MotionConfig>
  );
}
