const STEPS = [
  {
    k: "01",
    t: "Discovery",
    d: "A 30-minute call to map the real problem, not the surface ask. You leave with clarity, even if we never work together.",
    meta: "30 min · free",
    deliver: ["Problem brief", "Tech direction", "Rough estimate"],
  },
  {
    k: "02",
    t: "Scope",
    d: "Fixed-price proposal with milestones, deliverables and a hard timeline. No hourly billing surprises.",
    meta: "48h turnaround",
    deliver: ["Milestones", "Fixed quote", "Start date"],
  },
  {
    k: "03",
    t: "Build",
    d: "Weekly demos, async updates, shared staging from day one. You watch it come together — no black-box weeks of silence.",
    meta: "weekly demos",
    deliver: ["Staging URL", "Weekly Loom", "Slack channel"],
  },
  {
    k: "04",
    t: "Ship",
    d: "Deploy, monitor, document. You get the keys, the code and the runbook — never a dependency on me.",
    meta: "handover included",
    deliver: ["Production deploy", "Docs + runbook", "30-day support"],
  },
];

export function Process() {
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

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              // how_we_work
            </p>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              From first call to{" "}
              <span className="font-serif italic text-accent">production</span>
              <br />
              in four honest steps.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              One developer. No agency overhead, no junior hand-offs, no
              surprise invoices. You always know what&rsquo;s being built, why,
              and when it ships.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span><span className="text-accent">●</span> avg. 3–6 weeks</span>
              <span><span className="text-accent">●</span> fixed price</span>
              <span><span className="text-accent">●</span> async by default</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* connecting line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-border) 8%, var(--color-border) 92%, transparent)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.k}
                className="group relative animate-reveal"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* node */}
                <div className="relative mb-8 flex items-center justify-between">
                  <div className="relative flex size-[84px] items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-border transition-colors duration-500 group-hover:border-accent/60" />
                    <div
                      className="absolute inset-2 rounded-full border border-border/50 transition-all duration-500 group-hover:inset-1 group-hover:border-accent/30"
                    />
                    <span className="relative font-serif text-3xl text-foreground transition-colors group-hover:text-accent">
                      {s.k}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.meta}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-medium tracking-tight">
                  {s.t}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>

                <ul className="space-y-1.5 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
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
      </div>
    </section>
  );
}
