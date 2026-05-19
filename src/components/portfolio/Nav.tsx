import { useLanguage } from "@/i18n/language";

export function Nav() {
  const { locale, setLocale, copy } = useLanguage();

  return (
    <nav className="fixed top-3 z-50 w-full px-3 sm:px-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(130deg,rgba(38,42,51,0.58),rgba(12,14,20,0.5)_42%,rgba(6,8,12,0.64))] shadow-[0_14px_48px_rgba(0,0,0,0.52),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-18px_32px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(180% 110% at 14% -30%, rgba(255,255,255,0.42), rgba(255,255,255,0.05) 30%, rgba(255,255,255,0) 58%), radial-gradient(125% 90% at 86% 130%, rgba(0,0,0,0.34), rgba(0,0,0,0) 60%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0) 18%, rgba(255,255,255,0.24) 30%, rgba(255,255,255,0.06) 36%, rgba(255,255,255,0) 47%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/65"
          aria-hidden
        />
        <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-7">
          <a href="#top" className="font-mono text-base tracking-tight">
          <span className="text-accent">PABLO</span> FARINA<span className="text-muted-foreground">/v01</span>
          </a>
          <div className="hidden gap-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 md:flex">
            <a href="#work" className="transition-colors hover:text-accent">// {copy.nav.work}</a>
            <a href="#services" className="transition-colors hover:text-accent">// {copy.nav.services}</a>
            <a href="#process" className="transition-colors hover:text-accent">// {copy.nav.process}</a>
            <a href="#about" className="transition-colors hover:text-accent">// {copy.nav.about}</a>
            <a href="#faq" className="transition-colors hover:text-accent">// {copy.nav.faq}</a>
            <a href="#contact" className="transition-colors hover:text-accent">// {copy.nav.ping}</a>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-300">
            <div className="flex items-center gap-1 rounded-lg border border-white/15 bg-black/25 p-1">
              <button
                type="button"
                onClick={() => setLocale("pt-BR")}
                className={`rounded-md px-2 py-1 transition-colors ${
                  locale === "pt-BR"
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-300 hover:text-foreground"
                }`}
                aria-label={`${copy.nav.languageLabel}: Portugues`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-md px-2 py-1 transition-colors ${
                  locale === "en"
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-300 hover:text-foreground"
                }`}
                aria-label={`${copy.nav.languageLabel}: English`}
              >
                EN
              </button>
            </div>
            <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
          </div>
        </div>
      </div>
    </nav>
  );
}
