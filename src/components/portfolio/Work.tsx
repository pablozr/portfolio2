import { useLanguage } from "@/i18n/language";

export function Work() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />

      <div className="relative mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border/70 pb-6">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
            // {isPt ? "projetos" : "work"}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.work.title}
          </h2>
        </div>
        <span className="rounded-full border border-border/70 bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {copy.work.itemsLabel}
        </span>
      </div>

      <p className="relative mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {copy.work.intro}
      </p>

      <div className="relative grid gap-5 md:grid-cols-2">
        {copy.work.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-border/80 bg-card/45 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border/70 bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {project.tag}
              </span>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                {project.status}
              </span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {project.year}
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {project.body}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/70 bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                GitHub
              </a>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  Live
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
