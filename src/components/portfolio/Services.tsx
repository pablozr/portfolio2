const SERVICES = [
  {
    code: "01 / LP",
    title: "Landing Pages",
    body: "High-conversion marketing surfaces. Custom design, motion, and copy-aware structure. Built for speed and Lighthouse 95+.",
    bullets: ["Custom design + dev", "CMS or static", "A/B ready"],
  },
  {
    code: "02 / SYS",
    title: "Custom Systems",
    body: "End-to-end fullstack apps. Auth, payments, dashboards, jobs. Clean architecture you can hand off without panic.",
    bullets: ["Auth + roles", "Stripe / billing", "Typed APIs"],
  },
  {
    code: "03 / INT",
    title: "Internal Tools",
    body: "Admin panels and ops dashboards that replace your fragile spreadsheet. Fast to iterate, hard to break.",
    bullets: ["Role-based UI", "CRUD + reports", "Audit logs"],
  },
  {
    code: "04 / AUTO",
    title: "Automation & Integrations",
    body: "Webhooks, queues and API glue between the tools you already use. Less manual work, more leverage.",
    bullets: ["n8n / Make", "Custom workers", "CRM / Stripe / GPT"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-12 flex items-end justify-between border-b border-border pb-6">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // capabilities.json
          </p>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            What I build
          </h2>
        </div>
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
          [ 04 / SERVICES ]
        </span>
      </div>

      <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <article
            key={s.code}
            className="group relative flex flex-col gap-6 border-b border-r border-border p-8 transition-colors hover:bg-card/60"
          >
            <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
              {s.code}
            </span>
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <ul className="mt-auto space-y-1.5 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-accent">▸</span> {b}
                </li>
              ))}
            </ul>
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
