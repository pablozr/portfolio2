import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, ArrowUp, Check, Copy, Download, Pause, Play } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import type { Status } from "@/i18n/site-copy";
import profilePhoto from "@/assets/profile-photo.jpg";
import { BootSequence } from "./BootSequence";
import { Sigil, ThornRule } from "./Sigil";
import { WiredCanvas } from "./WiredCanvas";

const email = "pablo.farina28@outlook.com";
const githubUrl = "https://github.com/pablozr";
const linkedinUrl = "https://www.linkedin.com/in/pablo-de-araujo-farina-893a8126b";
const cvUrl = "/cv-pablo-farina.pdf";

const layerGlyphs: Record<string, string> = {
  whoami: "自己",
  protocol: "プロトコル",
  signals: "信号",
  archive: "記録",
  stack: "道具",
  offline: "オフライン",
  connect: "接続",
};

const layerIds = ["whoami", "protocol", "signals", "archive", "stack", "offline", "connect"];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Glitch({
  text,
  as: Tag = "span",
  className = "",
}: {
  text: string;
  as?: "span" | "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={`glitch ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}

function LayerHeader({ id, index, label }: { id: string; index: number; label: string }) {
  return (
    <div className="layer-header">
      <span className="layer-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <span className="layer-label">
        <span className="layer-tag">LAYER:{String(index).padStart(2, "0")}</span>
        <span className="layer-name">{label}</span>
      </span>
      <span className="layer-glyph" lang="ja" aria-hidden="true">
        {layerGlyphs[id]}
      </span>
    </div>
  );
}

function StatusChip({ status, label }: { status: Status; label: string }) {
  return (
    <span className={`status status-${status}`}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  if (!now) return <span className="clock">----.--.-- --:--:--</span>;
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <time className="clock" dateTime={now.toISOString()}>
      {now.getFullYear()}.{pad(now.getMonth() + 1)}.{pad(now.getDate())} {pad(now.getHours())}:
      {pad(now.getMinutes())}:{pad(now.getSeconds())}
    </time>
  );
}

function useActiveLayer() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(layerIds.indexOf(entry.target.id) + 1);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    layerIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const top = document.getElementById("top");
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(0);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (top) topObserver.observe(top);
    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, []);
  return active;
}

function CopyEmail({ label, done }: { label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="wire-button ghost"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2200);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}

export function Portfolio() {
  const { copy, locale, setLocale } = useLanguage();
  const pt = locale === "pt-BR";
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const active = useActiveLayer();
  const { ui, hero, whoami, protocol, signals, archive, stack, offline, connect } = copy;

  const marquee = [
    "CLOSE THE WORLD",
    "OPEN THE NEXT",
    "ワイヤード",
    "PRESENT DAY",
    "PRESENT TIME",
    "接続",
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className={`lain ${paused ? "motion-paused" : ""}`}>
        <div className="fx-noise" aria-hidden="true" />
        <div className="fx-scanlines" aria-hidden="true" />
        <div className="fx-vignette" aria-hidden="true" />
        <BootSequence lines={ui.boot} hint={ui.bootSkip} />
        <motion.div className="progress" style={{ scaleX: progress }} />
        <a className="skip-link" href="#main">
          {ui.skip}
        </a>

        <header className="topbar">
          <a href="#top" className="brand" aria-label="Pablo Farina — home">
            <Sigil className="brand-sigil" />
            <span className="brand-name">pablo farina</span>
            <span className="brand-sub">// navi</span>
          </a>
          <nav className="topnav" aria-label={pt ? "Navegação principal" : "Main navigation"}>
            {ui.nav.map((item, i) => (
              <a key={item.href} href={item.href} className={active === i + 1 ? "is-active" : ""}>
                <span aria-hidden="true">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="topbar-actions">
            <Clock />
            <div className="lang" role="group" aria-label={pt ? "Idioma" : "Language"}>
              <button aria-pressed={pt} onClick={() => setLocale("pt-BR")}>
                PT
              </button>
              <button aria-pressed={!pt} onClick={() => setLocale("en")}>
                EN
              </button>
            </div>
            <button
              className="icon-toggle"
              onClick={() => setPaused(!paused)}
              disabled={!!reduced}
              aria-pressed={paused}
              aria-label={paused ? ui.motionOff : ui.motionOn}
              title={paused ? ui.motionOff : ui.motionOn}
            >
              {paused || reduced ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <a href="#connect" className="topbar-connect">
              {ui.connect}
            </a>
          </div>
        </header>

        <aside className="layer-rail" aria-hidden="true">
          <span className="rail-label">LAYER</span>
          <span className="rail-value">{String(active).padStart(2, "0")}</span>
          <span className="rail-track">
            {layerIds.map((id, i) => (
              <span key={id} className={active >= i + 1 ? "on" : ""} />
            ))}
          </span>
        </aside>

        <main id="main">
          <section id="top" className="hero">
            <WiredCanvas paused={paused} />
            <div className="hero-dots" aria-hidden="true" />
            <Sigil className="hero-sigil" />
            <div className="hero-inner">
              <p className="hero-kicker">
                <span className="rec" aria-hidden="true" /> {hero.kicker}
              </p>
              <h1 className="hero-name">
                <Glitch text="PABLO" className="hero-line" />
                <Glitch text="FARINA" className="hero-line hero-line-2" />
              </h1>
              <p className="hero-jp" lang="ja" aria-hidden="true">
                パブロ・ファリーナ
              </p>
              <p className="hero-role">{hero.role}</p>
              <p className="hero-body">{hero.body}</p>
              <div className="hero-ctas">
                <a className="wire-button" href="#whoami">
                  {hero.ctaPrimary} <ArrowUpRight size={16} />
                </a>
                <a className="wire-button ghost" href="#connect">
                  {hero.ctaSecondary}
                </a>
              </div>
            </div>
            <dl className="readout">
              {hero.readout.map((r) => (
                <div key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[0, 1].map((n) => (
                <span key={n}>
                  {marquee.map((m) => (
                    <span key={m} className="marquee-item">
                      {m}
                      <Sigil className="marquee-sigil" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <section id="whoami" className="layer">
            <LayerHeader id="whoami" index={1} label={whoami.layer} />
            <div className="whoami-grid">
              <Reveal className="portrait">
                <div className="portrait-frame">
                  <img
                    src={profilePhoto}
                    alt={whoami.photoAlt}
                    width={1122}
                    height={1402}
                    loading="lazy"
                  />
                  <span className="portrait-tag">subject: pablo_farina.jpg</span>
                </div>
                <Sigil className="portrait-sigil" />
              </Reveal>
              <div className="whoami-copy">
                <Reveal>
                  <h2 className="layer-title">{whoami.title}</h2>
                </Reveal>
                {whoami.paragraphs.map((p, i) => (
                  <Reveal key={p} delay={i * 0.06}>
                    <p>{p}</p>
                  </Reveal>
                ))}
                <Reveal>
                  <blockquote className="quote">{whoami.quote}</blockquote>
                </Reveal>
                <dl className="facts">
                  {whoami.facts.map((f) => (
                    <div key={f.k}>
                      <dd>{f.v}</dd>
                      <dt>{f.k}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <ThornRule />

          <section id="protocol" className="layer">
            <LayerHeader id="protocol" index={2} label={protocol.layer} />
            <Reveal className="layer-intro">
              <h2 className="layer-title">{protocol.title}</h2>
              <p>{protocol.intro}</p>
            </Reveal>
            <ol className="timeline">
              {protocol.jobs.map((job, i) => (
                <li className="job" key={job.org + job.role}>
                  <Reveal delay={i * 0.04} className="job-inner">
                    <div className="job-meta">
                      <span className="job-period">{job.period}</span>
                      <span className="job-place">{job.place}</span>
                    </div>
                    <div className="job-body">
                      <h3>
                        <Glitch text={job.org} />
                      </h3>
                      <p className="job-role">{job.role}</p>
                      <ul>
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div className="chips">
                        {job.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="education">
              <span className="edu-label">{protocol.education.label}</span>
              <span className="edu-school">{protocol.education.school}</span>
              <span>{protocol.education.degree}</span>
              <span className="edu-period">{protocol.education.period}</span>
            </div>
          </section>

          <section id="signals" className="layer layer-signals">
            <div className="signals-dots" aria-hidden="true" />
            <LayerHeader id="signals" index={3} label={signals.layer} />
            <Reveal className="layer-intro">
              <h2 className="layer-title">{signals.title}</h2>
              <p>{signals.intro}</p>
            </Reveal>
            <div className="signal-grid">
              {signals.items.map((s, i) => (
                <Reveal key={s.code} delay={i * 0.05} className={`signal signal-${s.status}`}>
                  <div className="signal-head">
                    <span className="signal-code">{s.code}</span>
                    <StatusChip status={s.status} label={ui.statusLabels[s.status]} />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                  <div className="chips">
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {s.repoUrl && (
                    <a className="signal-link" href={s.repoUrl} target="_blank" rel="noreferrer">
                      {ui.repo} <ArrowUpRight size={14} />
                    </a>
                  )}
                </Reveal>
              ))}
              <Reveal className="signal reading" delay={0.3}>
                <div className="signal-head">
                  <span className="signal-code">QUE</span>
                </div>
                <h3>{signals.reading.label}</h3>
                <ol>
                  {signals.reading.items.map((r, i) => (
                    <li key={r}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {r}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </section>

          <section id="archive" className="layer">
            <LayerHeader id="archive" index={4} label={archive.layer} />
            <Reveal className="layer-intro">
              <h2 className="layer-title">{archive.title}</h2>
              <p>{archive.intro}</p>
            </Reveal>
            <div className="archive" role="list">
              <div className="archive-head" aria-hidden="true">
                <span>perm</span>
                <span>year</span>
                <span>name</span>
                <span>type</span>
              </div>
              {archive.projects.map((p) => (
                <details key={p.name} className="archive-row" role="listitem">
                  <summary>
                    <span className="perm" aria-hidden="true">
                      drwxr-x
                    </span>
                    <span className="year">{p.year}</span>
                    <span className="name">{p.name}</span>
                    <span className="kind">{p.kind}</span>
                    <span className="toggle" aria-hidden="true" />
                  </summary>
                  <div className="archive-detail">
                    <p>{p.body}</p>
                    <div className="chips">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <div className="archive-links">
                      <a href={p.repoUrl} target="_blank" rel="noreferrer">
                        {ui.repo} <ArrowUpRight size={14} />
                      </a>
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noreferrer">
                          {p.liveLabel ?? ui.live} <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
            <a className="more-link" href={githubUrl} target="_blank" rel="noreferrer">
              <span className="more-prompt">$</span> {archive.more} <ArrowUpRight size={16} />
            </a>
          </section>

          <ThornRule />

          <section id="stack" className="layer">
            <LayerHeader id="stack" index={5} label={stack.layer} />
            <Reveal className="layer-intro">
              <h2 className="layer-title">{stack.title}</h2>
            </Reveal>
            <div className="stack-grid">
              {stack.groups.map((g, i) => (
                <Reveal key={g.label} delay={i * 0.04} className="stack-group">
                  <h3>
                    <span aria-hidden="true">/{String(i).padStart(2, "0")}</span> {g.label}
                  </h3>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="offline" className="layer layer-offline">
            <LayerHeader id="offline" index={6} label={offline.layer} />
            <div className="offline-grid">
              <Reveal>
                <h2 className="layer-title">{offline.title}</h2>
                <p>{offline.body}</p>
              </Reveal>
              <ul className="offline-words">
                {offline.items.map((item, i) => (
                  <li key={item} style={{ ["--i" as string]: i }}>
                    <Glitch text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="connect" className="layer layer-connect">
            <Sigil className="connect-sigil" />
            <LayerHeader id="connect" index={7} label={connect.layer} />
            <Reveal>
              <Glitch as="h2" text={connect.title} className="connect-title" />
            </Reveal>
            <div className="connect-grid">
              <Reveal>
                <p className="connect-next">{connect.next}</p>
                <p className="connect-body">{connect.body}</p>
              </Reveal>
              <Reveal className="connect-actions">
                <a className="connect-email" href={`mailto:${email}`}>
                  {email}
                </a>
                <div className="connect-buttons">
                  <a className="wire-button" href={`mailto:${email}`}>
                    {connect.cta} <ArrowUpRight size={16} />
                  </a>
                  <CopyEmail label={connect.copy} done={connect.copied} />
                  <a className="wire-button ghost" href={cvUrl} download>
                    <Download size={16} /> {connect.cv}
                  </a>
                </div>
                <div className="connect-links">
                  <a href={linkedinUrl} target="_blank" rel="noreferrer">
                    linkedin <ArrowUpRight size={14} />
                  </a>
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    github <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            </div>
            <p className="connect-quote">“{connect.quote}”</p>
          </section>
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} pablo farina</span>
          <span className="footer-jp" lang="ja" aria-hidden="true">
            すべては繋がっている
          </span>
          <a href="#top">
            {ui.backToTop} <ArrowUp size={13} />
          </a>
        </footer>
      </div>
    </MotionConfig>
  );
}
