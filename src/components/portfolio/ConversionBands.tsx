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
    <section className="relative border-y border-border bg-background px-6 py-14">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map(([k, v]) => (
          <div
            key={k}
            className="rounded-2xl border border-border/70 bg-card/45 p-7 backdrop-blur-sm sm:p-8"
          >
            <p className="font-serif text-6xl italic leading-none text-accent">{k}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{v}</p>
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
      className={`relative border-y border-border px-6 py-16 ${tone === "dark" ? "bg-[#0b0c0f]" : "bg-background"}`}
    >
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-20" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-border/70 bg-card/50 p-7 backdrop-blur-sm sm:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {isPt ? "próximo passo" : "next step"}
          </p>
          <h2 className="max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.75rem]">
            {isPt
              ? "Quer validar uma oferta, criar uma landing page ou tirar um sistema da planilha?"
              : "Need to validate an offer, launch a landing page, or replace a spreadsheet with software?"}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {isPt
              ? "Me mande o contexto. Eu respondo com um caminho realista de escopo, prazo e investimento."
              : "Send me the context. I will reply with a realistic path for scope, timeline, and price."}
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {isPt ? "Conversar sobre projeto" : "Discuss a project"}
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
