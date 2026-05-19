import { useLanguage } from "@/i18n/language";
import GlassSurface from "@/components/ui/GlassSurface";

export function Nav() {
  const { locale, setLocale, copy } = useLanguage();

  return (
    <nav className="fixed top-5 z-50 w-full px-3 sm:px-6">
      <GlassSurface
        width="100%"
        height={72}
        borderRadius={18}
        backgroundOpacity={0.2}
        saturation={1.5}
        brightness={44}
        opacity={0.94}
        displace={0.72}
        distortionScale={-165}
        redOffset={1}
        greenOffset={11}
        blueOffset={22}
        className="relative mx-auto max-w-7xl border border-white/18 shadow-[0_18px_56px_rgba(0,0,0,0.62)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(180%_115%_at_12%_-36%,rgba(255,255,255,0.24),rgba(255,255,255,0.04)_28%,rgba(255,255,255,0)_58%),radial-gradient(130%_100%_at_86%_130%,rgba(0,0,0,0.42),rgba(0,0,0,0.1)_52%,rgba(0,0,0,0)_70%)]" aria-hidden />
        <div className="relative mx-auto flex h-22 max-w-7xl items-center justify-between px-7 sm:px-10">
          <a href="#top" className="mr-8 font-mono text-base tracking-[0.05em]">
          <span className="text-accent">PABLO</span> FARINA<span className="text-muted-foreground">/v01</span>
          </a>
          <div className="hidden flex-1 items-center justify-center gap-12 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-100 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] lg:flex">
            <a href="#work" className="transition-colors hover:text-accent">// {copy.nav.work}</a>
            <a href="#services" className="transition-colors hover:text-accent">// {copy.nav.services}</a>
            <a href="#process" className="transition-colors hover:text-accent">// {copy.nav.process}</a>
            <a href="#about" className="transition-colors hover:text-accent">// {copy.nav.about}</a>
            <a href="#faq" className="transition-colors hover:text-accent">// {copy.nav.faq}</a>
            <a href="#contact" className="transition-colors hover:text-accent">// {copy.nav.ping}</a>
          </div>
          <div className="ml-8 flex shrink-0 items-center gap-5 font-mono text-xs text-zinc-100 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-black/30 p-1">
              <button
                type="button"
                onClick={() => setLocale("pt-BR")}
                className={`rounded-md px-2 py-1 transition-colors ${
                  locale === "pt-BR"
                    ? "bg-accent text-accent-foreground"
                    : "text-zinc-100 hover:text-foreground"
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
                    : "text-zinc-100 hover:text-foreground"
                }`}
                aria-label={`${copy.nav.languageLabel}: English`}
              >
                EN
              </button>
            </div>
            <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
          </div>
        </div>
      </GlassSurface>
    </nav>
  );
}
