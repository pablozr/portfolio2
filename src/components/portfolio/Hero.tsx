import { useLanguage } from "@/i18n/language";
import heroVideo from "@/assets/eclipse-over-silent-falls.1920x1080.mp4";
import { useEffect, useState } from "react";

export function Hero({ className = "" }: { className?: string }) {
  const { copy } = useLanguage();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const dataSaverQuery = window.matchMedia("(prefers-reduced-data: reduce)");
    let timer = 0;

    const onChange = () => {
      window.clearTimeout(timer);
      if (!mediaQuery.matches || dataSaverQuery.matches) {
        setShouldLoadVideo(false);
        setVideoReady(false);
        return;
      }
      timer = window.setTimeout(() => setShouldLoadVideo(true), 900);
    };

    onChange();
    mediaQuery.addEventListener("change", onChange);
    dataSaverQuery.addEventListener("change", onChange);
    return () => {
      window.clearTimeout(timer);
      mediaQuery.removeEventListener("change", onChange);
      dataSaverQuery.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <section
      id="top"
      className={`relative overflow-hidden border-b border-border ${className}`.trim()}
    >
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(70%_55%_at_78%_18%,oklch(0.78_0.09_70_/_0.22),transparent_64%),radial-gradient(70%_60%_at_18%_4%,oklch(0.7_0.08_230_/_0.18),transparent_68%),linear-gradient(135deg,oklch(0.18_0.01_250),oklch(0.1_0.006_60)_58%,oklch(0.16_0.008_70))]"
        aria-hidden
      />
      {shouldLoadVideo ? (
        <video
          className={`absolute inset-0 z-0 h-full w-full object-cover object-[72%_center] transition-opacity duration-[1800ms] ease-out md:object-[68%_center] ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-background/18 animate-hero-overlay-in" aria-hidden />
      <div
        className="absolute inset-0 animate-hero-overlay-in"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.14 0.01 250 / 0.48) 0%, oklch(0.14 0.01 250 / 0.36) 38%, oklch(0.14 0.01 250 / 0.16) 62%, oklch(0.14 0.01 250 / 0.3) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 animate-hero-accent-in"
        style={{
          background:
            "radial-gradient(72% 62% at 18% 0%, oklch(0.78 0.09 70 / 0.13), transparent 68%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 animate-hero-accent-in"
        style={{
          background:
            "radial-gradient(46% 34% at 78% 18%, oklch(0.88 0.07 95 / 0.2), transparent 74%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-32 sm:pt-48 sm:pb-40">
        <div className="animate-reveal">
          {copy.hero.availability ? (
            <div className="mb-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              <span>{copy.hero.availability}</span>
            </div>
          ) : null}

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-white [text-shadow:0_3px_20px_rgba(0,0,0,0.55)] sm:text-6xl md:text-[5rem]">
            {copy.hero.titleLine1}
            <br />
            {copy.hero.titleLine2}{" "}
            <span className="font-serif italic text-accent [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
              {copy.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-zinc-200/92 [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-lg">
            {copy.hero.body}
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-reveal"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {copy.hero.ctaStart}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md border border-white/45 bg-white/8 px-5 py-3 text-sm font-medium text-zinc-100 shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/14 hover:text-white active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {copy.hero.ctaServices}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
