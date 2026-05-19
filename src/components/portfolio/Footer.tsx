import { useLanguage } from "@/i18n/language";

export function Footer() {
  const { copy, locale } = useLanguage();
  const isPt = locale === "pt-BR";
  const links = ["GitHub", "LinkedIn", "X/Twitter", "Read.cv"];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/20">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklch, var(--accent) 12%, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              // end_transmission
            </p>
            <a
              href="#top"
              className="group block max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              Pablo
              <br />
              <span className="font-serif italic text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                Farina
              </span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border/80 bg-background/60 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-border/80 pb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span>{copy.footer.status}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {isPt
                  ? "Se a ideia precisa sair do papel com bom gosto e engenharia solida, me chama."
                  : "If the idea needs to ship with taste and solid engineering, reach out."}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-between rounded-full border border-border bg-card px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                <span>{isPt ? "iniciar conversa" : "start a conversation"}</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-border/80 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:grid-cols-3 md:items-center">
          <div>© {new Date().getFullYear()} Pablo Farina — {copy.footer.rights}</div>

          <div className="flex flex-wrap gap-2 md:justify-center">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full border border-border/70 bg-background/40 px-3 py-2 transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link}
              </a>
            ))}
          </div>

          <a href="#top" className="transition-colors hover:text-accent md:text-right">
            {isPt ? "voltar ao topo" : "back to top"}
          </a>
        </div>
      </div>
    </footer>
  );
}
