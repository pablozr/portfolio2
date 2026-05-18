import { useState } from "react";

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Most engagements land between US$3k and US$25k depending on scope. Landing pages start around US$3k, custom systems and internal tools usually 8k–20k, automation flows 2k–8k. You get a fixed quote after the discovery call — no hourly surprises.",
  },
  {
    q: "How long until I see results?",
    a: "Landing pages ship in 1–2 weeks. Custom systems and dashboards take 3–6 weeks depending on scope. You see a staging URL from week one and weekly demos throughout — never a black box.",
  },
  {
    q: "Do I own the code?",
    a: "Yes, 100%. Code, design files, infrastructure access, documentation — all handed over on completion. Zero lock-in. You can hire any developer to continue the work.",
  },
  {
    q: "What's your stack?",
    a: "TypeScript end to end. React/Next.js or TanStack Start on the frontend, Node or Python on the backend, Postgres for data, Stripe for payments, Supabase or self-hosted depending on the project. I'll always pick the boring, proven stack over the trendy one.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Every project includes 30 days of free post-launch support for bug fixes. After that, optional monthly retainers are available if you want me on call for changes, monitoring or new features.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I integrate into your Slack, Linear/Jira, GitHub and stand-ups as needed. Async by default, sync when it matters.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            // faq
          </p>
          <h2 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            Frequently
            <br />
            <span className="font-serif italic text-muted-foreground">
              asked.
            </span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Something not covered here? Just{" "}
            <a
              href="#contact"
              className="text-foreground underline-offset-4 hover:underline"
            >
              send a message
            </a>{" "}
            — I reply within 24 hours.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1.5 font-mono text-xl leading-none text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-xl pl-10 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
