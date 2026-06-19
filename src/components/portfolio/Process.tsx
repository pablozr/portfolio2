import { useLanguage } from "@/i18n/language";

export function Process() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section
      id="process"
      className="relative overflow-hidden border-y-[4px] border-border bg-background"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.78 0.09 70 / 0.5), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
        <div className="mb-14 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-sm font-black uppercase tracking-[0.26em] text-accent">
              {isPt ? "// processo" : "// how_we_work"}
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              {copy.process.titleLine1}{" "}
              <span className="bg-accent px-2 text-accent-foreground">
                {copy.process.titleAccent}
              </span>
              <br />
              {copy.process.titleLine2}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <p className="max-w-md border-[3px] border-border bg-card p-5 text-sm font-semibold leading-relaxed text-foreground shadow-[7px_7px_0_var(--color-border)] sm:text-base lg:text-[1.05rem]">
              {copy.process.body}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.process.steps.map((s, i) => (
            <div
              key={s.k}
              className="group relative min-h-[380px] border-[3px] border-border bg-card p-6 shadow-[9px_9px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-secondary hover:shadow-[4px_4px_0_var(--color-border)] animate-reveal"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative mb-7 flex items-center justify-between">
                <div className="relative flex size-[72px] items-center justify-center">
                  <div className="absolute inset-0 border-[3px] border-border bg-primary transition-colors duration-300 group-hover:animate-process-node" />
                  <div className="absolute inset-2 border-2 border-border bg-background transition-all duration-500 group-hover:inset-1" />
                  <span className="relative font-mono text-[1.7rem] font-black text-accent transition-colors">
                    {s.k}
                  </span>
                </div>
                <span className="max-w-[48%] truncate border-2 border-border bg-background px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-foreground sm:max-w-none sm:text-xs">
                  {s.meta}
                </span>
              </div>

              <h3 className="mb-3 text-[1.55rem] font-black uppercase tracking-[-0.04em] sm:text-[2rem]">
                {s.t}
              </h3>
              <p className="mb-6 text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-[17px]">
                {s.d}
              </p>

              <ul className="space-y-2.5 border-t-[3px] border-border pt-4 font-mono text-[13px] font-bold text-foreground sm:text-sm">
                {s.deliver.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="text-accent">→</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
