import { useLanguage } from "@/i18n/language";

export function Footer() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";

  return (
    <footer className="relative overflow-hidden border-t-[4px] border-border bg-background text-foreground">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 12%, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-[11px] font-black uppercase tracking-[0.24em] text-accent">
              {isPt ? "// fim" : "// end_transmission"}
            </p>
            <a
              href="#top"
              className="group block max-w-4xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-foreground sm:text-7xl lg:text-8xl"
            >
              Pablo
              <br />
              <span className="bg-accent px-2 text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-foreground">
                Farina
              </span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="border-[3px] border-border bg-card p-6 text-foreground shadow-[8px_8px_0_var(--color-border)]">
              <div className="flex items-center gap-3 border-b-[3px] border-border pb-5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                <span>{isPt ? "conversa aberta" : "open for conversations"}</span>
              </div>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-muted-foreground">
                {isPt
                  ? "Se você precisa de um site com visual forte, mensagem clara e caminho real para conversão, me chama."
                  : "If you need a website with strong visuals, clear messaging, and a real path to conversion, reach out."}
              </p>
              <a
                href="#contact"
                className="group mt-6 inline-flex w-full items-center justify-between border-[3px] border-border bg-primary px-5 py-3 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-foreground shadow-[5px_5px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-border)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>{isPt ? "iniciar conversa" : "start a conversation"}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t-[3px] border-border pt-6 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-3 md:items-center">
          <div>
            © {new Date().getFullYear()} Pablo Farina — {copy.footer.rights}
          </div>

          <div className="md:text-center">
            <a
              href="mailto:pablo.farina28@outlook.com"
              className="border-2 border-border bg-card px-3 py-2 text-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              pablo.farina28@outlook.com
            </a>
          </div>

          <a
            href="#top"
            className="transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:text-accent md:text-right"
          >
            {isPt ? "voltar ao topo" : "back to top"}
          </a>
        </div>
      </div>
    </footer>
  );
}
