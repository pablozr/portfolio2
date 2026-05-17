const STEPS = [
  { k: "01", t: "Discovery", d: "30-min call. We map the real problem, not the surface ask." },
  { k: "02", t: "Scope", d: "Fixed-price proposal with milestones, deliverables and timeline." },
  { k: "03", t: "Build", d: "Weekly demos. Async updates. No black-box weeks of silence." },
  { k: "04", t: "Ship", d: "Deploy, monitor, document. You get the keys — not a dependency." },
];

export function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              // how_we_work
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Lean. Async. Shipped.
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs leading-relaxed text-muted-foreground">
            One developer. Four steps. No agency overhead, no surprise invoices,
            no abandoned codebases.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.k} className="bg-background p-8">
              <div className="mb-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span className="text-accent">{s.k}</span>
                <span>STEP</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{s.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
