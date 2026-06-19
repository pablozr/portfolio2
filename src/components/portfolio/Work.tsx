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
  const cardAccents = ["bg-accent", "bg-primary", "bg-secondary", "bg-card"];

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />

      <div className="relative mb-12 border-b-[3px] border-border pb-8">
        <p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.24em] text-accent animate-[reveal_0.7s_var(--ease-out-expo)_both]">
          {isPt ? "Portfolio selecionado" : "Selected work"}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] animate-[reveal_0.9s_var(--ease-out-expo)_both] sm:text-6xl md:text-7xl">
            {copy.work.title}
          </h2>
          <span className="border-[3px] border-border bg-accent px-4 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-accent-foreground shadow-[4px_4px_0_var(--color-border)] animate-[reveal_1.1s_var(--ease-out-expo)_both]">
            {isPt ? "entregas reais" : "real deliveries"}
          </span>
        </div>
      </div>

      <p className="relative mb-10 max-w-4xl border-[3px] border-border bg-card p-5 text-sm font-semibold leading-relaxed text-muted-foreground shadow-[7px_7px_0_var(--color-border)] sm:text-base">
        {copy.work.intro}
      </p>

      <div className="relative grid auto-rows-fr gap-6 md:grid-cols-6">
        {copy.work.projects.map((project, index) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <button
                type="button"
                className={`group relative flex min-h-[430px] overflow-hidden border-[3px] border-border bg-card text-left shadow-[9px_9px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_var(--color-border)] ${
                  index === 0 ? "md:col-span-6 lg:min-h-[520px]" : "md:col-span-3"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_42%)]" />
                <div
                  className={`pointer-events-none absolute right-0 top-0 h-full w-[34%] border-l-[3px] border-border ${cardAccents[index % cardAccents.length]} opacity-95 transition-transform duration-300 group-hover:translate-x-2`}
                  aria-hidden
                />
                <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 rotate-6 border-[3px] border-border bg-background shadow-[6px_6px_0_var(--color-border)] transition-transform duration-300 group-hover:rotate-12" />
                <div className="pointer-events-none absolute bottom-6 right-8 h-28 w-44 -rotate-3 border-[3px] border-border bg-card shadow-[6px_6px_0_var(--color-border)] transition-transform duration-300 group-hover:-rotate-6" />

                <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="border-2 border-border bg-background px-3 py-1.5 font-mono text-xs font-black uppercase tracking-[0.16em] text-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="border-2 border-border bg-background px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-foreground">
                        {project.year}
                      </span>
                    </div>

                    <div className="mb-7 grid max-w-xl grid-cols-5 gap-2" aria-hidden>
                      <span className="col-span-3 h-3 border-2 border-border bg-accent" />
                      <span className="col-span-2 h-3 border-2 border-border bg-primary" />
                      <span className="col-span-2 h-3 border-2 border-border bg-secondary" />
                      <span className="col-span-3 h-3 border-2 border-border bg-background" />
                    </div>

                    <h3
                      className={`relative max-w-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] transition-transform duration-300 group-hover:translate-x-0.5 ${
                        index === 0 ? "text-5xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-4xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="relative mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-[17px]">
                      {project.body}
                    </p>
                  </div>

                  <div>
                    <ul className="relative mt-8 flex max-w-3xl flex-wrap gap-2">
                      {project.stack.slice(0, index === 0 ? 6 : 4).map((item) => (
                        <li
                          key={item}
                          className="border-2 border-border bg-background px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                      {project.stack.length > (index === 0 ? 6 : 4) ? (
                        <li className="border-2 border-border bg-background px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-muted-foreground">
                          +{project.stack.length - (index === 0 ? 6 : 4)}
                        </li>
                      ) : null}
                    </ul>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t-[3px] border-border pt-5">
                      <p className="font-mono text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-accent">
                        {isPt ? "Abrir estudo do projeto" : "Open project study"}
                      </p>
                      <span className="grid size-11 place-items-center border-[3px] border-border bg-accent font-mono text-xl font-black text-accent-foreground shadow-[4px_4px_0_var(--color-border)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[88vh] overflow-y-auto border-[3px] border-border bg-background shadow-[10px_10px_0_var(--color-border)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl">{project.title}</DialogTitle>
                <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.body}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <div className="group/preview overflow-hidden border-[3px] border-border bg-card shadow-[7px_7px_0_var(--color-border)]">
                  <img
                    src={getPlaceholderPreview(project.title)}
                    alt={`Preview provisório de ${project.title}`}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover/preview:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="border-[3px] border-border bg-card p-5 shadow-[7px_7px_0_var(--color-border)]">
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

                <div className="border-[3px] border-border bg-card p-5 shadow-[7px_7px_0_var(--color-border)]">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {copy.work.modalStackLabel}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border-2 border-border bg-background px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.12em] text-foreground"
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
                    className="group inline-flex items-center gap-2 border-[3px] border-border bg-primary px-4 py-2.5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-foreground shadow-[5px_5px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                      className="group inline-flex items-center gap-2 border-[3px] border-border bg-accent px-4 py-2.5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-accent-foreground shadow-[5px_5px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
