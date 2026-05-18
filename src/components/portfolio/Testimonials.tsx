import { useLanguage } from "@/i18n/language";

export function Testimonials() {
  const { copy } = useLanguage();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              // signal
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              {copy.testimonials.title}
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
            {copy.testimonials.itemsLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {copy.testimonials.quotes.map((q, i) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between gap-8 bg-background p-8 animate-reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-5xl leading-none text-accent">
                &ldquo;
              </span>
              <blockquote className="text-base leading-relaxed text-foreground">
                {q.body}
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="text-sm font-medium text-foreground">{q.name}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {q.role} · {q.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
