import { useLanguage } from "@/i18n/language";

export function Services() {
  const { copy } = useLanguage();

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // capabilities.json
          </p>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {copy.services.title}
          </h2>
        </div>
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
          {copy.services.itemsLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 items-stretch border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
        {copy.services.items.map((s) => (
          <article
            key={s.code}
            className="group relative flex h-full flex-col gap-6 border-b border-r border-border p-8 transition-colors hover:bg-card/60"
          >
            <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
              {s.code}
            </span>
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
            <div className="mt-auto space-y-4">
              <div className="space-y-1 border-t border-border pt-4">
                {s.prices.map((price) => (
                  <p
                    key={price}
                    className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent"
                  >
                    {price}
                  </p>
                ))}
              </div>
              <ul className="space-y-1.5 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-accent">▸</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-3 size-1.5 rounded-full bg-border transition-colors group-hover:bg-accent"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
