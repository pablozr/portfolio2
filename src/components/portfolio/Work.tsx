import { useLanguage } from "@/i18n/language";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const getPlaceholderPreview = (title: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#0f172a'/>
        <stop offset='55%' stop-color='#111827'/>
        <stop offset='100%' stop-color='#1f2937'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='675' fill='url(#g)'/>
    <circle cx='1020' cy='110' r='170' fill='rgba(255,255,255,0.08)'/>
    <circle cx='180' cy='590' r='210' fill='rgba(34,211,238,0.14)'/>
    <text x='72' y='340' fill='#e5e7eb' font-family='Arial, sans-serif' font-size='56' font-weight='700'>${title}</text>
    <text x='72' y='392' fill='#93c5fd' font-family='Arial, sans-serif' font-size='28'>Preview visual provisório</text>
    <text x='72' y='430' fill='#9ca3af' font-family='Arial, sans-serif' font-size='24'>Imagem final será substituída pelo projeto real</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export function Work() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-[float-soft_4.6s_ease-in-out_infinite]"
        aria-hidden
      />

      <div className="relative mb-12 border-b border-border/70 pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent/90 animate-[reveal_0.7s_var(--ease-out-expo)_both]">
          {isPt ? "Portfolio selecionado" : "Selected work"}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight animate-[reveal_0.9s_var(--ease-out-expo)_both] sm:text-5xl md:text-6xl">
            {copy.work.title}
          </h2>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent animate-[reveal_1.1s_var(--ease-out-expo)_both]">
            {isPt ? "entregas reais" : "real deliveries"}
          </span>
        </div>
      </div>

      <p className="relative mb-10 max-w-4xl text-sm leading-relaxed text-muted-foreground animate-[reveal_1.15s_var(--ease-out-expo)_both] sm:text-base">
        {copy.work.intro}
      </p>

      <div className="relative grid gap-6 md:grid-cols-2">
        {copy.work.projects.map((project, index) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <button
                type="button"
                className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 p-7 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/70 sm:p-8 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
                style={{
                  animation: "reveal 0.7s var(--ease-out-expo) both",
                  animationDelay: `${index * 90 + 180}ms`,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="relative text-[1.7rem] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[2rem]">
                  {project.title}
                </h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
                  {project.body}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                  {project.stack.length > 4 ? (
                    <li className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      +{project.stack.length - 4}
                    </li>
                  ) : null}
                </ul>

                <p className="relative mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-accent">
                  {isPt ? "Abrir detalhes completos" : "Open full details"}
                </p>
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[88vh] overflow-y-auto border-border/70 bg-background/95 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl">{project.title}</DialogTitle>
                <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <div className="group/preview overflow-hidden rounded-2xl border border-border/70 bg-card/40">
                  <img
                    src={getPlaceholderPreview(project.title)}
                    alt={`Preview provisório de ${project.title}`}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover/preview:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="rounded-2xl border border-border/70 bg-card/40 p-5">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {copy.work.modalHighlightsLabel}
                  </p>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-[2px] text-accent">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card/40 p-5">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {copy.work.modalStackLabel}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border/70 bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {copy.work.modalRepoLabel}
                    <span className="text-accent/0 transition-colors duration-300 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {copy.work.modalLiveLabel}
                      <span className="text-accent/0 transition-colors duration-300 group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
