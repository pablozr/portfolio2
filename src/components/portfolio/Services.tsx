import { useLanguage } from "@/i18n/language";

export function Services() {
  const { copy } = useLanguage();
  const layout = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-4", "lg:col-span-8"];

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-36">
      <div
        className="pointer-events-none absolute right-10 top-16 h-36 w-36 rotate-12 border-[4px] border-border bg-accent shadow-[10px_10px_0_var(--color-border)]"
        aria-hidden
      />

      <div className="relative mb-14 overflow-hidden border-[4px] border-border bg-card p-7 shadow-[12px_12px_0_var(--color-border)] sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b-[3px] border-border pb-6">
          <div>
            <p className="mb-2 font-mono text-xs font-black uppercase tracking-[0.3em] text-accent">
              // {copy.services.eyebrow}
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              {copy.services.title}
            </h2>
          </div>
          <span className="border-[3px] border-border bg-primary px-3 py-1 font-mono text-[11px] font-black uppercase tracking-[0.22em] text-foreground shadow-[4px_4px_0_var(--color-border)]">
            {copy.services.itemsLabel}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-sm font-semibold leading-relaxed text-muted-foreground sm:text-base">
          {copy.services.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {copy.services.items.map((s, i) => (
          <article
            key={s.code}
            className={`group relative overflow-hidden border-[3px] border-border bg-card p-8 shadow-[9px_9px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-secondary hover:shadow-[4px_4px_0_var(--color-border)] sm:p-9 lg:p-10 ${layout[i] ?? "lg:col-span-6"}`}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rotate-12 border-[3px] border-border opacity-90 transition-transform group-hover:rotate-3"
              style={{
                background:
                  i % 2 === 0 ? "oklch(0.78 0.09 78 / 0.82)" : "oklch(0.7 0.11 220 / 0.82)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-primary"
              aria-hidden
            />

            <div className="relative flex items-start justify-between gap-3">
              <span className="font-mono text-[13px] font-black uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground">
                {s.code}
              </span>
              <span className="border-2 border-border bg-accent px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-accent-foreground">
                {copy.services.badge}
              </span>
            </div>

            <h3 className="relative mt-5 text-[1.7rem] font-black uppercase tracking-[-0.04em] sm:text-[2.2rem]">
              {s.title}
            </h3>
            <p className="relative mt-4 text-[17px] font-medium leading-relaxed text-muted-foreground">
              {s.body}
            </p>

            <div className="relative mt-7 space-y-4">
              <div className="space-y-1 border-t-[3px] border-border pt-4">
                {s.prices.map((price) => (
                  <p
                    key={price}
                    className="font-mono text-xs font-black uppercase tracking-[0.16em] text-accent"
                  >
                    {price}
                  </p>
                ))}
              </div>

              <ul className="grid gap-2 border-t-[3px] border-border pt-4 font-mono text-[13px] font-bold text-foreground sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="border-2 border-border bg-background px-2.5 py-2 transition-colors group-hover:bg-card"
                  >
                    <span className="mr-2 text-accent">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border-[4px] border-border bg-primary p-7 shadow-[12px_12px_0_var(--color-border)] sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-border pb-5">
          <h3 className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
            {copy.services.fitTitle}
          </h3>
          <span className="border-2 border-border bg-card px-3 py-1 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-foreground">
            fit
          </span>
        </div>

        <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-foreground sm:text-base">
          {copy.services.fitIntro}
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {copy.services.fitItems.map((item) => (
            <li
              key={item}
              className="border-2 border-border bg-card px-4 py-3 text-sm font-semibold leading-relaxed text-foreground"
            >
              <span className="mr-2 text-accent">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
