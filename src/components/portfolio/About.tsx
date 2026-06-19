import { useLanguage } from "@/i18n/language";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function About() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const aboutMeta = isPt ? "presença profissional" : "professional presence";

  return (
    <section id="about" className="relative overflow-hidden border-t-[4px] border-border">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 12%, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-6 font-mono text-[11px] font-black uppercase tracking-[0.25em] text-accent">
              // about
            </p>
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
              {copy.about.titleLine1}
              <br />
              <span className="bg-primary px-2 text-foreground">{copy.about.titleLine2}</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="border-[3px] border-border bg-card px-4 py-3 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground shadow-[6px_6px_0_var(--color-border)] sm:ml-auto sm:w-fit">
              <span className="text-accent">●</span> {aboutMeta}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="group relative min-h-[560px] overflow-hidden border-[4px] border-border bg-card shadow-[12px_12px_0_var(--color-border)]">
              <img
                src={profilePhoto}
                alt="Foto de Pablo Farina"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                decoding="async"
                loading="lazy"
              />
              <div className="absolute inset-0 mix-blend-multiply bg-primary/15" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid h-full gap-6">
              <div className="border-[4px] border-border bg-card p-7 shadow-[10px_10px_0_var(--color-border)] sm:p-9">
                <div className="space-y-6 text-base font-semibold leading-relaxed text-muted-foreground sm:text-lg">
                  <p>{copy.about.p1}</p>
                  <p>{copy.about.p2}</p>
                  <p>{copy.about.p3}</p>
                  {copy.about.p4 ? <p className="text-foreground">{copy.about.p4}</p> : null}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {copy.about.stats.map((item) => (
                    <div
                      key={item.k}
                      className="border-[3px] border-border bg-background p-4 shadow-[4px_4px_0_var(--color-border)]"
                    >
                      <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-accent">
                        {item.k}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">
                        {item.v}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:pablo.farina28@outlook.com"
                    className="inline-flex items-center gap-2 border-[3px] border-border bg-background px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-foreground shadow-[4px_4px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Email"
                  >
                    <Mail className="size-[15px]" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://github.com/pablozr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-[3px] border-border bg-background px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-foreground shadow-[4px_4px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="GitHub"
                  >
                    <Github className="size-[15px]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pablo-de-ara%C3%BAjo-farina-893a8126b"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-[3px] border-border bg-background px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-foreground shadow-[4px_4px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-[15px]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
