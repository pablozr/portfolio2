import { useLanguage } from "@/i18n/language";
import { Github, Linkedin, Mail } from "lucide-react";

export function About() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const aboutMeta = isPt
    ? "stack com propósito"
    : "purpose-driven stack";
  const profileRows = isPt
    ? [
        ["quem", "desenvolvedor full stack"],
        ["atua", "web, backend e integrações"],
        ["fluxo", "escopo, staging e handoff"],
      ]
    : [
        ["who", "full stack developer"],
        ["focus", "web, backend, integrations"],
        ["flow", "scope, staging, handoff"],
      ];
  const profileNote = isPt
    ? "Stack com propósito para resolver gargalos reais de operação."
    : "Purpose-driven stack focused on operational bottlenecks.";
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
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 30% 18%, oklch(0.78 0.09 70 / 0.22), transparent 58%), radial-gradient(80% 60% at 80% 72%, oklch(0.7 0.08 230 / 0.1), transparent 62%), linear-gradient(180deg, oklch(0.22 0.006 60), oklch(0.14 0.005 60))",
              }}
            />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>operator_profile.exe</span>
                <span className="text-accent">● live</span>
              </div>

              <div className="absolute inset-x-8 top-24 rounded-2xl border border-border/70 bg-background/35 p-5 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                <div className="mb-5 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="size-2 rounded-full bg-muted-foreground/40" />
                  <span className="size-2 rounded-full bg-muted-foreground/25" />
                </div>
                <div className="space-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {profileRows.map(([label, value], i) => (
                    <div
                      key={label}
                      className={`flex justify-between ${i < profileRows.length - 1 ? "border-b border-border/70 pb-3" : ""}`}
                    >
                      <span>{label}</span>
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-md">
                  <p className="font-serif text-4xl italic leading-none text-accent">
                    {isPt ? "planejar / construir / manter" : "plan / build / maintain"}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {profileNote}
                  </p>
                </div>
              </div>
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
                      style={{ background: "linear-gradient(to right, transparent, var(--color-accent), transparent)" }}
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
