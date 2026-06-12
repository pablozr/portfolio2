import { useLanguage } from "@/i18n/language";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function About() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const aboutMeta = isPt ? "stack com propósito" : "purpose-driven stack";
  const principles = isPt
    ? ["APIs documentadas", "staging para validar", "deploy e handoff claros"]
    : ["documented APIs", "staging for validation", "clear deploy and handoff"];

  return (
    <section id="about" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 12%, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              // about
            </p>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {copy.about.titleLine1}
              <br />
              <span className="font-serif italic text-muted-foreground">
                {copy.about.titleLine2}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-full border border-border/80 bg-card/50 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm sm:ml-auto sm:w-fit">
              <span className="text-accent">●</span> {aboutMeta}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="group relative min-h-[560px] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/20">
              <img
                src={profilePhoto}
                alt="Foto de Pablo Farina"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                decoding="async"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/20" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid h-full gap-6">
              <div className="rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-sm sm:p-9">
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>{copy.about.p1}</p>
                  <p>{copy.about.p2}</p>
                  <p>{copy.about.p3}</p>
                  {copy.about.p4 ? <p className="text-foreground">{copy.about.p4}</p> : null}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:pablo.farina28@outlook.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Email"
                  >
                    <Mail className="size-[15px]" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://github.com/pablozr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="GitHub"
                  >
                    <Github className="size-[15px]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pablo-de-ara%C3%BAjo-farina-893a8126b"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-[15px]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {copy.about.stats.map((s, i) => (
                  <div
                    key={s.k}
                    className="group relative overflow-hidden rounded-xl border border-border/80 bg-background/70 p-5 animate-reveal"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, var(--color-accent), transparent)",
                      }}
                      aria-hidden
                    />
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.k}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="grid gap-3 sm:grid-cols-3">
                {principles.map((item) => (
                  <div key={item} className="rounded-xl border border-border/70 bg-card/40 p-5">
                    <div className="mb-4 h-px w-10 bg-accent" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300/95">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
