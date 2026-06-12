import { useState } from "react";
import { useLanguage } from "@/i18n/language";

export function Nav() {
  const { locale, setLocale, copy } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#services", label: copy.nav.services },
    { href: "#work", label: copy.nav.work },
    { href: "#process", label: copy.nav.process },
    { href: "#about", label: copy.nav.about },
    { href: "#faq", label: copy.nav.faq },
    { href: "#contact", label: copy.nav.ping },
  ];

  return (
    <nav className="fixed top-4 z-50 w-full px-3 sm:top-5 sm:px-6">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-border/70 bg-[#0e0f12]/92 shadow-[0_20px_65px_rgba(0,0,0,0.55)] backdrop-blur"
        role="navigation"
      >
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(140%_95%_at_50%_-45%,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_38%,rgba(255,255,255,0)_62%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_38%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-7 lg:px-8">
          <a
            href="#top"
            className="group mr-3 whitespace-nowrap font-mono text-xs tracking-[0.07em] text-zinc-100 sm:mr-6 sm:text-base sm:tracking-[0.08em]"
          >
            <span className="text-accent transition-colors group-hover:text-zinc-100">PABLO</span>{" "}
            FARINA
            <span className="hidden text-zinc-400 sm:inline">/v01</span>
          </a>

          <div className="hidden flex-1 items-center justify-center gap-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-200 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:text-accent"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent/90 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="ml-2 flex shrink-0 items-center gap-2 font-mono text-xs text-zinc-100 sm:ml-3 sm:gap-4">
            <div className="flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLocale("pt-BR")}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  locale === "pt-BR"
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-300 hover:text-zinc-100"
                }`}
                aria-label={`${copy.nav.languageLabel}: Portugues`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  locale === "en"
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-300 hover:text-zinc-100"
                }`}
                aria-label={`${copy.nav.languageLabel}: English`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-zinc-100 transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              <span className="text-base leading-none">{mobileOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-100 sm:px-7">
            {links.map((link) => (
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-white/5 hover:text-accent"
              >
                {link.label}
                <span className="translate-x-0 text-accent/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
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
