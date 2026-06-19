import { useLanguage } from "@/i18n/language";

export function Hero({ className = "" }: { className?: string }) {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section
      id="top"
      className={`relative overflow-hidden border-b-[4px] border-border bg-background ${className}`.trim()}
    >
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#0b0e14,#121722)]"
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-18" aria-hidden />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-6 pt-24 pb-16 lg:grid-cols-[minmax(0,56%)_minmax(360px,38%)] lg:gap-20 lg:pt-26 lg:pb-18">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {copy.hero.availability ? (
              <div className="inline-flex items-center gap-3 border-[3px] border-border bg-card px-4 py-2 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-foreground shadow-[5px_5px_0_var(--color-border)]">
                <span className="size-3 border-2 border-border bg-accent" aria-hidden />
                <span>{copy.hero.availability}</span>
              </div>
            ) : null}
          </div>

          <h1 className="max-w-[780px] text-balance text-[clamp(3.1rem,6.4vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white">
            {copy.hero.titleLine1}
            <br />
            <span className="text-white">{copy.hero.titleLine2}</span>
            <br />
            <span className="inline-block -rotate-1 border-[4px] border-border bg-accent px-3 py-1 text-[0.72em] text-accent-foreground shadow-[6px_6px_0_var(--color-border)]">
              {copy.hero.titleAccent}
            </span>
          </h1>

          <div className="mt-7 max-w-2xl">
            <p className="border-l-[6px] border-accent bg-background/80 py-2 pl-5 pr-4 text-[15px] font-semibold leading-relaxed text-foreground sm:text-base">
              {copy.hero.body}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 border-[3px] border-border bg-accent px-5 py-3 text-sm font-black uppercase text-accent-foreground shadow-[6px_6px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              {isPt ? "Pedir orçamento rápido" : "Request a quick quote"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 border-[3px] border-border bg-card px-5 py-3 text-sm font-black uppercase text-foreground shadow-[6px_6px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-secondary hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              {copy.hero.ctaServices}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
          <p className="mt-4 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
            {isPt
              ? "Landing page • Site institucional • WhatsApp-first • Mobile-first"
              : "Landing page • Business website • WhatsApp-first • Mobile-first"}
          </p>
          <div className="mt-9 lg:hidden" aria-hidden>
            <HeroMockup isPt={isPt} />
          </div>
        </div>

        <aside className="relative hidden items-center lg:flex" aria-hidden>
          <HeroMockup isPt={isPt} desktop />
        </aside>
      </div>
    </section>
  );
}

function HeroMockup({ isPt, desktop = false }: { isPt: boolean; desktop?: boolean }) {
  return (
    <div
      className={`w-full border-[4px] border-border bg-card shadow-[14px_14px_0_var(--color-border)] ${
        desktop ? "scale-[1.08]" : "max-w-md"
      }`}
    >
      <div className="flex h-11 items-center gap-2 border-b-[4px] border-border bg-background px-4">
        <span className="size-3 border-2 border-border bg-accent" />
        <span className="size-3 border-2 border-border bg-primary" />
        <span className="size-3 border-2 border-border bg-card" />
        <span className="ml-auto font-mono text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
          preview.site
        </span>
      </div>

      <div className="p-5">
        <div className="mb-5 flex items-center justify-between border-b-[3px] border-border pb-4">
          <div className="border-[3px] border-border bg-accent px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.12em] text-accent-foreground">
            {isPt ? "Clínica" : "Clinic"}
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-10 bg-muted-foreground" />
            <span className="h-3 w-8 bg-muted-foreground" />
            <span className="h-3 w-12 bg-muted-foreground" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border-[3px] border-border bg-background p-4 shadow-[5px_5px_0_var(--color-border)]">
            <div className="mb-3 inline-flex border-2 border-border bg-secondary px-2 py-1 font-mono text-[9px] font-black uppercase tracking-[0.12em] text-secondary-foreground">
              {isPt ? "agenda aberta" : "booking open"}
            </div>
            <div className="space-y-2">
              <div className="h-6 w-full bg-foreground" />
              <div className="h-6 w-5/6 bg-foreground" />
              <div className="h-6 w-2/3 bg-foreground" />
            </div>
            <div className="mt-5 flex gap-3">
              <span className="grid h-10 w-32 place-items-center border-[3px] border-border bg-primary font-mono text-[10px] font-black uppercase tracking-[0.12em] text-primary-foreground">
                WhatsApp
              </span>
              <span className="grid h-10 w-24 place-items-center border-[3px] border-border bg-card font-mono text-[10px] font-black uppercase tracking-[0.12em] text-foreground">
                {isPt ? "Serviços" : "Services"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="border-[3px] border-border bg-primary p-2 font-mono text-[9px] font-black uppercase leading-tight tracking-[0.08em] text-primary-foreground">
              {isPt ? "Consulta" : "Visit"}
            </div>
            <div className="border-[3px] border-border bg-secondary p-2 font-mono text-[9px] font-black uppercase leading-tight tracking-[0.08em] text-secondary-foreground">
              {isPt ? "Tratamentos" : "Services"}
            </div>
            <div className="border-[3px] border-border bg-accent p-2 font-mono text-[9px] font-black uppercase leading-tight tracking-[0.08em] text-accent-foreground">
              {isPt ? "Avaliações" : "Reviews"}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_92px] gap-3">
            <div className="border-[3px] border-border bg-background p-3">
              <div className="mb-3 font-mono text-[9px] font-black uppercase tracking-[0.12em] text-accent">
                {isPt ? "localização" : "location"}
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted-foreground" />
                <div className="h-3 w-4/5 bg-muted-foreground" />
                <div className="h-3 w-2/3 bg-muted-foreground" />
              </div>
            </div>
            <div className="grid place-items-center border-[3px] border-border bg-accent font-mono text-2xl font-black text-accent-foreground">
              ↗
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
