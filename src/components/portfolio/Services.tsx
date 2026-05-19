import { useLanguage } from "@/i18n/language";

export function Services() {
  const { copy } = useLanguage();
  const layout = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-4", "lg:col-span-8"];

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <div
        className="pointer-events-none absolute inset-x-10 top-16 h-52 rounded-full blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.76 0.12 78 / 0.24), oklch(0.7 0.06 220 / 0.16), oklch(0.68 0.11 40 / 0.2))",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" aria-hidden />

      <div className="relative mb-14 overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(140deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_35%,rgba(0,0,0,0.08)_100%)] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" aria-hidden />
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent/90">
              // entregas.premium
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {copy.services.title}
            </h2>
          </div>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-200/85">
            {copy.services.itemsLabel}
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-300/90 sm:text-base">
          Produtos digitais com visual forte, codigo limpo e foco em conversao. Cada bloco abaixo
          representa um tipo de entrega que posso assumir de ponta a ponta.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {copy.services.items.map((s, i) => (
          <article
            key={s.code}
            className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)_40%,rgba(0,0,0,0.22)_100%)] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/55 hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)] ${layout[i] ?? "lg:col-span-6"}`}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-35 blur-2xl transition-opacity group-hover:opacity-55"
              style={{
                background:
                  i % 2 === 0
                    ? "oklch(0.78 0.09 78 / 0.82)"
                    : "oklch(0.7 0.11 220 / 0.82)",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" aria-hidden />

            <div className="relative flex items-start justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors group-hover:text-accent">
                {s.code}
              </span>
              <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                entrega
              </span>
            </div>

            <h3 className="relative mt-5 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              {s.title}
            </h3>
            <p className="relative mt-4 text-base leading-relaxed text-zinc-300/90">{s.body}</p>

            <div className="relative mt-7 space-y-4">
              <div className="space-y-1 border-t border-white/12 pt-4">
                {s.prices.map((price) => (
                  <p
                    key={price}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent/95"
                  >
                    {price}
                  </p>
                ))}
              </div>

              <ul className="grid gap-2 border-t border-white/12 pt-4 font-mono text-xs text-zinc-300/85 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-md border border-white/12 bg-black/20 px-2.5 py-2 transition-colors group-hover:border-white/20"
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
