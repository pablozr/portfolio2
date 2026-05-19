import { useLanguage } from "@/i18n/language";

export function Testimonials() {
  const { copy } = useLanguage();
  const [featured, ...rest] = copy.testimonials.quotes;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-border"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 22%, transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 16%, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
        <div className="mb-14 flex flex-col gap-6 border-b border-border pb-8 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              // signal
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              {copy.testimonials.title}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-muted-foreground sm:justify-end">
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 font-mono uppercase tracking-[0.18em]">
              {copy.testimonials.itemsLabel}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 font-mono uppercase tracking-[0.18em]">
              5.0 avg rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <figure
            className="group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden border border-border/80 bg-card p-8 sm:p-10 lg:col-span-7 animate-reveal"
          >
            <div
              className="absolute -right-16 -top-20 h-52 w-52 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "color-mix(in oklch, var(--accent) 28%, transparent)" }}
              aria-hidden
            />

            <div className="relative">
              <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Featured feedback</span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <span className="mb-5 block font-serif text-7xl leading-none text-accent sm:text-8xl">
                &ldquo;
              </span>
              <blockquote className="max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
                {featured.body}
              </blockquote>
            </div>

            <figcaption className="relative mt-10 border-t border-border pt-6">
              <div className="text-base font-medium text-foreground">{featured.name}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {featured.role} · {featured.company}
              </div>
            </figcaption>
          </figure>

          <div className="grid gap-5 lg:col-span-5">
            {rest.map((q, i) => (
              <figure
                key={q.name}
                className="flex flex-col justify-between gap-6 border border-border/80 bg-card/70 p-7 backdrop-blur-[2px] animate-reveal"
                style={{ animationDelay: `${(i + 1) * 120}ms` }}
              >
                <blockquote className="text-[15px] leading-relaxed text-foreground">
                  {q.body}
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <div className="text-sm font-medium text-foreground">{q.name}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {q.role} · {q.company}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
