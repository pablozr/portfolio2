const QUOTES = [
  {
    body: "Shipped our internal ops dashboard in three weeks. Replaced a fragile spreadsheet that was costing us hours every day. Communication was async, sharp, zero drama.",
    name: "Marina Costa",
    role: "Head of Ops",
    company: "Vanguard Logistics",
  },
  {
    body: "Rare combo of taste and engineering rigor. The landing page he built converted 3.2x better than our previous one, and the codebase is something we can actually maintain.",
    name: "Daniel Reis",
    role: "Founder",
    company: "Nexus AI",
  },
  {
    body: "Took a messy automation idea and turned it into a clean pipeline between Stripe, our CRM and GPT. Saved us roughly 15 hours a week. Worth every penny.",
    name: "Júlia Mendes",
    role: "COO",
    company: "Flux Studio",
  },
];

export function Testimonials() {
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
              What clients say
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
            [ 05 / TESTIMONIALS ]
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {QUOTES.map((q, i) => (
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
