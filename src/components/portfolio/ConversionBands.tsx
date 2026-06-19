import { useLanguage } from "@/i18n/language";

export function ProofBand() {
  const { locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const items = isPt
    ? [
        ["5+", "projetos completos com frontend, backend e deploy"],
        ["4", "tipos de entrega: landing, sistema, dashboard e automação"],
        ["100%", "código e documentação entregues no handoff"],
      ]
    : [
        ["5+", "complete projects with frontend, backend, and deploy"],
        ["4", "delivery types: landing, system, dashboard, and automation"],
        ["100%", "code and documentation handed over at the end"],
      ];

  return (
    <section className="relative border-y-[4px] border-border bg-accent px-6 py-14">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map(([k, v]) => (
          <div
            key={k}
            className="border-[3px] border-border bg-card p-7 shadow-[8px_8px_0_var(--color-border)] sm:p-8"
          >
            <p className="font-mono text-6xl font-black leading-none text-accent">{k}</p>
            <p className="mt-5 text-base font-semibold leading-relaxed text-muted-foreground">
              {v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <section
      className="relative border-y-[4px] border-border bg-background px-6 py-16"
    >
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-20" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 border-[4px] border-border bg-card p-7 shadow-[12px_12px_0_var(--color-border)] sm:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] font-black uppercase tracking-[0.22em] text-accent">
            {isPt ? "próximo passo" : "next step"}
          </p>
          <h2 className="max-w-3xl text-[2rem] font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-[3rem]">
            {isPt
              ? "Quer validar uma oferta, criar uma landing page ou tirar um sistema da planilha?"
              : "Need to validate an offer, launch a landing page, or replace a spreadsheet with software?"}
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-muted-foreground sm:text-lg">
            {isPt
              ? "Me mande o contexto. Eu respondo com um caminho realista de escopo, prazo e investimento."
              : "Send me the context. I will reply with a realistic path for scope, timeline, and price."}
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-3 border-[3px] border-border bg-accent px-6 py-3 text-sm font-black uppercase text-accent-foreground shadow-[6px_6px_0_var(--color-border)] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {isPt ? "Conversar sobre projeto" : "Discuss a project"}
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
