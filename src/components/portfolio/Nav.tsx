import { useState } from "react";
import { useLanguage } from "@/i18n/language";

export function Nav() {
  const { locale, setLocale, copy } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#work", label: copy.nav.work },
    { href: "#process", label: copy.nav.process },
    { href: "#about", label: copy.nav.about },
    { href: "#faq", label: copy.nav.faq },
  ];

  return (
    <nav className="fixed top-4 z-50 w-full px-3 sm:px-6">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden border-[4px] border-border bg-background shadow-[8px_8px_0_var(--color-border)]"
        role="navigation"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-accent"
          aria-hidden
        />

        <div className="relative mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-7">
          <a
            href="#top"
            className="group mr-3 whitespace-nowrap font-mono text-xs font-black tracking-[0.07em] text-foreground sm:mr-5 sm:text-sm sm:tracking-[0.08em]"
          >
            <span className="bg-primary px-1 text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              PABLO
            </span>{" "}
            FARINA
            <span className="hidden text-muted-foreground sm:inline">/v02</span>
          </a>

          <div className="hidden flex-1 items-center justify-center gap-5 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-foreground lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative border-2 border-transparent px-3 py-2.5 transition-colors duration-200 hover:border-border hover:bg-primary focus-visible:outline-none focus-visible:bg-primary"
              >
                {link.label}
                <span className="absolute -right-1 -top-1 hidden h-3 w-3 border-2 border-border bg-accent group-hover:block" />
              </a>
            ))}
          </div>

          <div className="relative ml-2 flex shrink-0 items-center gap-2 font-mono text-xs font-black text-foreground sm:ml-3 sm:gap-3">
            <a
              href="#contact"
              className="hidden border-[3px] border-border bg-accent px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-accent-foreground shadow-[4px_4px_0_var(--color-border)] transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
            >
              {locale === "pt-BR" ? "Orçamento rápido" : "Quick quote"}
            </a>
            <div className="flex items-center gap-1 border-[3px] border-border bg-card p-1 shadow-[3px_3px_0_var(--color-border)]">
              <button
                type="button"
                onClick={() => setLocale("pt-BR")}
                className={`px-2 py-1 transition-colors ${
                  locale === "pt-BR"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
                aria-label={`${copy.nav.languageLabel}: Portugues`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2 py-1 transition-colors ${
                  locale === "en"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
                aria-label={`${copy.nav.languageLabel}: English`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center border-2 border-border bg-primary text-foreground shadow-[3px_3px_0_var(--color-border)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-border)] lg:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              <span className="text-base leading-none">{mobileOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t-[3px] border-border transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 px-5 py-4 font-mono text-[11px] font-black uppercase tracking-[0.18em] text-foreground sm:px-7">
            {links.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between border-2 border-border bg-card px-3 py-2 shadow-[3px_3px_0_var(--color-border)] transition-transform duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-secondary hover:shadow-[1px_1px_0_var(--color-border)]"
              >
                {link.label}
                <span className="text-accent transition-all duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
