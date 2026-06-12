import { useLanguage } from "@/i18n/language";

export function Process() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section id="process" className="relative overflow-hidden border-y border-border bg-card/20">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
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
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.26em] text-accent">
              {isPt ? "// processo" : "// how_we_work"}
            </p>
            <h2 className="text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {copy.process.titleLine1}{" "}
              <span className="font-serif italic text-accent">{copy.process.titleAccent}</span>
              <br />
              {copy.process.titleLine2}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-zinc-200/95 sm:text-base lg:text-[1.05rem]">
              {copy.process.body}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.process.steps.map((s, i) => (
            <div
              key={s.k}
              className="group relative min-h-[380px] rounded-xl border border-border/70 bg-background/70 p-6 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-background/90 animate-reveal"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative mb-7 flex items-center justify-between">
                <div className="relative flex size-[72px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-accent/50 transition-colors duration-300 group-hover:animate-process-node" />
                  <div className="absolute inset-2 rounded-full border border-accent/30 transition-all duration-500 group-hover:inset-1" />
                  <span className="relative font-serif text-[1.7rem] text-accent transition-colors">
                    {s.k}
                  </span>
                </div>
                <span className="max-w-[48%] truncate rounded-full border border-border/80 bg-background/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-300/95 sm:max-w-none sm:text-xs">
                  {s.meta}
                </span>
              </div>

              <h3 className="mb-3 text-[1.55rem] font-medium tracking-tight sm:text-[1.9rem]">
                {s.t}
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-zinc-200/90 sm:text-[17px]">
                {s.d}
              </p>

              <ul className="space-y-2.5 border-t border-border/90 pt-4 font-mono text-[13px] text-zinc-300/95 sm:text-sm">
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
