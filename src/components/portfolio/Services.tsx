import { useLanguage } from "@/i18n/language";

export function Services() {
  const { copy } = useLanguage();
  const layout = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <div
        className="pointer-events-none absolute inset-x-6 top-20 h-44 rounded-full blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.7 0.14 80 / 0.22), oklch(0.72 0.08 210 / 0.14), oklch(0.63 0.11 30 / 0.2))",
        }}
        aria-hidden
      />

      <div className="relative mb-14 rounded-2xl border border-border/70 bg-card/35 p-7 backdrop-blur-sm sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border/70 pb-6">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // capabilities.json
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              {copy.services.title}
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {copy.services.itemsLabel}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Produtos digitais com visual forte, codigo limpo e foco em conversao. Cada bloco abaixo
          representa um tipo de entrega que posso assumir de ponta a ponta.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {copy.services.items.map((s, i) => (
          <article
            key={s.code}
            className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card/45 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_55px_rgba(0,0,0,0.35)] ${layout[i] ?? "lg:col-span-6"}`}
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-45"
              style={{
                background:
                  i % 2 === 0
                    ? "oklch(0.72 0.09 80 / 0.75)"
                    : "oklch(0.67 0.12 220 / 0.75)",
              }}
              aria-hidden
            />

            <div className="relative flex items-start justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-accent">
                {s.code}
              </span>
              <span className="rounded-full border border-border/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                stack
              </span>
            </div>

            <h3 className="relative mt-5 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              {s.title}
            </h3>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>

            <div className="relative mt-7 space-y-4">
              <div className="space-y-1 border-t border-border/70 pt-4">
                {s.prices.map((price) => (
                  <p
                    key={price}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
                  >
                    {price}
                  </p>
                ))}
              </div>

              <ul className="grid gap-2 border-t border-border/70 pt-4 font-mono text-xs text-muted-foreground sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-md border border-border/60 bg-background/40 px-2.5 py-2"
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
    </section>
  );
}
